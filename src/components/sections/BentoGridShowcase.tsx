"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { sound } from "@/lib/audioEngine";
import { useCart } from "../cart/CartContext";

export function BentoGridShowcase() {
  const { addItem, formatPrice } = useCart();
  const [synthFrequency, setSynthFrequency] = useState<number>(440);
  const [passThroughMode, setPassThroughMode] = useState<boolean>(true);

  const deck = PRODUCTS.find((p) => p.slug === "kinetix-deck-01")!;
  const ring = PRODUCTS.find((p) => p.slug === "neuroring-gen-4")!;
  const visor = PRODUCTS.find((p) => p.slug === "spatial-visor-x")!;
  const watch = PRODUCTS.find((p) => p.slug === "cybernetic-chronograph-01")!;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSynthFrequency(val);
    sound.playSynthFrequency(val, "sawtooth");
  };

  return (
    <section className="py-24 max-w-[1920px] mx-auto px-6 md:px-16 text-white font-body">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-4">
        <div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
            Flagship Hardware Fleet
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Precision Instruments for Spatial Computing
          </h2>
        </div>
        <Link
          href="/products"
          onClick={() => sound.playClick(1400)}
          className="font-mono text-xs text-cyan-300 hover:text-white flex items-center gap-2 uppercase tracking-wider"
        >
          <span>VIEW FULL CATALOG (5 HARDWARE SYSTEMS)</span>
          <span>→</span>
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Card 1: Deck-01 Synth (Large 7 Columns) */}
        <div
          className="lg:col-span-7 rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group min-h-[440px]"
          data-showblob="LISTEN"
        >
          {/* Background Image Ambient Glow */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: `url('${deck.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/80 to-transparent pointer-events-none" />

          {/* Top Meta */}
          <div className="relative z-10 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-400/30">
              {deck.badge} • {deck.code}
            </span>
            <span className="font-mono text-sm text-white/80">
              {formatPrice(deck.priceUSD, deck.priceIDR, deck.priceETH)}
            </span>
          </div>

          {/* Center Details */}
          <div className="relative z-10 my-8 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">{deck.name}</h3>
            <p className="text-white/70 text-sm max-w-lg leading-relaxed">
              {deck.description}
            </p>

            {/* Interactive Synthesizer Slider Test */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 max-w-md space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-cyan-300">
                <span>INTERACTIVE FREQUENCY DIAL:</span>
                <span className="text-white font-bold">{synthFrequency} Hz</span>
              </div>
              <input
                type="range"
                min="110"
                max="880"
                step="5"
                value={synthFrequency}
                onChange={handleSliderChange}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <span className="text-[10px] text-white/40 font-mono block">
                DRAG SLIDER TO TRIGGER TACTILE FPGA SYNTHESIZER OSCILLATOR
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/10">
            <Link
              href={`/products/${deck.slug}`}
              className="font-mono text-xs text-white/80 hover:text-cyan-400 underline underline-offset-4 uppercase"
            >
              [INSPECT SCHEMATICS]
            </Link>
            <button
              type="button"
              onClick={() => addItem(deck)}
              className="px-5 py-2 rounded-full bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-colors uppercase tracking-wider cursor-pointer"
            >
              ADD TO FLEET
            </button>
          </div>
        </div>

        {/* Card 2: NeuroRing Gen-4 (Vertical 5 Columns) */}
        <div
          className="lg:col-span-5 rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group min-h-[440px]"
          data-showblob="PULSE"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: `url('${ring.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/80 to-transparent pointer-events-none" />

          {/* Top Meta */}
          <div className="relative z-10 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs border border-purple-400/30">
              {ring.badge} • {ring.code}
            </span>
            <span className="font-mono text-sm text-white/80">
              {formatPrice(ring.priceUSD, ring.priceIDR, ring.priceETH)}
            </span>
          </div>

          {/* Center Details & Pulse Visualizer */}
          <div className="relative z-10 my-8 space-y-4">
            <h3 className="font-display text-2xl font-bold">{ring.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {ring.tagline}
            </p>

            {/* Live Pulse Visualizer */}
            <div className="p-4 rounded-2xl bg-black/40 border border-purple-400/20 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-purple-300 block font-bold">1,000 HZ NEURAL POLLING</span>
                <span className="text-white/40 text-[10px]">SUB-MILLIVOLT SIGNAL: ACTIVE</span>
              </div>
              <div className="flex items-center gap-1">
                {[40, 75, 30, 90, 60, 80, 45].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-purple-400 rounded-full animate-pulse"
                    style={{ height: `${h * 0.25}px`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/10">
            <Link
              href={`/products/${ring.slug}`}
              className="font-mono text-xs text-white/80 hover:text-purple-300 underline underline-offset-4 uppercase"
            >
              [INSPECT SENSORS]
            </Link>
            <button
              type="button"
              onClick={() => addItem(ring)}
              className="px-5 py-2 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs transition-colors uppercase tracking-wider cursor-pointer"
            >
              ADD TO FLEET
            </button>
          </div>
        </div>

        {/* Card 3: Spatial Visor X (6 Columns) */}
        <div
          className="lg:col-span-6 rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
          data-showblob="OPTICS"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: `url('${visor.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/80 to-transparent pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-400/30">
              {visor.badge} • 48 PPD
            </span>
            <span className="font-mono text-sm text-white/80">
              {formatPrice(visor.priceUSD, visor.priceIDR, visor.priceETH)}
            </span>
          </div>

          <div className="relative z-10 my-6 space-y-3">
            <h3 className="font-display text-2xl font-bold">{visor.name}</h3>
            <p className="text-white/70 text-sm max-w-md">
              {visor.tagline}
            </p>

            <button
              type="button"
              onClick={() => {
                sound.playClick(passThroughMode ? 1800 : 900);
                setPassThroughMode((prev) => !prev);
              }}
              className="px-3 py-1.5 rounded-lg border border-white/20 font-mono text-xs text-white/80 hover:border-cyan-400 flex items-center gap-2"
            >
              <span className={`w-2 h-2 rounded-full ${passThroughMode ? "bg-cyan-400" : "bg-white/40"}`} />
              <span>PASSTHROUGH MODE: {passThroughMode ? "OPTICAL LIVE" : "IMMERSIVE VOID"}</span>
            </button>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/10">
            <Link
              href={`/products/${visor.slug}`}
              className="font-mono text-xs text-white/80 hover:text-cyan-400 underline underline-offset-4 uppercase"
            >
              [INSPECT OPTICS]
            </Link>
            <button
              type="button"
              onClick={() => addItem(visor)}
              className="px-5 py-2 rounded-full bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-colors uppercase tracking-wider cursor-pointer"
            >
              ADD TO FLEET
            </button>
          </div>
        </div>

        {/* Card 4: Cybernetic Chronograph (6 Columns) */}
        <div
          className="lg:col-span-6 rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
          data-showblob="KINETIC"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: `url('${watch.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/80 to-transparent pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs border border-amber-400/30">
              {watch.badge} • SAPPHIRE
            </span>
            <span className="font-mono text-sm text-white/80">
              {formatPrice(watch.priceUSD, watch.priceIDR, watch.priceETH)}
            </span>
          </div>

          <div className="relative z-10 my-6 space-y-3">
            <h3 className="font-display text-2xl font-bold">{watch.name}</h3>
            <p className="text-white/70 text-sm max-w-md">
              {watch.tagline}
            </p>

            <div className="flex items-center gap-4 font-mono text-xs text-amber-300">
              <span>28,800 VPH ROTOR</span>
              <span>•</span>
              <span>HARDWARE COLD WALLET KEY</span>
            </div>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/10">
            <Link
              href={`/products/${watch.slug}`}
              className="font-mono text-xs text-white/80 hover:text-amber-400 underline underline-offset-4 uppercase"
            >
              [INSPECT MOVEMENT]
            </Link>
            <button
              type="button"
              onClick={() => addItem(watch)}
              className="px-5 py-2 rounded-full bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-colors uppercase tracking-wider cursor-pointer"
            >
              ADD TO FLEET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
