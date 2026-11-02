"use client";
import { useState } from "react";
import Link from "next/link";
import { SERVICES, servicePath } from "@/lib/services";
import photos from "@/data/photos.json";
import { Photo } from "./Photo";
import { Icon } from "./Icon";
const groups = ["Explore all", "Brows", "Lips", "Shape & tint"];
export function ServiceShowcase() {
  const [group, setGroup] = useState("Explore all");
  const services = SERVICES.filter((service) =>
    [
      "powder-brows",
      "nanoblading",
      "lip-blush",
      "eyebrow-threading",
      "henna-tinting",
      "touch-up",
    ].includes(service.slug),
  ).filter(
    (service) =>
      group === "Explore all" ||
      (group === "Lips"
        ? service.slug === "lip-blush"
        : group === "Shape & tint"
          ? ["eyebrow-threading", "henna-tinting"].includes(service.slug)
          : ["powder-brows", "nanoblading", "touch-up"].includes(service.slug)),
  );
  return (
    <section className="section container treatments" id="services">
      <div className="section-heading">
        <div>
          <h2>A finish for every face.</h2>
          <p className="lead">
            From a tidy-up to a whole new brow routine.
            <br />
            Find your place to start.
          </p>
        </div>
        <Link className="secondary-button" href="/services/">
          All treatments
          <Icon name="diagonal" size={18} />
        </Link>
      </div>
      <div
        className="treatment-filters"
        role="group"
        aria-label="Filter treatments"
      >
        {groups.map((label) => (
          <button
            type="button"
            key={label}
            aria-pressed={group === label}
            onClick={() => setGroup(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="service-cards" aria-live="polite">
        {services.map((service) => (
          <Link
            className="service-card"
            key={service.slug}
            href={servicePath(service)}
          >
            <div className="service-card-photo">
              {service.slug === "henna-tinting" ? (
                <div className="service-graphic">
                  <Icon name="treatments" size={28} />
                  <span>
                    Henna
                    <br />
                    brow tint.
                  </span>
                  <span className="small">Color for your natural shape.</span>
                </div>
              ) : (
                <Photo
                  name={service.image as keyof typeof photos}
                  alt={`${service.name} studio portfolio`}
                  sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 30vw"
                />
              )}
              <span className="service-card-arrow">
                <Icon name="diagonal" />
              </span>
            </div>
            <div className="service-card-copy">
              <div>
                <h3>{service.name}</h3>
                <span className="price">{service.price}</span>
              </div>
              <p>{service.summary}</p>
              <span className="card-action">
                Explore treatment
                <Icon name="arrow" size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="treatment-help">
        <Icon name="message" />
        <p>Not sure where to start? Tell GG what you have in mind.</p>
        <Link href="/contact/">
          Let’s talk
          <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  );
}
