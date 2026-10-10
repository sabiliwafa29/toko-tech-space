"use client";

import React from "react";
import Link from "next/link";
import { KineticCanvas } from "../canvas/KineticCanvas";
import { sound } from "@/lib/audioEngine";

export function HeroFlagship() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      {/* Top Telemetry Ticker */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 w-full flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/5 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>PRODUCTION BATCH: 2026-ALPHA</span>
        </div>
        <div className="hidden sm:block">
          ARCHETYPE: TACTILE CYBERNETICS // TOKO TECH KEKINIAN
        </div>
        <div className="text-cyan-400">
          MESH STATUS: NOMINAL
        </div>
      </div>

      {/* Main Hero Split Grid */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
        {/* Left: Headline & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs">
            <span>[HARDWARE FOUNDRY 2026]</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            THE NEXT SYNTHESIS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">HUMAN INTELLECT</span> & SPATIAL HARDWARE.
          </h1>

          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            We reject fragile plastic devices and opaque cloud surveillance. Toko Tech Kekinian crafts tactile instruments, autonomous neural wearables, and solid-state spatial acoustic synthesizers engineered to last a lifetime.
          </p>

          {/* Action Triggers */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              onClick={() => sound.playClick(1700)}
              className="px-8 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,245,255,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE HARDWARE FLEET</span>
              <span>→</span>
            </Link>

            <Link
              href="/studio"
              onClick={() => sound.playClick(1300)}
              className="px-8 py-4 rounded-full glass-panel hover:border-cyan-400 text-white font-mono text-sm tracking-wider uppercase transition-colors"
            >
              <span>[CUSTOMIZER STUDIO]</span>
            </Link>
          </div>

          {/* Hardware Specs Pills */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs font-mono text-white/60">
            <div>
              <span className="text-cyan-400 font-bold block text-sm">&lt; 0.8 ms</span>
              <span>FPGA DAC LATENCY</span>
            </div>
            <div>
              <span className="text-purple-400 font-bold block text-sm">4.2 GRAMS</span>
              <span>GRADE 5 TITANIUM</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold block text-sm">100% OFFLINE</span>
              <span>EDGE TENSOR NPU</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive 3D Canvas Kinetic Hologram */}
        <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[560px] relative rounded-3xl glass-panel border border-white/10 overflow-hidden flex items-center justify-center">
          <div className="absolute top-4 left-4 z-10 font-mono text-[11px] text-white/40">
            KINETIC CORE // DRAG TO ROTATE
          </div>
          <KineticCanvas className="w-full h-full" />
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 w-full pt-8 text-xs font-mono text-white/40 flex items-center justify-between border-t border-white/5">
        <span>KINETIX HARDWARE FOUNDRY • SCBD JAKARTA & AKIHABARA TOKYO</span>
        <span className="text-cyan-400">SCROLL TO INSPECT FLEET ↓</span>
      </div>
    </section>
  );
}
