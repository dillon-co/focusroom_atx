import Image, { getImageProps } from "next/image";
import Enhance from "./enhance";
import WhoAndApply from "./who-and-apply";
import { Arrow, Marquee, Scrub, Split, hud, index } from "./ui";

const SITE = "https://www.thefocusroomatx.com";
const APPLY = "/apply";
const MAP = "https://maps.google.com/?q=2709+East+5th+Street+Suite+110A+Austin+TX+78702";
const JC = (path = "") => `https://www.jarredcurcio.com/${path}?utm_source=thefocusroomatx.com&utm_medium=referral`;


const membershipDetails = [
  ["Four at a time.", "Small groups, with a coach leading every session."],
  ["A plan with purpose.", "Strength, mindset and weekly planning in one membership."],
  ["Work that travels.", "Private coaching and custom programming for life beyond the room."],
  ["A shared standard.", "Thirty members, committed to doing the work."],
];

const sheets = [
  {
    name: "Muscle",
    tone: "ink",
    img: "/images/class-power.jpg",
    alt: "A lifter setting up for a heavy deadlift in a dark gym",
    pos: "65% 50%",
    body: "Build strength you can carry into the rest of your life. Thoughtful programming, close attention to technique, and a coach beside you for the work.",
    items: [
      "Small groups, four members at most",
      "Private coaching, one on one",
      "Custom programming you can take anywhere",
    ],
  },
  {
    name: "Mindset",
    tone: "gold",
    img: "/images/class-perspective.jpg",
    alt: "A man meditating cross-legged in a dim, candlelit room",
    pos: "50% 40%",
    body: "Practice staying present when the work gets difficult. Meditation, journaling and perspective work belong on the schedule, just as much as your next strength session.",
    items: [
      "One-to-one mindset coaching to break old patterns",
      "Weekly group workshops",
      "Guest facilitators and mentors",
    ],
  },
  {
    name: "Mission",
    tone: "navy",
    img: "/images/class-planning.jpg",
    alt: "A man writing a weekly plan in a paper planner",
    pos: "45% 50%",
    body: "Give your effort a direction. Turn what matters to you into a practical plan, then make time each week to review, adjust and take the next step.",
    items: [
      "PED coaching: Plan, Execute, Dominate, Jarred’s weekly system",
      "The MAP framework, a ten-part plan for your whole life",
      "Mission sessions that turn a vision into this week’s actions",
    ],
  },
];

const classes = [
  { name: "Power", tone: "steel", tags: "Muscle", img: "/images/class-power.jpg", body: "Big compound lifts, heavy. The foundation everything else stands on. Show up and set the tone for the week." },
  { name: "Presence", tone: "gold", tags: "Muscle, Mindset", img: "/images/class-presence.jpg", body: "Slower hypertrophy work, form over ego. Moving with intention is practice for living with it." },
  { name: "Perspective", tone: "navy", tags: "Mindset", img: "/images/class-perspective.jpg", body: "Guest facilitators, new thinking and a wider idea of what fitness means. Something new every week.", note: "Wellness Wednesday at The Pershing" },
  { name: "Purpose", tone: "steel", tags: "Muscle, Mission", img: "/images/class-purpose.jpg", body: "The hardest session of the week. You train the capacity to chase something difficult and keep going." },
  { name: "Planning", tone: "navy", tags: "Mission", img: "/images/class-planning.jpg", body: "Review, strategy and the plan for the week ahead. The week starts before the training does." },
];

const around = [
  { name: "The Pershing", tags: "Members club", tone: "navy", body: "East Austin’s private members club. Members get in through Wellness Wednesdays." },
  { name: "Winner’s Circle", tags: "Monthly", tone: "ink", body: "An accountability call on the first Monday of every month. Goals set in public. Results reported." },
  { name: "Stoic Sundays", tags: "Free", tone: "navy2", body: "Meditation and stoic principles every other Sunday, open to members and the wider community." },
  { name: "True Fitness and Focus", tags: "Online", tone: "ink", body: "The global coaching community this room is headquarters to, connected through a private group.", href: JC() },
  { name: "SUPERNOVA", tags: "Couples", tone: "navy", body: "Coaching for partners who want to grow together, led by Kate and Jarred.", href: "https://www.supernovacouples.com/?utm_source=thefocusroomatx.com&utm_medium=referral" },
  { name: "Partner benefits", tags: "Growing", tone: "ink", body: "Austin partners, from wellness services to lifestyle brands, who hold the same standard." },
];

