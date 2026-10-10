"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Globe, Gauge } from "lucide-react";

interface MetricItem {
  id: string;
  value: string;
  unit: string;
  label: string;
  description: string;
  icon: React.ElementType;
  accent: string;
}

const metrics: MetricItem[] = [
  {
    id: "m-1",
    value: "99.999",
    unit: "%",
    label: "ORBITAL RUNTIME UPTIME",
    description: "Multi-region failover network keeping your systems continuous without interruption.",
    icon: Activity,
    accent: "text-cyan-400",
  },
  {
    id: "m-2",
    value: "< 10",
    unit: "ms",
    label: "HYPER-EDGE PING LATENCY",
    description: "Content delivered straight from the nearest planetary edge server node.",
    icon: Zap,
    accent: "text-emerald-400",
  },
  {
    id: "m-3",
    value: "150",
    unit: "+",
    label: "SYSTEMS & EXPEDITIONS DEPLOYED",
    description: "High-impact digital platforms engineered and launched successfully into orbit.",
    icon: Globe,
    accent: "text-purple-400",
  },
  {
    id: "m-4",
    value: "100",
    unit: "%",
    label: "ZERO-TRUST QUANTUM SECURITY",
    description: "Automated cryptographic handshake & payment signature verification.",
    icon: ShieldCheck,
    accent: "text-pink-400",
  },
];

export function CosmicMetrics() {
  return (
    <section id="telemetry" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Container with Cosmic Glass Surface */}
      <div className="relative rounded-3xl p-8 md:p-14 cosmic-glass border border-white/10 overflow-hidden">
        {/* Radar Background Decor */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-cyan-500/10 pointer-events-none -z-10 animate-radar" />
        <div className="absolute -right-12 -bottom-12 w-72 h-72 rounded-full border border-purple-500/10 pointer-events-none -z-10" />

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cosmic-glass border border-emerald-500/30 text-xs text-emerald-400 font-mono mb-3">
              <Gauge className="w-3.5 h-3.5" />
              <span>SECTOR 03 // LIVE FLIGHT TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Space_Grotesk'] tracking-tight text-white">
              VERIFIED FLIGHT <span className="cosmic-text-gradient">PERFORMANCE</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Real-time benchmarks recorded across active production nodes and global distribution endpoints.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-zinc-300 group-hover:text-cyan-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${item.accent}`}>
                    {item.value}
                  </span>
                  <span className="text-xl font-bold font-mono text-zinc-400">
                    {item.unit}
                  </span>
                </div>

                <div className="text-xs font-mono font-semibold text-zinc-300 tracking-wider mb-2">
                  {item.label}
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
