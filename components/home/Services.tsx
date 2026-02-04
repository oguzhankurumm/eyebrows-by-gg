"use client"

import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { services as allServices } from "@/lib/services";

const FEATURED_SLUGS = ["powder-brows", "nanoblading", "yearly-eyebrow-touch-up"];
const services = FEATURED_SLUGS.map(slug => allServices.find(s => s.slug === slug)).filter((s): s is NonNullable<typeof s> => !!s);

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: index * 0.1
      }
    })
  };

  return (
    <Section variant="glass" className="relative z-10" spacing="default">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="text-center mb-20 space-y-6">
        <Chip variant="primary" className="uppercase tracking-widest text-xs">Our Signature Services</Chip>
        <h2 className="h2 max-w-2xl mx-auto">
          Refined Artistry for <span className="text-primary font-serif italic">Lasting Beauty</span>
        </h2>
        <p className="lead max-w-2xl mx-auto text-balance">
          Tailored permanent makeup treatments designed to enhance your natural features without looking &quot;done&quot;.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="h-full"
          >
            <GlassCard
              variant="default"
              className="group flex flex-col h-full overflow-hidden p-0 border-white/60"
              hoverEffect={true}
            >
            <div className="relative h-[280px] w-full overflow-hidden">
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {service.tags.map(tag => (
                  <div key={tag} className="glass rounded-full px-3 py-1 text-xs font-bold backdrop-blur-md">
                    {tag}
                  </div>
                ))}
              </div>

              <Image
                src={service.image || "/images/stock/services/services-hero.jpg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
            </div>

            <div className="flex flex-col flex-1 p-8 text-center -mt-12 relative z-10">
              <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 shadow-sm border border-white/50 flex-1 flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-display font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="w-full space-y-3 pt-4 border-t border-border/50">
                  <Link href={`/services/${service.slug}`} className="block w-full">
                    <div className="flex items-center justify-between group/link w-full p-2 hover:bg-secondary/50 rounded-full transition-colors cursor-pointer">
                      <span className="text-sm font-bold pl-2">{service.price}</span>
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                  <ExternalBookingLink
                    label="Book Now"
                    variant="secondary"
                    className="w-full rounded-full"
                    size="sm"
                  />
                </div>
              </div>
            </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/services">
          <button className="text-primary hover:text-primary/80 font-medium text-lg inline-flex items-center gap-2 border-b border-primary/20 hover:border-primary pb-1 transition-all">
            View All Treatments <ArrowRight size={18} />
          </button>
        </Link>
      </div>

    </Section>
  );
}
