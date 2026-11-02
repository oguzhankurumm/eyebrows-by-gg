"use client";
import Link from "next/link";
import { useState } from "react";
import { BOOK } from "@/lib/site";
import { Photo } from "./Photo";
import { Icon } from "./Icon";
const finishes = [
  {
    label: "Brow definition",
    name: "Nano brows",
    description: "Fine brow detail, shaped around you.",
    price: "$550",
    image: "ig-DdWwOkBheBV" as const,
    path: "/services/nanoblading/",
  },
  {
    label: "Lip color",
    name: "Lip blush",
    description: "A wash of color for your natural lips.",
    price: "$550",
    image: "2023_07_portfolio-12" as const,
    path: "/services/lip-blush/",
  },
  {
    label: "Brow shaping",
    name: "Brow threading",
    description: "A precise edit of your natural shape.",
    price: "$20",
    image: "ig-Dct30IUvXoc" as const,
    path: "/services/eyebrow-threading/",
  },
];
export function Hero() {
  const [selected, setSelected] = useState(0);
  const finish = finishes[selected];
  return (
    <section className="hero container">
      <div className="hero-copy">
        <h1>
          Let’s touch
          <br />
          your beauty.
        </h1>
        <p className="lead">
          Brow shaping, permanent makeup and lip blush in Milford. With GG,
          every detail starts with you.
        </p>
        <div className="hero-actions">
          <a className="button" href={BOOK}>
            Book my appointment
            <Icon name="arrow" />
          </a>
          <Link className="secondary-button" href="/portfolio/">
            See the results
            <Icon name="diagonal" size={18} />
          </Link>
        </div>
        <div className="finish-picker">
          <p>What feels like you?</p>
          <div
            className="finish-options"
            role="group"
            aria-label="Explore treatment finishes"
          >
            {finishes.map((item, index) => (
              <button
                key={item.label}
                type="button"
                aria-pressed={selected === index}
                aria-controls="finish-preview"
                onClick={() => setSelected(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="hero-studio">
          <span className="studio-symbol">
            <Icon name="pin" />
          </span>
          <div>
            <strong>A little studio. A personal touch.</strong>
            <span>972 Boston Post Rd, Milford, CT</span>
          </div>
          <Link href="/contact/" aria-label="Visit the Milford studio">
            <Icon name="diagonal" />
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo">
          <Photo
            name="gg-instagram"
            alt="Gonul Gonenc, the artist behind Eyebrows by GG"
            priority
            sizes="(max-width: 640px) 100vw, 48vw"
          />
          <div className="artist-tag">
            <span>GG</span>
            <div>
              <strong>Gonul Gonenc</strong>
              <span>Licensed PMU artist, CT</span>
            </div>
            <Icon name="treatments" />
          </div>
        </div>
        <div className="finish-preview" id="finish-preview" aria-live="polite">
          <div className="finish-image" key={finish.image}>
            <Photo
              name={finish.image}
              alt={`${finish.name}: original studio portfolio photograph`}
              sizes="120px"
            />
          </div>
          <div>
            <span className="small muted">Explore your next look</span>
            <strong>{finish.name}</strong>
            <span className="small">{finish.description}</span>
            <Link href={finish.path}>
              View treatment <span>{finish.price}</span>
              <Icon name="diagonal" size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-photo-label">
          <span>Brow artistry, by GG.</span>
          <span>Milford, Connecticut</span>
        </div>
      </div>
    </section>
  );
}
