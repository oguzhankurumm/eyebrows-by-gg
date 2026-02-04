import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureListProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

export function FeatureList({ title, subtitle, features, className }: FeatureListProps) {
  return (
    <section className={cn("py-24 bg-background", className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="text-center mb-16 space-y-4">
            {title && <h2 className="font-serif text-4xl md:text-5xl font-bold">{title}</h2>}
            {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
