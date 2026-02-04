import { ShieldCheck, Award, Star } from "lucide-react";

export function TrustSignals() {
  return (
    <section className="py-24 border-y border-border/60 bg-primary/5">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10 mb-2">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-xl">Expertly Certified</h3>
            <p className="text-muted-foreground leading-relaxed">Trained by industry leaders to ensure precision and artistry.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10 mb-2">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-xl">Clinical-Standard Safety</h3>
            <p className="text-muted-foreground leading-relaxed">Strict sanitation protocols for your safety and peace of mind.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10 mb-2">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-xl">Bespoke Service</h3>
            <p className="text-muted-foreground leading-relaxed">Dedicated to providing a comfortable and high-end service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
