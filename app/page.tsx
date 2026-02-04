import dynamic from "next/dynamic";
import { Award, ShieldCheck, Star } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TrustBar } from "@/components/blocks/trust-bar";
import { Section } from "@/components/ui/section";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CtaBand } from "@/components/home/CtaBand";

// Dynamic imports for lower fold
const Location = dynamic(() => import("@/components/home/Location").then((mod) => mod.Location));

const trustItems = [
  {
    icon: Award,
    title: "Master Certified",
    description: "Trained by global industry leaders."
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Strict hospital-grade sanitation."
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Dedicated to your comfort and safety."
  }
];

export default function Home() {
  return (
    <>
      <Hero
        title={<>Elevating Beauty, <span className="text-primary font-serif italic">Effortlessly.</span></>}
        subtitle="Experience the art of hyper-realistic permanent makeup. Tailored to your unique bone structure for a look that is undeniably you."
        imageSrc="/images/stock/home/home-hero.png"
        primaryCta={{ label: "Book Appointment", href: "https://eyebrowsbygg.glossgenius.com/services" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
        trustText="Milford's Premier Studio"
      />

      <Section className="-mt-12 relative z-10" spacing="none" container>
         <TrustBar items={trustItems} className="rounded-[2.5rem] bg-white/80 backdrop-blur-xl shadow-lg border border-white/40" />
      </Section>

      <WhoItsFor />

      <Services />
      
      <HowItWorks />

      <PortfolioPreview />

      <CtaBand />

      <Location />
    </>
  );
}
