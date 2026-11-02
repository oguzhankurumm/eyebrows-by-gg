import Link from "next/link";
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
            Book appointment
          </a>
          <p className="small muted">
            Confirm the current price and booking details in GlossGenius.
          </p>
        </div>
        <figure>
          <Photo
            name={service.image as keyof typeof photos}
            alt={`${service.name}: client photograph from the studio portfolio`}
            priority
          />
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
  return (
    <article className="container article">
      <section>
        <h2>Give 24 hours’ notice</h2>
        <p>
          The studio policy asks for at least 24 hours to cancel or
          move an appointment. Use the link in your GlossGenius confirmation,
          call the studio or send a WhatsApp message.
        </p>
      </section>
      <section>
        <h2>Check your deposit terms</h2>
        <p>
          With less than 24 hours’ notice, part of a deposit may be forfeited. A
          missed appointment may mean the full deposit is forfeited and
          prepayment is required next time. Your booking confirmation lists the
          terms for your treatment.
        </p>
      </section>
      <section>
        <h2>If you are running late</h2>
        <p>
          Call before arriving. The supplied policy says arrivals more than 15
          minutes late may need to be rescheduled.
        </p>
      </section>
      <section>
        <h2>If plans change</h2>
        <p>
          If you feel unwell, cannot follow the preparation instructions or need
          to discuss suitability, contact GG before the appointment. The
          supplied policy allows rescheduling without penalty when a preparation
          concern is raised before the procedure begins. Severe weather may also
          require a change; the studio will contact you to arrange another time.
        </p>
      </section>
      <p>
        Confirm the current policy with your booking.{" "}
        <a href={PHONE_T}>Call {PHONE}</a>.
      </p>
    </article>
  );
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
        <Link href="/services/">Compare treatments and supplied prices</Link>
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
          <Gallery />
          <section className="container gallery-note">
            <p>
              Original client photographs supplied with this project. Individual
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
              Some supplied prices conflict and some durations are missing.
              Confirm these details before booking.
            </p>
          </section>
          <Process />
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
