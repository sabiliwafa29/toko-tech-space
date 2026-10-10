"use client";

import React from "react";
import Link from "next/link";
import { LogoIcon, ArrowIcon } from "../ui/Icons";
import { ButtonLine } from "../ui/ButtonLine";
import { MARKETS } from "@/data/markets";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141414] text-white pt-20 pb-12 mt-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        {/* Top Hero Banner */}
        <div className="relative w-full h-[40vh] md:h-[55vh] rounded-2xl overflow-hidden mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lpas.com/wp-content/uploads/2025/10/12_Block-52_Madison-by-Lennar.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
            <h2 className="font-XXL md:font-3XL font-normal tracking-tight max-w-3xl">
              Designing with people at the center and purpose at every turn.
            </h2>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <Link href="/" aria-label="LPAS Home">
              <LogoIcon className="w-32 h-auto text-white" />
            </Link>
            <div className="mt-8 text-white/60 font-S">
              Clear Process. Creative Results.<br />
              Human-centered. Always Curious.
            </div>
          </div>

          {/* Markets Col */}
          <div className="md:col-span-4">
            <span className="font-S text-white/50 block mb-6">Our Focus</span>
            <ul className="space-y-3 font-M">
              {MARKETS.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/markets/${m.slug}`}
                    className="hover:text-white/70 transition-colors"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="md:col-span-4">
            <span className="font-S text-white/50 block mb-6">Explore</span>
            <ul className="space-y-3 font-M">
              <li>
                <Link href="/portfolio" className="hover:text-white/70 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/latest" className="hover:text-white/70 transition-colors">
                  Latest Updates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white/70 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/culture" className="hover:text-white/70 transition-colors">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white/70 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/70 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Office Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/10 text-white/70 font-S">
          <div className="md:col-span-5">
            <h3 className="font-semibold text-white mb-2">Sacramento Headquarters</h3>
            <p>723 S Street, Suite 150<br />Sacramento, CA 95811</p>
            <p className="mt-2">
              <a href="tel:916-443-0335" className="hover:text-white transition-colors">
                916 443 0335
              </a>
            </p>
          </div>

          <div className="md:col-span-5">
            <h3 className="font-semibold text-white mb-2">Oakland Studio</h3>
            <p>10 Clay Street, Suite 250<br />Oakland, CA 94607</p>
            <p className="mt-2">
              <a href="tel:415-213-0335" className="hover:text-white transition-colors">
                415 213 0335
              </a>
            </p>
          </div>

          <div className="md:col-span-2 flex items-start md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-[1.4rem] font-medium transition-colors"
            >
              <span>Back to top</span>
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors -rotate-90">
                <ArrowIcon className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Social & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[1.2rem]">
          <div>
            © 2026 LPAS Architecture + Design. Target domain: tokotechkekinian.biz.id
          </div>

          <div className="flex gap-6">
            <ButtonLine
              href="https://www.instagram.com/lpas.design"
              label="Instagram"
              color="white"
              target="_blank"
            />
            <ButtonLine
              href="https://www.linkedin.com/company/lpas-architecture-and-design"
              label="LinkedIn"
              color="white"
              target="_blank"
            />
            <ButtonLine
              href="https://www.facebook.com/LPAS-Architecture-Design-200127570010089"
              label="Facebook"
              color="white"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