// From Jarred's one-on-one coaching clients, quoted as published on jarredcurcio.com/testimonials.
const lead = { pull: "Stop guessing and get a coach.", who: "Brian S., 38, North Carolina", result: "305 to 241 lbs", quote: "If you are someone who has tried everything and cannot figure out why nothing sticks, stop guessing and get a coach. Jarred’s approach is simple, direct, and it works." };
const stories = [
  { who: "Curt M., 37, Dripping Springs", result: "130 lbs lost", quote: "I am not just lighter on the scale but lighter in spirit. I owe it all to the commitment to a healthier lifestyle and the unwavering support of Jarred." },
  { who: "Brittany C., 35, Austin", result: "Six months", quote: "What is great about Jarred is that he is honest about the hard things and has a no-nonsense mentality. There is magic in that." },
  { who: "Joe B., 33, Austin", result: "Launched his business", quote: "The energy and confidence I gained were so powerful, I felt ready to launch my own business." },
  { who: "Justin B., 40, Atlanta", result: "Eight years in the NFL", quote: "Jarred is an incredible motivator and accountability partner. He has a way of getting the best out of you." },
];

const chapters = [
  {
    id: "room",
    title: "The room",
    tone: "navy",
    img: "/images/room-preview-real-2.jpg",
    pos: "72% 50%",
    alt: "The Focus Room: navy walls, gold squat racks, arched mirrors and a globe chandelier",
    text: "Navy walls, gold racks, arched mirrors and nothing you don’t need. Every piece of equipment earns its place.",
    link: { href: MAP, label: "2709 East 5th Street" },
    cap: "east 5th street, austin",
  },
  {
    id: "kate",
    title: "Kate Curcio",
    tone: "bone2",
    img: "/images/about-kate.jpg",
    pos: "50% 55%",
    alt: "Kate Curcio setting up for a barbell deadlift",
    text: "Co-founder. Registered nurse, two decades in healthcare leadership, and the reason everything here runs.",
    link: { href: "https://www.supernovacouples.com/?utm_source=thefocusroomatx.com&utm_medium=referral", label: "SUPERNOVA" },
    cap: "co-founder · registered nurse",
  },
  {
    id: "jarred",
    title: "Jarred Curcio",
    tone: "ink",
    img: "/images/about-jarred.jpg",
    pos: "38% 40%",
    alt: "Jarred Curcio with a loaded barbell across his back",
    text: "Founder and head coach. Twenty years without missing a workout. Austin Under 40 finalist, 2026.",
    link: { href: JC(), label: "jarredcurcio.com" },
    cap: "founder · head coach",
  },
];

function Hero() {
  const common = { alt: "Jarred Curcio, head coach, in the gym", sizes: "100vw" };
  const { props: mobile } = getImageProps({ ...common, src: "/images/hero-mobile.jpg", width: 900, height: 1350 });
  const { props: desktop } = getImageProps({ ...common, src: "/images/hero-desktop.jpg", width: 2400, height: 1350 });
  return (
    <div className="hero-track">
    <section className="hero" data-tone="navy" id="top">
      <div className="hero-panel">
        <span className="corners" aria-hidden="true" />
        <picture className="hero-media">
          <source media="(max-width: 1080px)" srcSet={mobile.srcSet} />
          <img {...desktop} alt={common.alt} loading="eager" fetchPriority="high" />
        </picture>
        <div className="hero-masthead">
          <a className="wordmark hero-mark" href="#top" aria-label="The Focus Room" />
          <div className="hero-nav">
            <p className="mono hero-coords">30.26° N, 97.71° W<br />East Austin, TX</p>
            <a href={APPLY} className="hero-nav-apply">Membership <Arrow /></a>
          </div>
        </div>
        <div className="hero-copy">
          <h1 className="hero-title">
            <span>Master</span><span>yourself.</span>
          </h1>
          <div className="hero-invitation">
            <p className="hero-sub">
              Private training in East Austin. Four people at a time. Your muscle, mindset and mission, trained together.
            </p>
            <nav aria-label="Sections">
              <ol className="hero-index">
                {index.map((n) => <li key={n.href}><a href={n.href}><span>{n.label}</span><span className="mono">{n.n}</span></a></li>)}
              </ol>
            </nav>
            <a className="btn btn-gold hero-btn" href={APPLY}>Apply for membership <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></a>
          </div>
        </div>
      </div>
      <div className="hero-foot mono">
        <p>East Austin, Texas</p><p>Thirty members. One standard.</p>
        <a href="#same-rep">Step inside the room. <span aria-hidden="true">↓</span></a>
      </div>
    </section>
    </div>
  );
}

