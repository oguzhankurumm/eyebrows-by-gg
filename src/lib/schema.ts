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
  image: `${ORIGIN}/assets/photos/gg-instagram-1440.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "972 Boston Post Rd",
    addressLocality: "Milford",
    addressRegion: "CT",
    postalCode: "06461",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",

      ],
      opens: "10:00",
      closes: "18:30",
    },
  ],
  geo: { "@type": "GeoCoordinates", latitude: 41.2319966, longitude: -73.0477036 },
  hasMap: "https://www.google.com/maps?cid=16539137567848620296",
  sameAs: [IG, FB],
  potentialAction: { "@type": "ReserveAction", target: BOOK },
};
