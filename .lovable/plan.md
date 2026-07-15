
# Imran Buhari — Product Manager Portfolio

Rebuild Imran's portfolio using content from imran-buhari.netlify.app, styled in the Syne + gradient dark aesthetic from the reference image.

## Visual system

- **Background:** near-black `#0A0A0A`; foreground white; muted `#8a8a8a`.
- **Accent gradient:** `linear-gradient(90deg, #FF4D8D 0%, #A855F7 50%, #22D3EE 100%)`. Used for: kicker underline, one gradient block, button border, hover states, section number highlights. Never as a full-section background.
- **Typography:** Syne (700/800) for all headings and UI labels; Inter for body copy. Loaded via `<link>` in `__root.tsx` head. Registered as `--font-display` and `--font-sans` in `@theme`.
- **Headline treatment:** solid white line + second line with `-webkit-text-stroke: 2px white; color: transparent` outlined variant. Massive scale (clamp up to ~10rem).
- **Chrome:** hairline dividers, uppercase kicker labels with tracking, rounded-full pills, `rounded-2xl` cards.
- **Motion:** subtle scroll fade-in only. No heavy libraries.

## Page structure (single route `/`)

1. **Nav** — `IB` monogram top-left, hamburger top-right. Sticky, transparent over black.
2. **Hero**
   - Kicker `PRODUCT MANAGER` with gradient underline
   - Headline: `Imran` (solid) / `Buhari.` (outlined) — Syne, ultra-large
   - Sub: "I build products that solve real problems. Currently obsessed with AI, validation tools, and what's next."
   - Two pills: `SEE MY WORK` (gradient border), `GET IN TOUCH` (ghost)
   - Photo in a card with gradient overlay + "Builder · Learning in Public" caption
   - Decorative gradient asterisk lines on the right
3. **About / How I create value** — full bio paragraphs from source, location line, split into two columns on desktop.
4. **Skills / What I specialize in** — 6 items in a grid: Product Strategy, AI-Powered Products, PRDs & Documentation, User Research, Idea Validation, Product Analytics. Each card: number `01–06`, title in Syne, description. Gradient number on hover.
5. **Selected Products** — 3 case study cards (AgroLynk, Sprint Maestro, Tiqra). Each: mockup image (loaded from source URLs), tag row, title, description, meta (role · year · tools), two links (View Case Study → external netlify URL, View Live → live URL). Full-width alternating layout.
6. **Milestones** — 4 accomplishment cards with emoji + title + line (Hackathon Winner, AI Product Builder, PM Cohort Member, Learning in Public).
7. **Toolkit** — three grouped chip rows: Product Skills, Tools & Platforms, Soft Skills. Uppercase labels, chip pills.
8. **Certifications** — 4-item timeline row: Prodcademy 2025, M4ace 2026, Fuse Varsity 2026, IOTB Tech 2026.
9. **Writing** — 6 LinkedIn post cards (title + "Read on LinkedIn →" external link).
10. **Testimonials** — 3 quote cards (Cohort Member, Teammate, Early User) with initials avatar.
11. **CTA / Contact** — Big outlined `LET'S WORK TOGETHER` headline, email `buhariimran01@gmail.com` (mailto), LinkedIn link, socials. Copyright footer.

Contact form is omitted (no backend); replaced by prominent mailto + LinkedIn buttons.

## Technical

- **Route:** replace `src/routes/index.tsx` placeholder with the portfolio. Single-page — anchor links (`#work`, `#about`, `#contact`) are fine since it's one long scrolling page (matches the original).
- **Fonts:** `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&display=swap">` in `__root.tsx` head (with preconnects).
- **Design tokens:** add gradient, `--font-display`, `--font-sans`, dark palette in `src/styles.css`. Site is dark-only (no toggle) — set the dark oklch values as the `:root` defaults.
- **Head metadata:** update `__root.tsx` — title `Imran Buhari — Product Manager`, description from hero copy, matching og/twitter tags. No og:image (avoid placeholders).
- **Images:** referenced directly from the source netlify URLs (imran-photo.jpg + 3 mockups). No local copies.
- **Components:** split into `src/components/portfolio/` — `Nav`, `Hero`, `About`, `Specialties`, `Work`, `Milestones`, `Toolkit`, `Certifications`, `Writing`, `Testimonials`, `Contact`.
- No backend, no Cloud, no forms.

## Out of scope

- Individual case-study detail routes (link out to existing netlify pages for now).
- Contact form submission.
- Blog CMS.
