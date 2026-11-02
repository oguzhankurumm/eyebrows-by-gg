import { Home } from "@/components/pages/Home";
import { JsonLd } from "@/components/site/JsonLd";
import { PAGES } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(PAGES["/"]);

export default function Page() {
  return (<><JsonLd data={PAGES["/"].jsonld} /><Home /></>);
}
