"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Radio, Compass, Orbit, Cpu, BarChart3, Send } from "lucide-react";
import { spaceAudio } from "../audio/SpaceAudioEngine";

interface SpaceHUDProps {
  onWarpToggle: () => void;
  isWarping: boolean;
}

export function SpaceHUD({ onWarpToggle, isWarping }: SpaceHUDProps) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [coords, setCoords] = useState("RA 19h 50m / DEC +08°52'");
  const [timeStr, setTimeStr] = useState("00:00:00 UTC");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(
        now.toISOString().substring(11, 19) + " UTC"
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAudioToggle = () => {
    const state = spaceAudio.toggle();
    setIsAudioPlaying(state);
  };

  return (
    <>
      {/* Top Telemetry Status Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3.5 backdrop-blur-md bg-[#030014]/60 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs tracking-wider font-mono">
          {/* Logo & System Status */}
          <div className="flex items-center gap-3">
            <a href="#mission" className="flex items-center gap-2 group">
              <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#030014] rounded-lg flex items-center justify-center">
                  <Orbit className="w-4 h-4 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
                </div>
              </div>
              <div>
                <span className="font-bold text-sm tracking-normal text-white">
                  TOKO TECH <span className="text-cyan-400">SPACE</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] text-zinc-400 border border-zinc-700/60 px-1.5 py-0.5 rounded">
                  v1.0-COSMIC
                </span>
              </div>
            </a>
          </div>

          {/* Center Coordinates & Telemetry */}
          <div className="hidden lg:flex items-center gap-6 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
              <span>{coords}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>CLOCK: {timeStr}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LINK: QUANTUM HYPER-SECURE</span>
            </div>
          </div>

          {/* Audio Synthesizer & Warp Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAudioToggle}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                isAudioPlaying
                  ? "bg-purple-950/60 border-purple-500/50 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white"
              }`}
              title="Toggle Cosmic Ambient Synthesizer"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                  <span className="hidden sm:inline text-[11px]">AUDIO ON</span>
                  {/* Equalizer waves */}
                  <span className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-full bg-purple-400 animate-pulse" />
                    <span className="w-0.5 h-2/3 bg-purple-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                    <span className="w-0.5 h-4/5 bg-purple-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">AUDIO OFF</span>
                </>
              )}
            </button>

            <button
              onClick={onWarpToggle}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all cursor-pointer border ${
                isWarping
                  ? "bg-cyan-500 text-black border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.7)]"
                  : "bg-cyan-950/40 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20"
              }`}
            >
              {isWarping ? "WARP ACTIVE ⚡" : "ENGAGE WARP"}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom HUD Dock Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl cosmic-glass shadow-2xl border border-white/10">
          <a
            href="#mission"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-all"
          >
            <Orbit className="w-4 h-4 text-cyan-400" />
            <span className="hidden md:inline font-mono">MISSION</span>
          </a>
          <a
            href="#systems"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-all"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="hidden md:inline font-mono">SYSTEMS</span>
          </a>
          <a
            href="#telemetry"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-all"
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span className="hidden md:inline font-mono">TELEMETRY</span>
          </a>
          <a
            href="#constellations"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-all"
          >
            <Radio className="w-4 h-4 text-pink-400" />
            <span className="hidden md:inline font-mono">SHOWCASE</span>
          </a>
          <a
            href="#transmission"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="font-mono">TRANSMIT</span>
          </a>
        </div>
      </nav>
    </>
  );
}
