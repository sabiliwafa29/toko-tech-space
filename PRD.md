# Product Requirements Document (PRD)
## Project: Toko Tech Space — Full-Animation Cosmic Landing Page
**Target Domain:** `tokotechkekinian.biz.id`  
**Deployment Target:** Vercel  
**Version:** 1.0.0  
**Status:** Approved & Active  

---

## 1. Executive Summary & Vision

**Toko Tech Space** is an ultra-immersive, high-performance single-page web experience engineered for *Toko Tech Kekinian*. Designed with a sci-fi deep-space exploration aesthetic, the website showcases futuristic digital solutions, autonomous systems, high-speed cloud infrastructure, and modern software development.

The landing page is designed to maximize emotional impact through:
- **60 FPS procedural Canvas 3D Starfield & Particle Warp engine**
- **Cinematic typography, glassmorphism, and neon cosmic halos**
- **Smooth scroll-driven animations and 3D spring-physics interactions using Framer Motion**
- **Synthetic deep-space ambient audio synth powered by the Web Audio API (zero external assets)**
- **Fully responsive single-page architecture with HUD telemetry navigation**

---

## 2. Branding & Aesthetic Direction

### 2.1 Color Palette (Cosmic Deep Space)
| Token | Hex Value | Application |
| :--- | :--- | :--- |
| **Space Void** | `#030014` | Primary body background |
| **Deep Nebula** | `#080420` | Section backgrounds and container surfaces |
| **Cosmic Surface** | `rgba(255, 255, 255, 0.03)` | Glassmorphic cards with `backdrop-filter: blur(16px)` |
| **Border Starlight** | `rgba(255, 255, 255, 0.12)` | Subtle holographic container borders |
| **Hyper Cyan** | `#00F0FF` | Primary action glow, orbital markers, metrics |
| **Nebula Violet** | `#8A2BE2` / `#7000FF` | Secondary gradient accent, aura glows |
| **Solar Flare** | `#FF007A` | Warning states, special badges, tertiary accent |
| **Starlight Off-White**| `#F1F5F9` | Primary typography |
| **Muted Telemetry** | `#94A3B8` | Body text, technical labels, telemetry readouts |

### 2.2 Typography
- **Display & Headings:** `Syne` / `Clash Display` style geometric display font with tight leading and wide uppercase tracking.
- **Body & Controls:** `Inter` / `Plus Jakarta Sans` for clean, legible interfaces.
- **Telemetry & Coordinates:** `JetBrains Mono` / `Courier New` monospaced font for telemetry numbers, system status, and terminal inputs.

---

## 3. Core Architecture & Sections (1-Page Flow)

The landing page operates as a unified, seamless viewport flow divided into 6 interactive sectors:

```
┌────────────────────────────────────────────────────────────────┐
│  [Top HUD] Coordinates | Mission Clock | Audio FX | Nav Dock   │
├────────────────────────────────────────────────────────────────┤
│  Sector 01: Mission Control (Hero)                             │
│  - Cosmic Badge, Kinetic Title, Warp Speed Trigger, CTAs       │
├────────────────────────────────────────────────────────────────┤
│  Sector 02: Planetary Modules (Core Tech Systems)              │
│  - 4 Orbiting Tech Architecture Modules with 3D Tilt           │
├────────────────────────────────────────────────────────────────┤
│  Sector 03: Live Telemetry & Mission Benchmarks                │
│  - Real-time animated counters: 99.999% uptime, <10ms ping     │
├────────────────────────────────────────────────────────────────┤
│  Sector 04: Constellation Showcase (Featured Deliverables)     │
│  - Holographic showcase grid with glow edge reflections        │
├────────────────────────────────────────────────────────────────┤
│  Sector 05: Transmission Console (Contact & Mission Inquiry)   │
│  - Interactive telemetry dispatch form + Direct WhatsApp link  │
├────────────────────────────────────────────────────────────────┤
│  [Footer] Cosmic Coordinates | Social Signals | Copyright      │
└────────────────────────────────────────────────────────────────┘
```

### 3.1 Top Space HUD & Floating Dock
- **Mission Time & Coordinates:** Dynamic live clock (UTC/Space Time) and coordinate tracker.
- **Audio Atmosphere Switch:** Interactive synthesizer button producing low-frequency cosmic ambient drone (`Web Audio API` oscillator) with animated equalizer bars.
- **Smooth Anchor Dock:** Rapid jump to sectors (`#mission`, `#systems`, `#telemetry`, `#constellations`, `#transmission`).

