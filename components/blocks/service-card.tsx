import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  price?: string;
  href: string; // Detail page
  bookingHref?: string; // External booking
  className?: string;
}

export function ServiceCard({
  title,
  description,
  imageSrc,
  price,
  href,
  bookingHref,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("group flex flex-col bg-white rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl hover:border-border/80 transition-all duration-500", className)}>
      <Link href={href} className="relative aspect-[3/2] w-full overflow-hidden block">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex justify-between items-start gap-4">
          <Link href={href}>
            <h3 className="font-serif text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">{title}</h3>
          </Link>
          {price && <span className="text-sm font-medium px-3 py-1 bg-muted rounded-full text-foreground/80 whitespace-nowrap">{price}</span>}
        </div>

        <p className="text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3 mb-2 flex-1">{description}</p>

        <div className="flex items-center gap-3 pt-4 mt-auto">
          <Button asChild variant="outline" className="flex-1 rounded-full border-border hover:bg-muted/50">
            <Link href={href}>Learn More</Link>
          </Button>

          {bookingHref ? (
            <ExternalBookingLink
              href={bookingHref}
              mode="interstitial"
              placement="service_card"
              label="Book Now"
              showMicrocopy={false}
              className="flex-1 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium"
            />
          ) : (
            <Button asChild className="flex-1 rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Link href={href}>Book Now</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
