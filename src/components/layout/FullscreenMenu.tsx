"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonLine } from "../ui/ButtonLine";
import { MARKETS } from "@/data/markets";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mainNavigation"
          className="fixed inset-0 z-40 bg-[#0e0e0e] text-white overflow-y-auto px-6 py-28 md:px-16 md:py-32 flex flex-col justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto w-full">
            {/* Primary Markets (Our Focus) */}
            <div className="lg:col-span-7">
              <span className="font-S text-white/50 block mb-6">Our Focus</span>
              <ul className="space-y-4 md:space-y-6">
                {MARKETS.map((market) => (
                  <motion.li
                    key={market.slug}
                    whileHover={{ x: 12 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={`/markets/${market.slug}`}
                      onClick={onClose}
                      className="font-XXL md:font-3XL font-normal tracking-tight text-white hover:text-white/70 transition-colors block"
                    >
                      {market.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Secondary Navigation (Explore & Company) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Explore */}
                <div>
                  <span className="font-S text-white/50 block mb-4">Explore our</span>
                  <ul className="space-y-3 font-M">
                    <li>
                      <Link
                        href="/portfolio"
                        onClick={onClose}
                        className="hover:text-white/70 transition-colors"
                      >
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <span className="font-S text-white/50 block mb-4">Company</span>
                  <ul className="space-y-3 font-M">
                    <li>
                      <Link
                        href="/latest"
                        onClick={onClose}
                        className="hover:text-white/70 transition-colors"
                      >
                        Latest Updates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={onClose}
                        className="hover:text-white/70 transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/culture"
                        onClick={onClose}
                        className="hover:text-white/70 transition-colors"
                      >
                        Culture
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        onClick={onClose}
                        className="hover:text-white/70 transition-colors"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={onClose}
                        className="hover:text-white/70 transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="font-S text-white/50 block mb-4">Connect</span>
                <div className="flex flex-wrap gap-6">
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
          </div>

          {/* Bottom Offices Bar */}
          <div className="border-t border-white/10 pt-8 mt-16 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 font-S">
            <div>
              <h3 className="font-semibold text-white mb-2">Sacramento</h3>
              <p>723 S Street, Suite 150<br />Sacramento, CA 95811</p>
              <p className="mt-2">
                <a href="tel:916-443-0335" className="hover:text-white transition-colors">
                  916 443 0335
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Oakland</h3>
              <p>10 Clay Street, Suite 250<br />Oakland, CA 94607</p>
              <p className="mt-2">
                <a href="tel:415-213-0335" className="hover:text-white transition-colors">
                  415 213 0335
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
