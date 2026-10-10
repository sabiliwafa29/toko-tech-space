"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, Shield, Sparkles, ArrowRight } from "lucide-react";
import { spaceAudio } from "../audio/SpaceAudioEngine";

interface HeroMissionProps {
  onWarpToggle: () => void;
  isWarping: boolean;
}

export function HeroMission({ onWarpToggle, isWarping }: HeroMissionProps) {
  const handleWarpClick = () => {
    spaceAudio.playWarpFx();
    onWarpToggle();
  };

  return (
    <section id="mission" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Orbiting Celestial Ring Visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[700px] md:h-[900px] rounded-full border border-cyan-500/[0.08] pointer-events-none -z-10 animate-spin" style={{ animationDuration: "60s" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#00f0ff]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[600px] h-[450px] md:h-[600px] rounded-full border border-purple-500/[0.12] pointer-events-none -z-10 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
        <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Telemetry Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full cosmic-glass border border-cyan-500/30 text-xs text-cyan-300 font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span>MISSION PROTOCOL // DEEP SPACE WEB ARCHITECTURE</span>
        </motion.div>

        {/* Hero Title with Cinematic Space Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] font-['Space_Grotesk'] mb-6"
        >
          <span className="block text-white">DISCOVER THE</span>
          <span className="block cosmic-text-gradient">NEXT COSMIC ERA</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
            OF DIGITAL COMMERCE
          </span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-10"
        >
          We engineer hyper-performance web applications, autonomous AI pipelines,
          and quantum-grade digital experiences built for brands ready to transcend atmospheric limits.
        </motion.p>

        {/* Interactive Action Triggers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleWarpClick}
            className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold font-mono text-sm tracking-wide transition-all cursor-pointer ${
              isWarping
                ? "bg-cyan-400 text-black shadow-[0_0_35px_rgba(0,240,255,0.8)] scale-105"
                : "bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-[1.02]"
            }`}
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>{isWarping ? "WARP ENGAGED // VELOCITY 10x" : "ENGAGE WARP DRIVE"}</span>
          </button>

          <a
            href="#transmission"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl cosmic-glass border border-white/10 hover:border-cyan-400/50 text-white font-mono text-sm tracking-wide transition-all group hover:bg-white/[0.06]"
          >
            <span>TRANSMIT BRIEF</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Live Telemetry Micro-readout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-left"
        >
          <div className="cosmic-glass p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-zinc-500 font-mono block">PROPULSION</span>
            <span className="text-sm font-mono text-cyan-400 font-semibold">NEXT.JS 15 + R19</span>
          </div>
          <div className="cosmic-glass p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-zinc-500 font-mono block">WARP VELOCITY</span>
            <span className="text-sm font-mono text-emerald-400 font-semibold">{isWarping ? "9.8c (WARP)" : "0.98c (CRUISE)"}</span>
          </div>
          <div className="cosmic-glass p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-zinc-500 font-mono block">DEFENSE SHIELD</span>
            <span className="text-sm font-mono text-purple-400 font-semibold">ZERO-TRUST 100%</span>
          </div>
          <div className="cosmic-glass p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-zinc-500 font-mono block">STATION STATUS</span>
            <span className="text-sm font-mono text-white font-semibold">ALL NODES GREEN</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
