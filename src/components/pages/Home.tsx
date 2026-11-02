import Link from "next/link";
import { HeroWindow } from "@/components/site/HeroWindow";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { BeforeAfter, type Pair } from "@/components/site/BeforeAfter";
import { ServiceMenu, type Row } from "@/components/site/ServiceMenu";
import { ScrollWords } from "@/components/site/ScrollWords";
import { BOOK, HOURS, MAPS, PHONE, PHONE_T, SERVICE_LINKS } from "@/lib/site";
import { POSTS, fmtDate, postThumb, postTitle } from "@/lib/content";

const MENU: [string, string][] = [
  ["Touch Up", "$150"], ["Powder Eyebrows", "$350"], ["Nanoblading", "$350"], ["Lip Blush Model", "$250"],
  ["Lip Blush", "$450"], ["Eyebrows Model", "$250"], ["Eyebrow Threading", "$20"], ["Eyebrow Henna Tinting", "$45"],
];
const TESTIMONIALS = [
  ["Sarah R.", "Microblading · Milford, CT", "GG took her time during the consultation in a way nobody else has. She asked about my haircut, my skin routine, even my old brow tattoo from 2014. Two months in, I still catch myself in the mirror."],
  ["Maria D.", "PMU restoration · New Haven, CT", "After chemo my brows came back patchy. GG did the most natural restoration — my husband didn't even notice they were tattooed. Just that I looked like myself again."],
  ["Jenna K.", "Combo brows · Westport, CT", "Drove forty minutes from Westport because the local studios kept giving me the same Instagram brow. GG drew the shape that actually fits my face. Worth every mile."],
];
const STEPS = [
  ["Free Consultation", "A fifteen-minute meet-and-look with GG to talk shape, history, and pigment. No pressure, no booking required.", "2023_07_appointment-image"],
  ["Mapping & Pigment", "Brow architecture mapped on your face with clinical pencils — adjusted in the mirror until you say yes.", "2023_10_microblading-pen"],
  ["The Procedure", "90–150 minutes of focused tattoo work. Single-use sterile needles, FDA-compliant pigments, hospital-grade sanitation.", "2023_07_nanoblading-service-1"],
  ["Six-Week Perfecting", "A complimentary follow-up to refine the result once your skin has fully healed. Always included, never extra.", "2023_07_touch-up-service"],
];
const PAIRS: Pair[] = [
  { file: "2023_07_portfolio-3", layout: "side", label: "brow result 1" },
  { file: "2023_10_portfolio-16", layout: "side", label: "brow result 2" },
  { file: "2023_07_portfolio-2", layout: "stack", label: "brow result 3" },
  { file: "2023_10_portfolio-22", layout: "side", label: "brow result 4" },
  { file: "2023_07_portfolio-12", layout: "stack", label: "lip blush result" },
  { file: "2023_10_portfolio-18", layout: "side", label: "brow result 5" },
  { file: "2023_07_portfolio-13", layout: "stack", label: "brow result 6" },
];
const IMG: Record<string, string> = {
  "Touch Up": "2023_07_touch-up-service", "Powder Eyebrows": "2023_07_powder-eyebrows-service", Nanoblading: "2023_07_nanoblading-service-1",
  "Lip Blush Model": "2023_07_lip-blush-model-service", "Lip Blush": "2023_07_lip-blush-model-service", "Eyebrows Model": "2023_07_powder-eyebrows-service-1",
  "Eyebrow Threading": "2023_07_eyebrow-threading-service", "Eyebrow Henna Tinting": "2023_07_eyebrow-henna-tinting-service",
};
const AREAS = ["Milford", "Orange", "Stratford", "West Haven", "New Haven", "Fairfield", "Bridgeport"];
const WORK = [
  ["2023_07_portfolio-2", ""], ["2023_10_portfolio-16", ""], ["2023_07_portfolio-13", ""], ["2023_10_portfolio-22", ""],
  ["2023_07_portfolio-4", ""], ["2023_07_portfolio-12", ""], ["2023_10_portfolio-18", ""], ["2023_10_portfolio-23", ""],
];

