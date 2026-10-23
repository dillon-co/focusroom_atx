// Receives applications and hands them to the CRM. Same payload and response shape as the live
// site's /api/lead, so either backend works with the form.
// ponytail: forwards to one webhook (LEAD_WEBHOOK_URL); add retries or a queue if the CRM proves flaky.

const REQUIRED = ["name", "email", "phone", "hear_about", "goals", "importance", "training", "in_the_way", "start", "expecting"];

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return Response.json({ ok: false, error: "bad request" }, { status: 400 });

  // Honeypot: bots fill the hidden "website" field. Pretend it worked.
  if (body.website) return Response.json({ ok: true, delivered: false });

  const missing = REQUIRED.filter((k) => typeof body[k] !== "string" || !body[k].trim());
  if (missing.length || !/^\S+@\S+\.\S+$/.test(body.email)) {
    return Response.json({ ok: false, error: `missing or invalid: ${missing.join(", ") || "email"}` }, { status: 422 });
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  // Fail loudly rather than drop an application on the floor.
  if (!hook) return Response.json({ ok: false, error: "LEAD_WEBHOOK_URL is not set" }, { status: 503 });

  const res = await fetch(hook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, received_at: new Date().toISOString() }),
  }).catch(() => null);

  if (!res?.ok) return Response.json({ ok: false, error: "CRM unreachable" }, { status: 502 });
  return Response.json({ ok: true, delivered: true });
}
