CLAUDE.md — Frontend Website Rules
Always Do First
Invoke the frontend-design skill before writing any frontend code, if available in this 
environment. If the skill is not installed/registered, proceed directly from the 
guardrails in this file (Anti-Generic Guardrails section below) — do not block or flag 
this as missing.
For all page copy and content, read and follow SEO-CONTENT-PROMPT.md as the PRIMARY writing methodology before writing any page content. SEO-CONTENT-PROMPT.md takes precedence over all other content guidance.

Client Context — G-Uprooted Tree Services
Business Identity

Business name: G-Uprooted Tree Services (also referred to as G-Uprooted)
Industry: Tree service — trimming, removal, palm tree care, landscaping/shrub maintenance
Owner: Emilio Gonzalez
Physical address: None — service-area business, no storefront/yard address used publicly
Phone/Text: 956-539-3985
Email: ECJ@G-UPROOTED.COM
Domain: [NEEDS INPUT]
Founded: [NEEDS INPUT] — 10+ years of experience
Licenses/Certifications: [NEEDS INPUT]
Location base: Harlingen, Rio Grande Valley (RGV), Texas
Client focus: Commercial-first (property managers, RV parks, real estate, HOAs), residential also served

Service Area
6 dedicated city pages (in priority order — use this order everywhere):

Harlingen (primary market + home base)
McAllen
Brownsville
South Padre Island
Edinburg
Mission

Emilio services the entire Rio Grande Valley (RGV) — these 6 cities get dedicated SEO pages because they are the priority markets. Other RGV cities (Weslaco, San Benito, Pharr, Mercedes, La Feria, etc.) can be referenced in body copy and service-area schema as "and surrounding RGV areas" without requiring dedicated pages.
All cities are in the Rio Grande Valley, Texas. The site should feel locally rooted in the RGV.
Services (6 dedicated service pages — built around his specialty + commercial focus)

Tree Removal → services/tree-removal.html
Tree Trimming & Pruning → services/tree-trimming-pruning.html
Palm Tree Trimming & Removal → services/palm-tree-service.html
Tree Stump Removal & Grinding → services/stump-removal.html
Storm Damage & Emergency Tree Service (24/7) → services/storm-damage-emergency.html
Commercial Tree Service → services/commercial-tree-service.html

Why these 6: Emilio's named specialty is trimming and removal of trees and palm trees — so 4 of the 6 pages are built directly around that. Storm damage/emergency capitalizes on RGV hurricane season and his 24/7 availability. Commercial Tree Service is a dedicated funnel page since he targets commercial clients (property managers, RV parks, real estate, HOAs) as his primary market, with residential also served.
Additional services (mention in body copy/footer/GBP, not standalone pages):

Tree Cabling & Bracing
Tree Planting
Tree Transplanting
Disease Management (Trees & Shrubs)
Insect Management (Trees & Shrubs)
Shrub Pruning/Trimming/Removal/Planting/Transplanting
Lawn Care
Brush Clearing
Free Estimates (CTA throughout site, not a standalone page)

Service Details
Specialty / Core Focus:

Trimming and removal of trees and palm trees — this is the specialization to lead with in copy and headlines
Tree pruning/trimming removes dead or broken limbs and keeps trees healthy
Tree cutting service for residential and commercial properties

Service Types & Clientele:

Residential & Commercial
Storm Damage Cleanup
RV Parks
Real Estate Properties
Available 24/7 (emergency tree service)

Stump Removal:

Hazardous stump elimination
Yard space reclamation
Pest infestation prevention

Project Proof / Social Proof

[NEEDS INPUT] — no case studies or named project proof provided yet
Use credentials (10+ years experience, 24/7 availability) as primary trust signal until project proof is available

Key Differentiators

10+ years of experience serving the Rio Grande Valley
Specializes in tree and palm tree trimming and removal
24/7 availability — emergency tree service
Residential and commercial — RV parks and real estate properties included
Free estimates
No job too big or too small

Brand Voice & Tone

Professional & reliable
Straightforward, helpful, community-rooted in the RGV
Safety-and-property-focused messaging (storm damage, dangerous tree removal)
Commercial-first tone — speak to property managers, RV park operators, real estate professionals, and HOAs as a primary audience, while still welcoming residential customers
Emilio Gonzalez is the face of the business — reference him by name where appropriate

Brand Tagline

Primary (inferred from client copy): "Let G-Uprooted handle the heavy work so you can enjoy a safer, cleaner, and more beautiful outdoor space."
Secondary: "Free Estimates For Home or Commercial Tree, Palm and Brush Trimming"
[NEEDS INPUT] — confirm official tagline with client if one exists beyond the above

