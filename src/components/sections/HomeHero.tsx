"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EyeIcon, PlusIcon, ArrowIcon } from "../ui/Icons";
import { ButtonArrow } from "../ui/ButtonArrow";
import { MARKETS } from "@/data/markets";

export function HomeHero() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [showStudioStatement, setShowStudioStatement] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 bg-[#0e0e0e] text-white overflow-hidden">
      {/* Background Ambient Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster="https://lpas.com/wp-content/uploads/2025/12/LPAS-office-thumbnail.jpg"
          src="https://player.vimeo.com/progressive_redirect/playback/1147329730/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=c85431f7a84c6831e939c1609bc93bbe24024c78c07434a87ff077d19329b64c"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-black/40 to-black/60" />
      </div>

      {/* Hero Meta Details */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-16 w-full flex flex-col md:flex-row md:items-center justify-between text-white/70 font-S border-b border-white/10 pb-6 mb-8 gap-4">
        <div>Architecture + Interiors</div>
        <div>A Market-Focused Approach</div>
        <div className="flex items-center gap-2">
          <span>Scroll to explore</span>
          <ArrowIcon className="w-3.5 h-3.5 rotate-90" />
        </div>
      </div>

      {/* Hero Headline */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-16 w-full my-auto py-12">
        <h1 className="font-3XL font-normal tracking-tight max-w-5xl">
          We’re a process driven architecture and interior design studio
          <button
            type="button"
            onClick={() => setShowStudioStatement((prev) => !prev)}
            aria-label="Toggle studio statement"
            className="inline-flex items-center justify-center align-middle ml-4 w-12 h-12 rounded-full border border-white/40 hover:border-white hover:bg-white/10 transition-colors"
          >
            <EyeIcon className="w-5 h-5 text-white" />
          </button>
        </h1>

        {/* Expandable Studio Statement */}
        {showStudioStatement && (
          <div className="mt-8 p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 max-w-2xl font-M text-white/90 animate-fadeIn">
            At LPAS, we design with people at the center and purpose at every turn. We believe great architecture starts by listening, truly listening, to the communities, students, families, and leaders who will live, learn, and grow in the spaces we create.
          </div>
        )}
      </div>

      {/* 5 Horizontal Market Cards Deck */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-16 w-full pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MARKETS.map((market, idx) => {
            const isExpanded = activeCardIndex === idx;

            return (
              <div
                key={market.slug}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/15 backdrop-blur-md flex flex-col justify-between p-6 min-h-[320px] hover:border-white/40 transition-all duration-300"
                data-showblob="Explore"
              >
                {/* Background Image on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `url('${market.heroImage}')` }}
                />

                {/* Top: Header & Number */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-XS text-white/60 uppercase tracking-widest">
                    {market.index} / 5
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCardIndex(isExpanded ? null : idx)}
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={`Toggle subcategories for ${market.title}`}
                  >
                    <PlusIcon className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`} />
                  </button>
                </div>

                {/* Bottom: Title & Subtitle */}
                <div className="relative z-10 mt-12">
                  <Link
                    href={`/markets/${market.slug}`}
                    className="block font-XXL hover:text-white/80 transition-colors"
                  >
                    {market.title}
                  </Link>
                  <p className="font-S text-white/60 mt-1">{market.subtitle}</p>

                  {/* Flyout Sub-Markets Drawer */}
                  {isExpanded && market.subMarkets && (
                    <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                      {market.subMarkets.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/markets/${market.slug}/${sub.slug}`}
                          className="flex items-center justify-between text-white/80 hover:text-white text-[1.3rem] py-1 transition-colors"
                        >
                          <span>{sub.title}</span>
                          <span className="text-white/40 text-xs">({sub.count})</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <ButtonArrow
                      href={`/markets/${market.slug}`}
                      title="View market"
                      color="white"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
