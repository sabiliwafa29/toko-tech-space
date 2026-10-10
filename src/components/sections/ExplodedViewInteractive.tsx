"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audioEngine";

export function ExplodedViewInteractive() {
  const [separation, setSeparation] = useState<number>(30);

  const layers = [
    {
      id: "chassis",
      name: "01 / Monolithic Chassis",
      material: "6061-T6 Aerospace Aluminum (CNC Milled)",
      role: "Provides structural rigidity, thermal heatsinking, and unyielding electromagnetic shielding.",
      offsetMultiplier: -1.2,
      color: "border-cyan-400/50 bg-cyan-950/20",
    },
    {
      id: "controls",
      name: "02 / Mechanical Tactile Layer",
      material: "Optical Encoders + Motorized Alps Faders",
      role: "Zero-backlash physical control surfaces engineered for high-velocity musical performance.",
      offsetMultiplier: -0.4,
      color: "border-amber-400/50 bg-amber-950/20",
    },
    {
      id: "dsp",
      name: "03 / Neural DSP Logic Core",
      material: "Gold-Plated 8-Layer Multilayer PCB & FPGA",
      role: "Sub-0.8ms discrete audio synthesis with Quad-DAC class-A discrete operational amplifiers.",
      offsetMultiplier: 0.4,
      color: "border-purple-400/50 bg-purple-950/20",
    },
    {
      id: "battery",
      name: "04 / Solid-State Energy Cell",
      material: "Graphene-Enhanced Lithium Polymer (18-Hr)",
      role: "Ultra-fast 15-minute USB-C PD recharge delivering zero acoustic ripple current to DAC rails.",
      offsetMultiplier: 1.2,
      color: "border-emerald-400/50 bg-emerald-950/20",
    },
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSeparation(val);
    sound.playClick(600 + val * 12);
  };

  return (
    <section className="py-24 bg-[#050608] border-y border-white/10 text-white font-body">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
              Hardware Teardown & Precision Anatomy
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold">
              Engineering with Zero Opaque Secrets
            </h2>
          </div>
          <div className="font-mono text-xs text-white/50">
            INTERNAL HARDWARE ARCHITECTURE (DECK-01)
          </div>
        </div>

        {/* Interactive Teardown Slider Control */}
        <div className="max-w-xl mx-auto mb-16 p-6 rounded-2xl glass-panel text-center space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-white/60">LAYER SEPARATION INDEX:</span>
            <span className="text-cyan-400 font-bold">{separation}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={separation}
            onChange={handleSliderChange}
            className="w-full accent-cyan-400 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-white/40">
            <span>[ASSEMBLED CORE]</span>
            <span>[FULLY EXPLODED BLUEPRINT]</span>
          </div>
        </div>

        {/* 3D Stacked Layer Cards Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {layers.map((layer) => {
            const verticalShift = (layer.offsetMultiplier * separation * 0.45);

            return (
              <div
                key={layer.id}
                style={{ transform: `translateY(${verticalShift}px)` }}
                className={`p-6 rounded-2xl border transition-transform duration-300 ${layer.color} backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-xl`}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-white/70 block mb-2">
                    {layer.name}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    {layer.material}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {layer.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50">
                  <span>TOLERANCE: ±0.01 MM</span>
                  <span className="text-cyan-400">STATUS: VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
