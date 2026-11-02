import Link from "next/link";
import { Reviews } from "./Reviews";
import { StudioMap } from "./StudioMap";
import photos from "@/data/photos.json";
import { Icon } from "./Icon";
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
          {service.slug === "henna-tinting" ? (
            <span className="service-thumb-graphic">
              <Icon name="treatments" size={28} />
            </span>
          ) : (
            <Photo
              name={service.image as keyof typeof photos}
              alt=""
              sizes="80px"
            />
          )}
          <span>
            <h3>{service.name}</h3>
            <span className="service-summary">{service.summary}</span>
          </span>
          <span className="price">{service.price}</span>
          <Icon name="diagonal" size={18} />
        </Link>
      ))}
    </div>
  );
}
export function Process() {
  return (
    <section className="section container process" id="process">
      <div>
        <h2>Good brows start here.</h2>
        <p className="lead">
          Bring your ideas.
          <br />
          We’ll work through the detail.
        </p>
      </div>
      <ol>
        <li>
          <h3>Tell GG what you like</h3>
          <p>
            Bring your references. Discuss your current brows, previous
            treatments and the finish you have in mind.
          </p>
        </li>
        <li>
          <h3>Find your shape</h3>
          <p>
            Talk through shape, color and technique with GG. Ask to see how each
            choice relates to your face.
          </p>
        </li>
        <li>
          <h3>Make a plan together</h3>
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
          <Photo
            name="gg-instagram"
            alt="Portrait of Gonul Gonenc, known as GG"
          />
          <figcaption>Gonul Gonenc, the artist behind GG.</figcaption>
        </figure>
        <div>
          <h2>
            Your shape.
            <br />
            GG’s expertise.
          </h2>
          <p className="lead">
            Gonul Gonenc brings 28 years of eyebrow threading experience to the
            detail of your shape. You can call her GG.
          </p>
          <p>
            Bring the brow photo you’ve saved on your phone. Tell GG what you
            love about it and what you’d change. Start there, then talk through
            the detail together.
          </p>
          {full ? (
            <p>
              The studio is on Boston Post Road. Explore client photographs
              before your visit, then bring your questions about the detail, the
              appointment and the care afterward.
            </p>
          ) : (
            <Link className="text-link" href="/about/">
              Meet your artist
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
export function Trust() { return <Reviews/>; }
export function Questions() {
  return (
    <section className="section container questions">
      <div>
        <h2>A few things to know.</h2>
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
          <h2>Your next stop: Milford.</h2>
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
      </div><div className="container"><StudioMap/></div>
    </section>
  );
}
export function Booking() {
  return (
    <section className="section on-dark booking">
      <div className="container">
        <h2>Ready for your brow moment?</h2>
        <p className="lead">
          Pick your treatment. Find a time. GG will see you in Milford.
        </p>
        <a className="button" href={BOOK}>
          Book my appointment <Icon name="arrow" />
        </a>
        <p className="small">Booking and availability through GlossGenius.</p>
      </div>
    </section>
  );
}
