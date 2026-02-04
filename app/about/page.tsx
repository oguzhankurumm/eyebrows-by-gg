import { GlassCard } from "@/components/ui/glass-card"
import { Section } from "@/components/ui/section"
import { ExternalBookingLink } from "@/components/ui/external-booking-link"
import { Chip } from "@/components/ui/chip"
import { ABOUT_TEXT } from "@/lib/content"
import Image from "next/image"

export const metadata = {
  title: "About GG - Eyebrows by GG",
  description: "Meet GG, a Certified PMU Artist with over 20 years of experience in threading and permanent makeup.",
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="space-y-4">
                <Chip variant="default" className="uppercase tracking-widest text-xs">Meet The Artist</Chip>
                <h1 className="font-display text-4xl md:text-5xl font-light leading-tight">
                  {ABOUT_TEXT.headline}
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-medium opacity-90">
                  {ABOUT_TEXT.subheadline}
                </h2>
              </div>

              <div className="prose prose-invert prose-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {ABOUT_TEXT.bio}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
                  Certified PMU Artist
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
                  Licensed & Insured
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
                  High Hygiene Standards
                </div>
              </div>

              <div className="pt-8">
                <ExternalBookingLink size="lg" label="Book Appointment With GG" />
              </div>
            </div>

            {/* Image/Visual - Using a placeholder or existing image if available */}
            <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 blur-xl opacity-60" />
                <GlassCard className="h-full w-full overflow-hidden p-2 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="h-full w-full relative rounded-[2rem] overflow-hidden bg-muted/20">
                    {/* 
                           Ideally this would be a photo of GG. 
                           Using a generic stock for now as we don't have a verified photo file path yet 
                           extracted from the original site. 
                           I'll use the 'hero-portrait.jpg' as a placeholder or leave it as a generic editorial shot.
                        */}
                    <Image
                      src="/images/stock/home/hero-portrait.jpg"
                      alt="GG - Certified PMU Artist"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
