"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorBlob() {
  const [activeText, setActiveText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 450, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30 });

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-showblob]");
      if (target) {
        const text = target.getAttribute("data-showblob") || "Explore";
        setActiveText(text);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isVisible || !activeText) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 px-4 py-2 rounded-full bg-white text-[#262626] font-medium text-[1.2rem] shadow-xl border border-[#262626]/10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center uppercase tracking-wider"
      style={{
        left: springX,
        top: springY,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {activeText}
    </motion.div>
  );
}
