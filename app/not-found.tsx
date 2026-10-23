import type { Metadata } from "next";

export const metadata: Metadata = { title: "Wrong room | The Focus Room" };

export default function NotFound() {
  return (
    <main className="thanks t-ink">
      <a href="/" className="wordmark apply-mark" aria-label="The Focus Room, home" />
      <div>
        <h1 className="display">Wrong room.</h1>
        <p className="lead">This page doesn’t exist. The one you came for is probably one of these.</p>
      </div>
      <div className="lost-links">
        <a className="btn btn-light" href="/">The Focus Room</a>
        <a className="btn btn-gold" href="/apply">Apply</a>
      </div>
    </main>
  );
}
