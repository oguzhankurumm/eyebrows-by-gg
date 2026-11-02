import Link from "next/link";
import { CurrentMenu } from "@/components/site/CurrentMenu";
import { Icon } from "@/components/site/Icon";
import { Credentials } from "@/components/site/Credentials";
import { StudioFilms } from "@/components/site/StudioFilms";
import type { Page } from "@/lib/content";
import { DATA, POSTS } from "@/lib/content";
import { BOOK, MAPS, PHONE, PHONE_T } from "@/lib/site";
import { SERVICES, servicePath } from "@/lib/services";
import photos from "@/data/photos.json";
import { Photo } from "@/components/site/Photo";
import {
  Artist,
  Booking,
  Location,
  Process,
  Questions,
  ServiceList,
  Trust,
} from "@/components/site/Sections";
import { ConsultForm } from "@/components/site/ConsultForm";

function Head({ page }: { page: Page }) {
  return (
    <section className="page-heading container">
      <Link className="back-link" href="/">
        Eyebrows by GG
      </Link>
      <h1>{page.title}</h1>
      <p className="lead">{page.lead}</p>
    </section>
  );
}
function Gallery() {
  const names = Object.keys(photos).filter((name) =>
    name.includes("portfolio"),
  ) as (keyof typeof photos)[];
  return (
    <section className="container gallery" aria-label="Client results">
      {names.map((name, index) => (
        <figure key={name}>
          <Photo
            name={name}
            alt={
              name.includes("portfolio-12")
                ? "Client lip-blush photographs"
                : `Client brow portfolio photograph ${index + 1}`
            }
            sizes="(max-width: 640px) 90vw, (max-width: 900px) 42vw, 28vw"
          />
          <figcaption>
            {name.includes("portfolio-12") ? "Lip color" : "Brow detail"} /
            Studio portfolio
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
function ServicePage({ page }: { page: Page }) {
  const service = SERVICES.find(
    (service) => servicePath(service) === page.path,
  )!;
  return (
    <>
      <section className="container service-hero">
        <div>
          <Link className="back-link" href="/services/">
            All treatments
          </Link>
          <h1>{service.name}</h1>
          <p className="lead">{service.summary}</p>
          <p>{service.detail}</p>
          <dl className="service-facts">
            <div>
              <dt>Treatment price</dt>
              <dd>{service.price}</dd>
            </div>
            <div>
              <dt>Appointment length</dt>
              <dd>{service.duration}</dd>
            </div>
          </dl>
          <a className="button" href={BOOK}>
            Book my appointment
          </a>
          <p className="small muted">
            Confirm the current price and booking details in GlossGenius.
          </p>
        </div>
        <figure>
          {service.slug === "henna-tinting" ? (
            <div className="service-feature-graphic">
              <Icon name="treatments" size={40} />
              <span>Henna brow tint.</span>
              <p>Color for your natural shape.</p>
            </div>
          ) : (
            <Photo
              name={service.image as keyof typeof photos}
              alt={`${service.name}: client photograph from the studio portfolio`}
              priority
            />
          )}
          <figcaption>
            Studio portfolio. Discuss your own starting point with GG.
          </figcaption>
        </figure>
      </section>
      <Process />
      <Questions />
      <Booking />
    </>
  );
}
function Policy() {
 return <article className="container article"><section><h2>Give 48 hours’ notice</h2><p>Cancel or move your appointment at least 48 hours ahead. Use your GlossGenius confirmation or call the studio.</p></section><section><h2>A clear cancellation policy</h2><p>The current GlossGenius policy lists a 30% cancellation fee for no-shows and cancellations within 48 hours of the scheduled appointment.</p></section><section><h2>Review your appointment details</h2><p>Deposits differ by treatment. Check the current menu and your booking confirmation for the amount and terms. If you are running late or have a preparation question, contact GG before your appointment.</p></section><p>Policy checked November 2, 2026. <a href={BOOK}>Review booking details</a> or <a href={PHONE_T}>call {PHONE}</a>.</p></article>;
}
function Guide({ page }: { page: Page }) {
  return (
    <article className="container article">
      {page.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
      <section>
        <h2>Questions to bring</h2>
        <ul>
          {page.questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>
      <aside className="reading-links">
        <h2>Keep exploring</h2>
        <Link href="/services/">Compare treatments and prices</Link>
        <Link href="/portfolio/">Look through client photographs</Link>
        <Link href="/contact/">Ask GG before you book</Link>
      </aside>
    </article>
  );
}
export function InnerPage({ page }: { page: Page }) {
  if (page.type === "service")
    return (
      <main id="main">
        <ServicePage page={page} />
      </main>
    );
  return (
    <main id="main">
      <Head page={page} />
      {page.type === "about" && (
        <>
          <Artist full />
          <Credentials />
          <StudioFilms />
          <Process />
          <Trust />
        </>
      )}
      {page.type === "contact" && (
        <>
          <Location />
          <section className="section container contact-form-layout">
            <div>
              <h2>Ask GG</h2>
              <p className="lead">
                Not sure what to book?
                <br />
                Start with a question.
              </p>
              <p>
                This form prepares an email in your email app. Send it there to
                reach the studio.
              </p>
            </div>
            <ConsultForm />
          </section>
        </>
      )}
      {(page.type === "portfolio" || page.type === "photo-gallery") && (
        <>
          <StudioFilms />
          <Gallery />
          <section className="container gallery-note">
            <p>
              Original client photographs from the studio portfolio. Individual
              results differ; discuss your goals with GG.
            </p>
          </section>
        </>
      )}
      {page.type === "services" && (
        <>
          <section className="container section service-index">
            <ServiceList />
            <p className="small muted">
              Confirm treatment prices and appointment lengths before reserving.
            </p>
          </section>
          <CurrentMenu/><Process />
          <Questions />
        </>
      )}
      {page.type === "blog-index" && (
        <section className="container guide-index">
          <ul>
            {POSTS.map((post) => (
              <li key={post.path}>
                <Link href={post.path}>
                  <h2>{post.title}</h2>
                  <p>{post.lead}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {page.type === "areas" && (
        <section className="container section area-index">
          <h2>Plan your visit</h2>
          <p className="lead">
            All appointments take place at the Milford studio.
          </p>
          <ul>
            {DATA.filter((p) => p.type === "area").map((p) => (
              <li key={p.path}>
                <Link href={p.path}>
                  {p.title.replace("Coming from ", "").replace("?", "")}
                </Link>
              </li>
            ))}
          </ul>
          <a className="text-link" href={MAPS}>
            Directions to Boston Post Road
          </a>
        </section>
      )}
      {page.type === "area" && (
        <>
          <section className="container section area-intro">
            <h2>One studio in Milford</h2>
            <p className="lead">
              Your appointment is at 972 Boston Post Rd, Milford, CT 06461.
            </p>
            <p>
              Explore the service menu and original client photographs before
              visiting. If you are unsure which appointment to reserve, call GG
              to discuss your starting point.
            </p>
            <div className="inline-links">
              <Link href="/services/">Compare treatments</Link>
              <a href={MAPS}>Plan your route</a>
            </div>
          </section>
          <Location />
          <Questions />
        </>
      )}
      {page.path === "/cancellation/" && <Policy />}
      {(page.type === "post" ||
        (page.type === "page" && page.path !== "/cancellation/")) && (
        <Guide page={page} />
      )}
      <Booking />
    </main>
  );
}
