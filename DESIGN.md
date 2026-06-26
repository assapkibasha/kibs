---
name: Ntsinzi Francois Portfolio
description: Technical premium developer portfolio for full-stack, mobile, and launch-ready product work.
colors:
  command-black: "#000000"
  console-ink: "#101325"
  panel-blueblack: "#12162b"
  deep-panel: "#080a14"
  warm-white: "#fffdf6"
  muted-text: "#cfd2df"
  subtle-text: "#8f96ae"
  command-yellow: "#ffd300"
  signal-green: "#a6ff3d"
  system-blue: "#66c7ff"
  accent-pink: "#ff6aa2"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2rem, 12vw, 2.85rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "0"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0"
rounded:
  sharp: "4px"
  frame: "8px"
  panel: "16px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.command-yellow}"
    textColor: "{colors.command-black}"
    rounded: "{rounded.sharp}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.sharp}"
    height: "2.8rem"
    width: "2.8rem"
  card-console:
    backgroundColor: "{colors.deep-panel}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.frame}"
    padding: "clamp(1.4rem, 5vw, 4rem)"
  input-search:
    backgroundColor: "{colors.panel-blueblack}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.frame}"
    padding: "1rem 1.15rem"
---

# Design System: Ntsinzi Francois Portfolio

## 1. Overview

**Creative North Star: "The Command Center Portfolio"**

The system should feel like a high-contrast developer command center built for selling real product capability: dark surfaces, sharp yellow action, mono labels, proof-heavy project framing, and animated technical structures that point back to business outcomes. It is brand-first, but the brand is not abstract decoration; every console, orbit, filter, and pricing block should make Ntsinzi feel more capable to hire.

The current visual language borrows code-learning energy and turns it into a premium portfolio: black canvas, blue-black panels, warm white text, electric yellow calls to action, system-blue detail, and precise rectangular geometry. It rejects generic developer portfolio templates, vague "modern SaaS" pages, soft glassmorphism, purple-blue AI gradients, decorative code noise with no business meaning, and resume-in-card layouts.

**Key Characteristics:**
- High-contrast dark canvas with yellow as the decisive action color.
- Mono labels and command-like copy for technical credibility.
- Real screenshots and project outcomes as the primary trust layer.
- Compact, rectilinear UI with small radii and strong borders.
- Motion should feel purposeful and system-like, never ornamental.

## 2. Colors

The palette is a command-line dark system with sharp educational yellow, electric support accents, and readable warm-white text.

### Primary
- **Command Yellow**: Primary action, selection, and emphasis color. Use it sparingly for hire/contact CTAs, active filters, progress signals, and moments where the user must know what to do next.

### Secondary
- **System Blue**: Secondary technical signal for gradients, diagrams, and background energy. Use it to imply systems and data flow, not as a competing CTA.
- **Signal Green**: Success and skill-energy accent. Use for proof, capability, and positive system states.

### Tertiary
- **Accent Pink**: Rare highlight for variety in pills or proof markers. It should never become the main brand color.

### Neutral
- **Command Black**: The body surface and highest-contrast foundation.
- **Console Ink**: Sticky navigation and deep structural surfaces.
- **Panel Blueblack**: Cards, boards, and secondary panels.
- **Deep Panel**: Terminal-like content areas and nested dark surfaces.
- **Warm White**: Primary text on dark surfaces.
- **Muted Text**: Body/supporting copy where hierarchy needs softness while staying readable.
- **Subtle Text**: Metadata, labels, inactive hints, and tertiary text only.

### Named Rules

**The Yellow Means Action Rule.** Command Yellow is for action, selection, and decisive emphasis. Do not scatter it as decoration.

**The No Purple-Blue AI Gradient Rule.** Purple-blue gradient hero treatments are prohibited. The system uses black, blueblack, yellow, and controlled signal accents.

## 3. Typography

**Display Font:** Manrope with Arial fallback
**Body Font:** Manrope with Arial fallback
**Label/Mono Font:** Roboto Mono with monospace fallback

**Character:** Manrope keeps the portfolio readable and direct while Roboto Mono supplies the command-line signature. The pairing should feel technical and confident, not novelty-code themed.

