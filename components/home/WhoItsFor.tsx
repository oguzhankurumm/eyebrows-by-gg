import { Section } from "@/components/ui/section";
import { Clock, Eye, Sparkles } from "lucide-react";

export function WhoItsFor() {
  return (
    <Section className="bg-muted/30">
      <div className="text-center mb-16 space-y-4">
        <h2 className="h2">Is This For You?</h2>
        <p className="lead max-w-2xl mx-auto">
          Permanent makeup isn&apos;t just about saving time—it&apos;s about confidence tailored to your lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-3xl bg-background border border-border/50 shadow-sm">
          <div className="p-4 rounded-full bg-primary/10 text-primary">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="h3 text-xl">The Busy Professional</h3>
          <p className="text-muted-foreground leading-relaxed">
            Wake up ready. Save 20 minutes every morning and maintain a polished look from gym to office to dinner without a touch-up.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-3xl bg-background border border-border/50 shadow-sm">
          <div className="p-4 rounded-full bg-primary/10 text-primary">
            <Eye className="w-8 h-8" />
          </div>
          <h3 className="h3 text-xl">The Detail Oriented</h3>
          <p className="text-muted-foreground leading-relaxed">
            For those who obsess over symmetry. We map your bone structure with mathematical precision to create your perfect shape.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-3xl bg-background border border-border/50 shadow-sm">
          <div className="p-4 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="h3 text-xl">The Naturalist</h3>
          <p className="text-muted-foreground leading-relaxed">
            You want enhancement, not a &quot;tattooed&quot; look. Our specialized techniques create soft, airy results that look like your own hair.
          </p>
        </div>
      </div>
    </Section>
  );
}
