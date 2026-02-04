import { MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/content";

export function Location() {
  return (
    <Section className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Info Panel */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Visit Us</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Experience our private studio in {COMPANY_INFO.city}, {COMPANY_INFO.state}. Designed for comfort, precision, and relaxation.
              </p>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6 flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.address}<br />
                    {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}
                  </p>
                  <Button variant="link" className="px-0 mt-2 h-auto font-medium text-primary" asChild>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`} target="_blank" rel="noopener noreferrer">
                      Get Directions &rarr;
                    </a>
                  </Button>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">Studio Hours</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex justify-between gap-8">
                      <span>{COMPANY_INFO.hours.days}</span>
                      <span className="font-medium text-foreground">{COMPANY_INFO.hours.time}</span>
                    </li>
                    <li className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="font-medium text-foreground">{COMPANY_INFO.hours.sunday}</span>
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Map Container */}
          <div className="order-1 lg:order-2 h-full min-h-[450px]">
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 ring-1 ring-white/20">
              {/* Soft bloom shadow for premium feel */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay" />
              
              <iframe
                src="https://maps.google.com/maps?q=41.232029,-73.047825&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                title="Eyebrows by GG Location - 972 Boston Post Rd"
              ></iframe>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-white/50 z-10">
                <span className="font-medium text-sm text-foreground">972 Boston Post Rd, Milford, CT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