### Hierarchy
- **Display** (900, clamp-based, tight line-height): Hero commands, major conversion statements, and section-defining headlines.
- **Headline** (850-900, large clamp-based sizing): Section headings and pricing/project calls.
- **Title** (800-900, 1.1-1.45rem): Cards, feature labels, project names, and capability headings.
- **Body** (750-850, 0.95-1rem, generous line-height): Supporting copy, project descriptions, pricing explanation, and process details. Keep prose blocks compact and avoid long walls of text.
- **Label** (Roboto Mono, 800-900, small): Eyebrows, command text, metadata, terminal labels, and status-like details.

### Named Rules

**The Command Label Rule.** Mono text earns its place only when it reads as a command, status, metric, or technical marker. Do not use mono for ordinary paragraphs.

## 4. Elevation

Depth is conveyed mainly through tonal layering, borders, gradients, and occasional glow rather than heavy drop shadows. Panels should feel stacked inside a dark technical environment, with borders and background contrast doing most of the work.

### Shadow Vocabulary
- **Ambient Glow** (`0 24px 90px rgba(255, 211, 0, 0.14)`): Use only around high-value hero or CTA moments.
- **Panel Lift** (`0 18px 48px rgba(0, 0, 0, 0.28)`): Use sparingly for featured cards or active states.

### Named Rules

**The Border Before Shadow Rule.** Prefer a crisp border and tonal shift before adding shadow. If a card needs both, the shadow must support hierarchy, not decorate.

## 5. Components

### Buttons
- **Shape:** Sharp rectangular control with a small radius (4px).
- **Primary:** Command Yellow background with Command Black text, heavy weight, and compact horizontal padding.
- **Hover / Focus:** Preserve high contrast; focus states must be visibly stronger than hover states.
- **Secondary / Ghost:** Transparent or dark-panel controls with Warm White text and border/tonal feedback.

### Chips
- **Style:** Pill or compact rectangular badges using dark panels, borders, and occasional signal accents.
- **State:** Active filters should use Command Yellow; inactive filters stay dark and bordered.

### Cards / Containers
- **Corner Style:** Frames use 8px; larger panels may use 16px only when the component needs a softer container.
- **Background:** Command Black, Deep Panel, and Panel Blueblack.
- **Shadow Strategy:** Tonal layering first, glow only for priority elements.
- **Border:** Use `rgba(255, 255, 255, 0.12)` or `rgba(255, 255, 255, 0.22)` depending on contrast needs.
- **Internal Padding:** Use 16px, 24px, and 48px as the main rhythm.

### Inputs / Fields
- **Style:** Dark panel field with visible border, sharp radius, Warm White text, and Muted Text placeholder.
- **Focus:** Border shifts toward Command Yellow or System Blue with a clear outline.
- **Error / Disabled:** Disabled states reduce opacity but must remain readable; errors should not rely on color alone.

### Navigation
- Sticky dark command bar with compact links, strong font weight, a small code-logo mark, icon action, pricing link, and primary hire action. Mobile navigation should keep the same dark-panel language and close after navigation.

### Project Showcase

Project cards are the trust engine. Screenshots should remain prominent, project outcomes should be visible before deep reading, and accent colors from individual projects may appear as local proof markers without overriding the portfolio palette.

## 6. Do's and Don'ts

### Do:
- **Do** keep Command Yellow tied to action, active selection, and decisive emphasis.
- **Do** lead with real shipped work, screenshots, outcomes, and pricing clarity.
- **Do** keep dark surfaces readable with Warm White or Muted Text that meets WCAG AA.
- **Do** use motion to clarify systems, hierarchy, or progress.
- **Do** preserve the compact code-console signature: sharp frames, strong borders, mono labels, and high contrast.

### Don't:
- **Don't** use generic developer portfolio templates.
- **Don't** use vague "modern SaaS" page structure as the default.
- **Don't** use soft glassmorphism as the visual foundation.
- **Don't** use purple-blue AI gradients.
- **Don't** add decorative code noise with no business meaning.
- **Don't** turn the portfolio into a resume pasted into cards.
- **Don't** make the site feel like a course platform unless that metaphor is serving the portfolio narrative directly.
