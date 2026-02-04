# Launch QA Checklist

## Booking System (Critical)
- [ ] **Direct Link:** Verify `/book` redirects to GlossGenius default service menu.
- [ ] **Deep Linking:** Verify `/book?service=ombre-powder-brows` redirects to the specific service URL.
- [ ] **UTM Preservation:** Test `eyebrowsbygg.com/book?utm_source=instagram` -> Ensure UTMs persist in the GlossGenius URL.
- [ ] **Fallback:** Verify the manual "click here" link works if the auto-redirect fails.
- [ ] **Mobile:** Test the redirect page on iOS/Android for layout stability.

## Content & SEO
- [ ] **Images:** Scan for broken images (404s) in migrated blog posts.
- [ ] **Metadata:** Verify `title` and `description` meta tags appear correctly in source.
- [ ] **Sitemap:** Check `sitemap.xml` excludes `/book` and includes all new blog posts.
- [ ] **Robots:** Verify `robots.txt` allows indexing of main pages.

## Launch Steps
1. **Freeze Content:** Stop editing WordPress.
2. **Migrate:** Run `npx tsx scripts/scrape-blog.ts`.
3. **Redirects:** Copy `data/generated-redirects.json` content to `data/redirects.ts`.
4. **Media:** Download images listed in `data/image-audit.json` to `public/images/uploads`.
5. **Deploy:** Push to main.
6. **DNS:** Update A Records.
