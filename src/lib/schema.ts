import { BOOK, EMAIL, FB, IG, ORIGIN } from "./site";
export const studioSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${ORIGIN}/#studio`,
  name: "Eyebrows by GG",
  url: ORIGIN,
  telephone: "+12033852243",
  email: EMAIL,
  description:
    "Brow shaping and permanent makeup studio in Milford, Connecticut.",
  image: `${ORIGIN}/assets/photos/gg-cover-1440.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "972 Boston Post Rd",
    addressLocality: "Milford",
    addressRegion: "CT",
    postalCode: "06461",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
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
  ],
  sameAs: [IG, FB],
  potentialAction: { "@type": "ReserveAction", target: BOOK },
};
