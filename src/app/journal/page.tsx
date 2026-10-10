"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JOURNAL_ARTICLES, JournalArticle } from "@/data/journal";
import { sound } from "@/lib/audioEngine";

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const handleOpenArticle = (art: JournalArticle) => {
    sound.playClick(1700);
    setSelectedArticle(art);
  };

  const handleClose = () => {
    sound.playClick(1200);
    setSelectedArticle(null);
  };

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              ENGINEERING LOGS // R&D WHITEPAPERS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            RESEARCH <span className="text-cyan-400">JOURNAL</span>
          </h1>
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Open-access technical publications detailing our acoustic DSP breakthroughs, dry-electrode bio-telemetry, and localized neural architectures.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {JOURNAL_ARTICLES.map((art) => (
          <div
            key={art.slug}
            onMouseEnter={() => sound.playHover()}
            onClick={() => handleOpenArticle(art)}
            className="group rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            {/* Image Preview */}
            <div className="relative h-56 w-full overflow-hidden bg-black/60">
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-black/80 border border-cyan-400/30 text-cyan-400 uppercase font-bold backdrop-blur-md">
                  {art.category}
                </span>
              </div>
            </div>

            {/* Info Block */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-500 mb-2">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs text-neutral-400 font-body mt-3 line-clamp-3 leading-relaxed">
                  {art.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-500 text-[11px]">{art.author}</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                  READ PAPER →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#0B0D13] p-6 sm:p-10 shadow-[0_0_60px_rgba(0,245,255,0.2)]">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 bg-neutral-900/80 text-white font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-6 space-y-2">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block font-bold">
                {selectedArticle.category} // WHITEPAPER {selectedArticle.date}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 font-mono text-xs text-neutral-400 pt-1">
                <span>AUTHOR: {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Abstract Box */}
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 font-mono text-xs text-cyan-200 mb-8 leading-relaxed">
              <span className="font-bold uppercase block text-[10px] text-cyan-400 mb-1">
                EXECUTIVE ABSTRACT:
              </span>
              {selectedArticle.abstract}
            </div>

            {/* Paper Body Paragraphs */}
            <div className="space-y-4 text-neutral-300 font-body text-sm leading-relaxed border-t border-white/10 pt-6">
              {selectedArticle.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-500">KINETIX R&D LABS ARCHIVE</span>
              <button
                onClick={handleClose}
                className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-bold uppercase hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                CLOSE WHITEPAPER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
