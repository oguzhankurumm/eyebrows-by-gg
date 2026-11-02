"use client";
import Link from "next/link";
import { useId, useState } from "react";
export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const id = useId();
  return (
    <div className="comparison">
      <div className="comparison-stage" id={id}>
        <div
          className="comparison-image compare-before"
          role="img"
          aria-label="Client brow before treatment"
        />
        <div
          className="comparison-image compare-after"
          role="img"
          aria-label="Client brow after treatment"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        />
        <span className="compare-label label-before">Before</span>
        <span className="compare-label label-after">After</span>
        <div
          className="compare-handle"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m8 5-5 5 5 5m8-10 5 5-5 5" />
            </svg>
          </span>
        </div>
        <input
          className="comparison-range"
          type="range"
          min={0}
          max={100}
          value={position}
          aria-label="Reveal before and after"
          aria-valuetext={`${position}% before, ${100 - position}% after`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      <div
        className="comparison-controls"
        role="group"
        aria-label="Compare client brow photographs"
      >
        <button
          type="button"
          aria-pressed={position === 100}
          aria-controls={id}
          onClick={() => setPosition(100)}
        >
          Before
        </button>
        <button
          type="button"
          aria-pressed={position === 0}
          aria-controls={id}
          onClick={() => setPosition(0)}
        >
          After
        </button>
        <p>Drag to compare</p>
      </div>
      <noscript>
        <p>
          See both photographs in the{" "}
          <Link href="/portfolio/">results gallery</Link>.
        </p>
      </noscript>
    </div>
  );
}
