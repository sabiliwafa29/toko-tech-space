"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/components/cart/CartContext";
import { sound, audioEngine } from "@/lib/audioEngine";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedFinish, setSelectedFinish] = useState(
    product.finishes && product.finishes.length > 0 ? product.finishes[0].id : "default"
  );
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const { addItem, formatPrice } = useCart();

  const handleSelectFinish = (finishId: string) => {
    sound.playClick(1700);
    setSelectedFinish(finishId);
  };

  const handleSoundTest = () => {
    setIsPlayingTest(true);
    const freq = product.defaultFrequency || 440;
    audioEngine.playTone(freq, 0.4, "sawtooth");
    setTimeout(() => setIsPlayingTest(false), 400);
  };

  const handleAddToCart = () => {
    addItem(product, selectedFinish);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const activeFinishObj = product.finishes.find((f) => f.id === selectedFinish) || product.finishes[0];

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Breadcrumb / Top Telemetry */}
      <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 mb-8 uppercase tracking-wider">
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          TERMINAL
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-cyan-400 transition-colors">
          CATALOG
        </Link>
        <span>/</span>
        <span className="text-cyan-400">{product.code}</span>
      </div>

      {/* Main Grid: Left Image/Presentation, Right Specs & Purchase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Visual Showcase */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/60 p-4 sm:p-8 backdrop-blur-xl">
            {/* Top Bar inside showcase */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                HARDWARE BLUEPRINT // REV 3.8
              </span>
              <span>{activeFinishObj ? activeFinishObj.name.toUpperCase() : "STANDARD"}</span>
            </div>

            {/* Main Image View */}
            <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden bg-black/50">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                priority
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Sound Test Floating Button */}
              {product.defaultFrequency && (
                <button
                  onClick={handleSoundTest}
                  className={`absolute bottom-6 left-6 px-4 py-2 rounded-xl border font-mono text-xs font-bold uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isPlayingTest
                      ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_#00F5FF]"
                      : "bg-black/80 text-cyan-400 border-cyan-400/30 hover:border-cyan-400 backdrop-blur-md"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isPlayingTest ? "bg-black animate-ping" : "bg-cyan-400"}`} />
                  {isPlayingTest ? `SYNTHESIZING ${product.defaultFrequency}Hz...` : `TEST ACOUSTIC HARMONIC (${product.defaultFrequency}Hz)`}
                </button>
              )}
            </div>

            {/* Bottom Telemetry Ticker */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 border-t border-white/5 mt-4">
              <span>MICRON TOLERANCE: ±0.005mm</span>
              <span>CALIBRATION: JAKARTA PRECISION CORE</span>
              <span>ENCRYPTION: HARDWARE SHA-512</span>
            </div>
          </div>

          {/* Exploded Parts Section if available */}
          {product.explodedParts && product.explodedParts.length > 0 && (
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                EXPLODED ARCHITECTURE BREAKDOWN
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.explodedParts.map((part, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/5 bg-black/30 space-y-1 hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white font-display">
                        {part.name}
                      </span>
                      <span className="font-mono text-[10px] text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/40">
                        L0{idx + 1}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-neutral-400">
                      Material: <span className="text-neutral-300">{part.material}</span>
                    </p>
                    <p className="text-xs text-neutral-500">{part.function}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Spec Sheet & Add to Fleet */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                {product.category}
              </span>
              <span className="text-neutral-600 font-mono text-xs">•</span>
              <span className="font-mono text-xs text-neutral-400">{product.code}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              {product.name}
            </h1>
            <p className="font-mono text-sm text-cyan-400 mt-2 font-semibold">
              {product.tagline}
            </p>
            <p className="text-neutral-300 font-body text-sm mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
              CURRENT VALUATION
            </span>
            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
              {formatPrice(product.priceIDR, product.priceUSD, product.priceETH)}
            </div>
            <p className="font-mono text-[11px] text-neutral-500 mt-1">
              Includes full factory calibration certificate & zero-latency driver suite.
            </p>
          </div>

          {/* Finish Variants Selector */}
          {product.finishes && product.finishes.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                CHASSIS ANODIZATION FINISH:{" "}
                <span className="text-white font-bold">{activeFinishObj.name}</span>
              </span>
              <div className="flex items-center gap-3">
                {product.finishes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => handleSelectFinish(f.id)}
                    className={`w-10 h-10 rounded-xl border-2 transition-all duration-200 flex items-center justify-center cursor-pointer ${
                      selectedFinish === f.id
                        ? "border-cyan-400 scale-110 shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                        : "border-white/20 hover:border-white/50"
                    }`}
                    style={{ backgroundColor: f.colorHex }}
                    title={f.name}
                  >
                    {selectedFinish === f.id && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 ${
                addedSuccess
                  ? "bg-green-400 text-black shadow-[0_0_25px_rgba(74,222,128,0.5)]"
                  : "bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:scale-[1.02]"
              }`}
            >
              {addedSuccess ? (
                <>
                  <span>✓</span> ADDED TO FLEET CART
                </>
              ) : (
                <>
                  <span>+</span> ADD TO ACTIVE FLEET
                </>
              )}
            </button>

            {product.slug === "kinetix-deck-01" && (
              <Link
                href="/studio"
                className="w-full py-4 rounded-xl border border-cyan-400/40 hover:border-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>⚙</span> LAUNCH STUDIO CONFIGURATOR FOR DECK-01
              </Link>
            )}
          </div>

          {/* Features Highlights */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              CORE INNOVATIONS
            </h3>
            <ul className="space-y-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-body">
                  <span className="text-cyan-400 font-mono font-bold">›</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              LABORATORY SPECIFICATIONS
            </h3>
            <div className="divide-y divide-white/5 border-y border-white/5 font-mono text-xs">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="py-2.5 flex items-center justify-between">
                  <span className="text-neutral-500">{key}</span>
                  <span className="text-neutral-200 font-medium text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
