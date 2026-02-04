import { GlassCard } from "@/components/ui/glass-card"
import { Section } from "@/components/ui/section"
import { ExternalBookingLink } from "@/components/ui/external-booking-link"
import { Chip } from "@/components/ui/chip"
import { ABOUT_TEXT } from "@/lib/content"
import Image from "next/image"
import { Heart, Sparkles, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "About GG - Eyebrows by GG",
  description: "Meet GG, a Certified PMU Artist with over 20 years of experience in threading and permanent makeup.",
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <Section>
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
              <p>
                Eyebrows By GG is your premier destination for exquisite beauty services in the heart of Milford, CT. 
              </p>
              <p>
                Certified PMU and Makeup Artist GG brings over 20 years of experience in threading and expertise in powder eyebrows, nanoblading, and lip blush. She combines technical precision with an artist&apos;s eye to create looks that are as unique as you are.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium">
                Certified PMU Artist
              </div>
              <div className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium">
                Licensed & Insured
              </div>
              <div className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium">
                20+ Years Experience
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 blur-xl opacity-60" />
              <GlassCard className="h-full w-full overflow-hidden p-2 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border-white/10">
                <div className="h-full w-full relative rounded-[2rem] overflow-hidden bg-muted/20">
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
      </Section>

      <Section variant="glass" className="my-12">
        <div className="text-center mb-16 space-y-4">
            <h2 className="h2">Our Philosophy</h2>
            <p className="lead max-w-2xl mx-auto">
                Beauty is an art form, and your face is our canvas.
            </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4 p-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                    <Heart className="size-8" />
                </div>
                <h3 className="h3 text-xl">Client-Centered Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                    We listen first. Every appointment begins with a thorough consultation to understand your goals, lifestyle, and preferences.
                </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                    <Sparkles className="size-8" />
                </div>
                <h3 className="h3 text-xl">Natural Enhancement</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Our goal is never to change who you are, but to highlight your best features with subtle, realistic techniques.
                </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                    <ShieldCheck className="size-8" />
                </div>
                <h3 className="h3 text-xl">Safety & Hygiene</h3>
                <p className="text-muted-foreground leading-relaxed">
                    We adhere to strict hospital-grade sanitation standards. All needles are single-use, and our studio is fully licensed and insured.
                </p>
            </div>
        </div>
      </Section>

      <Section width="narrow" className="text-center space-y-8">
        <h2 className="h2">Your Experience</h2>
        <p className="lead">
            From the moment you walk in, you are in expert hands. We guide you through every step—from mapping your perfect shape to the final reveal.
        </p>
        <div className="pt-4">
            <ExternalBookingLink size="lg" label="Start Your Journey" />
        </div>
      </Section>
    </div>
  )
}
