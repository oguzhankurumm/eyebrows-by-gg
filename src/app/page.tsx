import { Home } from "@/components/pages/Home";
import { PAGES } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(PAGES["/"]);
export default function Page() {
  return <Home />;
}
