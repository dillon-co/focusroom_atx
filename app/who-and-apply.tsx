"use client";

import Image from "next/image";
import { useState } from "react";
import { people } from "./people";
import { Split, hud } from "./ui";

type Cell =
  | { kind: "person"; i: number }
  | { kind: "photo"; src: string; alt: string; pos: string };

// The six people you can tap, and one wide photograph that can't be mistaken for a button.
const cells: Cell[] = [
  { kind: "person", i: 0 },
  { kind: "person", i: 1 },
  { kind: "photo", src: "/images/room-jarred-kate.jpg", alt: "Jarred and Kate in the gym, each holding a weight plate", pos: "50% 30%" },
  { kind: "person", i: 2 },
  { kind: "person", i: 3 },
  { kind: "person", i: 4 },
  { kind: "person", i: 5 },
];

const pairs = ["bone", "navy", "bone2", "navy2"];

export default function WhoAndApply({ apply }: { apply: string }) {
  const [pick, setPick] = useState<number | null>(null);
  const chosen = pick === null ? null : people[pick];
  let n = 0;

  return (
    <>
      <section id="who" className="who t-ink" data-tone="ink" aria-labelledby="who-h" data-hud={hud(4)}>
        <div className="grid who-head">
          <h2 id="who-h" className="heading" data-split><Split text="Find your *place.*" /></h2>
          <div className="who-copy">
            <p className="lead">
              You don’t need to arrive with everything figured out. Bring the willingness to work. We’ll start with where you are.
            </p>
            <p className="body-l">Different starting points. A shared commitment to keep going. Choose the description that feels most like you.</p>
          </div>
        </div>
        <ul className="wall">
          {cells.map((c, k) => {
            if (c.kind === "photo")
              return (
                <li key={k} className="cell cell-photo">
                  <Image src={c.src} alt={c.alt} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: c.pos }} />
                </li>
              );
            const tone = pairs[n++ % pairs.length];
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

      <div className="apply-wrap" data-hud={hud(5)}>
      <a id="apply" className="cta t-gold" href={chosen ? `${apply}?as=${chosen.id}` : apply} data-tone="gold" onClick={(e) => e.currentTarget.classList.add("leaving")}>
        <span className="cta-line" aria-live="polite">
          {chosen
            ? `Apply as The ${chosen.word}. Start with a conversation. If we’re a fit, your next chapter begins on the first of the month.`
            : "Membership begins with a conversation. Tell us what you’re working toward. If we’re a fit, you start with the next monthly cohort."}
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
