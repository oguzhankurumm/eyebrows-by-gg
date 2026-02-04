import { COMPANY_INFO } from "@/lib/content/site";

export const CANONICAL_FACTS = {
  name: "Eyebrows By GG",
  address: {
    streetAddress: "972 Boston Post Rd",
    addressLocality: "Milford",
    addressRegion: "CT",
    postalCode: "06461",
    addressCountry: "US",
  },
  phone: "+1 (203) 385-2243",
  email: "info@eyebrowsbygg.com",
  geo: {
    latitude: 41.232029,
    longitude: -73.047825,
  },
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    {
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  social: [
    "https://www.instagram.com/eyebrows_by_gg/",
    "https://www.facebook.com/people/Eyebrows-By-GG/100093073906952/",
  ],
};

export function getLocalBusinessJsonLd({ baseUrl, imageUrl }: { baseUrl: string; imageUrl?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon", // More specific than LocalBusiness
    "@id": `${baseUrl}/#localbusiness`,
    name: CANONICAL_FACTS.name,
    image: imageUrl || `${baseUrl}/icon.png`,
    url: baseUrl,
    telephone: CANONICAL_FACTS.phone,
    email: CANONICAL_FACTS.email,
    address: {
      "@type": "PostalAddress",
      ...CANONICAL_FACTS.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...CANONICAL_FACTS.geo,
    },
    openingHoursSpecification: CANONICAL_FACTS.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      ...hours,
    })),
    sameAs: CANONICAL_FACTS.social,
    acceptsReservations: "True",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: COMPANY_INFO.bookingUrl,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Book Appointment",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Milford",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CT",
      },
    },
    priceRange: "$$",
  };
}

interface ServiceData {
  name: string;
  description?: string;
  price?: string;
  url?: string;
  providerId?: string;
  category?: string;
  bookingUrl?: string;
  image?: string;
}

export function getServiceJsonLd(service: ServiceData, { baseUrl }: { baseUrl: string }) {
  // Parse price if possible, or leave as string if complex
  // service.price might be "$400" or "Consult for Price"
  let priceSpecification;
  const priceMatch = service.price?.match(/\$?(\d+)/);
  
  if (priceMatch && !service.price?.toLowerCase().includes("consult")) {
    priceSpecification = {
      "@type": "PriceSpecification",
      price: priceMatch[1],
      priceCurrency: "USD",
    };
  }

  const bookingUrl = service.bookingUrl || COMPANY_INFO.bookingUrl;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    image: service.image ? (service.image.startsWith("http") ? service.image : `${baseUrl}${service.image}`) : undefined,
    areaServed: {
      "@type": "City",
      name: "Milford",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CT",
      },
    },
    offers: {
      "@type": "Offer",
      price: priceSpecification ? priceSpecification.price : undefined,
      priceCurrency: priceSpecification ? "USD" : undefined,
      url: service.url,
      availability: "https://schema.org/InStock",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: bookingUrl,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: `Book ${service.name}`,
      },
    },
    url: service.url,
  };
}

export function getServicesItemListJsonLd(services: ServiceData[], { baseUrl }: { baseUrl: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: getServiceJsonLd(service, { baseUrl }),
    })),
  };
}

export function safeJsonLd(data: object) {
  return JSON.stringify(data);
}
