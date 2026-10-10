# Product Requirements Document (PRD)

## Project: KINETIX // Toko Tech Kekinian (TTK 2026)
### *Next-Gen Cybernetic Hardware, Neural Wearables & Spatial Audio Foundry*
- **Target Domain:** `tokotechkekinian.biz.id`
- **Design Intelligence Source:** `ui-ux-pro-max` (Bento Grid Showcase + Cybernetic Dark Glassmorphism + Dynamic HUD Telemetry)
- **Framework & Stack:** Next.js 15+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Web Audio API, Canvas 2D/3D Procedural Engine
- **Version:** 2.0.0
- **Status:** Proposed for Implementation

---

## 1. Executive Summary & Creative Vision

**KINETIX** is the reimagined digital flagship for **Toko Tech Kekinian (TTK)** — positioning the brand not merely as a tech shop, but as an avant-garde cybernetic hardware foundry and spatial computing laboratory in 2026.

Drawing design intelligence from the **`ui-ux-pro-max`** framework:
- **Design Archetype:** Cybernetic Minimalist Glassmorphism meets Retro-Futuristic Industrial Brutalism (inspired by *Teenage Engineering*, *Nothing Technology*, and *Apple Spatial*).
- **Core Aesthetic:** Obsidian matte black surfaces (`#08090D`), frosted glassmorphic containers with 20px blur and hair-thin holographic borders (`rgba(0, 245, 255, 0.2)`), precision dot-matrix telemetry overlays, and sharp CNC engineering micro-markers.
- **Multimodal Sensory Experience:**
  - **Procedural Canvas Hologram:** Interactive kinetic 3D wireframe core that rotates, reacts to cursor drag, and expands on demand.
  - **Synthesizer Soundscape (Web Audio API):** Zero external audio assets; fully procedural micro-clicks, subtle sub-bass ambient drone, and frequency synthesizer tones when interacting with dials and sliders.
  - **Magnetic HUD Cursor:** Context-aware cursor follower providing real-time telemetry markers (`[EXPLODE]`, `[DRAG]`, `[SPEC]`, `[CONFIG]`).
  - **Interactive Hardware Configurator Studio:** Live interactive builder allowing users to customize chassis materials, LED accents, and laser-engraved telemetry.

---

## 2. Design System & Tokens (`ui-ux-pro-max` Specifications)

### 2.1 Color Palette (Cybernetic Obsidian & Holographic Accents)
| Token | Hex / Value | Semantic Application |
| :--- | :--- | :--- |
| **Obsidian Void** | `#08090D` | Primary body and viewport background |
| **Cyber Surface** | `rgba(18, 21, 30, 0.70)` | Glassmorphic card surfaces with `backdrop-filter: blur(20px)` |
| **Cyber Cyan** | `#00F5FF` | Primary action accent, active telemetry markers, laser glows |
| **Pulse Violet** | `#8B5CF6` | Secondary gradient accent, neural status indicators |
| **Signal Amber** | `#FF9F1C` | Diagnostic warnings, special hardware editions, tactile toggles |
| **Pure Titanium** | `#F8FAFC` | Primary display and heading typography |
| **Muted Telemetry**| `#94A3B8` | Technical readouts, specifications, secondary labels |
| **Holo Border** | `rgba(255, 255, 255, 0.08)` | Hairline container borders (`rgba(0, 245, 255, 0.3)` on hover) |

### 2.2 Typography Hierarchy
- **Display & Headings:** `Space Grotesk` (Google Font) — Bold geometric grotesque with futuristic technical character, wide tracking, and sharp angles.
- **Body & Controls:** `Inter` / `Plus Jakarta Sans` — Neutral, high-contrast readability across all responsive viewports.
- **HUD & Telemetry:** `Share Tech Mono` / `JetBrains Mono` — Tabular monospaced figures for model numbers, sensor readouts, frequency specs, and currency conversions.

### 2.3 Layout & Grid Architecture
- **Fluid Bento Grid (`bento-grid-showcase`):** Asymmetrical modular bento layout featuring high information density without visual clutter.
- **Precision Responsive Breakpoints:**
  - Mobile (< 768px): Single-column stacked cards, full touch optimization, bottom sticky HUD.
  - Tablet (768px - 1024px): 2-column modular grid with interactive tap reveals.
  - Desktop (1024px - 1440px): 12-column bento grid with magnetic cursor tracking.
  - Ultrawide (> 1440px): 16-column extended telemetry dock and live diagnostics canvas.

---

## 3. Information Architecture & Complete Route Map

