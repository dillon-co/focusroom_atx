import { Fragment, type CSSProperties } from "react";

// Section index, numbered like an edition's contents. The fixed bar reads the same labels from data-hud.
export const index = [
  { href: "#method", label: "The method", n: "I" },
  { href: "#week", label: "The week", n: "II" },
  { href: "#room", label: "The room", n: "III" },
  { href: "#proof", label: "The work", n: "IV" },
  { href: "#who", label: "Who it’s for", n: "V" },
  { href: "#apply", label: "Apply", n: "VI" },
];
export const hud = (i: number) => `${index[i].n} · ${index[i].label}`;

// Words wrapped for the scroll reveal. "*word*" sets the serif accent, "|" breaks the line.
// Without JavaScript (or with reduced motion) the words simply sit there.
export function Split({ text }: { text: string }) {
  let i = 0;
  return text.split("|").map((line, l) => (
    <Fragment key={l}>
      {l > 0 && <br />}
      {line.trim().split(" ").map((word, k, all) => {
        const accent = word.startsWith("*");
        const clean = word.replaceAll("*", "");
        return (
          <Fragment key={k}>
            <span className="w"><span className={accent ? "em" : undefined} style={{ "--i": i++ } as CSSProperties}>{clean}</span></span>
            {k < all.length - 1 && " "}
          </Fragment>
        );
      })}
    </Fragment>
  ));
}

// Paragraph whose words light up as it scrolls through the viewport (enhance.tsx sets --p).
export function Scrub({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <p className="scrub" data-scrub style={{ "--n": words.length } as CSSProperties}>
      {words.map((w, i) => <Fragment key={i}><span className="w" style={{ "--i": i } as CSSProperties}>{w}</span>{" "}</Fragment>)}
    </p>
  );
}

export function Spark() {
  return (
    <svg className="spark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.7 6.4 5.6 11.3 12 12-6.4.7-11.3 5.6-12 12-.7-6.4-5.6-11.3-12-12C6.4 11.3 11.3 6.4 12 0Z" />
    </svg>
  );
}

// Decorative ticker; every item also appears as real text elsewhere on the page.
export function Marquee({ items, tone, big = false }: { items: string[]; tone: string; big?: boolean }) {
  const set = (
    <div className="marquee-set">
      {[...items, ...items].map((t, i) => <Fragment key={i}><span>{t}</span><Spark /></Fragment>)}
    </div>
  );
  return (
    <div className={`marquee t-${tone}${big ? " marquee-big" : ""}`} aria-hidden="true">
      <div className="marquee-skew"><div className="marquee-track">{set}{set}</div></div>
    </div>
  );
}

export function Arrow() {
  return <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10" /></svg>;
}
