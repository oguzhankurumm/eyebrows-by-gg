# SEO Metadata Draft

## Static Pages

| Route | Meta Title | Meta Description |
|-------|------------|------------------|
| `/` | Eyebrow Microblading Milford CT \| Eyebrows By GG | Premier beauty studio in Milford, CT specializing in natural eyebrow microblading, ombre powder brows, and threading. Book your transformation today. |
| `/about` | About GG - Certified PMU Artist Milford CT \| Eyebrows By GG | Meet GG, a Master Certified PMU artist with 20+ years of experience in eyebrow threading and microblading. Dedicated to safety, hygiene, and art. |
| `/services` | Permanent Makeup Services & Pricing \| Eyebrows By GG | Explore our full menu of beauty services: Microblading, Nano Brows, Lip Blush, and more. View pricing and book your appointment in Milford, CT. |
| `/portfolio` | Before & After Eyebrow Transformations \| Eyebrows By GG | See real results from our Milford studio. Browse our gallery of healed microblading, ombre brows, and lip blush work. Natural, lasting beauty. |
| `/contact` | Contact & Booking - Milford Beauty Studio \| Eyebrows By GG | Visit Eyebrows By GG in Milford, CT. Call, email, or book your appointment online. Convenient location with flexible hours for your beauty needs. |
| `/blog` | Beauty Blog & Expert Tips \| Eyebrows By GG | Expert advice on permanent makeup care, brow trends, and skin health from Milford's trusted beauty specialists. Read our latest articles. |

## Dynamic Pages

| Route | Meta Title Template | Meta Description Source |
|-------|---------------------|-------------------------|
| `/services/[slug]` | `{Service Title} Milford CT \| Eyebrows By GG` | `{Service Description}` (From data source) |
| `/blog/[slug]` | `{Post Title} \| Eyebrows By GG Blog` | `{Post Description}` (From frontmatter) |

## Implementation Plan

1.  **`lib/seo.ts`**: Update `sharedMetadata` to reflect the home page defaults or a generic fallback that is brand compliant.
2.  **`app/page.tsx`**: Add explicit metadata export overriding the default to ensure exact Home match.
3.  **`app/services/[slug]/page.tsx`**: Update `generateMetadata` to append "Milford CT" to the title for better local SEO on specific services.
4.  **Other Pages**: Update the `export const metadata` object in each file.
