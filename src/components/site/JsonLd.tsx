export function JsonLd({ data }: { data: unknown[] }) {
  return (
    <>
      {data.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(b).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
