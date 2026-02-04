"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { siteConfig } from "@/lib/seo"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExternalBookingLinkProps extends ButtonProps {
  href?: string
  serviceId?: string
  label?: string
  showIcon?: boolean
  mode?: string
  placement?: string
  showMicrocopy?: boolean
  microcopyText?: string
}
export function ExternalBookingLink({
  className,
  label = "Book Now",
  showIcon = false,
  variant = "default",
  // placement,
  // showMicrocopy,
  // microcopyText,
  // serviceId, // unused but captured to prevent prop leakage
  ...props
}: ExternalBookingLinkProps) {

  const handleClick = () => {
    // Preserve UTM parameters
    let bookingUrl = props.href || siteConfig.links.booking

    // In a real implementation, we would append UTM params from the current window location
    // and potentially service-specific deep links if GlossGenius supports them.
    // For now, we point to the main booking link.

    if (typeof window !== "undefined") {
      const currentParams = new URLSearchParams(window.location.search);
      // Add basic UTMs if missing
      if (!currentParams.has("utm_source")) currentParams.set("utm_source", "website");
      if (!currentParams.has("utm_medium")) currentParams.set("utm_medium", "cta");

      // Append to booking URL (checking if it already has params)
      const separator = bookingUrl.includes("?") ? "&" : "?";
      bookingUrl = `${bookingUrl}${separator}${currentParams.toString()}`;
    }

    // Direct navigation
    window.open(bookingUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      variant={variant}
      className={cn("gap-2", className)}
      onClick={handleClick}
      {...props}
    >
      {label}
      {showIcon && <ExternalLink className="w-4 h-4 ml-1 opacity-70" />}
    </Button>
  )
}
