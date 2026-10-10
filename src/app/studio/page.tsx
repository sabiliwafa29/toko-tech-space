"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/components/cart/CartContext";
import { sound, audioEngine } from "@/lib/audioEngine";

const FINISHES = [
  {
    id: "obsidian",
    name: "Matte Obsidian",
    color: "#0F1117",
    textColor: "text-white",
    desc: "Vapor-honed dark anodized billet aluminum with deep anti-fingerprint silicate coating.",
    surchargeUSD: 0,
    surchargeIDR: 0,
    surchargeETH: 0,
  },
  {
    id: "titanium",
    name: "Vapor Titanium",
    color: "#8A909D",
    textColor: "text-neutral-900",
    desc: "Grade-5 titanium micro-ceramic plasma deposition for aerospace-level scratch protection.",
    surchargeUSD: 120,
    surchargeIDR: 1950000,
    surchargeETH: 0.045,
  },
  {
    id: "amber",
    name: "Cybernetic Amber",
    color: "#FF9F1C",
    textColor: "text-black",
    desc: "Electrolytic industrial gold-amber tint celebrating Tokyo synth heritage.",
    surchargeUSD: 95,
    surchargeIDR: 1550000,
    surchargeETH: 0.035,
  },
  {
    id: "cyan",
    name: "Neon Cyan",
    color: "#00F5FF",
    textColor: "text-black",
    desc: "High-voltage luminescent clear coat inspired by Jakarta neon telemetry grids.",
    surchargeUSD: 140,
    surchargeIDR: 2280000,
    surchargeETH: 0.052,
  },
];

const ACCENTS = [
  { id: "knurled-steel", name: "Knurled Steel", material: "Solid 316L Stainless Steel" },
  { id: "carbon-fiber", name: "Toray Carbon Fiber", material: "3K Twill Weave Composite" },
  { id: "raw-brass", name: "Acoustic Brass", material: "Resonant C36000 Solid Brass" },
];

