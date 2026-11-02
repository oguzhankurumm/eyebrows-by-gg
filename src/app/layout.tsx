import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";
import { BookingDialog } from "@/components/site/BookingDialog";
import { Header } from "@/components/site/Header";
import { MobileTabs } from "@/components/site/MobileTabs";
import { Experience } from "@/components/site/Experience";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { studioSchema } from "@/lib/schema";
import { ORIGIN } from "@/lib/site";

const display = localFont({
  src: [
    { path: "../assets/fonts/Sora-600.ttf", weight: "600" },
    { path: "../assets/fonts/Sora-700.ttf", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../assets/fonts/Manrope-400.ttf", weight: "400" },
    { path: "../assets/fonts/Manrope-600.ttf", weight: "600" },
    { path: "../assets/fonts/Manrope-700.ttf", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title: "Eyebrows by GG | Brow studio in Milford, CT",
  description:
    "Brow shaping and permanent makeup with Gonul Gonenc in Milford, Connecticut. Explore services, view client results and book online.",
};
export const viewport: Viewport = {
  themeColor: "#F7F5FB",
  viewportFit: "cover",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={[studioSchema]} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileTabs />
        <Experience />
        <BookingDialog />
      </body>
    </html>
  );
}
