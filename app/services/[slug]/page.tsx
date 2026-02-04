import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { Clock, ShieldCheck, Check, CalendarHeart, Sparkles } from "lucide-react";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { getServiceJsonLd } from "@/lib/structuredData";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const ogImage = service.image ? `${siteConfig.url}${service.image}` : siteConfig.ogImage;

  return {
    title: `${service.title} Milford CT | Eyebrows By GG`,
    description: service.description,
    openGraph: {
      title: `${service.title} Milford CT | Eyebrows By GG`,
      description: service.description,
      images: [{ url: ogImage }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = getServiceJsonLd(
    {
      name: service.title,
      description: service.description,
      price: service.price,
      url: `${siteConfig.url}/services/${slug}`,
      bookingUrl: service.glossgeniusUrl,
      category: service.category,
      image: service.image,
    },
    { baseUrl: siteConfig.url }
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Header */}
      <Section variant="default" className="pb-12 pt-32 md:pt-48 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-sm px-4 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest font-medium">
            {service.category}
          </Badge>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-balance leading-[0.9]">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-medium">The Experience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Designed to enhance your unique facial architecture, our {service.title} service offers a bespoke approach to permanent makeup. We prioritize skin health, longevity, and natural-looking results above all else.
              </p>

              {service.highlights.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                      <div className="size-8 rounded-full bg-background flex items-center justify-center shadow-sm">
                        <Check className="size-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* What to Expect */}
            <div className="space-y-8 py-8 border-y border-border/50">
              <h2 className="font-serif text-3xl font-medium">What to Expect</h2>
              <div className="grid gap-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary font-serif text-xl">1</div>
                    <div className="w-px h-full bg-border mt-4" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-medium mb-2">Consultation & Mapping</h3>
                    <p className="text-muted-foreground leading-relaxed">We begin by analyzing your bone structure and skin type to map the perfect shape. No ink touches your skin until you approve the pre-draw.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary font-serif text-xl">2</div>
                    <div className="w-px h-full bg-border mt-4" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-medium mb-2">The Artistry</h3>
                    <p className="text-muted-foreground leading-relaxed">Using premium pigments and precise techniques, we build color layer by layer for a natural, airy finish that heals beautifully.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary font-serif text-xl">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Heal & Perfect</h3>
                    <p className="text-muted-foreground leading-relaxed">Follow our simple aftercare routine. A touch-up session is recommended 6-8 weeks later to perfect the density and shape.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aftercare */}
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Sparkles className="size-6 text-foreground" />
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-medium">Aftercare Essentials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your results depend heavily on how you care for them. Avoid sweating, makeup on the brows, and direct sun for 10-14 days. We provide a full aftercare kit and guide at your appointment.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="bg-white">No Water meant for 10 days</Badge>
                    <Badge variant="secondary" className="bg-white">Apply provided balm</Badge>
                    <Badge variant="secondary" className="bg-white">No picking/scratching</Badge>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <div className="bg-white rounded-3xl p-8 shadow-glass border border-white/60 space-y-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Service Details</p>
                <h3 className="font-serif text-2xl font-medium mb-2">{service.price}</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <Clock className="size-4" /> {service.duration} Session
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <CalendarHeart className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-balance text-muted-foreground">
                    Booking requires a non-refundable deposit to secure your slot.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-balance text-muted-foreground">
                    Fully licensed, insured, and health-department approved facility.
                  </div>
                </div>
              </div>

              <ExternalBookingLink
                href={service.glossgeniusUrl}
                mode="interstitial"
                placement="service_detail_sidebar"
                serviceId={slug}
                label="Book Appointment"
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 text-base shadow-lg"
              />

              <p className="text-xs text-center text-muted-foreground/60">
                Secure booking via GlossGenius
              </p>
            </div>

            <div className="bg-muted/20 rounded-2xl p-6 border border-border/50">
              <h4 className="font-medium mb-2">Ideal Candidate</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.whoItsFor}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white border px-2 py-0.5 rounded text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}
