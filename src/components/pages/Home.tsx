import Link from "next/link";
import { BOOK } from "@/lib/site";
import { Photo } from "@/components/site/Photo";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import {
  Artist,
  Booking,
  Location,
  Process,
  Questions,
  ServiceList,
  Trust,
} from "@/components/site/Sections";
export function Home() {
  return (
    <main id="main">
      <section className="hero container">
        <div className="hero-copy">
          <h1>
            Brows with
            <br />
            character.
          </h1>
          <p className="lead">
            Brow shaping and permanent makeup with GG in Milford, Connecticut.
            Find the finish that feels like you.
          </p>
          <a className="button" href={BOOK}>
            Book appointment
          </a>
          <p className="hero-caption">
            Gonul Gonenc. One artist, from the first conversation.
          </p>
        </div>
        <figure className="hero-portrait">
          <Photo
            name="gg-portrait"
            alt="Gonul Gonenc at Eyebrows by GG"
            priority
            sizes="(max-width: 640px) 80vw, 46vw"
          />
        </figure>
        <figure className="hero-detail">
          <Photo
            name="2023_07_portfolio-13"
            alt="Close-up of a client’s brows before and after treatment"
            sizes="(max-width: 640px) 40vw, 19vw"
            priority
          />
          <figcaption>The detail makes the difference.</figcaption>
        </figure>
        <a className="hero-work text-link" href="#results">
          See the work
        </a>
      </section>
      <section className="section on-dark" id="services">
        <div className="container treatment-grid">
          <div>
            <h2>Find your finish</h2>
            <p className="lead">
              A softer shade.
              <br />A more defined shape.
              <br />A fresh start for your brows.
            </p>
            <p>
              Choose a treatment to explore the detail. Listed prices come from
              the supplied studio menu; confirm current details when booking.
            </p>
            <Link className="text-link" href="/services/">
              All treatments & appointment details
            </Link>
          </div>
          <ServiceList compact />
        </div>
      </section>
      <section className="section container results" id="results">
        <div className="results-intro">
          <h2>The work, up close</h2>
          <p className="lead">
            See the starting point.
            <br />
            Look at the detail.
          </p>
          <p>
            Original client photographs from the studio portfolio. Each result
            belongs to an individual.
          </p>
          <Link className="text-link" href="/portfolio/">
            View the full portfolio
          </Link>
        </div>
        <figure className="result-small">
          <Photo
            name="2023_10_portfolio-23"
            alt="Side-by-side client brow photographs from the studio portfolio"
          />
          <figcaption>
            Brow definition, in the studio’s own photographs.
          </figcaption>
        </figure>
        <div className="result-compare">
          <BeforeAfter />
        </div>
      </section>
      <Process />
      <Artist />
      <Trust />
      <Questions />
      <Location />
      <Booking />
    </main>
  );
}
