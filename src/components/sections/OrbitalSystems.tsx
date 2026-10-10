"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, ShieldCheck, Database, Orbit, Radio, Zap, ExternalLink } from "lucide-react";

interface SystemModule {
  id: string;
  codename: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  icon: React.ElementType;
  glowColor: string;
  borderColor: string;
}

const modules: SystemModule[] = [
  {
    id: "mod-1",
    codename: "SYS-01 // NEBULA CORE",
    title: "Next-Gen Frontend Architectures",
    category: "PROPULSION & UI",
    description: "Ultra-optimized Next.js 15 App Router engines featuring sub-second LCP, zero layout shifts, and cinematic Framer Motion physics.",
    specs: ["Sub-300ms First Contentful Paint", "Turbopack Bundling Engine", "60 FPS GPU Canvas Integration"],
    icon: Cpu,
    glowColor: "from-cyan-500/20 to-blue-500/5",
    borderColor: "hover:border-cyan-400/50",
  },
  {
    id: "mod-2",
    codename: "SYS-02 // QUANTUM AI",
    title: "Autonomous Agent Orchestration",
    category: "INTELLIGENCE ENGINE",
    description: "Deep-space AI agent pipelines designed to automate complex customer interactions, analyze intent, and accelerate conversions.",
    specs: ["Multi-Agent Event Loops", "Zero-Latency Stream Reasoning", "Self-Healing Workflows"],
    icon: Terminal,
    glowColor: "from-purple-500/20 to-pink-500/5",
    borderColor: "hover:border-purple-400/50",
  },
  {
    id: "mod-3",
    codename: "SYS-03 // PULSAR CLOUD",
    title: "Distributed Edge & Supabase DB",
    category: "DATA & TRANSMISSION",
    description: "Global edge-replicated databases with connection pooling, transactional integrity, and instant multi-region failover.",
    specs: ["Postgres Connection Pooler", "Global Edge CDN Caching", "Real-Time WebSocket Sync"],
    icon: Database,
    glowColor: "from-emerald-500/20 to-teal-500/5",
    borderColor: "hover:border-emerald-400/50",
  },
  {
    id: "mod-4",
    codename: "SYS-04 // VOID SHIELD",
    title: "Zero-Trust Commerce & Security",
    category: "DEFENSE MATRIX",
    description: "Military-grade encryption, PCI-DSS payment compliance with automated Midtrans webhook signature validation and tokenization.",
    specs: ["SHA-512 Signature Verifications", "End-to-End Payload Crypto", "Real-Time Threat Deflector"],
    icon: ShieldCheck,
    glowColor: "from-pink-500/20 to-rose-500/5",
    borderColor: "hover:border-pink-400/50",
  },
];

export function OrbitalSystems() {
  return (
    <section id="systems" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full cosmic-glass border border-purple-500/30 text-xs text-purple-300 font-mono mb-4">
          <Orbit className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: "10s" }} />
          <span>SECTOR 02 // ORBITAL INFRASTRUCTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight text-white mb-6">
          ENGINEERED FOR <span className="cosmic-cyan-gradient">DEEP-SPACE SCALE</span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          Explore our modular technology stack engineered to operate reliably in the most demanding commercial environments.
        </p>
      </div>

      {/* Grid of System Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {modules.map((mod, index) => {
          const Icon = mod.icon;
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-7 cosmic-glass border border-white/10 ${mod.borderColor} transition-all duration-300 group overflow-hidden`}
            >
              {/* Subtle Ambient Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mod.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Top Meta Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">{mod.codename}</span>
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">{mod.category}</span>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_#34d399]" />
              </div>

              {/* Title & Body */}
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {mod.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                {mod.description}
              </p>

              {/* Telemetry Specs */}
              <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                {mod.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