const ticker = ["Muscle", "Mindset", "Mission", "Four at a time", "Thirty members", "East 5th Street"];

function Intro() {
  return (
    <section className="intro" data-tone="bone" aria-labelledby="same-rep">
      <div className="focus-collage" data-reveal-group>
        <h2 id="same-rep" className="focus-statement" data-split><span><Split text="Small room." /></span><span><Split text="Big *shift.*" /></span></h2>
        <figure className="focus-photo focus-photo-room">
          <Image src="/images/room-preview-real-2.jpg" alt="Gold racks and arched mirrors inside The Focus Room" fill sizes="(max-width: 760px) 65vw, 38vw" style={{ objectFit: "cover" }} />
        </figure>
        <figure className="focus-photo focus-photo-detail">
          <Image src="/images/detail-bells.jpg" alt="Training equipment in the room" fill sizes="(max-width: 760px) 30vw, 18vw" style={{ objectFit: "cover" }} />
        </figure>
        <div className="focus-intro-copy" data-reveal>
          <p className="lead">A coach, a plan, and the space to do the work.</p>
          <a className="chapter-link" href="#method">Explore the method <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="manifesto">
        <Scrub text="Membership is capped at thirty. Training groups stop at four. Every session is coached. Your muscle, mindset and mission get the same attention." />
      </div>
      <div className="intro-text">
        <ul className="membership-details">
          {membershipDetails.map(([h, b]) => (
            <li key={h}><strong>{h}</strong><p>{b}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="method" aria-labelledby="method-h" data-hud={hud(0)}>
      <div className="method-head grid" data-reveal-group data-tone="bone">
        <h2 id="method-h" className="heading" data-split><Split text="Train all three." /></h2>
        <p className="lead" data-reveal>
          Strength gives you capacity. Mindset gives you composure. Mission gives both a direction. Here, you practice all three.
        </p>
      </div>
      <div className="sheets">
        {sheets.map((s, i) => (
          <article key={s.name} className={`sheet t-${s.tone}`} data-reveal-group style={{ "--i": i } as React.CSSProperties} data-tone={s.tone}>
            <h3 className="sheet-name">{s.name}<Arrow /></h3>
            <div className="sheet-copy" data-reveal>
              <p className="body-l">{s.body}</p>
              <ul className="sheet-list">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
            <div className="sheet-media unmask">
              <Image src={s.img} alt={s.alt} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: s.pos }} />
            </div>
          </article>
        ))}
      </div>
      <div className="method-close grid" data-tone="bone" data-reveal-group>
        <h2 className="heading" data-split><Split text="One practice.|Every part of life." /></h2>
        <div data-reveal>
          <p className="lead">The last rep. The hard conversation. The plan you follow through on.</p>
          <p>The work changes. The practice stays the same: show up with intention, stay with the difficult part, and take the next step. That’s what we train here.</p>
          <a className="chapter-link" href="#week">Find your rhythm <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}

function Week() {
  return (
    <section id="week" className="week" data-tone="navy" aria-labelledby="week-h" data-hud={hud(1)}>
      <div className="grid week-head" data-reveal-group>
        <h2 id="week-h" className="heading" data-split><Split text="A week with *purpose.*" /></h2>
        <p className="lead" data-reveal>Five classes. Each one trains more than your body, and together they’re the rhythm that carries you through the week.</p>
      </div>
      {/* Tall track: while it scrolls past, the deck stays pinned and enhance.tsx opens one class per step. */}
      <div className="class-track">
      <div className="class-deck" aria-label="Explore the classes">
        <div className="class-scene class-rest"><p>Choose a class.<br />Find your rhythm.</p></div>
        {[...classes, { name: "Flex", tags: "All three", img: "/images/detail-bells.jpg", body: "New ways to move and new facilitators. Mindset and Mission sessions run on their own schedule, and every member can join all of them.", note: "Flex sessions" }].map((c, i) => (
          <details className="class-option" name="training-class" open={i === 0} key={c.name}>
            <summary>{c.name}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></summary>
            <div className="class-scene">
              <div className="class-picture"><Image src={c.img} alt={`${c.name} training`} fill sizes="(max-width: 760px) 100vw, 55vw" style={{ objectFit: "cover" }} /></div>
              <div className="class-description"><p className="class-tags">{c.tags}</p><p>{c.body}</p>{c.note && <p className="class-note">{c.note}</p>}</div>
            </div>
          </details>
        ))}
      </div>
      </div>
      <div className="around">
        <div className="around-head" data-reveal-group>
          <h3 className="cat-title">Around the room</h3>
          <p className="body-l">Beyond the five classes, membership opens these doors. <span className="rail-hint">Scroll sideways.</span></p>
        </div>
        <ul className="around-list" tabIndex={0} aria-label="Membership benefits">
          {around.map((a) => {
            const inner = (
              <>
                <p className="around-tag mono">{a.tags}</p>
                <h4 className="around-name">{a.name}{a.href && <Arrow />}</h4>
                <p className="around-desc">{a.body}</p>
              </>
            );
            return (
              <li key={a.name} className={`t-${a.tone}`}>
                {a.href ? <a className="around-card around-link" href={a.href}>{inner}</a> : <div className="around-card">{inner}</div>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <div className="showcase" id="room" data-hud={hud(2)}>
      {chapters.map((c) => (
        <section key={c.id} className={`chapter t-${c.tone}`} data-tone={c.tone} data-chapter aria-labelledby={`${c.id}-h`}>
          <div className="chapter-field" />
          <figure className="chapter-portrait">
            <div className="unmask"><Image src={c.img} alt={c.alt} fill sizes="(max-width: 760px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: c.pos }} /></div>
            <figcaption className="mono cap">{c.cap}</figcaption>
          </figure>
          <div className="chapter-copy">
            <h2 id={`${c.id}-h`} className="chapter-title" data-split><Split text={c.title} /></h2>
            <p className="chapter-text" data-reveal>{c.text}</p>
            <a className="chapter-link" href={c.link.href}>{c.link.label}</a>
          </div>
        </section>
      ))}
    </div>
  );
}

function Story() {
  const M = ({ children }: { children: React.ReactNode }) => <mark className="hl t-ink">{children}</mark>;
  return (
    <section className="story" data-tone="bone" aria-labelledby="story-h">
      <h2 id="story-h" className="heading" data-split><Split text="Excellence is a process." /></h2>
      <div className="story-cols">
        <p>
          <span className="ink">At nineteen, Jarred Curcio</span> was aimless and weighed three hundred pounds. By twenty-one he was a <M>natural bodybuilding champion</M>, and he hasn’t missed a workout in the twenty years since. He pointed the same formula at everything else: summa cum laude, Penn State Law, the New Jersey Bar, eleven years running sales teams past thirty million in revenue. Then he saw that the company wasn’t why he kept winning. The formula was. So he left and built the work that carries his name.
        </p>
        <p>
          <span className="ink">Kate Curcio</span> is a <M>registered nurse</M> with two decades in healthcare leadership, including running a plastic surgery practice. She did the work beside him, so there’s nothing she coaches that she hasn’t done herself. Jarred brings structure and challenge. Kate brings depth and balance. He helps you live the process. She helps you love it.
        </p>
        <p className="story-end">
          <a href="#apply">The Focus Room is that formula with a room of its own.</a>
        </p>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="proof t-navy2" data-tone="navy2" aria-labelledby="proof-h" data-hud={hud(3)}>
      <div className="proof-head" data-reveal-group>
        <h2 id="proof-h" className="heading" data-split><Split text="The work *speaks.*" /></h2>
        <p className="lead" data-reveal>Jarred’s one-on-one coaching clients, in their own words. The room runs on the same method.</p>
      </div>
      <figure className="proof-feature t-bone">
        <div className="feature-words">
          <p className="feature-pull" aria-hidden="true">“{lead.pull}”</p>
          <blockquote className="feature-quote">“{lead.quote}”</blockquote>
        </div>
        <figcaption className="feature-stat">
          <strong>{lead.result}</strong>
          <span>{lead.who}</span>
        </figcaption>
      </figure>
      <ul className="proof-list">
        {stories.map((t) => (
          <li key={t.who} className="proof-card t-navy">
            <strong>{t.result}</strong>
            <blockquote>“{t.quote}”</blockquote>
            <span className="small">{t.who}</span>
          </li>
        ))}
      </ul>
      <a className="proof-more" href={JC("testimonials")}>Read the full stories</a>
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "The Focus Room",
  url: SITE,
  image: `${SITE}/images/room-preview-real-2.jpg`,
  telephone: "+1-512-230-1027",
  email: "jarred@truefitnessatx.com",
  address: { "@type": "PostalAddress", streetAddress: "2709 East 5th Street, Suite 110A", addressLocality: "Austin", addressRegion: "TX", postalCode: "78702", addressCountry: "US" },
  founder: [{ "@type": "Person", name: "Jarred Curcio" }, { "@type": "Person", name: "Kate Curcio" }],
  sameAs: ["https://instagram.com/thefocusroomatx", "https://www.jarredcurcio.com/"],
};

function Contact() {
  return (
    <section className="contact t-navy" data-tone="navy" aria-labelledby="contact-h">
      <div className="rows">
        <div className="row">
          <h2 id="contact-h">The Focus Room</h2>
        </div>
        <a className="row" href={MAP}>
          2709 East 5th Street
        </a>
        <a className="row" href="tel:+15122301027">(512) 230-1027</a>
        <p className="row row-hello">
          Say hello
          <a className="round-btn" href="mailto:jarred@truefitnessatx.com?subject=The%20Focus%20Room" aria-label="Email jarred@truefitnessatx.com">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
          </a>
        </p>
      </div>
      <figure className="map">
        <Image src="/images/map-east-5th-1988.jpg" alt="1988 USGS map of East Austin around East 5th Street, with the room's block marked" fill sizes="(max-width: 760px) 100vw, 34vw" style={{ objectFit: "cover", objectPosition: "41% 66%" }} />
        <figcaption>East 5th Street on the 1988 USGS survey. The gold arch is the room.</figcaption>
      </figure>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-tone="navy">
      <h2 className="sr-only">The Focus Room</h2>
      <p className="footer-name" aria-hidden="true"><span>The Focus</span><span>Room.</span></p>
      <div className="foot-grid">
        <nav aria-label="The Focus Room">
          <p className="foot-h">The room</p>
          {index.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <nav aria-label="Jarred Curcio">
          <p className="foot-h">Jarred Curcio</p>
          {["coaching", "playbook", "events", "resources", "testimonials", "connect"].map((p) => (
            <a key={p} href={JC(p)}>{p[0].toUpperCase() + p.slice(1)}</a>
          ))}
        </nav>
        <nav aria-label="Community">
          <p className="foot-h">Community</p>
          <a href="https://instagram.com/thefocusroomatx">Instagram</a>
          <a href={`${SITE}/pershing`}>Pershing members: your free session</a>
          <a href="https://www.supernovacouples.com/?utm_source=thefocusroomatx.com&utm_medium=referral">SUPERNOVA</a>
        </nav>
        <div className="foot-contact">
          <p>By conversation only.<br />2709 East 5th Street, Suite 110A<br />Austin, Texas 78702</p>
          <p><a href="tel:+15122301027">(512) 230-1027</a><br /><a href="mailto:jarred@truefitnessatx.com">jarred@truefitnessatx.com</a></p>
          <blockquote>“Commitment is binary. When we say we’re going to do something, we do it.” <cite>Jarred Curcio</cite></blockquote>
        </div>
      </div>
      <div className="foot-last">
        <p>© {new Date().getFullYear()} The Focus Room. <a href="/privacy">Privacy</a>, <a href="/terms">Terms</a>. Map: USGS, 1988, public domain, via Wikimedia Commons.</p>
        <a className="btn btn-gold btn-small" href={APPLY}>Apply</a>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#main">Skip to content</a>
      <Enhance />
      <main id="main">
        <Hero />
        <Marquee items={ticker} tone="gold" />
        <Intro />
        <Method />
        <Week />
        <Showcase />
        <Story />
        <Marquee items={[lead.result, ...stories.filter((t) => t.result !== "Six months").map((t) => t.result)]} tone="navy2" big />
        <Proof />
        <WhoAndApply apply={APPLY} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
