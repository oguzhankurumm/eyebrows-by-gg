"use client";
import Link from "next/link";
import { useId, useState } from "react";
export function BeforeAfter() {
  const [after, setAfter] = useState(false);
  const id = useId();
  return <div className="comparison"><div className="comparison-image" role="img" aria-label={after ? "Client brow after treatment" : "Client brow before treatment"} style={{ backgroundPosition: after ? "center bottom" : "center top" }} />
    <div className="comparison-controls" role="group" aria-label="Compare client brow photographs"><button type="button" aria-pressed={!after} aria-controls={id} onClick={() => setAfter(false)}>Before</button><button type="button" aria-pressed={after} aria-controls={id} onClick={() => setAfter(true)}>After</button><p id={id} aria-live="polite">{after ? "After treatment" : "Before treatment"}</p></div>
    <noscript><p>See both photographs in the <Link href="/portfolio/">results gallery</Link>.</p></noscript></div>;
}
