import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Section } from "@/components/ui/section";

interface CTASectionProps {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export function CTASection({
  title,
  description,
  cta,
  backgroundImage,
  className,
}: CTASectionProps) {
  return (
    <Section className={cn("relative overflow-hidden bg-primary/90 text-primary-foreground", className)} spacing="default">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-10 mix-blend-multiply -z-10"
        />
      )}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-balance">
          {title}
        </h2>
        <p className="max-w-2xl text-lg md:text-xl opacity-90 text-balance">
          {description}
        </p>
        <div className="pt-6">
          <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
