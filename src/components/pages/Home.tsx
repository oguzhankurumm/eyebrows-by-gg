import Link from "next/link";
import { Credentials } from "@/components/site/Credentials";
import { StudioFilms } from "@/components/site/StudioFilms";
import { Photo } from "@/components/site/Photo";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Hero } from "@/components/site/Hero";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { Icon } from "@/components/site/Icon";
import {
  Artist,
  Booking,
  Location,
  Process,
  Questions,
  Trust,
} from "@/components/site/Sections";
export function Home() {
  return (
    <main id="main">
      <Hero />
      <div className="studio-strip container">
        <span>
          <Icon name="treatments" />
          Brows, lips & the little details
        </span>
        <span>
          <Icon name="pin" />
          One artist. One Milford studio.
        </span>
        <Link href="/services/">
          Find your treatment
          <Icon name="arrow" size={18} />
        </Link>
      </div>
      <Credentials />
      <ServiceShowcase />
      <section className="section results-shell">
        <div className="container results" id="results">
          <div className="results-intro">
            <h2>
              Small details.
              <br />A visible difference.
            </h2>
            <p className="lead">
              A fuller tail. A softer outline. A shade that brings it together.
              Take a closer look at GG’s work.
            </p>
            <Link className="secondary-button" href="/portfolio/">
              Explore client results
              <Icon name="diagonal" size={18} />
            </Link>
          </div>
          <figure className="result-small">
            <Photo
              name="2023_10_portfolio-23"
              alt="Client brow photographs from the studio portfolio"
            />
            <figcaption>Original photographs. Individual results.</figcaption>
          </figure>
          <div className="result-compare">
            <div className="comparison-heading">
              <h3>See the detail for yourself</h3>
              <span className="small muted">Before & after</span>
            </div>
            <BeforeAfter />
          </div>
          <div className="results-note">
            <Icon name="results" size={28} />
            <h3>Your starting point matters.</h3>
            <p>
              Bring a photo of your brows and a look you like. GG can help you
              compare the shape, color and technique.
            </p>
            <Link className="text-link" href="/contact/">
              Talk through your look
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>
      <StudioFilms />
      <Process />
      <Artist />
      <Trust />
      <Questions />
      <Location />
      <Booking />
    </main>
  );
}
