# Master Audit Ledger

| ID | Category | Location | Severity | Description | Fix Plan | Status | Proof |
|----|----------|----------|----------|-------------|----------|--------|-------|
| 001 | Content | lib/services.ts | CRITICAL | Service data in `lib/services.ts` (routing) conflicts with `lib/content/services.ts` (rules) and is missing items/prices. | Consolidate `lib/services.ts` to match `lib/content/services.ts` and ensure all services have routes or are handled correctly. | DONE | Consolidated data into lib/services.ts and updated consumers. |
| 002 | Design | WhatsAppFloatingButton.tsx | MEDIUM | Hardcoded hex color `#25D366`. | Use `var(--whatsapp)` token. | DONE | Added token to globals.css and updated component. |
| 003 | Design | BookingConfirmationTemplate.tsx | LOW | Inline styles. | Accepted for email template. | DONE | |
| 004 | Layout | Footer.tsx | LOW | Footer padding/margin issues. | Normalize spacing. | DONE | Adjusted padding/margins. |
