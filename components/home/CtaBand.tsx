import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { Section } from "@/components/ui/section";

export function CtaBand() {
  return (
    <Section spacing="compact" container className="relative z-10">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/60 p-8 shadow-xl backdrop-blur-xl md:p-10">
        {/* Soft bloom glow - subtle */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:gap-12">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Ready to book?
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <ExternalBookingLink
              label="Book via GlossGenius"
              variant="default" 
              size="lg"
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
            />
            <p className="text-xs text-muted-foreground/80 font-medium">
              You’ll complete booking securely via GlossGenius.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
