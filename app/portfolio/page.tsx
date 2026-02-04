import { Metadata } from "next";
import { GalleryGrid } from "@/components/portfolio/gallery-grid";
import { TrustSection } from "@/components/portfolio/trust-section";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { Section } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";

export const metadata: Metadata = {
  title: "Portfolio | Eyebrows by GG",
  description: "View our portfolio of Ombre Powder Brows, Nano Brows, and corrections. See real results and transformations.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <Section variant="default" className="pt-32 pb-12 md:pb-20">
        <div className="container text-center max-w-3xl space-y-6">
          <Chip variant="default" className="uppercase tracking-widest text-xs">Gallery</Chip>
          <h1 className="h1">Real Results</h1>
          <p className="lead">
            Browse our gallery of brow transformations. From natural enhancements to bold definitions, see how we tailor every look to you.
          </p>
        </div>
      </Section>

      <Section variant="glass" className="border-t border-white/20">
        <GalleryGrid />
      </Section>

      <Section variant="glow" spacing="default" className="text-center space-y-8">
        <h2 className="h2">Ready to Transform Your Brows?</h2>
        <p className="body max-w-2xl mx-auto">
          You’ve seen the results. Now let’s create yours. Book your session today and wake up flawless.
        </p>
        <ExternalBookingLink
          href="https://eyebrowsbygg.glossgenius.com/services"
          mode="interstitial"
          placement="portfolio_cta"
          size="lg"
          className="h-14 px-10 text-lg shadow-lg"
          label="Book Your Look"
        />
      </Section>

      {/* TrustSection might need updates if it uses old Section props, but we will leave it for now or check it */}
      <TrustSection />
    </main>
  );
}
