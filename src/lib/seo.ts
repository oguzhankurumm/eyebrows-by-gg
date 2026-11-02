import type { Metadata } from "next";
import { ORIGIN } from "./site";
import { ogImage, type Page } from "./content";

export function pageMetadata(p: Page): Metadata {
  const img = ogImage(p);
  return {
    title: { absolute: p.title },
    description: p.desc,
    alternates: { canonical: ORIGIN + p.path },
    openGraph: {
      title: p.title, description: p.desc, url: ORIGIN + p.path, type: "website",
      ...(img ? { images: [img] } : {}),
    },
  };
}
