import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, sharedMetadata } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/content/site";
import { AnalyticsScript } from "@/components/analytics/AnalyticsScript";
import { ScrollTracker } from "@/components/analytics/ScrollTracker";
import { AmbientBackground } from "@/components/layout/ambient-background";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";

// Editorial Headline Font (Manrope) - Modern, clean, high-end
const fontDisplay = localFont({
  src: "../public/fonts/Manrope-Variable.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "200 800", // Variable weight range
});

// Highly Readable Body Font (Inter)
const fontBody = localFont({
  src: "../public/fonts/Inter-Variable.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address,
      addressLocality: COMPANY_INFO.city,
      addressRegion: COMPANY_INFO.state,
      postalCode: COMPANY_INFO.zip,
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2263,
      longitude: -73.0679
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00"
      }
    ],
    sameAs: [siteConfig.links.instagram, siteConfig.links.booking]
  };

  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-body antialiased flex flex-col selection:bg-primary/20 selection:text-primary",
        fontDisplay.variable,
        fontBody.variable
      )}>
        <AmbientBackground />
        <AnalyticsScript />
        <ScrollTracker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
