"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/components/cart/CartContext";
import { sound } from "@/lib/audioEngine";

const categories = [
  "All Hardware",
  "Cyber Decks",
  "Neural Wearables",
  "Spatial Audio",
  "Kinetic Accessories",
] as const;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Hardware");
  const { addItem, formatPrice } = useCart();

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "All Hardware") return true;
    return p.category === selectedCategory;
  });

  const handleCategoryChange = (cat: string) => {
    sound.playClick(1500);
    setSelectedCategory(cat);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              FLEET INVENTORY // SYSTEM REVISION 2.4
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            HARDWARE <span className="text-cyan-400">CATALOG</span>
          </h1>
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Tactile solid-state spatial instruments, neural biometric rings, and edge quantum computing rigs. Direct from the Jakarta & Tokyo fabrication laboratories.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? "bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                : "border border-white/10 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
            {cat === "All Hardware" ? (
              <span className="ml-2 opacity-60">[{PRODUCTS.length}]</span>
            ) : (
              <span className="ml-2 opacity-60">
                [{PRODUCTS.filter((p) => p.category === cat).length}]
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            onMouseEnter={() => sound.playHover()}
            className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Top status bar */}
            <div className="p-5 flex items-center justify-between border-b border-white/5 relative z-10">
              <span className="font-mono text-xs text-neutral-500 tracking-wider">
                {p.code}
              </span>
              {p.badge && (
                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded border border-cyan-400/30 text-cyan-300 bg-cyan-950/40 font-bold">
                  {p.badge}
                </span>
              )}
            </div>

            {/* Product Image Frame */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950/80">
              <Image
                src={p.heroImage}
                alt={p.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />

              {/* Holographic scanline accent on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00F5FF_2px,#00F5FF_4px)] transition-opacity" />
            </div>

            {/* Information Block */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest block mb-1">
                  {p.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {p.name}
                </h2>
                <p className="text-neutral-400 font-body text-xs mt-2 line-clamp-2 leading-relaxed">
                  {p.tagline}
                </p>
              </div>

              {/* Price & Action Row */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 block uppercase">
                    DEPLOYMENT VALUATION
                  </span>
                  <span className="font-mono text-base font-bold text-white tracking-tight">
                    {formatPrice(p.priceIDR, p.priceUSD, p.priceETH)}
                  </span>
                </div>

                <button
                  onClick={(e) => handleAddToCart(e, p)}
                  className="px-4 py-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400 text-cyan-400 hover:text-black border border-cyan-400/30 hover:border-cyan-400 font-mono text-xs font-bold uppercase transition-all duration-200 cursor-pointer"
                >
                  + ADD TO FLEET
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
