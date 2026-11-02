export interface Service {
  slug: string;
  name: string;
  summary: string;
  price: string;
  duration: string;
  detail: string;
  image: string;
}
export const SERVICES: Service[] = [
  {
    slug: "powder-brows",
    name: "Powder brows",
    summary: "Soft shading. A fuller-looking brow.",
    price: "$450",
    duration: "150 minutes",
    detail:
      "A shaded finish for brows that look softly filled in. Bring a photo of your everyday brow makeup to discuss the depth and shape you want.",
    image: "ig-DVZssGKkWWw",
  },
  {
    slug: "nanoblading",
    name: "Nano brows",
    summary: "Fine strokes for a defined shape.",
    price: "$550",
    duration: "210 minutes",
    detail:
      "Fine, hair-like marks create definition through the brow. Discuss the stroke pattern and the technique GG recommends for your existing brows.",
    image: "ig-DdWwOkBheBV",
  },
  {
    slug: "microblading",
    name: "Microblading guide",
    summary: "Hair-stroke detail where you want it.",
    price: "See current brow menu",
    duration: "Not separately listed",
    detail:
      "Microblading is covered in the original studio guides. The current booking menu lists Nano Brows, Combo Brows and Powder Brows. Compare those appointments with GG before choosing.",
    image: "2023_10_portfolio-18",
  },
  {
    slug: "combo-brows",
    name: "Combo brows",
    summary: "Hair-like detail meets soft shading.",
    price: "$500",
    duration: "165 minutes",
    detail:
      "A combination of stroke detail and shading. Discuss where you want texture and where you prefer a fuller, more filled-in finish.",
    image: "ig-DPOpz7wjgUO",
  },
  {
    slug: "lip-blush",
    name: "Lip blush",
    summary: "A wash of color. Your lips, defined.",
    price: "$550",
    duration: "150 minutes",
    detail:
      "Cosmetic lip pigmentation adds color and definition. Bring your usual lip color as a reference and discuss the finish before choosing a shade.",
    image: "2023_07_portfolio-12",
  },
  {
    slug: "eyebrow-threading",
    name: "Brow threading",
    summary: "A precise edit of your natural shape.",
    price: "$20",
    duration: "25 minutes",
    detail:
      "Thread removes unwanted brow hair to refine your outline. Show GG the areas you want to keep full and the areas you want to tidy.",
    image: "ig-Dct30IUvXoc",
  },
  {
    slug: "henna-tinting",
    name: "Threading & henna",
    summary: "Brow color without a tattoo.",
    price: "$45",
    duration: "45 minutes",
    detail:
      "A brow tinting service for added color. Discuss shade, the finish you want and preparation before your appointment.",
    image: "ig-Dct30IUvXoc",
  },
  {
    slug: "touch-up",
    name: "Brow touch-ups",
    summary: "Revisit the color. Refine the detail.",
    price: "$250–$300",
    duration: "90–150 minutes",
    detail:
      "The current 4–8 week appointments differ by technique: Powder Brows $250/90 minutes, Combo Brows $300/105 minutes and Nano Brows $300/150 minutes. Choose the matching treatment in booking.",
    image: "2023_10_portfolio-15",
  },
  {
    slug: "permanent-makeup",
    name: "Permanent makeup",
    summary: "Explore brow and lip pigmentation.",
    price: "Price by treatment",
    duration: "Varies by treatment",
    detail:
      "Compare hair strokes, shading and lip pigmentation in one conversation. Choose a treatment after discussing your starting point and preferred finish.",
    image: "2023_10_portfolio-17",
  },
];
export const servicePath = (service: Service) => `/services/${service.slug}/`;
