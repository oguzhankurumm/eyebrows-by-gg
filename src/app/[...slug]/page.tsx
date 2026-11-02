import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DATA, PAGES } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { InnerPage } from "@/components/pages/Hand";
type Params = { slug: string[] };
const toPath = (slug: string[]) => `/${slug.join("/")}/`;
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return DATA.filter((page) => page.path !== "/").map((page) => ({
    slug: page.path.split("/").filter(Boolean),
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const page = PAGES[toPath((await params).slug)];
  return page ? pageMetadata(page) : {};
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const page = PAGES[toPath((await params).slug)];
  if (!page) notFound();
  return <InnerPage page={page} />;
}
