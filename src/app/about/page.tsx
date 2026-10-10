"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/audioEngine";

const tenets = [
  {
    code: "TENET_01",
    title: "TACTILITY OVER EPHEMERAL GLASS",
    desc: "Touchscreens reduce human expression to flat, frictionless smudges. We build heavy, knurled, solid-state instruments with mechanical tactile switches and precision faders that create deep muscle memory.",
  },
  {
    code: "TENET_02",
    title: "LOCAL SILICON SOVEREIGNTY",
    desc: "Your thoughts and creative stems belong to you. Our hardware executes 100% of its neural and DSP workloads locally on air-gapped silicon. Zero telemetry leaks. Zero cloud dependence.",
  },
  {
    code: "TENET_03",
    title: "THE SUB-MILLISECOND STANDARD",
    desc: "If sound or feedback takes more than 1 millisecond to respond, the illusion of reality is shattered. We optimize signal paths directly on FPGA state machines to achieve sub-0.8ms roundtrips.",
  },
  {
    code: "TENET_04",
    title: "JAKARTA × TOKYO ARCHITECTURE",
    desc: "Born at the intersection of Tokyo's precision synth lineage and Jakarta's relentless electronic counter-culture. Brutalist aerospace aluminum infused with neon cybernetic soul.",
  },
];

const labs = [
  {
    city: "JAKARTA",
    role: "HARDWARE FOUNDRY & ASSEMBLY",
    coords: "06.2088° S, 106.8456° E",
    spec: "5-Axis High Speed CNC Milling, Surface Finishing, Final Acoustic Calibration",
  },
  {
    city: "TOKYO",
    role: "ACOUSTIC DSP & NEURAL R&D",
    coords: "35.6762° N, 139.6503° E",
    spec: "FPGA State Machine Architecture, Bio-Potential EEG Signal Modeling, ASIC Design",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              FOUNDRY MANIFESTO // TOKO TECH KEKINIAN
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            THE KINETIX <span className="text-cyan-400">FOUNDRY</span>
          </h1>
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          We engineer post-silicon instruments, neural interfaces, and cyberdecks designed to outlive the planned obsolescence of modern consumer electronics.
        </p>
      </div>

      {/* Hero Manifesto Statement */}
      <div className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block">
            ESTABLISHED 2026 // FABRICATION DISPATCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-white leading-snug">
            WE REJECT PLASTIC TOYS AND CLOUD-LOCKED LEASES. WE BUILD MONOLITHIC INSTRUMENTS FOR OPERATORS WHO DEMAND TACTILE TRUTH.
          </h2>
          <p className="text-neutral-300 font-body text-sm sm:text-base leading-relaxed">
            Every piece of hardware bearing the KINETIX badge is milled from solid 6061 billet aluminum or sintered grade-5 titanium. Inside, discrete analog preamps and bare-metal FPGA state machines replace bloated layers of mobile operating systems.
          </p>
        </div>
      </div>

      {/* 4 Core Tenets Grid */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            ENGINEERING PRINCIPLES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tenets.map((t) => (
            <div
              key={t.code}
              onMouseEnter={() => sound.playHover()}
              className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all duration-300"
            >
              <span className="font-mono text-xs text-cyan-400 block mb-2 font-bold">
                {t.code}
              </span>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                {t.title}
              </h3>
              <p className="text-sm text-neutral-400 font-body leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Lab Locations */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            LABORATORY HUBS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab) => (
            <div
              key={lab.city}
              className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-400 font-bold">
                  {lab.role}
                </span>
                <span className="font-mono text-xs text-neutral-500">
                  {lab.coords}
                </span>
              </div>
              <h3 className="text-3xl font-black font-display text-white uppercase mb-2">
                {lab.city}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                {lab.spec}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dispatch CTA */}
      <div className="p-10 rounded-2xl border border-cyan-400/20 bg-cyan-950/20 text-center max-w-3xl mx-auto backdrop-blur-md">
        <h3 className="text-2xl font-bold font-display uppercase text-white mb-3">
          WANT TO INSPECT OUR HARDWARE IN PERSON?
        </h3>
        <p className="text-neutral-400 font-body text-xs sm:text-sm mb-6">
          Schedule a private bench listening session or explore our complete catalog of cybernetic instruments.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold uppercase transition-all shadow-[0_0_20px_rgba(0,245,255,0.3)]"
          >
            DISPATCH LAB INQUIRY →
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-mono text-xs font-bold uppercase transition-all"
          >
            EXPLORE HARDWARE
          </Link>
        </div>
      </div>
    </div>
  );
}