Social Proof

Confirmed: G-Uprooted has 7 Google reviews — too low to feature prominently
Do NOT include review widgets, star ratings, or review counts anywhere on the site
Use credentials (10+ years experience, 24/7 availability, commercial clientele) as the primary trust signal instead

Brand Colors

LOCKED — derived from the real logo.png (no longer a launch blocker).

Shared design system (single source of truth):
- `assets/brand.css` — green-semantic CSS custom-property tokens (:root), all shared chrome + components (nav incl. `.scrolled` + dropdowns, footer, `.dark-section` deep-green radials + `.atmo` noise, base→elevated→floating card-shadow system, `.btn-*`, `.wash-*`, cards/badges/breadcrumb), AND a clearly-commented block of DEPRECATED backward-compat aliases (old `--glass-*`/`--ember` token names + `.wash-navy-*`/`.wash-ember-*` → green values) that keep un-rebuilt page bodies on-brand. Remove an alias when its page's content pass stops referencing it.
- `assets/brand-config.js` — the Tailwind CDN config (green palette). Load it right AFTER the Tailwind CDN `<script>`.
- Every page links both: `<script src="/assets/brand-config.js"></script>` then `<link rel="stylesheet" href="/assets/brand.css" />`. The homepage is the proven visual reference; it was migrated to these assets as a pure lift-and-relink (only its homepage-only video/photo-grid styles remain inline).
- Token names are GREEN-SEMANTIC (`--green`, `--green-hover`, `--green-leaf`, `--green-bright`, `--green-pale`, `--deep`, `--deep-2/3`, `--ink-body`, `--emergency`). Reference these in new page builds. Do NOT author new markup against the deprecated `--glass-*`/`--ember`/`--wash-navy*` names.
- Per-page builds: a small inline `<style>` on some pages still holds green-converted placeholder-section treatments (`#insurance`/`#service-area`/`#why-us`, etc.) that are body-markup-coupled — fold these in or delete them during that page's content pass.

Older note (superseded by the above): tokens were originally defined inline on the homepage `:root` and Tailwind config; future pages inherit these.

- Brand Green  #245F09  → primary action color: ALL CTA buttons, icons, links, eyebrow labels, hover states, accents on white. (hover/darker: #1B4A06; bright leaf green for icons on dark surfaces: #6FB23E; pale: #CFE8BD; ultra-pale: #EEF6E8)
- Deep Green   #1A380C  → ALL dark surfaces, replacing every navy/blue in the template (trust bar, footer, final-CTA overlay, hero base, any dark band). Elevated greens for depth: #234A12, #2C5A16.
- Red          #BD1A27  → RESERVED. Use ONLY where the meaning is emergency/urgency (final-CTA "We're Here 24/7." accent, the 24/7 emergency trust-bar item, storm-damage accents). Nowhere else. (hover: #A01620)

Rules: Light sections are pure #FFFFFF — no off-white fills; create separation via deep-green bands, layered color-tinted shadows, spacing, and hairline dividers. Dark sections get layered radial green gradients + subtle SVG noise (.atmo), not a flat fill. Do not default to Tailwind's stock green/red/emerald/rose — use these exact hex values.

Assets Status

Logo: [NEEDS INPUT]
Hero imagery/video: [NEEDS INPUT]
Service photos: [NEEDS INPUT]
[NEEDS INPUT] — check brand_assets/ folder once provided by client

Site Architecture

Cloned from master template jhurtado86/nexor-template (plain HTML, Tailwind CDN, 15 pages) — template is never modified directly; each client site is a clone
index.html (homepage)
about.html
contact.html / thank-you.html
services/tree-removal.html
services/tree-trimming-pruning.html
services/palm-tree-service.html
services/stump-removal.html
services/storm-damage-emergency.html
services/commercial-tree-service.html
harlingen.html
mcallen.html
brownsville.html
south-padre-island.html
edinburg.html
mission.html

(6 service pages + 6 city pages + home/about/contact/thank-you = 15 pages, matching template structure)
Outstanding Launch Blockers

Domain not yet confirmed
Exact brand color hex codes not yet provided (palette confirmed: green/white/red)
Logo and photo assets not yet provided
License/certification details not yet provided
Founded year not yet confirmed (only "10+ years experience" confirmed)
Official tagline not yet confirmed


Local SEO Requirements
Every page must follow these SEO standards. Local SEO is the primary lead driver.
Per-Page Metadata

Unique <title> tag, under 60 characters, format: "[Page Topic] | G-Uprooted Tree Services"
Unique <meta name="description">, under 160 characters — include service, city, and phone number CTA
<meta name="keywords"> with relevant local terms (service + city combinations)
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical"> pointing to that page's own URL
<html lang="en"> and proper viewport meta

