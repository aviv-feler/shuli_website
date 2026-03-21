# Design Rules — Shuli George Website

## Stack
- Single `index.html` file
- Tailwind CSS via CDN (Play CDN)
- Lucide Icons via CDN (unpkg)
- Fonts: Amatic SC (logo/headings, local), Open Sans (body, local)
- Hebrew RTL: `<html lang="he" dir="rtl">`
- Netlify Forms for contact (data-netlify="true")

## DO
- Light, minimal, clean, modern — shadcn aesthetic
- Neutral palette: whites, grays, one subtle warm stone/amber accent
- Good typography hierarchy, plenty of whitespace
- Fonts: Amatic SC (logo/headings), Open Sans (body) — self-hosted
- Mobile responsive (Tailwind breakpoints)
- Light motion: IntersectionObserver scroll animations, smooth transitions, subtle hover
- Lucide icons only (no emoji)

## DON'T
- No bright saturated gradients or gradient text
- No emoji icons (use Lucide icons)
- No "revolutionary", "game-changing" marketing copy
- No heavy shadows or busy patterns
- No dark mode
- No border-radius > rounded-2xl
- No cramped spacing or fonts < 14px (min 14px body text)

## Color Palette
- Background: white (#ffffff)
- Surface: stone-50 (#fafaf9)
- Border: stone-100 (#f5f5f4), stone-200 (#e7e5e4)
- Text primary: stone-900 (#1c1917)
- Text secondary: stone-500 (#78716c)
- Text muted: stone-400 (#a8a29e)
- Accent (primary): teal #688D94, hover #7ab4bc, light #AAD7D9
- Background warm: #fcfef6
- Border warm: #E8DFCA, neutral: #E5E1DA

## Sections
Navbar → Hero (SVG phone mockup) → About → Services →
Process (6 steps) → Workshops → Testimonials → FAQ →
Blog → Team Training → Lecture → Contact → Footer

## Footer
© שולי ג'ורג' · shuli-george.netlify.app · Shuli George

## Deployment
- GitHub repo: shuli_website
- Netlify site: Shuli's Website
- Deploy command: npx netlify deploy --dir=. --prod

## IMPORTANT — Commit / Deploy Rules
- NEVER commit or push to GitHub without explicit user instruction
- Netlify auto-deploys on every push, which counts against the monthly usage quota
- Always wait for the user to say "commit" or "deploy" before running any git commit / git push