### 3.2 Sector 01: Mission Control (Hero Section)
- **Status Indicator:** Glowing pulsing dot `"SYSTEM STATUS: WARP DRIVE ONLINE"`.
- **Kinetic Headline:** `"ENGINEERING THE NEXT COSMIC ERA OF DIGITAL COMMERCE & SOFTWARE"`.
- **Warp Button:** Clicking `"ENGAGE WARP SPEED"` triggers instantaneous acceleration of the 3D starfield particles, with motion blur and radial speed lines.
- **Quick CTAs:** Primary `"Transmit Project"` button and secondary `"Explore Fleet"` button.

### 3.3 Sector 02: Planetary Modules (Capabilities)
Four interactive orbital modules with Framer Motion spring physics:
1. **Nebula Core (Next.js & Frontend Architecture):** Ultra-fast rendering, sub-second LCP, zero layout shifts.
2. **Quantum AI (Autonomous Intelligent Systems):** Multi-agent orchestration, automated customer workflows.
3. **Pulsar Cloud (Microservices & APIs):** High-throughput PostgreSQL, Supabase, real-time edge caches.
4. **Void Shield (Defense & Security):** Zero-trust architecture, end-to-end encryption, automated monitoring.

### 3.4 Sector 03: Live Telemetry & Mission Benchmarks
- Dynamic counters that trigger upon scroll into view:
  - `99.999%` — Orbital Infrastructure Reliability
  - `< 12 ms` — Global Edge Transmission Latency
  - `150+` — Successful Spacecraft & Systems Deployed
  - `Zero-Loss` — Quantum Data Security Guarantee

### 3.5 Sector 04: Constellation Showcase
- Holographic cards highlighting flagship capabilities:
  - High-conversion E-Commerce engines
  - Custom Enterprise SaaS dashboards
  - Interactive 3D WebGL / Canvas applications
- Interactive 3D tilt effect reflecting cursor position on mousemove.

### 3.6 Sector 05: Transmission Console (Contact HUD)
- Form fields formatted as space terminal telemetry:
  - `CALLSIGN / NAME`
  - `TRANSMISSION FREQUENCY (EMAIL / WA)`
  - `MISSION OBJECTIVE (PROJECT BRIEF)`
  - `DISPATCH TRANSMISSION BUTTON`
- Instant simulated telemetry verification on submission with confirmation readout.
- Direct backup WhatsApp channel (`wa.me/6285156027984`).

---

## 4. Animation & Motion Design Guidelines

1. **Procedural 3D Canvas Starfield:**
   - 800+ stars rendered in HTML5 2D Canvas with Z-axis perspective math.
   - Mouse move dynamically shifts focal point (parallax depth).
   - Warp speed mode ramps velocity by 10x with particle streak trails.
2. **Framer Motion Elements:**
   - `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`.
   - Spring hover physics: `whileHover={{ scale: 1.02, y: -4 }}`.
   - Orbital rotation animations using CSS keyframes with GPU acceleration (`transform: translate3d(...)`).
3. **Performance Budget:**
   - 60 frames per second sustained.
   - Starfield uses `requestAnimationFrame` with delta time calculation.
   - Respects `prefers-reduced-motion` media queries.

---

## 5. Technical Specifications & Dependencies

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS v4 + `@tailwindcss/postcss`
- **Animation Engine:** `framer-motion`
- **Icons:** `lucide-react`
- **Audio Engine:** HTML5 Web Audio API (Native `AudioContext` synthesizer)
- **Utility:** `clsx`, `tailwind-merge`

---

## 6. Vercel Deployment & Domain Configuration

- **Target Domain:** `tokotechkekinian.biz.id`
- **Platform:** Vercel (Hobby / Pro)
- **Deployment Process:**
  1. Build code locally to guarantee clean output: `npm run build`.
  2. Push repository to GitHub: `sabiliwafa29/toko-tech-space`.
  3. Import repository in Vercel.
  4. In Vercel Project Settings → **Domains**, add `tokotechkekinian.biz.id` and `www.tokotechkekinian.biz.id`.
  5. Configure DNS Records with domain registrar:
     - **Type A:** Name `@` → Value `76.76.21.21`
     - **Type CNAME:** Name `www` → Value `cname.vercel-dns.com`
