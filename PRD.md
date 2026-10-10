# Product Requirements Document (PRD)

## Project: LPAS Architecture + Design — Complete Web & Motion Experience
- **Target URL Reference:** [https://lpas.com/](https://lpas.com/)
- **Technology Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis Smooth Scroll
- **Status:** Draft / Proposed for Review
- **Version:** 1.0.0

---

## 1. Executive Summary & Project Vision

LPAS Architecture + Design is an award-winning multidisciplinary architectural studio based in Sacramento and Oakland, California. Their website (designed by Studio Naam, renowned Awwwards Studio of the Year) delivers a minimalist editorial experience characterized by:
- **Architectural Grid Systems:** Dynamic 4 / 6 / 12 / 20 column asymmetric grid layouts.
- **Cinematic Pacing & Motion:** High-end signature preloader (`L-P-A-S` -> `Listen, Plan, Analyze, Shape` text unfold and video scale-up reveal), buttery 60 FPS Lenis smooth scrolling, route transitions, and responsive hover physics.
- **Dynamic Contextual Color Systems:** Dedicated color tokens dynamically assigned per market sector (`Housing`, `Interiors`, `Higher Education`, `Civic`, `Commercial`).
- **Tactile Micro-Interactions:** Dual-arrow sliding buttons (`buttonArrow`), circular expandable plus/eye triggers (`buttonCircle`), cursor-tracking magnetic blob badges (`Explore`), and mouse-tracking news previews.

This project will recreate the **entire multi-page LPAS web experience** with full fidelity in Next.js, including complete page hierarchies, interactive filtering, dynamic routing, and motion choreography.

---

## 2. Information Architecture & Route Hierarchy

The application replicates the complete page map discovered from the LPAS sitemap:

```
/ (Home)
├── /about                    (Company profile, philosophy, stats, full team directory & slide-out bios)
├── /culture                  (Studio life, core values, community engagement, wellness & events)
├── /careers                  (Open roles, culture benefits, application process)
├── /latest                   (News, awards, announcements, Instagram editorial feed)
├── /contact                  (Sacramento HQ & Oakland office coordinates, inquiry form, interactive maps)
├── /portfolio                (Complete project archive with dual-tier taxonomy filters & pagination)
│   └── /portfolio/[slug]     (Detailed architectural case study with gallery, specs, blueprints & quotes)
└── /markets                  (Market sector hub)
    ├── /markets/housing      (Residential Housing overview + 4 dedicated sub-market tabs)
    │   ├── /markets/housing/affordable-housing
    │   ├── /markets/housing/student-housing
    │   ├── /markets/housing/market-rate-housing
    │   └── /markets/housing/senior-housing
    ├── /markets/interiors    (Interior design focus)
    ├── /markets/higher-education (Academic campus community architecture)
    ├── /markets/civic        (Civic and public sector buildings)
    └── /markets/commercial   (Commercial & medical facility spaces)
```

---

## 3. Design System & Visual Tokens

### 3.1 Typography
The core typography mirrors the geometry of **Aeonik** (modernist geometric grotesque) with clean tracking, tight headings, and functional tabular numbers:
- **Base font scale:** `html { font-size: 62.5% }` (1rem = 10px).
- **Scale Tokens:**
  - `font-3XL`: `clamp(4.6rem, 0.25rem + 5.66vw, 7.5rem)`, line-height: `100%`, weight: `400`.
  - `font-XXL`: `clamp(4.4rem, 0.29rem + 5.36vw, 5.6rem)`, line-height: `110%`, weight: `400`.
  - `font-XL`: `clamp(3.2rem, -2.97rem + 8.04vw, 5.0rem)`, line-height: `110%`, weight: `400`.
  - `font-L`: `clamp(2.8rem, -0.63rem + 4.46vw, 3.8rem)`, line-height: `110%`, weight: `400`.
  - `font-M`: `clamp(2.4rem, 1.03rem + 1.79vw, 2.8rem)`, line-height: `130%`, weight: `400`.
  - `font-SM`: `clamp(2.0rem, 0.63rem + 1.79vw, 2.4rem)`, line-height: `135%`, weight: `400`.
  - `font-B` (Body): `1.6rem`, line-height: `135%`, weight: `400` / `600`.
  - `font-S`: `1.4rem`, line-height: `135%`, weight: `400` / `600`.
  - `font-XS`: `1.2rem`, line-height: `140%`, weight: `400` / `600`.

### 3.2 Market Sector Color Palettes
The application uses CSS custom properties dynamically updated based on the active market sector or hovered card:

| Market Token | Market Name | `--marketMainColor` | `--marketSecondaryColor` | `--marketContentColor` | `--marketContentContrast` |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `housing` | Housing | `rgb(98, 86, 83)` (#625653) | `rgb(123, 105, 100)` (#7B6964) | `#FFFFFF` | `#262626` |
| `interiors` | Interiors | `rgb(146, 84, 52)` (#925434) | `rgb(178, 113, 80)` (#B27150) | `#FFFFFF` | `#262626` |
| `higherEducation` | Higher Education | `rgb(201, 211, 223)` (#C9D3DF) | `rgb(222, 231, 243)` (#DEE7F3) | `#262626` | `#FFFFFF` |
| `civic` | Civic | `rgb(112, 117, 105)` (#707569) | `rgb(180, 198, 184)` (#B4C6B8) | `#FFFFFF` | `#262626` |
| `commercial` | Commercial | `rgb(227, 193, 170)` (#E3C1AA) | `rgb(241, 214, 196)` (#F1D6C4) | `#262626` | `#FFFFFF` |
| `sand` | Neutral / Studio | `rgb(202, 159, 122)` (#CA9F7A) | `rgb(235, 205, 180)` (#EBCDB4) | `#262626` | `#FFFFFF` |

### 3.3 Neutral & UI Colors
- **Page Background:** `#FFFFFF` (Light pages) / `#262626` (Processes & Dark sections)
- **Text Primary:** `#262626` / `#000000`
- **Text Muted:** `#737373` / `#A3A3A3`
- **Divider Lines:** `rgba(38, 38, 38, 0.12)`
- **Glassmorphic Overlays:** `rgba(14, 14, 14, 0.60)` with `backdrop-filter: blur(20px)`

### 3.4 Grid System (`data-grid="grid-template"`)
Fluid responsive grid system with subgrid alignment:
- **Mobile (< 768px):** 4 content columns + margins `minmax(1.5rem, 1fr)`
- **Tablet (768px - 991px):** 6 content columns
- **Desktop (992px - 1439px):** 12 content columns
- **Ultrawide (>= 1440px):** 20 content columns (`repeat(20, minmax(50px, 80px))`)

---

## 4. Key UI Components & Motion Specifications

### 4.1 Signature Preloader (`L P A S` Sequence)
1. **Initial State:** Screen blackout with centered letter pairs.
2. **Phase 1 (Acronym Flash):** Letters `L`, `P`, `A`, `S` fade and de-blur in sequence (`y: 10px -> 0`, `filter: blur(10px) -> 0`).
3. **Phase 2 (Word Unfold):** Suffixes `isten`, `lan`, `nalyze`, `hape` slide outward from behind initial letters (`x: offset -> 0`).
4. **Phase 3 (Hero Expand):** The central hero preview expands from `scale: 0 -> 1`, pushing the preloader words away, revealing the main page hero video/imagery.
5. **Persistence:** Triggered on initial page session, skippable or stored in `sessionStorage`.

### 4.2 Top Bar Navigation & Fullscreen Menu
- **Sticky / Adaptive Top Bar:**
  - Dynamic logo color inversion (`light` over dark media, `dark` over light sections).
  - Quick market switcher: "Shift your focus" dropdown pills with active market color indicator.
  - Animated Hamburger/Close toggle: Morphing dual lines (`M4 11H25` & `M4 18H25` cross into an X).
- **Fullscreen Menu Overlay:**
  - Split layout: Left side primary market sectors (`Housing`, `Interiors`, `Higher Education`, `Civic`, `Commercial`) with gigantic typography and hover state accent colors.
  - Right side secondary company links (`Portfolio`, `Latest Updates`, `About`, `Culture`, `Careers`, `Contact`).
  - Bottom info panels: Sacramento & Oakland office telephone, address, and interactive social links.

### 4.3 Custom Interactive Buttons
- **`buttonArrow` (Dual-Arrow Slide):**
  - Contains two identical arrow SVGs placed sequentially.
  - On hover, Arrow 1 translates forward and exits right, while Arrow 2 enters from the left into Arrow 1's position in a continuous seamless kinetic loop.
- **`buttonCircle` (Expanding Action Circle):**
  - Circular bordered button with inner icon (plus `+`, eye `👁`, arrow `↓`).
  - Expanding background disc on hover with spring physics.
- **`buttonLine` (Underline Sweep):**
  - Double line segments that sweep out and sweep back on hover.
- **Floating Cursor Blob:**
  - Magnetic follower on interactive showcase cards displaying dynamic labels (e.g., `Explore`, `View`).

### 4.4 Home Hero Section
- Fullscreen background video with gentle parallax and dark gradient overlay.
- Large statement headline: *"We’re a process driven architecture and interior design studio"*.
- Interactive eye button revealing contextual studio statement on click/hover.
- **5 Market Showcase Cards:**
  - Horizontal scrollable / stacked interactive deck.
  - Large thumbnail, category title, indicator badge (`1 / 5` ... `5 / 5`).
  - Plus button expanding quick sub-market links drawer.

### 4.5 Projects Highlight & Portfolio Showcase
- **Asymmetrical Editorial Layouts:**
  - `LayoutOne`: 1 large card with clipped corner (`data-clipcorner="tl"`) + 2 stacked medium cards.
  - `LayoutTwo`: 2 stacked cards + 1 large card with clipped corner (`data-clipcorner="br"`).
  - `LayoutFive`: Full-width landscape hero card with dark glassmorphic detail drawer.
- **Interactive Multi-Level Filtering:**
  - Primary filter: `All`, `Housing (30)`, `Interiors (17)`, `Higher Education (13)`, `Civic (6)`, `Commercial (14)`.
  - Secondary sub-market pills (e.g. within Housing: `Affordable Housing (7)`, `Student Housing (3)`, `Market Rate Housing (15)`, `Senior Housing (5)`).
  - Instant fluid filtering with exit/enter layout animations without page jumps.

### 4.6 Latest News & Instagram Feed
- Editorial headline: *"Latest updates"*.
- Interactive news items with date format `MM.DD.YY`.
- Hover image preview: Hovering any news entry smoothly reveals the corresponding high-resolution photography with cursor following motion.

### 4.7 Team Directory & Slide-Out Bio Modal (About Page)
- 38 team members with filtering by: `All`, `Leadership`, `Sacramento`, `Oakland`.
- Grid of portrait cards with names, titles, and office location.
- Clicking any team member opens the signature slide-out side drawer with high-res portrait, bio, education, accreditations, and related projects.

### 4.8 Footer Component
- Immersive high-resolution architectural background.
- Expandable column links.
- Direct contact blocks for Sacramento and Oakland offices (click-to-call, maps, email decode).
- Smooth "Back to top" action.

---

## 5. Technical Architecture & Next.js Implementation

### 5.1 Architecture Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS Variables for market themes
- **Animation:** Framer Motion (for UI transitions & route state) + GSAP / Lenis (for butter-smooth scroll & timeline choreography)
- **Icons:** Custom SVG icon sprite system matching LPAS exact paths (`#icon-logo`, `#icon-Arrow`, `#icon-plus`, `#icon-eye`, `#icon-close`, `#icon-Chevron`).

### 5.2 Project File Structure
```
src/
├── app/
│   ├── layout.tsx                     # Root layout with fonts, Lenis provider, top nav, footer
│   ├── page.tsx                       # Homepage (Hero, Categories, Intro, Highlights, Latest)
│   ├── about/page.tsx                 # About page (Profile, Stats, Values, Team Directory)
│   ├── culture/page.tsx               # Culture page (Life at LPAS, Community, Perks)
│   ├── careers/page.tsx               # Careers page (Openings, Benefits, Application)
│   ├── latest/page.tsx                # Latest updates archive (Full news feed, Instagram)
│   ├── contact/page.tsx               # Contact page (Offices, Maps, Transmission form)
│   ├── portfolio/
│   │   ├── page.tsx                   # Portfolio archive with full filter system & pagination
│   │   └── [slug]/page.tsx            # Project case study detail template
│   └── markets/
│       ├── page.tsx                   # Markets overview hub
│       ├── housing/
│       │   ├── page.tsx               # Housing overview & submarkets
│       │   ├── affordable-housing/page.tsx
│       │   ├── student-housing/page.tsx
│       │   ├── market-rate-housing/page.tsx
│       │   └── senior-housing/page.tsx
│       ├── interiors/page.tsx
│       ├── higher-education/page.tsx
│       ├── civic/page.tsx
│       └── commercial/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Sticky nav, logo color logic, market selector
│   │   ├── FullscreenMenu.tsx         # Overlay navigation drawer
│   │   ├── Footer.tsx                 # Footer with office details & back-to-top
│   │   └── Preloader.tsx              # Signature L-P-A-S preloader
│   ├── ui/
│   │   ├── ButtonArrow.tsx            # Dual sliding arrow button
│   │   ├── ButtonCircle.tsx           # Expanding circular button
│   │   ├── ButtonLine.tsx             # Sweeping underline button
│   │   ├── CursorBlob.tsx             # Magnetic cursor follower
│   │   └── Icons.tsx                  # Native LPAS SVG icon library
│   ├── sections/
│   │   ├── HomeHero.tsx               # Video hero + horizontal market cards deck
│   │   ├── MarketCard.tsx             # Interactive market card with subpages drawer
│   │   ├── ProjectCard.tsx            # Asymmetrical architectural card with clipped corners
│   │   ├── PortfolioFilter.tsx        # Multi-tiered filter bar
│   │   ├── LatestUpdatesList.tsx      # Hover-image preview list
│   │   └── TeamDrawer.tsx             # Slide-out biography modal
│   └── providers/
│       └── SmoothScrollProvider.tsx   # Lenis smooth scrolling wrapper
├── data/
│   ├── projects.ts                    # Complete architectural project callset (70+ items)
│   ├── markets.ts                     # Market configurations, sub-markets & metadata
│   ├── team.ts                        # Complete team directory & bios
│   └── updates.ts                     # News articles & Instagram stories
└── styles/
    └── globals.css                    # Typography scale, grid classes, market color rules
```

---

## 6. Verification & Quality Acceptance Criteria

1. **Visual Accuracy:**
   - Exact Aeonik font scale ratios, weights, and clamp calculations.
   - Exact market color values applied to cards, active pills, and hover states.
   - Exact clipped corner geometry (`clip-path: polygon(...)`) on highlighted projects.
2. **Motion Fidelity:**
   - Preloader plays once per session, unfolding the 4 words and expanding into the hero.
   - Dual-arrow hover loop transitions seamlessly.
   - Cursor blob follows mouse on desktop viewport over interactive items.
   - Lenis smooth scroll operates smoothly across all pages with zero layout jank.
3. **Multi-Page Coverage:**
   - Every single route (`/`, `/about`, `/culture`, `/careers`, `/latest`, `/contact`, `/portfolio`, `/portfolio/[slug]`, and all `/markets/*` routes) renders real content, imagery, and interactive features.
4. **Responsive Integrity:**
   - Tested across Mobile (<768px), Tablet (768-992px), Desktop (992-1440px), and Ultrawide (>1440px).