```
/ (Flagship Experience)
├── Top Telemetry HUD (Live clock, audio synthesizer toggle, cart counter, status)
├── Hero: Autonomous Kinetic Canvas Hologram + Kinetic Headline
├── Bento Grid Flagship Hardware Showcase (4 core devices)
├── Interactive Modular Breakdown & Exploded View Explorer
├── Live Global Telemetry & Autonomous Grid Metrics
├── Cybernetic Community Dispatch & Field Logs
└── Flagship Footer (Tokyo & Jakarta coordinates, encrypted transmission, legal)

/products (Complete Hardware Catalog)
├── Category Filter: Neural Wearables | Spatial Audio | Cyber Decks | Kinetic Accessories
├── Interactive Sorting: High-Fidelity Specs | Rarity | Price
└── /products/[slug] (Interactive Product Deep Dive)
    ├── 360° Interactive Canvas Product Breakdown
    ├── Technical Schematics & Dimensional Blueprint
    ├── Tactile Audio Frequency Previewer (Web Audio API)
    ├── Custom Engraving & Spec Selector
    └── Add to Fleet / Real-Time Cart Dispatch

/studio (Hardware Configurator & Customization Lab)
├── Interactive 3D/Canvas Chassis Material Selector (Matte Obsidian, Frost Titanium, Neon Amber, Cyber Cyan)
├── Component Customizer (Faceplate, Keycaps, Optical Modules)
├── Live Spec & Telemetry Calculator
└── Direct Order Configuration Pipeline

/ecosystem (Autonomous Systems & OS)
├── Spatial OS & Neural Kernel Architecture
├── Multi-Device Mesh Topology Visualization
└── Autonomous Agent Integrations (AGY Protocol)

/journal (R&D Whitepapers & Engineering Logs)
├── Research Papers: Brain-Computer Interfaces, Spatial Audio Acoustics, Solid-State Synthesizers
└── Design Philosophy Essays & Hardware Teardowns

/about (The Foundry & Design Manifesto)
├── The Story of Toko Tech Kekinian (From Digital Store to Hardware Foundry)
├── Industrial Design Philosophy: Tactility, Transparency, Longevity
└── Core Engineering Team & Global Foundry Facilities

/contact (Transmission Console)
├── Encrypted Terminal Message Dispatch Form
├── Global Lab Coordinates (Jakarta Flagship, Tokyo R&D Lab)
└── Support Diagnostics & Firmware Support
```

---

## 4. Key Interactive Modules & Best Practice Implementations

### 4.1 Procedural Canvas Hologram (Hero Section)
- **Engine:** Pure HTML5 Canvas 2D/3D procedural rendering (zero heavy 3D library bundles, instant load time).
- **Behavior:**
  - Renders an interactive kinetic polyhedron wireframe surrounded by orbital sensor rings and drifting telemetry data particles.
  - Responds in real-time to pointer drag and gyroscope tilt.
  - Clicking `[EXPAND CORE]` triggers an animated particle burst and transitions into the hardware bento showcase.

### 4.2 Web Audio API Tactile Sound Engine
- **Procedural Audio (Zero Assets):**
  - Synthesized ambient harmonic drone (432 Hz fundamental frequency) creating an immersive spatial depth.
  - Tactile micro-clicks and mechanical switch sounds when clicking buttons, toggling filters, or dragging configurator dials.
  - Interactive frequency slider in the Spatial Audio card allowing users to hear generated sine/sawtooth soundscapes.
  - Global HUD Mute Switch with animated audio visualizer equalizer bars.

### 4.3 Interactive Hardware Configurator (`/studio`)
- Live preview of the **Kinetix Deck-01 Synth**:
  - **Chassis Finish Swapper:** Matte Obsidian (`#0F1117`), Frosted Titanium (`#D1D5DB`), Cyberpunk Amber (`#FF9F1C`), Neon Cyan (`#00F5FF`).
  - **Modular Optical Accent:** Toggle glowing accent LEDs.
  - **Live Laser Engraving:** Real-time text preview rendered directly onto the device chassis.
  - **Dynamic Price & Specs Accumulator:** Real-time updating telemetry readout.

### 4.4 Slide-Out Cybernetic Cart Drawer
- Accessible from the persistent top HUD on every page.
- Real-time cart state with device preview thumbnail, configured finish, and quantity management.
- Live currency switcher: IDR (Rupiah), USD ($), and ETH (Ethereum).
- Simulated frictionless quantum checkout flow with animated verification progress.

---

## 5. Technical Stack & Verification Strategy

### 5.1 Architecture Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS with CSS Variables for theme tokens
- **Animations:** Framer Motion (layout animations, spring physics, route transitions)
- **Sound:** Native HTML5 Web Audio API
- **Icons:** Lucide React + custom precision geometric HUD SVG icons

### 5.2 Quality Assurance & Performance Targets
- **Zero Build Errors:** `npm run build` compiles all static and dynamic routes cleanly.
- **Accessibility:** Minimum 4.5:1 text contrast ratios, visible keyboard focus rings, `prefers-reduced-motion` fallbacks.
- **Performance:** Sub-second LCP, zero layout shifts, smooth 60 FPS animation loops.
- **Live Deployment:** Automated CI/CD deployment to `https://tokotechkekinian.biz.id`.
