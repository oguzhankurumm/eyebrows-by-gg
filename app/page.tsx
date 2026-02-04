import dynamic from "next/dynamic";
import { Award, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TrustBar } from "@/components/blocks/trust-bar";
import { Section } from "@/components/ui/section";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { Chip } from "@/components/ui/chip";

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
        imageSrc="/images/stock/home/home-hero.jpg"
        primaryCta={{ label: "Book Appointment", href: "https://eyebrowsbygg.glossgenius.com/services" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
        trustText="Milford's Premier Studio"
      />

      <TrustBar items={trustItems} className="relative z-10 -mt-12 mx-4 md:mx-auto max-w-5xl rounded-[2.5rem] bg-white/80 backdrop-blur-xl shadow-lg border border-white/40" />

      <Services />

      <Section variant="glow" spacing="default">
        <div className="container text-center mb-16 space-y-4">
          <Chip variant="default">Real Results</Chip>
          <h2 className="h2">Transformations</h2>
          <p className="lead">See the difference precision makes.</p>
        </div>

        {/* Simple Portfolio Preview Grid */}
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`relative rounded-[2rem] overflow-hidden aspect-[4/5] group ${i % 2 === 0 ? 'mt-8' : ''}`}>
              <div className="absolute inset-0 bg-secondary/20 animate-pulse" /> {/* Placeholder loading */}
              <Image
                src="/images/stock/portfolio/portfolio-1.jpg" // Using the one we downloaded for now
                alt="Portfolio"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <ExternalBookingLink size="lg" className="shadow-lg shadow-primary/20" />
        </div>
      </Section>

      <Location />
    </>
  );
}
