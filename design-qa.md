# Design QA

Date: 2026-06-14
Project: Ntsinzi Francois portfolio upgrade

## Scope covered

- Reworked the portfolio around live project launches instead of placeholder mockups
- Added a Remotion-rendered ambient hero video using the provided portrait
- Added a real light mode alongside the dark luxury theme
- Expanded skills into frontend, mobile, backend, DevOps, data, and soft skills
- Reframed pricing into stronger Kigali-aware premium tiers

## Source material used

- User-provided reference website video for motion/composition inspiration
- User-provided portrait image for portfolio identity and Remotion animation
- User-provided pricing notes for the charging model rewrite
- Live landing pages captured from:
  - `https://nobarriers.onrender.com/`
  - `https://www.higura.com/`
  - `https://www.youthgenerationclub.org/`
  - `https://intambwe-system.onrender.com/`
  - `https://eazy1teck.vercel.app/`
  - `https://uwatese-decor.vercel.app/`

## Verification performed

- Rendered project screenshots from the live websites and embedded them locally
- Rendered `public/media/portfolio-ambient.mp4` via Remotion CLI
- Ran `npm run lint`
- Ran `npm run build`
- Captured and reviewed local desktop dark mode
- Captured and reviewed local desktop light mode
- Captured and reviewed a mobile viewport
- Reloaded the in-app browser on `http://localhost:3000/`

## Findings

- P0: none
- P1: none
- P2: none
- P3:
  - The hero video intentionally crops the Remotion composition differently across breakpoints, which is visually acceptable and consistent with the cinematic treatment.
  - Automated screenshots can catch the Next.js dev issue badge in development UI, but browser log inspection returned no app warnings or errors.

## Outcome

The portfolio now feels more grounded in real shipped work, has a stronger identity, better pricing credibility, broader skill coverage, and a deliberate two-theme system. The Remotion asset is integrated successfully as part of the live website experience.

final result: passed
