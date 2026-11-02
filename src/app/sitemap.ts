import type { MetadataRoute } from "next";
import { DATA } from "@/lib/content";
import { ORIGIN } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return DATA.map((page) => ({ url: ORIGIN + page.path }));
}
