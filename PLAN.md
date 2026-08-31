# Portfolio Website — Plan (v3, Final)

Minimal, work-first static portfolio for a photographer/videographer, inspired by the aesthetic of annavenezia.com. Image-driven, ultra-clean. Built directly (no external AI code generation step).

## Project Location

```
/Users/edson/Dev/Personal/github/portfolio
```

Git repo initialised locally, pushed to a new GitHub repo, deployed on Vercel.

## Structure

Multi-page static site. Plain HTML, CSS, vanilla JS only. No frameworks, no build tools, no dependencies. Zero-config deploy.

### Pages

- `index.html` — category grid (2 categories: **Photography**, **Video**)
- `photography.html` — gallery page
- `video.html` — gallery page (placeholder-driven for now; video content is thin until more projects are shot — page exists so the structure is ready)
- `about.html` — 2–3 sentence bio, portrait, email, social link
- `contact.html` — dedicated contact page (email as mailto, social link)
- `assets/css/style.css` — one reusable stylesheet
- `assets/js/main.js` — lightbox + any shared JS
- `README.md` — step-by-step GitHub + Vercel + Porkbun DNS deployment instructions

## Design Principles (strict)

- White background, black text only
- Font: Inter from Google Fonts, light/minimal weights
- Generous whitespace throughout
- No hero section, no big homepage headline
- No buttons, no CTA elements
- Images dominate; aspect-ratio-flexible grid (no forced crops — mixed 3:2, 4:5, 16:9 all sit cleanly)
- Hover: subtle opacity fade on images only
- Mobile responsive

## Page Specs

### Navigation (all pages)
- Name far left; three links far right: **Work, About, Contact**
- Minimal: no background, no border

### index.html
- Grid of 2 category cards (Photography, Video), full-width or half-width images with small, light category titles below
- Placeholder images: `https://placehold.co/900x600/eeeeee/999999`
- Each card links to its gallery page
- Every placeholder marked with `<!-- REPLACE -->`
- `<!-- HOW TO ADD A NEW CATEGORY -->` comment block with exact copy/paste instructions
- Footer: name · year · email — centred, small, minimal

### photography.html / video.html (gallery pages)
- Page title in small text, top left
- 2-column CSS grid (ordered top-to-bottom, left-to-right — NOT CSS-columns masonry, which breaks ordering), aspect-ratio-flexible rows
- `loading="lazy"` on all gallery images
- Lightbox in vanilla JS (no libraries):
  - Black background, image centred
  - ESC key or click-outside closes
  - Prev/next arrow navigation between images
- Commented section at bottom for future Vimeo embeds
- Back link to homepage — text only, no buttons

### about.html
- Two-column layout: left = large portrait placeholder, right = bio + email (mailto) + social link
- Nothing else

### contact.html
- Same nav
- Minimal: email (mailto), social link, location line

## Code Requirements

- Every placeholder image/text marked `<!-- REPLACE -->`
- Basic SEO/metadata on every page: `<title>`, meta description, `og:title` / `og:description` / `og:image`, favicon (placeholder, marked REPLACE)
- Lazy loading on gallery images
- README.md: GitHub repo creation → push → Vercel import → Porkbun DNS (A/CNAME records for apex + www) step-by-step

## Content Fill-ins (owner supplies)

- Name/business name: `[YOUR NAME]`
- Location + one-line description: `[e.g. "Videography and photography · Barcelona"]`
- Bio (2–3 sentences)
- Email
- Instagram or LinkedIn URL

## Execution Steps

1. Build all site files in `/Users/edson/Dev/Personal/github/portfolio`
2. `git init`, initial commit
3. Create GitHub repo, push
4. Connect repo to Vercel → deploy (zero config)
5. Buy domain on Porkbun (~€10–15/yr), point DNS at Vercel
6. Replace `<!-- REPLACE -->` placeholders with real photos/content
7. Revisit SEO/metadata + video embeds later as the body of work grows
