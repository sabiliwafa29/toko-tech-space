"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "../ui/Icons";
import { FullscreenMenu } from "./FullscreenMenu";
import { MARKETS } from "@/data/markets";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocusMenuOpen, setIsFocusMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkHero = pathname === "/" || pathname.startsWith("/markets");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsFocusMenuOpen(false);
  }, [pathname]);

  const navTheme = isMenuOpen
    ? "text-white"
    : isScrolled
    ? "text-[#262626] bg-white/90 backdrop-blur-md border-b border-black/5"
    : isDarkHero
    ? "text-white"
    : "text-[#262626]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navTheme}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="LPAS Homepage"
          >
            <LogoIcon className="w-24 md:w-28 h-auto" />
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-6">
            {/* Shift your focus market switcher */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setIsFocusMenuOpen(true)}
              onMouseLeave={() => setIsFocusMenuOpen(false)}
            >
              <button
                type="button"
                className="font-S font-medium cursor-pointer flex items-center gap-2 py-1 px-3 rounded-full hover:bg-current/10 transition-colors"
                onClick={() => setIsFocusMenuOpen((prev) => !prev)}
              >
                <span>Shift your focus</span>
                <span className="text-xs">▼</span>
              </button>

              {/* Markets Flyout */}
              {isFocusMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white text-[#262626] rounded-2xl shadow-2xl p-2 border border-black/5">
                  <ul className="space-y-1">
                    {MARKETS.map((market) => (
                      <li key={market.slug}>
                        <Link
                          href={`/markets/${market.slug}`}
                          className="block px-4 py-2 text-[1.4rem] font-medium rounded-xl hover:bg-black/5 transition-colors"
                        >
                          {market.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="group flex items-center gap-3 font-XS font-semibold tracking-wider uppercase py-2 px-3 rounded-full hover:bg-current/10 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span>{isMenuOpen ? "Close" : "Menu"}</span>
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
