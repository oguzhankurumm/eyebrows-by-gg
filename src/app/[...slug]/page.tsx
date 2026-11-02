import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DATA, PAGES, bodySegments } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { Faq } from "@/components/site/Faq";
import { About, BlogIndex, Contact, Portfolio, ServicesIndex } from "@/components/pages/Hand";

type Params = { slug: string[] };
const toPath = (slug: string[]) => `/${slug.join("/")}/`;

export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return DATA.filter((p) => p.path !== "/").map((p) => ({ slug: p.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = PAGES[toPath((await params).slug)];
  return p ? pageMetadata(p) : {};
}

const HAND: Record<string, () => React.JSX.Element> = {
  "/about/": About, "/contact/": Contact, "/portfolio/": Portfolio,
  "/services/": ServicesIndex, "/blog/": BlogIndex,
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const path = toPath((await params).slug);
  const p = PAGES[path];
  if (!p) notFound();
  const Hand = HAND[path];
  if (Hand) return (<><JsonLd data={p.jsonld} /><Hand /></>);
  const { parts, faq } = bodySegments(p);
  return (
    <>
      <JsonLd data={p.jsonld} />
      <main id="main" className={`page page--${p.type}`}>
        {parts.map((html, i) => (
          <div key={i}>
            <div className="entry-content" dangerouslySetInnerHTML={{ __html: html }} />
            {i < parts.length - 1 && <div className="wrap"><Faq items={faq} /></div>}
          </div>
        ))}
      </main>
    </>
  );
}
