// Shared layout for the privacy and terms pages: the apply page's split, navy panel, plain text.
export default function Legal({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: [string, string][] }) {
  return (
    <main className="apply-page">
      <aside className="apply-side t-navy">
        <a href="/" className="wordmark apply-mark" aria-label="The Focus Room, home" />
        <div>
          <h1 className="display">{title}</h1>
          <p className="lead apply-sub">Last updated {updated}.</p>
        </div>
        <p className="small apply-contact">
          2709 East 5th Street, Suite 110A, Austin<br />
          <a href="tel:+15122301027">(512) 230-1027</a> · <a href="mailto:jarred@truefitnessatx.com">jarred@truefitnessatx.com</a>
        </p>
      </aside>
      <article className="apply-main legal">
        <p className="lead">{intro}</p>
        {sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="lead-size">{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        <p><a href="/">Back to The Focus Room</a></p>
      </article>
    </main>
  );
}
