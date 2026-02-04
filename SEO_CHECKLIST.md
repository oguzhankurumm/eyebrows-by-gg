# SEO Implementation Checklist

## Configuration
- [x] **Base URL**: Set to `https://eyebrowsbygg.com` in `lib/seo.ts` and `app/robots.ts`.
- [x] **Robots.txt**: configured to allow indexing and point to correct sitemap.

## Sitemap
- [x] **Generation**: `app/sitemap.ts` updated.
- [x] **Coverage**:
  - [x] Static Pages (`/`, `/about`, `/services`, `/portfolio`, `/contact`)
  - [x] Dynamic Service Pages (from `lib/services.ts`)
  - [x] Blog Posts (from `lib/blog.ts`)
- [x] **Priorities**: 
  - Homepage: 1.0
  - Services: 0.9
  - Blog: 0.8
  - Static: 0.8

## Structured Data (JSON-LD)
- [x] **LocalBusiness**: Globally injected in `app/layout.tsx`.
  - [x] Includes Name, Description, Image, URL.
  - [x] Includes Address, Phone, Email (from Contact page data).
  - [x] Includes Geo Coordinates.
  - [x] Includes Opening Hours.
- [x] **Service**: Injected in `app/services/[slug]/page.tsx`.
  - [x] Maps Service Name, Description, Provider.
  - [x] Includes OfferCatalog.
- [x] **BreadcrumbList**: Injected in `app/services/[slug]/page.tsx`.
- [x] **BlogPosting**: Injected in `app/blog/[slug]/page.tsx` (existing, verified).

## OpenGraph & Metadata
- [x] **Strategy**: Service-specific OG images implemented.
- [x] **Implementation**: 
  - Added `image` field to `lib/services.ts`.
  - Updated `generateMetadata` in `app/services/[slug]/page.tsx` to use specific images if available, falling back to site default.

## Internal Linking
- [x] **Blog -> Services**: Implemented automatic linking in `app/blog/[slug]/page.tsx`.
  - Logic: Matches blog tags to Service tags or titles.
  - Display: "Related Services" card grid before the booking CTA.
- [x] **Service -> Booking**: Existing CTAs preserved and verified.

## Next Steps / Maintenance
- **Monitor Search Console**: Submit the new sitemap (`/sitemap.xml`) to GSC.
- **Content Tags**: Ensure blog post frontmatter `tags` align with Service `tags` or `title` to maximize internal linking coverage.
- **Image Assets**: Replace placeholder service images in `public/assets/images/` with real high-quality photos if needed.
