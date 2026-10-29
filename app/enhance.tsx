"use client";

import { useEffect } from "react";

// Scroll behaviour: chapters and split headings get .in as they arrive, the fixed bar takes
// the colour and section name of whatever is under it, and scroll speed feeds --vel (marquee skew)
// and --p (word-by-word scrub). CSS-only scroll timelines handle everything else.
export default function Enhance() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        if (!motion.matches) {
          e.target.querySelectorAll("[data-reveal]").forEach((child, i) => {
            animations.push(child.animate(
              [{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
              { duration: 700, delay: i * 70, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "backwards" },
            ));
          });
        }
        reveal.unobserve(e.target);
      }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll("[data-chapter], [data-reveal-group], [data-split]").forEach((el) => reveal.observe(el));

    const stopMotion = () => { if (motion.matches) animations.forEach((animation) => animation.cancel()); };
    motion.addEventListener("change", stopMotion);

    const bar = document.querySelector<HTMLElement>(".bar");
    const hero = document.querySelector(".hero");
    const tones = Array.from(document.querySelectorAll<HTMLElement>("[data-tone]")).filter((el) => el !== hero);
    const marks = Array.from(document.querySelectorAll<HTMLElement>("[data-hud]"));
    const scrubs = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
    const label = document.querySelector<HTMLElement>(".bar-hud");
    const track = document.querySelector<HTMLElement>(".class-track");
    const deck = document.querySelector<HTMLElement>(".class-deck");
    const classes = Array.from(document.querySelectorAll<HTMLDetailsElement>(".class-option"));
    // The pinned stretch of the class track, in page pixels; null when the deck isn't pinned (reduced motion).
    const deckRange = () => {
      if (!track || !deck) return null;
      const span = track.offsetHeight - deck.offsetHeight;
      if (span <= 0) return null;
      const top = track.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(deck).top);
      return { top, span };
    };
    // Clicking a class scrolls to its step, so scroll and click never disagree.
    const pick = (e: MouseEvent) => {
      const summary = (e.target as Element).closest("summary");
      const range = deckRange();
      if (!summary || !range) return;
      e.preventDefault();
      const i = classes.indexOf(summary.parentElement as HTMLDetailsElement);
      scrollTo({ top: range.top + range.span * (i + 0.5) / classes.length, behavior: "smooth" });
    };
    deck?.addEventListener("click", pick);
    const root = document.documentElement;

    // ponytail: scans ~20 sections per frame-throttled scroll; fine at this page size.
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!bar) return;
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
      bar.classList.toggle("shown", heroBottom < 80);
      const y = bar.offsetHeight / 2;
      let tone = "bone";
      for (const el of tones) {
        const r = el.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) tone = el.dataset.tone!; // innermost (last) match wins
      }
      bar.dataset.on = tone;
      let here = "";
      for (const el of marks) if (el.getBoundingClientRect().top <= y) here = el.dataset.hud!;
      if (label && label.textContent !== here) label.textContent = here;
      const range = deckRange();
      if (range && deck) {
        const p = Math.min(1, Math.max(0, (scrollY - range.top) / range.span)) * classes.length;
        const i = Math.min(classes.length - 1, Math.floor(p));
        if (!classes[i].open) classes.forEach((d, k) => { d.open = k === i; });
        deck.style.setProperty("--cp", (p - i).toFixed(3));
      }
      for (const el of scrubs) {
        const r = el.getBoundingClientRect();
        const p = motion.matches ? 1 : (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35);
        el.style.setProperty("--p", String(Math.min(1, Math.max(0, p))));
      }
    };
    // ponytail: velocity is the per-event delta, eased back to 0 by a CSS transition when scrolling stops.
    let lastY = 0, settle: ReturnType<typeof setTimeout> | 0 = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
      if (motion.matches) return;
      const vel = Math.max(-10, Math.min(10, (scrollY - lastY) * 0.2));
      lastY = scrollY;
      root.style.setProperty("--vel", vel.toFixed(2));
      if (settle) clearTimeout(settle);
      settle = setTimeout(() => root.style.setProperty("--vel", "0"), 120);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      document.documentElement.classList.remove("js");
      reveal.disconnect();
      cancelAnimationFrame(raf);
      if (settle) clearTimeout(settle);
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener("change", stopMotion);
      deck?.removeEventListener("click", pick);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="bar" data-on="bone">
      <a href="#top" className="wordmark bar-mark" aria-label="The Focus Room, back to top" />
      <p className="bar-hud mono" aria-hidden="true" />
      <nav className="bar-links" aria-label="Main">
        <a href="/#method">Method</a>
        <a href="/#week">Week</a>
        <a href="/#room">Room</a>
        <a href="/#who">Who it’s for</a>
      </nav>
      <a className="bar-apply" href="/apply">Apply</a>
    </header>
  );
}
