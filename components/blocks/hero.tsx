import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  trustText?: React.ReactNode;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Hero background",
  primaryCta,
  secondaryCta,
  trustText,
  className,
}: HeroProps) {
  return (
    <Section variant="default" className={cn("overflow-hidden", className)}>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          {trustText && (
            <div className="inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm mb-2">
              {trustText}
            </div>
          )}

          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-foreground leading-[0.95] text-balance">
            {title}
          </h1>

          <p className="text-xl leading-relaxed text-muted-foreground font-light max-w-lg text-pretty">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {primaryCta && (
              <Button asChild size="lg" className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Link href={primaryCta.href} className="flex items-center gap-2">
                  {primaryCta.label}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base rounded-full border-border bg-transparent hover:bg-muted/50 backdrop-blur-sm">
                <Link href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>

          <div className="flex items-center gap-8 mt-4 pt-8 border-t border-border w-full max-w-md">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-serif font-light">2k+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Happy Clients</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-serif font-light">5.0</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Reviews</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 relative z-10">
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-border/50 group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px] hidden md:block animate-in fade-in zoom-in duration-1000 delay-500 fill-mode-both">
              <p className="font-serif text-lg leading-none mb-1">Natural Look</p>
              <p className="text-xs text-muted-foreground">Specializing in hyper-realistic results.</p>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/80 rounded-full blur-3xl -z-10 mix-blend-multiply" />
        </div>
      </div>
    </Section>
  );
}
