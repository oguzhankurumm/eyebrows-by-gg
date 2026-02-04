import React from "react";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface BlogCTAProps {
  variant?: "inline" | "card";
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const DEFAULT_BOOKING_URL = "https://eyebrowsbygg.glossgenius.com/services";

export function BlogCTA({
  variant = "inline",
  title = "Ready to enhance your brows?",
  description = "Book your session today and wake up with perfect brows every morning.",
  buttonText = "Book a Consultation",
  className,
}: BlogCTAProps) {
  if (variant === "card") {
    return (
      <div className={cn("my-12 p-8 rounded-2xl bg-muted/30 border border-border text-center", className)}>
        <div className="flex justify-center mb-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Sparkles className="size-6 text-primary" />
          </div>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">{description}</p>
        <ExternalBookingLink 
          href={DEFAULT_BOOKING_URL} 
          mode="interstitial"
          placement="blog_card_cta"
          label={buttonText} 
          className="w-full sm:w-auto"
        />
      </div>
    );
  }

  return (
    <div className={cn("my-8 p-6 rounded-xl bg-muted/50 border border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6", className)}>
      <div className="text-center sm:text-left">
        <h4 className="font-serif text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ExternalBookingLink 
        href={DEFAULT_BOOKING_URL} 
        mode="interstitial"
        placement="blog_inline_cta"
        label={buttonText} 
        size="default"
        className="shrink-0"
        showMicrocopy={false}
      />
    </div>
  );
}
