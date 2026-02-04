import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/content/site";

export const siteConfig = {
  name: COMPANY_INFO.name,
  description: "Premier beauty studio in Milford, CT specializing in natural eyebrow microblading, ombre powder brows, and threading.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://eyebrowsbygg.com",
  ogImage: "https://eyebrowsbygg.com/assets/images/hero-bg.jpg",
  links: {
    instagram: "https://www.instagram.com/eyebrows_by_gg/",
    booking: COMPANY_INFO.bookingUrl,
  }
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Eyebrow Microblading Milford CT | Eyebrows By GG",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Eyebrow microblading Milford CT", "Eyebrow threading Milford CT", "PMU artist Milford CT", "Eyebrows By GG", "Beauty studio Milford CT"],
  authors: [{ name: "Eyebrows by GG" }],
  creator: "Eyebrows by GG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
