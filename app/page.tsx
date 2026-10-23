import Image from "next/image";
import { getImageProps } from "next/image";
import Enhance from "./enhance";
import WhoAndApply from "./who-and-apply";

const SITE = "https://www.thefocusroomatx.com";
const APPLY = "/apply";
const MAP = "https://maps.google.com/?q=2709+East+5th+Street+Suite+110A+Austin+TX+78702";
const JC = (path = "") => `https://www.jarredcurcio.com/${path}?utm_source=thefocusroomatx.com&utm_medium=referral`;

const nav = [
  { href: "#method", label: "The method", tone: "navy2" },
  { href: "#week", label: "The week", tone: "bone2" },
  { href: "#room", label: "The room", tone: "navy" },
  { href: "#who", label: "Who it’s for", tone: "ink" },
  { href: "#apply", label: "Apply", tone: "gold" },
];

const nots = [
  ["No open gym.", "Every session is coached, small and on purpose."],
  ["No sweaty chaos.", "No mindless high fives. Every class has a reason to exist."],
  ["No trophies for showing up.", "You get recognized for the work."],
  ["No social club.", "Nobody comes here for clout or cocktails."],
];

const sheets = [
  {
    name: "Muscle",
    tone: "ink",
    img: "/images/class-power.jpg",
    alt: "A lifter setting up for a heavy deadlift in a dark gym",
    pos: "50% 50%",
    body: "Strength, power and capacity. We don’t train for summer. We build a body that matches the standard you hold everywhere else, and it’s the first place the work becomes visible.",
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
    body: "It’s the part almost everyone skips, so we train it as seriously as a squat. Meditation, journaling, visualization and perspective work, on a schedule, until you stay consistent and composed when it gets hard.",
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
    body: "People spend years thinking about what they want, and wishes rarely turn into anything. If you don’t know your aim yet, you’ll find it here. If you do, this is where you lock in.",
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
  { name: "Winner’s Circle", tags: "Monthly", tone: "gold", body: "An accountability call on the first Monday of every month. Goals set in public. Results reported." },
  { name: "Stoic Sundays", tags: "Free", tone: "navy2", body: "Meditation and stoic principles every other Sunday, open to members and the wider community." },
  { name: "True Fitness and Focus", tags: "Online", tone: "ink", body: "The global coaching community this room is headquarters to, connected through a private group.", href: JC() },
  { name: "SUPERNOVA", tags: "Couples", tone: "navy", body: "Coaching for partners who want to grow together, led by Kate and Jarred.", href: "https://www.supernovacouples.com/?utm_source=thefocusroomatx.com&utm_medium=referral" },
  { name: "Partner benefits", tags: "Growing", tone: "gold", body: "Austin partners, from wellness services to lifestyle brands, who hold the same standard." },
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
  },
  {
    id: "kate",
    title: "Kate Curcio",
    tone: "gold",
    img: "/images/about-kate.jpg",
    pos: "50% 55%",
    alt: "Kate Curcio setting up for a barbell deadlift",
    text: "Co-founder. Registered nurse, two decades in healthcare leadership, and the reason everything here runs.",
    link: { href: "https://www.supernovacouples.com/?utm_source=thefocusroomatx.com&utm_medium=referral", label: "SUPERNOVA" },
  },
  {
    id: "jarred",
    title: "Jarred Curcio",
    tone: "ink",
    img: "/images/about-jarred.jpg",
    pos: "38% 40%",
    alt: "Jarred Curcio with a loaded barbell across his back",
    text: "Founder and head coach. Twenty years without missing a workout. Not one.",
    link: { href: JC(), label: "jarredcurcio.com" },
  },
];

function Hero() {
  const common = { alt: "Jarred Curcio, head coach, in the gym", sizes: "(max-width: 1080px) 100vw, 84vw", priority: true };
  const { props: { srcSet: mobile } } = getImageProps({ ...common, src: "/images/hero-mobile.jpg", width: 900, height: 1350 });
  const { props: { srcSet: _d, ...desk } } = getImageProps({ ...common, src: "/images/hero-desktop.jpg", width: 2400, height: 1350 });
  return (
    <div className="hero-track">
    <section className="hero" data-tone="bone" id="top">
      <div className="hero-panel">
        <picture className="hero-media">
          <source media="(max-width: 1080px)" srcSet={mobile} />
          <source media="(min-width: 1081px)" srcSet={_d} />
          <img {...desk} src={desk.src} alt={common.alt} />
        </picture>
        <span className="wordmark hero-mark" role="img" aria-label="The Focus Room" />
        <Image className="hero-badge" src="/images/austin-under-40.png" width={640} height={640} sizes="92px" alt="Austin Under 40 Awards finalist, 2026" />
        <div className="hero-copy">
          <h1 className="hero-title">
            Master<br /> yourself.
          </h1>
          <p className="hero-sub">
            A private, coach-led training room in East Austin. Groups of four. Your muscle, your mindset and your mission, trained together.
          </p>
          <a className="btn btn-light hero-btn" href={APPLY}>Apply</a>
        </div>
      </div>
      <nav className="swatches" aria-label="Sections">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className={`swatch t-${n.tone}`}>{n.label}</a>
        ))}
      </nav>
    </section>
    </div>
  );
}

