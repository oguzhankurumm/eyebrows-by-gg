import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

export function TrustSection() {
  return (
    <Section width="narrow" className="bg-muted/30">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2 text-primary">
            <ShieldCheck className="size-6" />
        </div>
        
        <h2 className="font-serif text-2xl md:text-3xl font-medium">
          Your Beauty, Your Way
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
            <p>
            Results vary by skin type, lifestyle, and aftercare, but our commitment to quality never wavers. Every set of brows is customized to complement your unique facial structure and preferences.
            </p>
            <p className="text-sm">
                We take the time to map, measure, and design the perfect shape for you before any procedure begins.
            </p>
        </div>

        <div className="pt-4">
             <ExternalBookingLink 
                href="https://eyebrowsbygg.glossgenius.com/services" 
                mode="interstitial"
                placement="trust_section"
                size="lg"
                label="Book Your Transformation"
             />
        </div>
      </div>
    </Section>
  );
}
