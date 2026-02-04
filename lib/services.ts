export type ServiceCategory = 'Brows' | 'Lips' | 'Touch-ups' | 'Consultation' | 'Removal';

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  whoItsFor: string;
  glossgeniusUrl: string;
  image?: string;
  category: ServiceCategory;
  tags: string[];
  highlights: string[];
  priceValue: number; // Used for sorting. 0 can indicate "Consult for Price" or variable.
  durationValue: number; // In minutes, used for sorting.
}

export const services: Service[] = [
  {
    id: "ombre-powder-brows",
    slug: "ombre-powder-brows",
    title: "Ombre Powder Brows",
    description: "Soft, misty shading for a defined makeup look. Best for oily skin or cover-ups.",
    price: "Consult for Price",
    duration: "3 Hours",
    whoItsFor: "Best for all skin types, including oily/large pores. Perfect if you want a wake-up-and-go makeup look.",
    glossgeniusUrl: "https://eyebrowsbygg.glossgenius.com/services",
    category: "Brows",
    tags: ["Best for Oily Skin", "Cover-ups", "Defined Look"],
    highlights: ["Soft, misty shading", "Defined makeup look", "Long-lasting results"],
    image: "/images/stock/services/services-hero.jpg",
    priceValue: 0,
    durationValue: 180,
  },
  {
    id: "nano-brows",
    slug: "nano-brows",
    title: "Nano Brows",
    description: "Hyper-realistic hair strokes for a fluffy, natural finish. Best for normal/dry skin.",
    price: "Consult for Price",
    duration: "3 Hours",
    whoItsFor: "Best for normal to dry skin. Ideal if you want the most natural, 'hair-like' texture without microblading trauma.",
    glossgeniusUrl: "https://eyebrowsbygg.glossgenius.com/services",
    category: "Brows",
    tags: ["Best for Dry Skin", "Natural Look", "Fluffy Finish"],
    highlights: ["Hyper-realistic hair strokes", "Natural finish", "Less trauma to skin"],
    image: "/images/stock/services/services-hero.jpg",
    priceValue: 0,
    durationValue: 180,
  },
  {
    id: "annual-touch-up",
    slug: "annual-touch-up",
    title: "Annual Touch-up",
    description: "Color refresh to keep your brows looking crisp. Recommended every 12-18 months.",
    price: "Consult for Price",
    duration: "2 Hours",
    whoItsFor: "Existing clients who had their initial session 12-18 months ago.",
    glossgeniusUrl: "https://eyebrowsbygg.glossgenius.com/services",
    category: "Touch-ups",
    tags: ["Maintenance", "Color Refresh", "Existing Clients"],
    highlights: ["Refreshes color", "Keeps brows crisp", "Recommended every 12-18 months"],
    priceValue: 0,
    durationValue: 120,
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
