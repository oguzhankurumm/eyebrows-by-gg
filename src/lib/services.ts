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
    price: "$350",
    duration: "[TODO: duration]",
    detail:
      "A shaded finish for brows that look softly filled in. Bring a photo of your everyday brow makeup to discuss the depth and shape you want.",
    image: "2023_07_portfolio-2",
  },
  {
    slug: "nanoblading",
    name: "Nanoblading",
    summary: "Fine strokes for a defined shape.",
    price: "$350",
    duration: "[TODO: duration]",
    detail:
      "Fine, hair-like marks create definition through the brow. Discuss the stroke pattern and the technique GG recommends for your existing brows.",
    image: "2023_07_portfolio-13",
  },
  {
    slug: "microblading",
    name: "Microblading",
    summary: "Hair-stroke detail where you want it.",
    price: "[TODO: confirm microblading price]",
    duration: "90–120 minutes",
    detail:
      "A manual hair-stroke technique for brow definition. Start with the areas you want to fill and compare the finish with powder or combo brows.",
    image: "2023_10_portfolio-18",
  },
  {
    slug: "combo-brows",
    name: "Combo brows",
    summary: "Hair-like detail meets soft shading.",
    price: "[TODO: confirm combo brows price]",
    duration: "120–150 minutes",
    detail:
      "A combination of stroke detail and shading. Discuss where you want texture and where you prefer a fuller, more filled-in finish.",
    image: "2023_10_portfolio-23",
  },
  {
    slug: "lip-blush",
    name: "Lip blush",
    summary: "A wash of color. Your lips, defined.",
    price: "$450",
    duration: "[TODO: duration]",
    detail:
      "Cosmetic lip pigmentation adds color and definition. Bring your usual lip color as a reference and discuss the finish before choosing a shade.",
    image: "2023_07_portfolio-12",
  },
  {
    slug: "eyebrow-threading",
    name: "Brow threading",
    summary: "A precise edit of your natural shape.",
    price: "$20",
    duration: "[TODO: duration]",
    detail:
      "Thread removes unwanted brow hair to refine your outline. Show GG the areas you want to keep full and the areas you want to tidy.",
    image: "2023_07_portfolio-13",
  },
  {
    slug: "henna-tinting",
    name: "Henna tinting",
    summary: "Brow color without a tattoo.",
    price: "$45",
    duration: "[TODO: duration]",
    detail:
      "A brow tinting service for added color. Discuss shade, the finish you want and preparation before your appointment.",
    image: "2023_07_portfolio-4",
  },
  {
    slug: "touch-up",
    name: "Brow touch-up",
    summary: "Revisit the color. Refine the detail.",
    price: "$150",
    duration: "[TODO: duration]",
    detail:
      "A follow-up service for existing brow work. Tell GG when and where your original treatment was done so the right appointment can be selected.",
    image: "2023_10_portfolio-15",
  },
  {
    slug: "permanent-makeup",
    name: "Permanent makeup",
    summary: "Explore brow and lip pigmentation.",
    price: "Price by treatment",
    duration: "[TODO: duration]",
    detail:
      "Compare hair strokes, shading and lip pigmentation in one conversation. Choose a treatment after discussing your starting point and preferred finish.",
    image: "2023_10_portfolio-17",
  },
];
export const servicePath = (service: Service) => `/services/${service.slug}/`;
