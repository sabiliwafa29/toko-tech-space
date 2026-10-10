"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/audioEngine";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick(1900);
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-white pt-20 pb-12 mt-28 font-body">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Brand & Manifesto */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00F5FF]" />
              <span className="font-display font-bold text-lg tracking-wider">
                KINETIX
              </span>
              <span className="font-mono text-xs text-white/40">// TOKO TECH KEKINIAN</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Autonomous cybernetic hardware, neural computing wearables, and spatial audio acoustics engineered for the post-cloud era.
            </p>
            <div className="font-mono text-[11px] text-cyan-400">
              DEPLOYED VIA TOKOTECHKEKINIAN.BIZ.ID
            </div>
          </div>

          {/* Links Column 1: Hardware */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-widest block mb-4">
              Hardware Fleet
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products/kinetix-deck-01" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Deck-01 Synth
                </Link>
              </li>
              <li>
                <Link href="/products/neuroring-gen-4" className="text-white/70 hover:text-cyan-400 transition-colors">
                  NeuroRing Gen-4
                </Link>
              </li>
              <li>
                <Link href="/products/spatial-visor-x" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Spatial Visor X
                </Link>
              </li>
              <li>
                <Link href="/products/cybernetic-chronograph-01" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Chronograph 01
                </Link>
              </li>
              <li>
                <Link href="/products/kinetix-neural-node" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Neural Node
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Foundry */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-widest block mb-4">
              Foundry & OS
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/studio" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Customizer Studio
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Spatial OS
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-white/70 hover:text-cyan-400 transition-colors">
                  R&D Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Transmission Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Terminal */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block">
              Direct Firmware Telemetry
            </span>
            <p className="text-xs text-white/60">
              Receive encrypted production batch release logs and hardware drops.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs">
                ✓ NODE COMMUNICATOR SUBSCRIBED
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="agent@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-mono font-bold text-xs hover:bg-cyan-300 transition-colors"
                >
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Global Hub Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-white/10 text-xs font-mono text-white/50">
          <div>
            <span className="text-white block font-bold mb-1">JAKARTA FOUNDRY & LAB</span>
            <p>SCBD Lot 28, Cyber Defense Tower, Jakarta 12190</p>
            <p className="text-cyan-400/80 mt-1">COORDS: -6.2297° S, 106.8094° E</p>
          </div>
          <div>
            <span className="text-white block font-bold mb-1">TOKYO PRECISION STUDIO</span>
            <p>Akihabara Kinetic Technology District 4F, Tokyo 101-0021</p>
            <p className="text-cyan-400/80 mt-1">COORDS: 35.6983° N, 139.7731° E</p>
          </div>
        </div>

        {/* Legal & Status */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © 2026 KINETIX // Toko Tech Kekinian. All Systems Autonomous.
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>GLOBAL MESH ONLINE [VER: 2.0.26-TTK]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