Open Graph + Twitter Cards (every page)

og:title, og:description, og:url, og:type, og:image, og:locale, og:site_name
twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image
og:image and twitter:image → flag if og-image.jpg not yet created

Structured Data (JSON-LD)

Homepage: LocalBusiness schema — name, phone, email, url, areaServed (6 dedicated cities + "Rio Grande Valley" broad area), hasOfferCatalog (all 6 core services)
Service pages: Service schema referencing the parent business
City pages: areaServed for that specific city
No address/streetAddress field — use areaServed only (service-area business, no public physical address)
Validate at search.google.com/test/rich-results before launch

Visible On-Page SEO

Exactly ONE <h1> per page with the page's primary keyword
H2/H3 for section hierarchy, no skipped levels
City names in human-readable body text, not just metadata
Service + city combinations appearing naturally in copy
All images need descriptive alt text with service/location context

City Pages — Anti-Duplicate Rule

Each city page MUST have 30-40% unique content minimum
Do NOT swap city name across otherwise identical pages — Google penalizes this
Each page references local landmarks, neighborhoods, highways, area-specific details
Unique intro paragraph and unique "why [city] chooses G-Uprooted" angle per page

Technical SEO Files

sitemap.xml lists all indexable pages (exclude thank-you page)
robots.txt allows crawl, disallows thank-you page, points to sitemap
thank-you page must have <meta name="robots" content="noindex, nofollow">

Per-Page Title Pattern

Homepage: "Tree Service in Harlingen, TX | G-Uprooted Tree Services"
Service page: "[Service] in Harlingen, TX | G-Uprooted Tree Services"
City page: "Tree Service in [City], TX | G-Uprooted Tree Services"


Reference Images
NOTE: For THIS project we are building ORIGINAL pages from the Client Context, NOT matching a provided reference. The reference-matching rules below apply ONLY when a reference image is explicitly provided. Otherwise, design original, high-craft pages per the guardrails.

If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
If no reference image: design from scratch with high craft per the guardrails below.
Screenshot output, compare against reference, fix mismatches, re-screenshot. At least 2 comparison rounds.


Local Server

Always serve on localhost — never screenshot a file:/// URL
Start the dev server: node serve.mjs (serves project root at http://localhost:3000)
serve.mjs lives in the project root. Start it in the background before screenshots.
If the server is already running, do not start a second instance.


Screenshot Workflow

Always screenshot from localhost: node screenshot.mjs http://localhost:3000
Screenshots saved to ./temporary screenshots/screenshot-N.png
After screenshotting, read the PNG with the Read tool
Be specific when comparing: "heading is 32px but reference shows ~24px"
Check: spacing/padding, font size/weight, colors (exact hex), alignment, border-radius, shadows, image sizing


Output Defaults

Plain HTML + Tailwind CDN — no build step
Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
Placeholder images: https://placehold.co/WIDTHxHEIGHT
Mobile-first responsive
Single file per page unless otherwise specified


Brand Assets

Always check brand_assets/ folder before designing
Use real assets where available — do not use placeholders when real assets exist
[NEEDS INPUT] — populate once client provides logo and photo assets


Anti-Generic Guardrails

Colors: Never use default Tailwind palette (indigo-500, blue-600, or stock green-500/red-500). Use custom green, white, and red hex values for G-Uprooted — confirm exact hex codes with client before final build, but build with the green/white/red direction now.
Shadows: Never use flat shadow-md. Use layered, color-tinted shadows with low opacity.
Typography: Never use the same font for headings and body. Apply tight tracking (-0.03em) on large headings, generous line-height (1.7) on body.
Gradients: Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
Animations: Only animate transform and opacity. Never transition-all. Use spring-style easing.
Interactive states: Every clickable element needs hover, focus-visible, and active states. No exceptions.
Images: Add gradient overlay (bg-gradient-to-t from-black/60) and color treatment layer with mix-blend-multiply.
Spacing: Use intentional, consistent spacing tokens — not random Tailwind steps.
Depth: Surfaces should have a layering system (base → elevated → floating).


Hard Rules

Do not add sections or content not in the reference (when a reference is provided)
Do not "improve" a reference design — match it (when a reference is provided)
Do not stop after one screenshot pass
Do not use transition-all
Do not use default Tailwind blue/indigo as primary color
Do not add review widgets or star ratings until reputation/review status is confirmed with client
Do not fabricate license numbers, addresses, or credentials — flag as [NEEDS INPUT] until client provides them
