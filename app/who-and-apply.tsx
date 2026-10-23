"use client";

import Image from "next/image";
import { useState } from "react";
import { people } from "./people";

type Cell =
  | { kind: "person"; i: number }
  | { kind: "photo"; src: string; alt: string; pos: string }
  | { kind: "fig"; fig: string; cap: string; spare?: boolean };

// Order of the 12 tiles: six people, four photographs, two figures.
const cells: Cell[] = [
  { kind: "person", i: 0 },
  { kind: "fig", fig: "4", cap: "per group" },
  { kind: "person", i: 1 },
  { kind: "photo", src: "/images/room-jarred-kate.jpg", alt: "Jarred and Kate in the gym, each holding a weight plate", pos: "50% 35%" },
  { kind: "photo", src: "/images/class-presence.jpg", alt: "A man in a slow kettlebell lunge", pos: "55% 50%" },
  { kind: "person", i: 2 },
  { kind: "person", i: 3 },
  { kind: "fig", fig: "30", cap: "members, total" },
  { kind: "person", i: 4 },
  { kind: "photo", src: "/images/class-purpose.jpg", alt: "A man pushing hard on an air bike", pos: "50% 40%" },
  { kind: "person", i: 5 },
  { kind: "fig", fig: "1st", cap: "day cohorts begin", spare: true },
];

const pairs = ["bone", "gold", "navy", "bone2"];

export default function WhoAndApply({ apply }: { apply: string }) {
  const [pick, setPick] = useState<number | null>(null);
  const chosen = pick === null ? null : people[pick];
  let n = 0;

  return (
    <>
      <section id="who" className="who t-ink" data-tone="ink" aria-labelledby="who-h">
        <div className="grid who-head">
          <h2 id="who-h" className="heading">This time, finish.</h2>
          <div className="who-copy">
            <p className="lead">
              You’ve started before. Programs, coaches, apps, books. You felt the momentum come, and you felt it go. The pattern isn’t the problem. The frame is.
            </p>
            <p className="body-l">This room is for the person who has proven they can start and is ready to prove they can sustain. You already know which one is you. Tap it.</p>
          </div>
        </div>
        <ul className="wall">
          {cells.map((c, k) => {
            if (c.kind === "photo")
              return (
                <li key={k} className="cell cell-photo">
                  <Image src={c.src} alt={c.alt} fill sizes="(max-width: 760px) 50vw, 25vw" style={{ objectFit: "cover", objectPosition: c.pos }} />
                </li>
              );
            const tone = pairs[n++ % pairs.length];
            if (c.kind === "fig")
              return (
                <li key={k} className={`cell t-${tone}${c.spare ? " cell-spare" : ""}`}>
                  <span className="display cell-word">{c.fig}</span>
                  <span className="cell-cap">{c.cap}</span>
                </li>
              );
            const p = people[c.i];
            const on = pick === c.i;
            return (
              <li key={k} className={`cell t-${tone}`}>
                <button type="button" className="cell-btn" aria-pressed={on} onClick={() => setPick(on ? null : c.i)}>
                  <span className="cell-face cell-front">
                    <span className="heading cell-word">{p.word}</span>
                    <span className="cell-cap">{p.cap}</span>
                  </span>
                  <span className="cell-face cell-back">
                    <span className="cell-line">{p.line}</span>
                    <span className="cell-cap">That’s me</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="apply-wrap">
      <a id="apply" className="cta t-gold" href={chosen ? `${apply}?as=${chosen.id}` : apply} data-tone="gold" onClick={(e) => e.currentTarget.classList.add("leaving")}>
        <span className="cta-line" aria-live="polite">
          {chosen
            ? `Apply as The ${chosen.word}. No checkout and no free trial. You apply, we talk, and if it fits you start on the first of the month.`
            : "No checkout and no free trial. You apply, we talk, and if it fits you start with the cohort on the first of the month."}
        </span>
        <svg className="cta-arrow" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M12 36 36 12M16 12h20v20" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <span className="cta-word">Apply</span>
      </a>
      </div>
    </>
  );
}