function Intro() {
  return (
    <section className="intro" data-tone="bone" aria-labelledby="same-rep">
      <div className="board">
        <div className="tile tile-a t-navy">
          <p className="heading tile-eq">The last set.<br /><span>The hard call.</span></p>
          <h2 id="same-rep" className="display caps">Same<br />rep.</h2>
        </div>
        <div className="tile tile-b t-gold">
          <p className="display figure">30</p>
          <p className="small">members. Then the door closes.</p>
        </div>
        <div className="tile tile-c">
          <Image src="/images/room-preview-real-2.jpg" alt="The training floor: gold racks, kettlebells and arched mirrors on navy walls" fill sizes="(max-width: 760px) 50vw, 33vw" style={{ objectFit: "cover", objectPosition: "62% 50%" }} />
        </div>
      </div>
      <div className="intro-text">
        <p className="lead-copy">
          Your body can’t tell a heavy set from a hard conversation. The last rep you didn’t want to do and the call you keep putting off are the same rep. You do it or you don’t. So we train that muscle, in the gym and in the plan for everything outside it.
        </p>
        <ul className="nots">
          {nots.map(([h, b]) => (
            <li key={h}><strong>{h}</strong> {b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="method" aria-labelledby="method-h">
      <div className="method-head grid" data-tone="bone">
        <h2 id="method-h" className="heading">Train all three.</h2>
        <p className="lead">
          Train one and you get results. Train all three and you change how your whole life runs. The mind sets the standard the body has to meet. The mission is the reason both show up.
        </p>
      </div>
      <div className="sheets">
        {sheets.map((s, i) => (
          <article key={s.name} className={`sheet t-${s.tone}`} style={{ "--i": i } as React.CSSProperties} data-tone={s.tone}>
            <h3 className="sheet-name lead-size">{s.name}</h3>
            <div className="sheet-copy">
              <p className="body-l">{s.body}</p>
              <ul className="sheet-list">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
            <div className="sheet-media">
              <Image src={s.img} alt={s.alt} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: s.pos }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Four close-ups of the room. The racks are the gold and the walls are the navy the whole site is built from.
const details = [
  { src: "/images/detail-plate.jpg", alt: "A 35 lb bumper plate held at the hip" },
  { src: "/images/detail-rack.jpg", alt: "Gold squat racks and a tree of black plates against the navy wall" },
  { src: "/images/detail-bells.jpg", alt: "Kettlebells on a two-tier rack beside wall balls and a plyo box" },
  { src: "/images/detail-light.jpg", alt: "The brass chandelier with globe bulbs on the navy ceiling" },
];

function Details() {
  return (
    <section className="details t-ink" data-tone="ink" aria-label="The room, up close">
      <ul>
        {details.map((d) => (
          <li key={d.src}><Image src={d.src} alt={d.alt} fill sizes="(max-width: 760px) 50vw, 25vw" style={{ objectFit: "cover" }} /></li>
        ))}
      </ul>
    </section>
  );
}

function Week() {
  return (
    <section id="week" className="week" data-tone="bone2" aria-labelledby="week-h">
      <div className="grid week-head">
        <h2 id="week-h" className="heading">Every class has a&nbsp;purpose.</h2>
        <p className="lead">Five classes. Each one trains more than your body, and together they’re the rhythm that carries you through the week.</p>
      </div>
      <h3 className="lead-size cat-h">The five classes</h3>
      <ul className="arches">
        {classes.map((c) => (
          <li key={c.name}>
            <div className={`arch-frame t-${c.tone}`}>
              <Image src={c.img} alt="" fill sizes="(max-width: 760px) 50vw, 16vw" style={{ objectFit: "cover" }} />
            </div>
            <p className="arch-name"><strong>{c.name}</strong>{c.tags}</p>
            <p className="arch-desc">{c.body}</p>
            {c.note && <p className="arch-note">{c.note}</p>}
          </li>
        ))}
        <li>
          {/* Flex sessions draw on all three, so its mirror holds all three colours. */}
          <div className="arch-frame arch-flex t-bone" aria-hidden="true">
            <span className="t-steel" /><span className="t-gold" /><span className="t-navy" />
          </div>
          <p className="arch-name"><strong>Flex sessions</strong>All three</p>
          <p className="arch-desc">New ways to move and new facilitators. Mindset and Mission sessions run on their own schedule, and every member can join all of them.</p>
        </li>
      </ul>
      <h3 className="lead-size cat-h">Around the room</h3>
      <ul className="bands">
        {around.map((a) => {
          const inner = (
            <>
              <strong className="band-name">{a.name}</strong>
              <span className="band-tag">{a.tags}</span>
              <span className="band-desc">{a.body}</span>
            </>
          );
          return (
            <li key={a.name} className={`t-${a.tone}`}>
              {a.href ? <a className="band band-link" href={a.href}>{inner}</a> : <div className="band">{inner}</div>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Showcase() {
  return (
    <div className="showcase" id="room">
      {chapters.map((c) => (
        <section key={c.id} className={`chapter t-${c.tone}`} data-tone={c.tone} data-chapter aria-labelledby={`${c.id}-h`}>
          <div className="chapter-field" />
          <figure className="chapter-portrait">
            <Image src={c.img} alt={c.alt} fill sizes="(max-width: 760px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: c.pos }} />
          </figure>
          <div className="chapter-copy">
            <h2 id={`${c.id}-h`} className="chapter-title">{c.title}</h2>
            <p className="chapter-text">{c.text}</p>
            <a className="chapter-link" href={c.link.href}>{c.link.label}</a>
          </div>
        </section>
      ))}
    </div>
  );
}

function Story() {
  const M = ({ c, children }: { c: string; children: React.ReactNode }) => <mark className={`hl t-${c}`}>{children}</mark>;
  return (
    <section className="story" data-tone="bone" aria-labelledby="story-h">
      <h2 id="story-h" className="heading">Excellence is a process.</h2>
      <div className="story-cols">
        <p>
          <span className="ink">At nineteen, Jarred Curcio</span> was aimless and weighed three hundred pounds. By twenty-one he was a <M c="gold">natural bodybuilding champion</M>, and he hasn’t missed a workout in the <M c="steel">twenty years</M> since. He pointed the same formula at everything else: summa cum laude, <M c="navy">Penn State Law</M>, the New Jersey Bar, eleven years running sales teams past <M c="gold">thirty million</M> in revenue. Then he saw that the company wasn’t why he kept winning. The formula was. So he left and built the work that carries his name.
        </p>
        <p>
          <span className="ink">Kate Curcio</span> is a <M c="steel">registered nurse</M> with two decades in healthcare leadership, including running a plastic surgery practice. She did the work beside him, so there’s nothing she coaches that she hasn’t done herself. Jarred brings structure and challenge. Kate brings depth and balance. He helps you live the process. She helps you love it.
        </p>
        <p className="story-end">
          <a className="hl t-ink" href="#apply">The Focus Room is that formula with a room of its own.</a>
        </p>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof t-navy2" data-tone="navy2" aria-labelledby="proof-h">
      <div className="proof-head">
        <h2 id="proof-h" className="heading">Ask the people who stayed.</h2>
        <p className="lead">Jarred’s one-on-one coaching clients, in their own words. The room runs on the same method.</p>
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
        <h2 id="contact-h" className="row">The Focus Room</h2>
        <a className="row" href={MAP}>2709 East 5th Street</a>
        <p className="row">Suite 110A</p>
        <p className="row">Austin, Texas 78702</p>
        <p className="row">By conversation only</p>
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

const letters = [
  ["F", "navy", 100], ["O", "gold", 78], ["C", "steel", 90], ["U", "ink", 66], ["S", "gold", 96],
  ["R", "steel", 84], ["O", "navy", 70], ["O", "gold", 92], ["M", "ink", 80],
] as const;

function Footer() {
  return (
    <footer className="footer" data-tone="bone">
      <h2 className="sr-only">The Focus Room</h2>
      <div className="mark-wall" aria-hidden="true">
        {letters.map(([l, t, h], i) => (
          <span key={i} className={`mark-block t-${t} ${i === 5 ? "gap" : ""}`} style={{ "--h": `${h}%` } as React.CSSProperties}>
            {l}
          </span>
        ))}
      </div>
      <div className="foot-grid">
        <nav aria-label="The Focus Room">
          <p className="foot-h">The room</p>
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
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
          <p>2709 East 5th Street, Suite 110A<br />Austin, Texas 78702</p>
          <p><a href="tel:+15122301027">(512) 230-1027</a><br /><a href="mailto:jarred@truefitnessatx.com">jarred@truefitnessatx.com</a></p>
          <blockquote>“Commitment is binary. When we say we’re going to do something, we do it.” <cite>Jarred Curcio</cite></blockquote>
        </div>
      </div>
      <div className="foot-last">
        <p>© {new Date().getFullYear()} The Focus Room. <a href="/privacy">Privacy</a>, <a href="/terms">Terms</a>. Map: USGS, 1988, public domain, via Wikimedia Commons.</p>
        <a className="btn btn-dark btn-small" href={APPLY}>Apply</a>
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
        <Intro />
        <Method />
        <Details />
        <Week />
        <Showcase />
        <Story />
        <Proof />
        <WhoAndApply apply={APPLY} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