export function Home() {
  return (
    <main id="main" className="home">
      <HeroWindow />

      <section className="pin" aria-labelledby="work-h">
        <div className="pin-title"><h2 id="work-h">Our<br />Portfolio</h2></div>
        {WORK.map(([f], i) => (
          <div className="pin-panel" key={f}>
            <img src={`/assets/img/${f}.webp`} alt={`Eyebrows by GG client result ${i + 1}`} width={1200} height={1200} loading="lazy" />
          </div>
        ))}
        <div className="pin-more"><Link className="btn btn-primary" href="/portfolio/">See all work</Link></div>
      </section>

      <Marquee items={MENU.map(([n, p]) => `${n} ${p}`)} />

      <section className="band ba-band" aria-labelledby="ba-h">
        <div className="wrap">
          <h2 id="ba-h" style={{ marginTop: 0 }}>Drag.<br />See the difference.</h2>
          <BeforeAfter pairs={PAIRS} />
        </div>
      </section>

      <section className="band ash">
        <div className="wrap intro">
          <div>
            <h2>Welcome to Eyebrows By GG</h2>
            <p><a className="btn btn-primary" href={BOOK} rel="noopener">Book Your Consultation</a></p>
            <Reveal><img className="intro-pic" src="/assets/img/gg-portrait.webp" alt="Gonul Gonenc (GG)" width={1856} height={2304} loading="lazy" /></Reveal>
          </div>
          <div>
            <p className="ebg-lede">Eyebrows by GG is a single-artist permanent makeup studio on the Boston Post Road, where Gonul Gonenc has shaped, tinted, and tattooed brows for clients across Connecticut since 2005. Microblading, nano brows, powder ombré, and threading — every appointment starts with a quiet consultation, never a template.</p>
            <p>Welcome to Eyebrows By GG, your premier destination for exquisite beauty services in Milford, CT - the heart of New Haven County.</p>
            <p>As a Licensed Tattoo Artist specializing in Nano Brows and advanced Nanoblading techniques, our founder, GG, brings an unparalleled level of expertise to every treatment. Mastering the newest methods in the industry, GG creates soft, natural, and refined beauty, ensuring you leave our studio with brows that are not only flawlessly shaped but also tailored to enhance your unique features.</p>
            <p>With services ranging from <Link className="ebg-mesh-link" href="/services/eyebrow-threading/">eyebrow threading</Link>, <Link className="ebg-mesh-link" href="/services/powder-brows/">powder brows</Link>, and <Link className="ebg-mesh-link" href="/services/nanoblading/">nanoblading</Link> to <Link className="ebg-mesh-link" href="/services/henna-tinting/">eyebrow henna tinting</Link> and <Link className="ebg-mesh-link" href="/services/lip-blush/">lip blush</Link>, our skilled team will craft a look that complements your style and leaves you feeling confidently beautiful.</p>
            <p>At Eye Brow By GG, we believe that beauty is an art form, and your face is our canvas.</p>
            <p>Our commitment to using top-quality products and maintaining strict hygiene standards ensures a safe and luxurious experience for all our cherished clients. Whether you&apos;re looking to refine your arches or embark on a transformative journey, our beauty center is your haven for unparalleled artistry and a touch of New Haven County glamour.</p>
            <p>Trust us with your beauty, and let your eyes captivate the world with their timeless allure.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="sec-h"><h2>Book Your Microblading Appointment</h2><a href={BOOK} rel="noopener">Select Service →</a></div>
          <ServiceMenu rows={MENU.map(([n, pr]): Row => ({ name: n, price: pr, href: SERVICE_LINKS[n], img: IMG[n] }))} />
          <p style={{ marginTop: 40 }}><Link className="btn btn-ghost" href="/services/">All services</Link></p>
        </div>
      </section>

      <section aria-labelledby="process-h">
        <div className="band" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <h2 id="process-h" style={{ marginTop: 0 }}>Four quiet steps,<br />from consult to color.</h2>
            <p style={{ maxWidth: "52ch" }}>Every Eyebrows by GG appointment follows the same unhurried sequence — designed for clients who want to think, not be sold to.</p>
          </div>
        </div>
        {STEPS.map(([t, d, img]) => (
          <article className="step" key={t}>
            <div className="step-copy"><h3>{t}</h3><p>{d}</p></div>
            <div className="step-pic"><img src={`/assets/img/${img}.webp`} alt="" loading="lazy" /></div>
          </article>
        ))}
      </section>

      <section aria-labelledby="rev-h">
        <h2 id="rev-h" className="sr-only">Reviews that read like personal letters.</h2>
        {TESTIMONIALS.map(([n, m, q]) => (
          <figure className="quote" key={n} style={{ margin: 0 }}>
            <blockquote>{q}</blockquote>
            <figcaption><cite>{n}<span>{m}</span></cite></figcaption>
          </figure>
        ))}
      </section>

      <section className="band ash" aria-label="Areas served"><ScrollWords words={AREAS} /></section>

      <section className="band">
        <div className="wrap">
          <div className="sec-h"><h2>Last News</h2><Link href="/blog/">All articles →</Link></div>
          <div className="posts">
            {POSTS.slice(0, 3).map((p) => {
              const th = postThumb(p);
              return (
                <Reveal key={p.path}>
                  <Link className="post" href={p.path}>
                    <div className="th" style={th ? { backgroundImage: `url(${th})` } : undefined}>{th ? "" : "GG"}</div>
                    <time>{fmtDate(p.date)}</time><h3>{postTitle(p)}</h3><p>{p.desc.slice(0, 130)}…</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <a className="word" href={BOOK} rel="noopener" aria-label="Book Your Consultation">
        <span className="word-note">Free 15-Min Consultation. 6-Week Perfecting Included.</span>
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true"><path d="M10 38 38 10M16 10h22v22" /></svg>
        <span className="word-big" aria-hidden="true">Book</span>
      </a>
    </main>
  );
}
