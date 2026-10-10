"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Orbit, Layers, ArrowUpRight } from "lucide-react";

interface ShowcaseProject {
  id: string;
  name: string;
  codename: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  accent: string;
}

const projects: ShowcaseProject[] = [
  {
    id: "p-1",
    name: "Paradise of Indonesia",
    codename: "EXPEDITION // 01",
    category: "CULTURAL IMMERSION",
    description: "An award-winning interactive tourism experience designed with cinematic motion transitions, fluid typography, and sub-second asset delivery.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    link: "https://paradise-of-indonesia-ashen.vercel.app",
    accent: "from-cyan-500/20 via-blue-500/5 to-transparent",
  },
  {
    id: "p-2",
    name: "Annamiroh Travelindo",
    codename: "EXPEDITION // 02",
    category: "ENTERPRISE COMMERCE",
    description: "High-volume travel & reservation ecosystem handling multi-channel bookings, automated ticket provisioning, and real-time seat availability.",
    tags: ["Full-Stack", "High-Throughput", "Automated Workflows"],
    link: "https://www.annamirohtravelindo.com",
    accent: "from-purple-500/20 via-pink-500/5 to-transparent",
  },
  {
    id: "p-3",
    name: "Toko Tech Kekinian Store",
    codename: "EXPEDITION // 03",
    category: "AUTONOMOUS COMMERCE",
    description: "Production-ready digital service marketplace with seamless Midtrans Snap payments, Supabase real-time order tracking, and client portal.",
    tags: ["Next.js 16", "Supabase", "Midtrans Snap", "Vercel"],
    link: "https://tokotechkekinian.web.id",
    accent: "from-emerald-500/20 via-teal-500/5 to-transparent",
  },
  {
    id: "p-4",
    name: "Cyber Nexus Ops Console",
    codename: "EXPEDITION // 04",
    category: "QUANTUM DASHBOARD",
    description: "Centralized mission control telemetry dashboard designed for administrative fleet monitoring, financial analytics, and microservice health checks.",
    tags: ["Telemetry", "Real-Time WebSocket", "Zero-Trust"],
    accent: "from-pink-500/20 via-rose-500/5 to-transparent",
  },
];

export function ConstellationShowcase() {
  return (
    <section id="constellations" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full cosmic-glass border border-pink-500/30 text-xs text-pink-300 font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>SECTOR 04 // CONSTELLATION SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight text-white mb-6">
          EXPLORE THE <span className="cosmic-pink-gradient">ACTIVE FLEET</span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          Discover a selection of deep-space digital platforms engineered and deployed across global production networks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl p-8 cosmic-glass border border-white/10 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${proj.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-zinc-500">{proj.codename}</span>
                <span className="text-[11px] font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                  {proj.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-cyan-200 transition-colors mb-3 flex items-center justify-between">
                <span>{proj.name}</span>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.1] transition-all"
                    title="Launch Live Application"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                {proj.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
