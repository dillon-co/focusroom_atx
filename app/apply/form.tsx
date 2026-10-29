"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { people } from "../people";

// Same field names as the live form, so the CRM mapping doesn't change. "archetype" is new.
const FIELDS = ["name", "email", "phone", "birthday", "address", "hear_about", "goals", "importance", "training", "in_the_way", "start", "expecting", "anything", "archetype"];
const HEAR = ["Instagram", "The Genius at Work Podcast", "A friend or referral", "The Focus Room", "An event", "Search", "Other"];
const START = ["Right away", "Within the month", "In one to three months", "Later this year", "Not sure yet"];
const DRAFT = "focusroom-apply-draft";
const MSG: Record<string, string> = {
  name: "Add your name.",
  email: "Add an email address we can reply to.",
  phone: "Add a phone number.",
  hear_about: "Pick one.",
  importance: "Pick a number.",
  start: "Pick one.",
};

// Which required fields are empty or wrong, with a plain message for each, in page order.
function problems(form: HTMLFormElement) {
  const out: Record<string, string> = {};
  for (const el of Array.from(form.elements) as HTMLInputElement[]) {
    if (!el.name || el.validity.valid || out[el.name]) continue;
    out[el.name] = el.validity.typeMismatch ? "That email address doesn’t look right." : MSG[el.name] ?? "A sentence or two is plenty.";
  }
  return out;
}

