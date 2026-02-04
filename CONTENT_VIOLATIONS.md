# CONTENT VIOLATIONS LEDGER

| ID | Location | Current Text | Contract Truth | Violation Type | Fix Plan | Status |
|----|----------|--------------|----------------|----------------|----------|--------|
| V-001 | /services | "Consult for Price" | Specific prices ($400, $500, etc.) | Wrong Price | Update `lib/content` with full price list from Contract | FIXED |
| V-002 | /services | Only 3 items listed | 18 items in Contract | Missing Content | Populate full service list in `lib/content` | FIXED |
| V-003 | /about | "Art Institute of Chicago", "9 years medical" | "20 Years Experience on Threading", "Certified PMU" | Invented Claim | Replace with canonical bio from original site | FIXED |
| V-004 | / | "2k+ Happy Clients", "5-Star Experience" | Not present in original | Invented Claim | Remove stats section or replace with generic trust signals if confirmed | FIXED |
