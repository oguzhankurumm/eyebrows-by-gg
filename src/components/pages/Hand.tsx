import Link from "next/link";
import type { ReactNode } from "react";
import { ADDR, BOOK, EMAIL, HOURS, IG, MAPS, PHONE_FULL, PHONE_T, SERVICE_LINKS, WA } from "@/lib/site";
import { POSTS, fmtDate, postTitle } from "@/lib/content";
import { portfolioShots } from "@/lib/portfolio";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { ConsultForm } from "@/components/site/ConsultForm";
import { Reveal } from "@/components/site/Reveal";

function Head({ title }: { title: string }) {
  return <div className="pagehead"><div className="wrap"><h1>{title}</h1></div></div>;
}
const Page = ({ children }: { children: ReactNode }) => <main id="main" className="page">{children}</main>;

export function About() {
  return (
    <Page>
      <Head title="About Gonul Gonenc" />
      <section className="band"><div className="wrap two">
        <div><Reveal><img src="/assets/img/gg-portrait.webp" alt="Gonul Gonenc (GG)" width={1856} height={2304} style={{ width: "100%", maxWidth: 520 }} /></Reveal></div>
        <div>
          <p className="ebg-lede">GG started with a needle and a length of cotton thread in 2005, learning eyebrow threading the way it has been taught in her family for generations — by hand, on real faces, one hair at a time. Threading taught her something tattoo schools rarely cover: how a brow actually sits on a face, where the arch wants to break, why two millimeters changes everything. When microblading arrived in the United States, the move felt natural — same eye for shape, same patience, just a finer tool. She earned her Connecticut Tattoo Artist license, kept training as nano machine work and ombré powder techniques replaced older methods, and opened the Milford studio so clients had one room, one artist, one continuous record of their brows.</p>
          <p>Most of GG&apos;s calendar is repeat clients — annual color refreshers and the friends and daughters they bring with them. The work she is proudest of tends to be the quiet jobs: rebuilding brows after chemotherapy, evening out scar gaps, softening a tattoo someone else did too dark a decade ago. People come from Milford, Orange, Stratford, West Haven, New Haven, Fairfield, and Bridgeport — the studio is a fifteen-minute drive from any of them.</p>
          <blockquote className="about-q">A good brow shouldn&apos;t announce itself. You should look at someone and just think their face looks rested. <small style={{ display: "block", font: "500 14px var(--sans)", letterSpacing: ".14em", marginTop: 12 }}>— GG</small></blockquote>
          <p><span className="ebg-eyebrow">Licensed Tattoo Artist · 20+ Years Experience · FDA-Compliant Pigments · Free 15-Min Consultation · 6-Week Perfecting Included</span></p>
          <p><a className="btn btn-primary" href={BOOK} rel="noopener">Book Your Consultation</a> <a className="btn btn-ghost" href={IG} rel="noopener">Follow Us on Instagram</a></p>
        </div>
      </div></section>
    </Page>
  );
}

export function Contact() {
  return (
    <Page>
      <Head title="Get In Touch" />
      <section className="band"><div className="wrap two">
        <div>
          <h3 style={{ marginTop: 0 }}>Address</h3>
          <p style={{ fontSize: 20 }}>{ADDR}</p>
          <p><a className="btn btn-ghost" href={MAPS} rel="noopener">Get directions</a></p>
          <h3>Contact</h3>
          <p style={{ fontSize: 20 }}><a href={PHONE_T}>{PHONE_FULL}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p><a className="btn btn-primary" href={BOOK} rel="noopener">Book Online</a> <a className="btn btn-ghost" href={WA} rel="noopener">WhatsApp</a></p>
          <h3>Open Hours</h3>
          <table className="hours"><tbody>{HOURS.map(([d, h]) => <tr key={d}><td>{d}</td><td>{h.replace("–", "-")}</td></tr>)}</tbody></table>
        </div>
        <div><h3 style={{ marginTop: 0 }}>Send a message</h3><ConsultForm /></div>
      </div></section>
    </Page>
  );
}

export function Portfolio() {
  return (
    <Page>
      <Head title="Our Portfolio" />
      <section className="band"><div className="wrap">
        <PortfolioGrid shots={portfolioShots()} />
        <p style={{ marginTop: 40 }}><a className="btn btn-primary" href={BOOK} rel="noopener">Book Your Consultation</a></p>
      </div></section>
    </Page>
  );
}

const SERVICE_NAMES = ["Powder Brows", "Combo Brows", "Nanoblading", "Eyebrows Touch Up", "Yearly Eyebrow Touch Up", "Lip Blush", "Lip Blush Touch Up", "Consultation", "Eyebrow Threading", "Eyebrow Threading & Henna Tinting", "Upper Lip Threading", "Full Face Threading", "Natural Tattoo Removal + Vitamin", "Natural Eyebrow Growth", "Eyebrow Growth Serum (3 products)", "Hair Treatment", "Make-up", "Kids Make-up"];

export function ServicesIndex() {
  return (
    <Page>
      <Head title="Our Services" />
      <section className="band"><div className="wrap">
        <div className="svcgrid">
          {SERVICE_NAMES.map((n) => SERVICE_LINKS[n]
            ? <Link key={n} href={SERVICE_LINKS[n]}>{n}<span>→</span></Link>
            : <a key={n} href={BOOK} rel="noopener">{n}<span>→</span></a>)}
        </div>
        <p style={{ marginTop: 28 }}>Also: <Link className="ebg-mesh-link" href="/services/microblading/">Microblading</Link> · <Link className="ebg-mesh-link" href="/services/permanent-makeup/">Permanent makeup</Link></p>
        <p><a className="btn btn-primary" href={BOOK} rel="noopener">Book Your Consultation</a></p>
      </div></section>
    </Page>
  );
}

export function BlogIndex() {
  return (
    <Page>
      <Head title="Blog" />
      <section className="band"><div className="wrap">
        <ol className="contents">
          {POSTS.map((p) => <li key={p.path}><Link href={p.path}>{postTitle(p)}</Link><time>{fmtDate(p.date)}</time></li>)}
        </ol>
      </div></section>
    </Page>
  );
}
