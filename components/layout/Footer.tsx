import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/content";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/eyebrows_by_gg/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/people/Eyebrows-By-GG/100093073906952/", label: "Facebook" },
  ];

  const mainLinks = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image 
                src="/images/logo.png" 
                alt={COMPANY_INFO.name} 
                width={200} 
                height={60} 
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Premier permanent makeup studio in {COMPANY_INFO.city}, {COMPANY_INFO.state}. Dedicated to precision artistry and natural beauty enhancement.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/50 border border-white/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium">Explore</h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {COMPANY_INFO.address}<br />
                  {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium">Studio Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>{COMPANY_INFO.hours.days}</span>
                <span className="font-medium text-foreground">{COMPANY_INFO.hours.time}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground/60">{COMPANY_INFO.hours.sunday}</span>
              </li>
            </ul>
            <div className="pt-2">
              <Button asChild className="w-full rounded-full" size="lg">
                <a href={COMPANY_INFO.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
