import Link from "next/link";
import { HeroFlagship } from "@/components/sections/HeroFlagship";
import { BentoGridShowcase } from "@/components/sections/BentoGridShowcase";
import { ExplodedViewInteractive } from "@/components/sections/ExplodedViewInteractive";
import TelemetryMetrics from "@/components/sections/TelemetryMetrics";

export default function HomePage() {
  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* 1. Flagship Cybernetic Hero Section with 3D Canvas Projection */}
      <HeroFlagship />

      {/* 2. Signature Bento Grid Showcase with Native Audio Synthesis & Pulse Controls */}
      <BentoGridShowcase />

      {/* 3. Interactive Hardware Exploded View Teardown */}
      <ExplodedViewInteractive />

      {/* 4. Real-time Telemetry Tolerances & Lab Benchmarks */}
      <TelemetryMetrics />

      {/* 5. Custom Hardware Configurator Teaser & Direct Fleet Dispatch CTA */}
      <section className="py-20 px-6 md:px-16 max-w-[1920px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-neutral-900/60 to-purple-950/40 p-8 md:p-16 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(0,245,255,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(#00F5FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/60 text-cyan-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              BESPOKE FABRICATION PIPELINE ACTIVE
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white">
              BUILD YOUR CUSTOM <span className="text-cyan-400">CYBERNETIC RIG</span>
            </h2>

            <p className="text-neutral-400 font-body text-base md:text-lg leading-relaxed">
              Step into the KINETIX Studio. Select precision chassis finishes, laser-engraved cryptographic signatures, and custom neural expansions in real-time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/studio"
                className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold font-mono text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:scale-105"
              >
                LAUNCH STUDIO CONFIGURATOR →
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 rounded-xl border border-white/20 hover:border-cyan-400/50 bg-black/40 hover:bg-white/5 text-white font-mono text-sm uppercase tracking-wider transition-all duration-200"
              >
                EXPLORE ALL HARDWARE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
