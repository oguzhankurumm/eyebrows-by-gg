import Link from "next/link";
import { ADDR, BOOK, EMAIL, HOURS, MAPS, PHONE, PHONE_T } from "@/lib/site";
import { SERVICES, servicePath } from "@/lib/services";
import { Photo } from "./Photo";
import { Faq } from "./Faq";
export function ServiceList({ compact = false }: { compact?: boolean }) {
  return (
    <div className="service-list">
      {SERVICES.filter(
        (service) =>
          !compact ||
          [
            "powder-brows",
            "nanoblading",
            "lip-blush",
            "eyebrow-threading",
            "henna-tinting",
            "touch-up",
          ].includes(service.slug),
      ).map((service) => (
        <Link
          key={service.slug}
          href={servicePath(service)}
          className="service-row"
        >
          <span>
            <h3>{service.name}</h3>
            <span className="service-summary">{service.summary}</span>
          </span>
          <span className="price">{service.price}</span>
        </Link>
      ))}
    </div>
  );
}
export function Process() {
  return (
    <section className="section container process" id="process">
      <div>
        <h2>Your appointment</h2>
        <p className="lead">
          Start with a conversation.
          <br />
          Leave with a plan.
        </p>
      </div>
      <ol>
        <li>
          <h3>Talk it through</h3>
          <p>
            Bring your references. Discuss your current brows, previous
            treatments and the finish you have in mind.
          </p>
        </li>
        <li>
          <h3>Choose the detail</h3>
          <p>
            Talk through shape, color and technique with GG. Ask to see how each
            choice relates to your face.
          </p>
        </li>
        <li>
          <h3>Plan what comes next</h3>
          <p>
            Confirm the treatment, preparation and follow-up before you commit.
            Keep your care instructions close after your visit.
          </p>
        </li>
      </ol>
    </section>
  );
}
export function Artist({ full = false }: { full?: boolean }) {
  return (
    <section className="section surface">
      <div className="container artist-grid">
        <figure>
          <Photo name="gg-cover" alt="Portrait of Gonul Gonenc, known as GG" />
          <figcaption>Gonul Gonenc, the artist behind GG.</figcaption>
        </figure>
        <div>
          <h2>
            One artist.
            <br />
            Your look.
          </h2>
          <p className="lead">
            Gonul Gonenc brings a personal point of view to brow design in
            Milford, Connecticut.
          </p>
          <p>
            Threading, tinting, hair strokes or shading: start with what you
            want to see in the mirror. Talk with GG about the shape and finish
            that feel like you.
          </p>
          {full ? (
            <p>
              The studio is on Boston Post Road. Explore client photographs
              before your visit, then bring your questions about the detail, the
              appointment and the care afterward.
            </p>
          ) : (
            <Link className="text-link" href="/about/">
              More about GG
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
export function Trust() {
  return (
    <section className="section container trust">
      <div>
        <h2>Let the work speak</h2>
        <p className="lead">
          Close-up photographs.
          <br />A clearer starting point.
        </p>
        <Link className="text-link" href="/portfolio/">
          Explore client results
        </Link>
      </div>
      <div className="review-slot">
        <h3>Client words</h3>
        <p>[TODO: approved review and source]</p>
        <p className="small muted">
          A verified customer perspective belongs here. Until then, explore the
          studio’s own portfolio.
        </p>
      </div>
    </section>
  );
}
export function Questions() {
  return (
    <section className="section container questions">
      <div>
        <h2>Before you book</h2>
        <p>Answers to the questions that shape your appointment.</p>
        <Link className="text-link" href="/contact/">
          Ask GG a question
        </Link>
      </div>
      <Faq />
    </section>
  );
}
export function Location() {
  return (
    <section className="section surface" id="visit">
      <div className="container location">
        <div>
          <h2>Find us in Milford</h2>
          <address className="lead">{ADDR}</address>
          <a className="text-link" href={MAPS}>
            Get directions
          </a>
          <div className="contact-links">
            <a href={PHONE_T}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div>
          <h3>Studio hours</h3>
          <dl className="hours">
            {HOURS.map(([day, hours]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
export function Booking() {
  return (
    <section className="section on-dark booking">
      <div className="container">
        <h2>A little more you.</h2>
        <p className="lead">
          Choose your treatment and find your next appointment with GG.
        </p>
        <a className="button" href={BOOK}>
          Book appointment
        </a>
        <p className="small">Booking and availability through GlossGenius.</p>
      </div>
    </section>
  );
}
