import { Metadata } from "next";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/blocks/contact-form";
import { COMPANY_INFO } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact Us | Eyebrows by GG",
  description: "Get in touch with Eyebrows by GG in Milford, CT. View our hours, location, and book your appointment.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="py-24 md:py-32 bg-muted/30">
        <div className="container flex flex-col items-center text-center gap-6">
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground">
            Let&apos;s Connect
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground text-lg md:text-xl font-light">
            Visit our private studio in Milford, CT for a personalized consultation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-medium">Contact Information</h2>
              <div className="grid gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-muted/50 rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {COMPANY_INFO.address}<br />
                      {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-muted/50 rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary transition-colors text-lg">
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-muted/50 rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary transition-colors text-lg">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-border">
              <h2 className="font-serif text-3xl font-medium">Opening Hours</h2>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-muted/50 rounded-2xl">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div className="space-y-3 w-full max-w-sm">
                  <div className="flex justify-between text-muted-foreground text-lg">
                    <span>{COMPANY_INFO.hours.days}</span>
                    <span className="font-medium text-foreground">{COMPANY_INFO.hours.time}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-lg">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">{COMPANY_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-8">
              <h2 className="font-serif text-3xl font-medium">Send a Message</h2>
              <ContactForm />

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">Ready to book immediately?</p>
                <ExternalBookingLink
                  href="https://eyebrowsbygg.glossgenius.com/services"
                  mode="interstitial"
                  placement="contact_cta"
                  size="lg"
                  className="w-full sm:w-auto px-10 h-14 text-lg rounded-full shadow-lg"
                  label="Book Online Now"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[400px] h-full bg-muted rounded-[2.5rem] overflow-hidden border border-border shadow-xl relative order-first lg:order-last">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.198305602447!2d-73.06789592398457!3d41.22631597131704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7df1d2c6a0b1b%3A0x6a0b1b2c3d4e5f6!2s972%20Boston%20Post%20Rd%2C%20Milford%2C%20CT%2006461!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              title="Eyebrows by GG Location"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
}
