"use client";
import { useState } from "react";

export interface Pair { file: string; layout: "side" | "stack"; label: string }

export function BeforeAfter({ pairs }: { pairs: Pair[] }) {
  const [i, setI] = useState(0);
  const [v, setV] = useState(50);
  const cur = pairs[i];
  const src = `/assets/img/${cur.file}.webp`;
  const halfStyle = (after: boolean): React.CSSProperties =>
    cur.layout === "side"
      ? { backgroundImage: `url(${src})`, backgroundSize: "200% auto", backgroundPosition: `${after ? 100 : 0}% 38%` }
      : { backgroundImage: `url(${src})`, backgroundSize: "100% 200%", backgroundPosition: `0% ${after ? 100 : 0}%` };
  return (
    <div className="ba">
      <div className={`ba-stage ba-${cur.layout}`} style={{ ["--v" as string]: `${v}%` }}>
        <div className="ba-half" style={halfStyle(true)} role="img" aria-label={`After: ${cur.label}`} />
        <div className="ba-half ba-before" style={halfStyle(false)} role="img" aria-label={`Before: ${cur.label}`} />
        <span className="ba-tag ba-tag-b" aria-hidden="true">Before</span>
        <span className="ba-tag ba-tag-a" aria-hidden="true">After</span>
        <span className="ba-line" aria-hidden="true" />
        <input
          className="ba-range" type="range" min={0} max={100} step={0.5} value={v}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label="Drag to compare before and after"
        />
      </div>
      <ul className="ba-thumbs" aria-label="Choose a client result">
        {pairs.map((p, k) => (
          <li key={p.file}>
            <button type="button" aria-pressed={k === i} aria-label={`Show result ${k + 1}`} onClick={() => { setI(k); setV(50); }}>
              <span style={{ backgroundImage: `url(/assets/img/${p.file}.webp)` }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