export default function ApplyForm({ as }: { as?: string }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [hasPhone, setHasPhone] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});
  const ref = useRef<HTMLFormElement>(null);

  // Put back a half-finished application. ?as= from the homepage wins over a saved archetype.
  useEffect(() => {
    let saved: Record<string, string> | null = null;
    try { saved = JSON.parse(localStorage.getItem(DRAFT) ?? "null"); } catch {}
    if (!saved || !ref.current) return;
    for (const [k, v] of Object.entries(saved)) {
      const el = ref.current.elements.namedItem(k) as HTMLInputElement | RadioNodeList | null;
      if (el && !(k === "archetype" && as)) el.value = v;
    }
    setHasPhone(!!saved.phone);
  }, [as]);

  function onInput(e: React.FormEvent<HTMLFormElement>) {
    const t = e.target as HTMLInputElement;
    if (t.name === "phone") setHasPhone(t.value.trim().length > 0);
    if (errs[t.name]) setErrs(({ [t.name]: _, ...rest }) => rest);
    const keep = [...new FormData(e.currentTarget)].filter(([k]) => k !== "website" && k !== "sms_consent");
    try { localStorage.setItem(DRAFT, JSON.stringify(Object.fromEntries(keep))); } catch {}
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const bad = problems(e.currentTarget);
    setErrs(bad);
    const first = Object.keys(bad)[0];
    if (first) return e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    setSending(true);
    setFailed(false);
    const f = new FormData(e.currentTarget);
    const data: Record<string, string> = { form_type: "focus-room", source: "focus-room-application" };
    for (const k of FIELDS) data[k] = String(f.get(k) ?? "").trim();
    data.sms_consent = data.phone && f.get("sms_consent") === "on" ? "yes" : "no";
    data.website = String(f.get("website") ?? "");
    // ponytail: UTM tags from this URL only; the live site also remembers them across visits.
    const q = new URLSearchParams(location.search);
    for (const [k, v] of q) if (k.startsWith("utm_") || k === "gclid") data[k] = v;
    data.lead_channel = q.get("gclid") || /^(cpc|ppc|paid)/i.test(q.get("utm_medium") ?? "") ? "paid search" : "organic";
    data.lead_device = matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
    data.submitted_from = location.pathname;

    const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).catch(() => null);
    const json = await res?.json().catch(() => null);
    if (json?.ok) {
      try { localStorage.removeItem(DRAFT); } catch {}
      return router.push("/thank-you");
    }
    setSending(false);
    setFailed(true);
  }

  const err = (n: string) => errs[n] && <span className="f-err">{errs[n]}</span>;

  return (
    <form ref={ref} className="form" noValidate onSubmit={submit} onInput={onInput}>
      <div className="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>

      <section className="form-section" aria-labelledby="about-you">
        <h3 id="about-you" className="lead-size">About you</h3>
        <fieldset className="f">
          <legend className="f-label">Which one feels like you?</legend>
          <div className="chips">
            {people.map((p) => (
              <label key={p.id} className="chip">
                <input type="radio" name="archetype" value={p.word} defaultChecked={p.id === as} />
                <span>The {p.word}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="f-row">
          <label className="f"><span className="f-label">Full name</span><input name="name" required autoComplete="name" aria-invalid={!!errs.name} />{err("name")}</label>
          <label className="f"><span className="f-label">Email</span><input type="email" name="email" required autoComplete="email" aria-invalid={!!errs.email} />{err("email")}</label>
        </div>
        <div className="f-row">
          <label className="f"><span className="f-label">Phone</span><input type="tel" name="phone" required autoComplete="tel" aria-invalid={!!errs.phone} />{err("phone")}</label>
          <label className="f"><span className="f-label">Birthday <em>optional</em></span><input type="date" name="birthday" autoComplete="bday" /></label>
        </div>
        <label className="f"><span className="f-label">Full address <em>optional</em></span><input name="address" placeholder="Street, city, state, zip" autoComplete="street-address" /></label>
        <label className="f">
          <span className="f-label">How did you hear about us?</span>
          <select name="hear_about" required defaultValue="" aria-invalid={!!errs.hear_about}><option value="" disabled>Choose one</option>{HEAR.map((o) => <option key={o}>{o}</option>)}</select>{err("hear_about")}
        </label>

      </section>
      <section className="form-section" aria-labelledby="your-training">
        <h3 id="your-training" className="lead-size">Your training &amp; goals</h3>
        <label className="f"><span className="f-label">What are your biggest goals?</span><textarea name="goals" required rows={4} aria-invalid={!!errs.goals} />{err("goals")}</label>
        <fieldset className="f" data-bad={errs.importance ? "" : undefined}>
          <legend className="f-label">How important is it to you to get there?</legend>
          <div className="scale">
            {Array.from({ length: 10 }, (_, i) => (
              <label key={i} className="chip"><input type="radio" name="importance" value={i + 1} required /><span>{i + 1}</span></label>
            ))}
          </div>
          <div className="scale-ends"><span>Not important</span><span>Everything</span></div>
          {err("importance")}
        </fieldset>
        <label className="f"><span className="f-label">What does your training look like right now?</span><textarea name="training" required rows={4} aria-invalid={!!errs.training} />{err("training")}</label>
        <label className="f"><span className="f-label">What has been getting in the way?</span><textarea name="in_the_way" required rows={4} aria-invalid={!!errs.in_the_way} />{err("in_the_way")}</label>
      </section>
      <section className="form-section" aria-labelledby="next-chapter">
        <h3 id="next-chapter" className="lead-size">What comes next</h3>
        <label className="f">
          <span className="f-label">When are you looking to start?</span>
          <select name="start" required defaultValue="" aria-invalid={!!errs.start}><option value="" disabled>Choose one</option>{START.map((o) => <option key={o}>{o}</option>)}</select>{err("start")}
        </label>
        <label className="f"><span className="f-label">What are you expecting from The Focus Room?</span><textarea name="expecting" required rows={4} aria-invalid={!!errs.expecting} />{err("expecting")}</label>
        <label className="f"><span className="f-label">Anything else Jarred should know? <em>optional</em></span><textarea name="anything" rows={4} /></label>

        {hasPhone && (
          <label className="consent">
            <input type="checkbox" name="sms_consent" />
            <span>Text me occasional updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.</span>
          </label>
        )}

      </section>

      <div className="submit">
        <button type="submit" className="btn btn-dark" disabled={sending}>{sending ? "Sending…" : "Send my application"}</button>
        <p className="small" aria-live="polite">
          {failed && <>That didn’t send. Your answers are still here, so try again, or call <a href="tel:+15122301027">(512) 230-1027</a>.</>}
        </p>
        {Object.keys(errs).length > 0 && <p className="small f-err" role="alert">A few answers are missing. They’re marked above.</p>}
        <p className="small">Your answers are saved in this browser until you send them. By applying you agree to our <a href="/privacy">privacy policy</a>.</p>
      </div>
    </form>
  );
}