export default function StudioConfiguratorPage() {
  const baseProduct = PRODUCTS.find((p) => p.slug === "kinetix-deck-01") || PRODUCTS[0];
  const { addItem, formatPrice } = useCart();

  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [selectedAccent, setSelectedAccent] = useState(ACCENTS[0]);
  const [engravingText, setEngravingText] = useState("CYBERNETIC-ID // 0048");
  const [hasNeuralKernel, setHasNeuralKernel] = useState(true);
  const [hasAudiophileModule, setHasAudiophileModule] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Price calculations
  const extraIDR =
    selectedFinish.surchargeIDR +
    (hasNeuralKernel ? 2500000 : 0) +
    (hasAudiophileModule ? 1200000 : 0);
  const extraUSD =
    selectedFinish.surchargeUSD +
    (hasNeuralKernel ? 150 : 0) +
    (hasAudiophileModule ? 75 : 0);
  const extraETH =
    selectedFinish.surchargeETH +
    (hasNeuralKernel ? 0.06 : 0) +
    (hasAudiophileModule ? 0.03 : 0);

  const finalIDR = baseProduct.priceIDR + extraIDR;
  const finalUSD = baseProduct.priceUSD + extraUSD;
  const finalETH = Number((baseProduct.priceETH + extraETH).toFixed(3));

  const handleFinishChange = (f: typeof FINISHES[0]) => {
    sound.playClick(1600);
    setSelectedFinish(f);
  };

  const handleAccentChange = (a: typeof ACCENTS[0]) => {
    sound.playClick(1800);
    setSelectedAccent(a);
  };

  const handleToggleModule = (mod: "neural" | "audio") => {
    sound.playClick(1400);
    if (mod === "neural") setHasNeuralKernel(!hasNeuralKernel);
    if (mod === "audio") setHasAudiophileModule(!hasAudiophileModule);
  };

  const handleEngravingInput = (val: string) => {
    sound.playKeyClick();
    setEngravingText(val.toUpperCase());
  };

  const handleAddToCart = () => {
    sound.playTone(880, 0.25, "sine");
    // Create configured product with dynamic specs
    const customConfiguredProduct = {
      ...baseProduct,
      priceIDR: finalIDR,
      priceUSD: finalUSD,
      priceETH: finalETH,
    };

    addItem(
      customConfiguredProduct,
      `${selectedFinish.id} [${selectedAccent.id}]`,
      engravingText || "BESPOKE EDITION"
    );
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Header Telemetry */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              KINETIX BESPOKE FABRICATION LAB // JAKARTA 06.2088S
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            HARDWARE <span className="text-cyan-400">STUDIO</span>
          </h1>
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Configure the solid-state Kinetix Deck-01 to your exact operational specifications. Real-time finish swatches, acoustic accents, laser engraving, and neural expansion kernels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Live 3D Interactive Rig Mockup */}
        <div className="lg:col-span-7 sticky top-28 space-y-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/60 p-6 sm:p-10 backdrop-blur-xl">
            {/* Top Device Status */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs text-neutral-400">
              <span className="text-cyan-400 font-bold">KTX-DECK-01 // BESPOKE FAB</span>
              <span>CHASSIS: {selectedFinish.name.toUpperCase()}</span>
            </div>

            {/* Hardware Viewport */}
            <div className="relative h-80 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center border border-white/5">
              <Image
                src={baseProduct.heroImage}
                alt="Bespoke Rig Preview"
                fill
                priority
                className="object-cover object-center transition-all duration-700"
              />
              <div
                className="absolute inset-0 transition-colors duration-500 opacity-20 pointer-events-none"
                style={{ backgroundColor: selectedFinish.color }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />

              {/* Laser Engraving Preview Overlay */}
              <div className="absolute bottom-10 left-8 right-8 p-4 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 block">
                    LASER ENGRAVED SERIAL ID:
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
                    {engravingText || "[NO ENGRAVING SPECIFIED]"}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block">
                    ACCENT HARDWARE
                  </span>
                  <span className="font-mono text-xs text-neutral-300 font-bold">
                    {selectedAccent.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Hardware Telemetry Specs */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-center">
              <div>
                <span className="text-neutral-500 block text-[10px]">WEIGHT TOLERANCE</span>
                <span className="text-white font-bold">482g ± 2g</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">LATENCY RATING</span>
                <span className="text-cyan-400 font-bold">&lt; 0.8ms DSP</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">PRODUCTION TIME</span>
                <span className="text-white font-bold">48h CNC Queue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Customization Controls */}
        <div className="lg:col-span-5 space-y-8">
          {/* Section 1: Chassis Anodization */}
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                1. CHASSIS ALLOY ANODIZATION
              </h3>
              <span className="font-mono text-xs text-cyan-400 font-bold">
                {selectedFinish.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400">{selectedFinish.desc}</p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {FINISHES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleFinishChange(f)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    selectedFinish.id === f.id
                      ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,245,255,0.2)]"
                      : "border-white/10 bg-black/40 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: f.color }}
                    />
                    <span className="font-mono text-xs font-bold text-white">
                      {f.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500">
                    {f.surchargeUSD === 0 ? "Included" : `+${formatPrice(f.surchargeIDR, f.surchargeUSD, f.surchargeETH)}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Knurled Accent Materials */}
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              2. FADER & JOG WHEEL ACCENT
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {ACCENTS.map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => handleAccentChange(acc)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    selectedAccent.id === acc.id
                      ? "border-cyan-400 bg-cyan-950/20"
                      : "border-white/10 bg-black/40 hover:border-white/30"
                  }`}
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-white block">
                      {acc.name}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-400">
                      {acc.material}
                    </span>
                  </div>
                  {selectedAccent.id === acc.id && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Laser Engraving */}
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                3. LASER CHASSIS ENGRAVING
              </h3>
              <span className="font-mono text-[10px] text-cyan-400 font-bold">
                FREE LAB COMPLIMENTARY
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Specify your callsign, agent ID, or cryptographically signed serial identifier (Max 24 characters).
            </p>
            <input
              type="text"
              maxLength={24}
              value={engravingText}
              onChange={(e) => handleEngravingInput(e.target.value)}
              placeholder="e.g. NEURAL-NODE-01"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all uppercase tracking-wider"
            />
          </div>

          {/* Section 4: Hardware Expansion Modules */}
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              4. OPTIONAL SILICON EXTENSIONS
            </h3>

            {/* Neural Sync Kernel */}
            <div
              onClick={() => handleToggleModule("neural")}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                hasNeuralKernel
                  ? "border-cyan-400 bg-cyan-950/20"
                  : "border-white/10 bg-black/40 hover:border-white/30"
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-white block">
                  Direct Neural Sync Kernel V2
                </span>
                <span className="text-xs text-neutral-400">
                  Sub-millisecond bio-telemetry bridge for NeuroRing and EEG visors.
                </span>
              </div>
              <div className="text-right pl-4">
                <span className="font-mono text-xs font-bold text-cyan-400 block">
                  +{formatPrice(2500000, 150, 0.06)}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  {hasNeuralKernel ? "INSTALLED" : "OFF"}
                </span>
              </div>
            </div>

            {/* Audiophile Balanced Module */}
            <div
              onClick={() => handleToggleModule("audio")}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                hasAudiophileModule
                  ? "border-cyan-400 bg-cyan-950/20"
                  : "border-white/10 bg-black/40 hover:border-white/30"
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-white block">
                  Dual 4.4mm Pentaconn & Balanced XLR
                </span>
                <span className="text-xs text-neutral-400">
                  Discrete Lundahl transformer audio isolation for studio mastering.
                </span>
              </div>
              <div className="text-right pl-4">
                <span className="font-mono text-xs font-bold text-cyan-400 block">
                  +{formatPrice(1200000, 75, 0.03)}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  {hasAudiophileModule ? "INSTALLED" : "OFF"}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing & Add to Fleet */}
          <div className="p-6 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-xl space-y-4 shadow-[0_0_40px_rgba(0,245,255,0.1)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                FINAL CUSTOM VALUATION
              </span>
              <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-400/30 px-2 py-0.5 rounded">
                CALIBRATED
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
              {formatPrice(finalIDR, finalUSD, finalETH)}
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 ${
                isSuccess
                  ? "bg-green-400 text-black shadow-[0_0_25px_rgba(74,222,128,0.5)]"
                  : "bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:scale-[1.02]"
              }`}
            >
              {isSuccess ? (
                <>✓ BESPOKE RIG ADDED TO FLEET CART</>
              ) : (
                <>⚙ DISPATCH BESPOKE CONFIGURATION</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
