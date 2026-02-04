"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button" // Updated pill button
import { ExternalBookingLink } from "@/components/ui/external-booking-link"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/content/site"

const NAV_ITEMS = NAV_LINKS

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none", // Centered & floating
      isScrolled ? "py-4" : "py-6 md:py-8"
    )}>
      {/* The Capsule */}
      <nav className={cn(
        "pointer-events-auto transition-all duration-500",
        "bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm dark:bg-black/60 dark:border-white/10", // Glass tokens
        "rounded-full px-2 py-2 md:px-3 md:py-2.5", // Capsule shape
        "flex items-center justify-between gap-4",
        isScrolled ? "w-auto shadow-md" : "w-full max-w-5xl shadow-sm"
      )}>

        {/* Logo Area */}
        <Link href="/" className="pl-4 md:pl-5 pr-2 flex items-center gap-2 group">
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
            GG.<span className="text-primary font-normal">Brows</span>
          </span>
        </Link>

        {/* Desktop Links - Pill style */}
        <div className="hidden md:flex items-center bg-secondary/50 rounded-full px-1 py-1 gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-white text-foreground shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block pr-1">
          <ExternalBookingLink size="sm" className="rounded-full px-6" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-secondary/80 mr-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 p-4 rounded-[2rem] glass pointer-events-auto md:hidden flex flex-col gap-2 animate-in slide-in-from-top-4 fade-in duration-300">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "p-4 rounded-xl text-center font-medium text-lg transition-colors",
                pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-secondary/50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="h-px bg-border/50 my-2" />
          <ExternalBookingLink className="w-full" size="lg" />
        </div>
      )}
    </header>
  )
}
