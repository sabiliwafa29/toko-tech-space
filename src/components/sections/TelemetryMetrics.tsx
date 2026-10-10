"use client";

import React, { useState } from "react";
import { audioEngine } from "@/lib/audioEngine";

const metrics = [
  {
    tag: "SYS_LATENCY",
    value: "<0.8ms",
    unit: "DSP ROUNDTRIP",
    label: "Neural-Acoustic Pipeline",
    desc: "Sub-millisecond real-time digital signal processing pipeline with zero perceptible spatial drift.",
    freq: 440,
    status: "OPTIMAL",
  },
  {
    tag: "SAMPLING_RATE",
    value: "1,000Hz",
    unit: "EEG ACQUISITION",
    label: "Neuro-Synaptic Bandwidth",
    desc: "Active pre-frontal cortex telemetry calibrated across micro-volt bio-potential variance.",
    freq: 520,
    status: "SYNCED",
  },
  {
    tag: "LOCAL_INFERENCE",
    value: "100%",
    unit: "AIR-GAPPED NPU",
    label: "Edge Neural Computation",
    desc: "Zero cloud tethering. Full onboard 14B parameter multimodal model execution in silicon.",
    freq: 580,
    status: "SECURE",
  },
  {
    tag: "CHASSIS_ALLOY",
    value: "6061-T6",
    unit: "AEROSPACE GRADE",
    label: "Mono-Crystalline Billet",
    desc: "5-axis micron CNC sculpted aluminum-magnesium matrix with vapor-honed bead blasted finish.",
    freq: 660,
    status: "RIGID",
  },
  {
    tag: "QUANTUM_BUS",
    value: "128GB/s",
    unit: "INTERCONNECT BANDWIDTH",
    label: "Sub-Nanosecond Bridge",
    desc: "Ultra-low capacitance copper-graphene hybrid trace bus powering cross-module synchronization.",
    freq: 740,
    status: "ACTIVE",
  },
  {
    tag: "POWER_CELL",
    value: "48-HR",
    unit: "GaN FAST-RECHARGE",
    label: "Solid-State Polymer",
    desc: "Bi-directional inductive resonance delivering 80% capacity restoration in 18 minutes.",
    freq: 880,
    status: "CHARGED",
  },
];

export default function TelemetryMetrics() {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const handleHover = (idx: number, freq: number) => {
    setActiveMetric(idx);
    audioEngine.playTone(freq, 0.08, "sine");
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-black/60 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                BENCHMARK TELEMETRY // REAL-TIME STANDARDS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
              HARDWARE <span className="text-cyan-400">TOLERANCES</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Every millimeter and microsecond of the KINETIX physical architecture is held to rigorous laboratory standards. Zero compromises in signal integrity or structural resilience.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={m.tag}
              onMouseEnter={() => handleHover(idx, m.freq)}
              onMouseLeave={() => setActiveMetric(null)}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                activeMetric === idx
                  ? "bg-cyan-950/20 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.15)] -translate-y-1"
                  : "bg-neutral-900/40 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                <div className={`w-2 h-2 absolute top-2 right-2 border-t-2 border-r-2 ${activeMetric === idx ? 'border-cyan-400' : 'border-neutral-700'}`} />
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                  {m.tag}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-cyan-500/20 text-cyan-400 bg-cyan-950/30">
                  {m.status}
                </span>
              </div>

              {/* Main Metric Value */}
              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight flex items-baseline gap-2">
                  <span>{m.value}</span>
                </div>
                <div className="font-mono text-xs text-cyan-400/80 font-bold tracking-wider uppercase mt-1">
                  {m.unit}
                </div>
              </div>

              {/* Metric Title & Description */}
              <h3 className="text-sm font-semibold text-neutral-200 mt-4 mb-2">
                {m.label}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {m.desc}
              </p>

              {/* Telemetry wave bar */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-1">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      activeMetric === idx
                        ? i % 3 === 0
                          ? "bg-cyan-400"
                          : "bg-cyan-600/50"
                        : "bg-neutral-800"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
