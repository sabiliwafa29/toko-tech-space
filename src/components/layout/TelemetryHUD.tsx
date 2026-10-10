"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sound } from "@/lib/audioEngine";
import { useCart } from "../cart/CartContext";

export function TelemetryHUD() {
  const [timeStr, setTimeStr] = useState<string>("00:00:00 UTC");
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    // Clock loop
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toTimeString().split(" ")[0] + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMuted(sound.isMuted());
    const unsub = sound.subscribe((muted) => setIsMuted(muted));
    return unsub;
  }, []);

  const handleAudioToggle = () => {
    sound.toggleMute();
  };

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Custom Studio", href: "/studio" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Journal", href: "/journal" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090D]/80 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between text-xs font-mono select-none">
        {/* Left: Brand Wordmark */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            onClick={() => sound.playClick(1600)}
            className="flex items-center gap-2.5 text-white hover:text-cyan-400 transition-colors group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00F5FF]" />
            <span className="font-display font-bold text-sm tracking-wider">
              KINETIX
            </span>
            <span className="text-white/40 font-mono text-[11px] hidden sm:inline">
              // TTK-2026
            </span>
          </Link>

          {/* Live Coordinates Readout */}
          <div className="hidden lg:flex items-center gap-4 text-white/50 text-[11px] border-l border-white/10 pl-6">
            <span>SYS: ONLINE</span>
            <span>JKT 06°12&apos;S</span>
            <span>TYO 35°41&apos;N</span>
            <span className="text-cyan-400">{timeStr}</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => sound.playClick(1400)}
                className={`transition-colors tracking-wide uppercase ${
                  isActive
                    ? "text-cyan-400 font-bold border-b border-cyan-400 pb-0.5"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Audio Synthesizer Toggle & Cart Trigger */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Audio Engine Equalizer Button */}
          <button
            type="button"
            onClick={handleAudioToggle}
            className={`px-3 py-1.5 rounded-full border flex items-center gap-2 transition-all ${
              !isMuted
                ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.2)]"
                : "border-white/15 bg-white/5 text-white/60 hover:text-white"
            }`}
            aria-label="Toggle procedural audio synthesizer"
          >
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-3">
              <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${!isMuted ? "h-3 animate-pulse" : "h-1"}`} />
              <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${!isMuted ? "h-2.5 animate-bounce" : "h-1"}`} />
              <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${!isMuted ? "h-3.5 animate-pulse" : "h-1"}`} />
              <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${!isMuted ? "h-2 animate-bounce" : "h-1"}`} />
            </div>
            <span className="text-[10px] tracking-wider uppercase">
              {!isMuted ? "AUDIO ON" : "MUTED"}
            </span>
          </button>

          {/* Cart Fleet Button */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(1500);
              setIsCartOpen(true);
            }}
            className="px-3 py-1.5 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(0,245,255,0.3)] cursor-pointer"
          >
            <span>FLEET</span>
            <span className="w-4 h-4 rounded-full bg-black text-cyan-400 text-[10px] flex items-center justify-center font-bold">
              {totalItems}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-8 h-8 rounded border border-white/20 flex flex-col justify-center items-center gap-1 text-white"
            aria-label="Toggle navigation"
          >
            <span className={`w-4 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-4 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[52px] z-30 bg-[#08090D] p-6 space-y-4 md:hidden border-b border-white/10 font-mono text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                sound.playClick(1400);
                setIsMobileMenuOpen(false);
              }}
              className="block py-2 text-white/80 hover:text-cyan-400 border-b border-white/5 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
