"use client";

import React, { useEffect, useRef } from "react";

interface StarfieldProps {
  isWarping?: boolean;
}

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  size: number;
  color: string;
}

export function Starfield({ isWarping = false }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const warpFactorRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates around center (-1 to 1)
      mouseRef.current = {
        x: (e.clientX - width / 2) / (width / 2),
        y: (e.clientY - height / 2) / (height / 2),
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Color palette for cosmic stars
    const starColors = ["#ffffff", "#e0f2fe", "#93c5fd", "#c084fc", "#67e8f9"];

    // Initialize stars in 3D volume
    const STAR_COUNT = 750;
    const stars: Star[] = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        pz: Math.random() * width,
        size: Math.random() * 1.8 + 0.6,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    const render = () => {
      // Smooth warp transition
      const targetWarp = isWarping ? 12 : 1;
      warpFactorRef.current += (targetWarp - warpFactorRef.current) * 0.08;
      const speed = 1.2 * warpFactorRef.current;

      // Draw faint translucent space clear for motion blur during warp
      ctx.fillStyle = isWarping ? "rgba(3, 0, 20, 0.35)" : "rgba(3, 0, 20, 0.85)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2 + mouseRef.current.x * 40;
      const cy = height / 2 + mouseRef.current.y * 40;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.pz = star.z;
        star.z -= speed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
          star.pz = width;
        }

        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const pk = 250 / star.pz;
          const prevX = star.x * pk + cx;
          const prevY = star.y * pk + cy;

          const size = Math.max(0.4, (1 - star.z / width) * star.size * (isWarping ? 1.5 : 1));
          const alpha = Math.min(1, Math.max(0.2, 1 - star.z / width));

          ctx.save();
          ctx.strokeStyle = star.color;
          ctx.fillStyle = star.color;
          ctx.globalAlpha = alpha;

          if (isWarping || warpFactorRef.current > 2) {
            // Speed streak line
            ctx.lineWidth = size * 1.2;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(px, py);
            ctx.stroke();
          } else {
            // Normal sparkling star
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isWarping]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
