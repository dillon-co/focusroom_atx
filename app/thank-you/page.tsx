import type { Metadata } from "next";

export const metadata: Metadata = { title: "Application received | The Focus Room", robots: { index: false } };

export default function ThankYou() {
  return (
    <main className="thanks t-navy">
      <a href="/" className="wordmark apply-mark" aria-label="The Focus Room, home" />
      <div>
        <h1 className="display">Received.</h1>
        <p className="lead">Jarred reads every one of these personally. You’ll hear back soon.</p>
      </div>
      <a className="btn btn-light" href="/">Back to The Focus Room</a>
    </main>
  );
}
