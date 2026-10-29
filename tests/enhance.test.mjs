import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = ts.transpileModule(readFileSync(new URL('../app/enhance.tsx', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText;

function mount(reduced) {
  let cleanup, effect, observerCallback, preferenceChanged;
  const rootClasses = new Set();
  const calls = { animations: [], cancelled: 0, disconnected: false, rafCancelled: false, unobserved: [] };
  const motion = { matches: reduced, addEventListener: (_, fn) => { preferenceChanged = fn; }, removeEventListener() {} };
  const child = { animate: (frames, options) => {
    calls.animations.push({ frames, options });
    return { cancel: () => calls.cancelled++ };
  } };
  const section = { classList: { add() {} }, querySelectorAll: () => [child, child] };
  const exports = {};
  runInNewContext(source, {
    exports,
    require: (id) => id === 'react' ? { useEffect: (fn) => { effect = fn; } } : { jsx() {}, jsxs() {} },
    matchMedia: () => motion,
    IntersectionObserver: class {
      constructor(fn) { observerCallback = fn; }
      observe() {}
      unobserve(el) { calls.unobserved.push(el); }
      disconnect() { calls.disconnected = true; }
    },
    document: { documentElement: { classList: { add: name => rootClasses.add(name), remove: name => rootClasses.delete(name) } }, querySelector: () => null, querySelectorAll: () => [] },
    addEventListener() {}, removeEventListener() {}, requestAnimationFrame() {},
    cancelAnimationFrame() { calls.rafCancelled = true; },
  });
  exports.default();
  const enhancedDuringRender = rootClasses.has("js");
  cleanup = effect();
  return { calls, cleanup, rootClasses, enhancedDuringRender, enter: (visible = true) => observerCallback([{ isIntersecting: visible, target: section }]),
    reduce: () => { motion.matches = true; preferenceChanged(); } };
}

test('section entrance waits for intersection, staggers children, then stops observing', () => {
  const view = mount(false);
  view.enter(false);
  assert.equal(view.calls.animations.length, 0);
  view.enter();
  assert.deepEqual(view.calls.animations.map(a => a.options.delay), [0, 70]);
  assert.equal(view.calls.unobserved.length, 1);
  view.cleanup();
  assert.equal(view.calls.cancelled, 2);
  assert.ok(view.calls.disconnected && view.calls.rafCancelled);
});

test('reduced motion prevents entrances and cancels already running entrances', () => {
  const reduced = mount(true);
  reduced.enter();
  assert.equal(reduced.calls.animations.length, 0);
  reduced.cleanup();
  const changing = mount(false);
  changing.enter();
  changing.reduce();
  assert.equal(changing.calls.cancelled, 2);
  changing.cleanup();
});


test('animation enhancement starts after render and is removed on unmount', () => {
  const view = mount(false);
  assert.equal(view.enhancedDuringRender, false);
  assert.equal(view.rootClasses.has('js'), true);
  view.cleanup();
  assert.equal(view.rootClasses.has('js'), false);
});
