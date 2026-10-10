"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorHUD() {
  const [activeText, setActiveText] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setIsClient(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-showblob]");
      if (target) {
        const text = target.getAttribute("data-showblob") || "ACTIVATE";
        setActiveText(text);
      } else {
        setActiveText(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isClient) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        left: springX,
        top: springY,
      }}
    >
      {/* Outer Targeting Reticle */}
      <div className={`w-8 h-8 rounded-full border border-cyan-400/40 transition-all duration-200 flex items-center justify-center ${activeText ? "scale-125 border-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.4)]" : "scale-100"}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
      </div>

      {/* Floating HUD Telemetry Pill */}
      {activeText && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 24, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          className="absolute whitespace-nowrap px-3 py-1 rounded bg-[#08090D]/90 border border-cyan-400/50 text-cyan-300 font-mono text-[11px] tracking-widest uppercase shadow-2xl backdrop-blur-md"
        >
          [{activeText}]
        </motion.div>
      )}
    </motion.div>
  );
}
