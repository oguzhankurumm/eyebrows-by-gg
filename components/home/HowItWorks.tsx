import { MousePointerClick, CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

export function HowItWorks() {
  return (
    <Section width="narrow" className="bg-background">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold">How Booking Works</h2>
          <p className="text-muted-foreground mt-2">Simple, secure, and fast.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="p-3 rounded-full bg-primary/10 mb-4">
              <MousePointerClick className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-2">1. Select Service</h3>
            <p className="text-muted-foreground">Browse our menu on GlossGenius and choose the perfect brow transformation for you.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="p-3 rounded-full bg-primary/10 mb-4">
              <CalendarCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-2">2. Secure Spot</h3>
            <p className="text-muted-foreground">Book instantly and securely. A deposit may be required to hold your appointment.</p>
          </div>
        </div>
    </Section>
  );
}
