"use client";

import { useEffect } from "react";

// Scroll behaviour: chapters and method sheets get .in as they arrive (field opens, name widens),
// and the fixed bar takes the colour of whatever chapter is under it.
export default function Enhance() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
      }),
      { rootMargin: "0px" },
    );
    document.querySelectorAll("[data-chapter], .sheet").forEach((el) => reveal.observe(el));

    const bar = document.querySelector<HTMLElement>(".bar");
    const hero = document.querySelector(".hero");
    const tones = Array.from(document.querySelectorAll<HTMLElement>("[data-tone]")).filter((el) => el !== hero);

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
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      reveal.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="bar" data-on="bone">
      <a href="#top" className="wordmark bar-mark" aria-label="The Focus Room, back to top" />
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
