"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [stage, setStage] = useState<"initial" | "flash" | "unfold" | "expand" | "done">("initial");

  useEffect(() => {
    // Check if preloader has already been displayed this session
    const hasSeen = sessionStorage.getItem("lpas_preloader_seen");
    if (hasSeen) {
      setStage("done");
      return;
    }

    // Sequence timing
    const t1 = setTimeout(() => setStage("flash"), 200);
    const t2 = setTimeout(() => setStage("unfold"), 900);
    const t3 = setTimeout(() => setStage("expand"), 1900);
    const t4 = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("lpas_preloader_seen", "true");
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0e0e] text-white overflow-hidden pointer-events-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
      >
        {/* Expanding Hero Thumbnail in Center */}
        {stage === "expand" && (
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lpas.com/wp-content/uploads/2025/12/LPAS-office-thumbnail.jpg')`,
            }}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {/* L P A S Text Animation Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-16 px-6">
          {/* Section 1: L & P */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="flex items-baseline font-XXL">
              <span className="font-semibold text-white">L</span>
              <AnimatePresence>
                {stage === "unfold" && (
                  <motion.span
                    className="overflow-hidden whitespace-nowrap text-white/80 font-normal inline-block"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    isten
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-baseline font-XXL">
              <span className="font-semibold text-white">P</span>
              <AnimatePresence>
                {stage === "unfold" && (
                  <motion.span
                    className="overflow-hidden whitespace-nowrap text-white/80 font-normal inline-block"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                  >
                    lan
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Section 2: A & S */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="flex items-baseline font-XXL">
              <span className="font-semibold text-white">A</span>
              <AnimatePresence>
                {stage === "unfold" && (
                  <motion.span
                    className="overflow-hidden whitespace-nowrap text-white/80 font-normal inline-block"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
                  >
                    nalyze
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-baseline font-XXL">
              <span className="font-semibold text-white">S</span>
              <AnimatePresence>
                {stage === "unfold" && (
                  <motion.span
                    className="overflow-hidden whitespace-nowrap text-white/80 font-normal inline-block"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
                  >
                    hape
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
