"use client";

import React from "react";
import { Orbit, ArrowUp, MessageSquare } from "lucide-react";

export function SpaceFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 px-4 md:px-8 border-t border-white/[0.08] backdrop-blur-md bg-[#030014]/80 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-mono text-zinc-400">
        {/* Brand & Domain */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Orbit className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white text-sm font-['Space_Grotesk']">
              TOKO TECH <span className="text-cyan-400">SPACE</span>
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="text-cyan-300">tokotechkekinian.biz.id</span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>

        {/* Channels */}
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/6285156027984"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>COMM RELAY</span>
          </a>
          <a
            href="https://github.com/sabiliwafa29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GIT REPO</span>
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-zinc-300 hover:text-cyan-400 transition-all cursor-pointer"
            title="Return to Orbit / Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
