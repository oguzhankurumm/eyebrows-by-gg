export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  );
}
