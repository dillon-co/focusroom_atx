import type { Metadata } from "next";
import { people } from "../people";
import ApplyForm from "./form";

export const metadata: Metadata = {
  title: "Apply | The Focus Room",
  description: "Apply for one of thirty memberships at The Focus Room, a private training room on East 5th Street, Austin.",
};

const steps = [
  ["You apply.", "Jarred reads every application himself."],
  ["We talk.", "A conversation about your goals, your week and whether this is the right room for you."],
  ["You start.", "Cohorts begin on the first of the month. Thirty members, total."],
];

export default async function Apply({ searchParams }: { searchParams: Promise<{ as?: string }> }) {
  const { as } = await searchParams;
  const who = people.find((p) => p.id === as);
  return (
    <main className="apply-page">
      <aside className="apply-side t-gold">
        <a href="/" className="wordmark apply-mark" aria-label="The Focus Room, home" />
        <div>
          <h1 className="display">Apply.</h1>
          <p className="lead apply-sub">{who && <>As The {who.word}.<br /></>}No checkout and no free trial.</p>
        </div>
        <ol className="apply-steps">
          {steps.map(([h, b]) => <li key={h}><strong>{h}</strong> {b}</li>)}
        </ol>
        <p className="small apply-contact">
          2709 East 5th Street, Suite 110A, Austin<br />
          <a href="tel:+15122301027">(512) 230-1027</a> · <a href="mailto:jarred@truefitnessatx.com">jarred@truefitnessatx.com</a>
        </p>
      </aside>
      <section className="apply-main" aria-label="Application">
        <ApplyForm as={as} />
      </section>
    </main>
  );
}
