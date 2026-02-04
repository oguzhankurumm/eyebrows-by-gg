import { GlassCard } from "@/components/ui/glass-card"
import { Section } from "@/components/ui/section"
import { ExternalBookingLink } from "@/components/ui/external-booking-link"
import { Chip } from "@/components/ui/chip"
import { services as SERVICES } from "@/lib/services"
import { siteConfig } from "@/lib/seo"
import { getServicesItemListJsonLd } from "@/lib/structuredData"

export const metadata = {
  title: "Permanent Makeup Services & Pricing | Eyebrows By GG",
  description: "Explore our full menu of beauty services: Microblading, Nano Brows, Lip Blush, and more. View pricing and book your appointment in Milford, CT.",
}

export default function ServicesPage() {
  // Categories are dynamically derived from the SERVICES array below
  const servicesJsonLd = getServicesItemListJsonLd(
    SERVICES.map((s) => ({
      name: s.title,
      description: s.description,
      price: s.price,
      category: s.category,
      url: `${siteConfig.url}/services`,
    })),
    { baseUrl: siteConfig.url }
  );

  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Chip variant="default" className="uppercase tracking-widest text-xs">Menu</Chip>
          <h1 className="font-display text-4xl md:text-5xl font-light">Our Services</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Premium permanent makeup and beauty treatments tailored to your unique features.
          </p>
        </div>

        <div className="space-y-20">
            {/* Custom order or just map categories? Let's iterate unique categories from data if strict order isn't needed, but I defined a loose order above */}
            {Array.from(new Set(SERVICES.map(s => s.category))).map((category) => (
              <div key={category} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-3xl font-light md:text-4xl text-foreground/90">
                    {category}
                  </h2>
                  <div className="h-px bg-border/50 flex-1" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {SERVICES.filter(s => s.category === category).map((service) => (
                    <GlassCard key={service.slug} className="p-6 md:p-8 flex flex-col justify-between gap-4 group hover:bg-white/5 transition-all duration-300 border-white/10 hover:border-white/20">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors text-foreground/90">
                            {service.title}
                          </h3>
                          <span className="font-mono text-lg font-medium text-primary whitespace-nowrap bg-primary/10 px-3 py-1 rounded-full text-sm">
                            {service.price}
                          </span>
                        </div>
                        {service.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            {service.description}
                          </p>
                        )}
                      </div>
                      <div className="pt-6 mt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">
                          Duration Varies
                        </span>
                        <ExternalBookingLink
                          label="Book Now"
                          className="h-8 text-xs px-4"
                          size="sm"
                          variant="outline"
                        />
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="font-display text-2xl">Ready to transform your look?</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-4">
                Book your appointment easily online via GlossGenius.
              </p>
              <ExternalBookingLink size="lg" className="px-12" />
            </div>
          </div>
      </Section>
    </div>
  )
}
