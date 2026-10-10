"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/audioEngine";

const layers = [
  {
    num: "01",
    title: "PHYSICAL SILICON FOUNDRY",
    tag: "HARDWARE LAYER",
    tech: "FPGA State-Machines + 6061-T6 Monoliths",
    desc: "Discrete hardware execution with zero OS bloat. Dedicated cryptographic coprocessors, Class-A audio signal paths, and dry-contact gold bio-electrodes.",
  },
  {
    num: "02",
    title: "KINETIX REAL-TIME MICROKERNEL",
    tag: "KERNEL LAYER",
    tech: "Bare-Metal Rust + Asynchronous I/O",
    desc: "Zero-allocation deterministic memory management. Guarantees sub-0.8ms latency guarantees from physical sensor trigger to acoustic/visual feedback.",
  },
  {
    num: "03",
    title: "NEURAL INTENT PROTOCOL (NIP)",
    tag: "PROTOCOL LAYER",
    tech: "Ultra-Wideband 2.4GHz + Sub-Millivolt Telemetry",
    desc: "Predictive bio-potential intent decoding. Synthesizes motor cortex signals prior to physical displacement for telepathic latency perception.",
  },
  {
    num: "04",
    title: "SPATIAL HOLOGRAPHIC COMPOSITOR",
    tag: "INTERFACE LAYER",
    tech: "6-DoF Spatial Anchors + Binaural Acoustics",
    desc: "Zero-drift persistent virtual spatial anchors tied to physical acoustic emitters. Transforms any physical room into an infinite cybernetic canvas.",
  },
];

export default function EcosystemPage() {
  const [activeLayer, setActiveLayer] = useState(0);

  const handleLayerClick = (idx: number) => {
    sound.playClick(1400 + idx * 200);
    setActiveLayer(idx);
  };

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              ARCHITECTURE & ARCHIVE // SYSTEM TOPOLOGY
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            SPATIAL <span className="text-cyan-400">ECOSYSTEM</span>
          </h1>
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          The KINETIX hardware fleet does not exist in isolation. Every instrument, wearable, and compute node syncs over an air-gapped localized quantum bus.
        </p>
      </div>

      {/* Main Interactive Diagram & Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Left: Architecture Stack */}
        <div className="lg:col-span-6 space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
            SYSTEM ARCHITECTURE STACK [CLICK TO EXPAND]
          </h2>

          <div className="space-y-3">
            {layers.map((layer, idx) => (
              <div
                key={layer.num}
                onClick={() => handleLayerClick(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeLayer === idx
                    ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_30px_rgba(0,245,255,0.15)] translate-x-2"
                    : "border-white/10 bg-neutral-900/40 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/30 text-cyan-400 font-bold">
                      LAYER {layer.num}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                      {layer.tag}
                    </span>
                  </div>
                  {activeLayer === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>

                <h3 className="text-lg font-bold font-display text-white mt-1">
                  {layer.title}
                </h3>
                <p className="font-mono text-xs text-cyan-400/80 mt-1">
                  {layer.tech}
                </p>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-body">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Interactive Telemetry Node Monitor */}
        <div className="lg:col-span-6 sticky top-28">
          <div className="p-8 rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8 font-mono text-xs">
              <span className="text-cyan-400 font-bold">TOPOLOGY SIMULATOR</span>
              <span className="text-neutral-500">PACKET INTERVAL: 0.1ms</span>
            </div>

            {/* Visual Node Diagram */}
            <div className="relative h-80 rounded-2xl border border-white/5 bg-black/60 flex items-center justify-center p-6">
              {/* Radial Grid Circles */}
              <div className="absolute w-64 h-64 rounded-full border border-cyan-500/10 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-44 h-44 rounded-full border border-cyan-500/20 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute w-24 h-24 rounded-full border border-cyan-500/30 pointer-events-none" />

              {/* Core Hub */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-cyan-950/80 border border-cyan-400 flex flex-col items-center justify-center text-center p-2 shadow-[0_0_30px_rgba(0,245,255,0.3)]">
                <span className="font-mono text-[9px] text-cyan-300 font-bold">KERNEL</span>
                <span className="font-mono text-[10px] text-white font-black">ACTIVE</span>
              </div>

              {/* Peripheral Orbit Nodes */}
              <div className="absolute top-8 left-8 p-3 rounded-xl border border-white/10 bg-neutral-900/80 font-mono text-xs text-center">
                <span className="text-cyan-400 block font-bold">DECK-01</span>
                <span className="text-[10px] text-neutral-400">DSP Synthesizer</span>
              </div>

              <div className="absolute top-8 right-8 p-3 rounded-xl border border-white/10 bg-neutral-900/80 font-mono text-xs text-center">
                <span className="text-purple-400 block font-bold">NEURORING</span>
                <span className="text-[10px] text-neutral-400">Bio-Electrode</span>
              </div>

              <div className="absolute bottom-8 left-8 p-3 rounded-xl border border-white/10 bg-neutral-900/80 font-mono text-xs text-center">
                <span className="text-amber-400 block font-bold">VISOR-X</span>
                <span className="text-[10px] text-neutral-400">Spatial Optics</span>
              </div>

              <div className="absolute bottom-8 right-8 p-3 rounded-xl border border-white/10 bg-neutral-900/80 font-mono text-xs text-center">
                <span className="text-green-400 block font-bold">NODE-PUCK</span>
                <span className="text-[10px] text-neutral-400">Offline NPU</span>
              </div>
            </div>

            {/* Diagnostic readout */}
            <div className="mt-8 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span>ACTIVE INSPECTED SUBSYSTEM:</span>
                <span className="text-cyan-400 font-bold">{layers[activeLayer].title}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>CROSS-NODE SYNCHRONIZATION:</span>
                <span className="text-green-400 font-bold">100% PHASE LOCKED</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>ENCRYPTION ARCHITECTURE:</span>
                <span className="text-white font-bold">POST-QUANTUM KYBER-1024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA to Hardware Catalog */}
      <div className="text-center p-12 rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-md max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold font-display uppercase text-white mb-3">
          DISCOVER THE PHYSICAL FLEET
        </h3>
        <p className="text-neutral-400 font-body text-sm max-w-xl mx-auto mb-6">
          Every device is manufactured to order with direct micron precision in our Jakarta & Tokyo laboratories.
        </p>
        <Link
          href="/products"
          className="inline-block px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.3)]"
        >
          VIEW COMPATIBLE HARDWARE →
        </Link>
      </div>
    </div>
  );
}
