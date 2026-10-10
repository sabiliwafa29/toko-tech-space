"use client";

import React, { useEffect, useRef, useState } from "react";
import { sound } from "@/lib/audioEngine";

export function KineticCanvas({ className = "w-full h-full" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // 3D Polyhedron Vertices (Icosahedron-like core)
    const baseRadius = Math.min(width, height) * 0.28;
    const vertices: { x: number; y: number; z: number }[] = [];
    const phi = (1 + Math.sqrt(5)) / 2;

    const rawCoords = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    rawCoords.forEach(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      vertices.push({
        x: (x / len) * baseRadius,
        y: (y / len) * baseRadius,
        z: (z / len) * baseRadius
      });
    });

    // Particle Cloud Rings
    const ringParticles: { angle: number; radius: number; speed: number; y: number }[] = [];
    for (let i = 0; i < 48; i++) {
      ringParticles.push({
        angle: (i / 48) * Math.PI * 2,
        radius: baseRadius * 1.5 + (Math.random() - 0.5) * 30,
        speed: 0.008 + Math.random() * 0.006,
        y: (Math.random() - 0.5) * 40
      });
    }

    let rotX = 0.4;
    let rotY = 0.2;
    let targetRotX = 0.4;
    let targetRotY = 0.2;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      sound.playClick(1400);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      targetRotY += dx * 0.006;
      targetRotX += dy * 0.006;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    let explodeFactor = 1.0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate smooth rotation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;
      targetRotY += 0.003; // Auto idle spin

      // Explode animation spring
      const targetExplode = isExploded ? 1.6 : 1.0;
      explodeFactor += (targetExplode - explodeFactor) * 0.08;

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D to 2D
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected = vertices.map((v) => {
        // Expand outward when exploded
        const vx = v.x * explodeFactor;
        const vy = v.y * explodeFactor;
        const vz = v.z * explodeFactor;

        // Rotate Y
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        // Rotate X
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        const fov = 480;
        const scale = fov / (fov + z2 + baseRadius * 1.2);

        return {
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          z: z2,
          scale
        };
      });

      // Draw Edges
      ctx.lineWidth = 1.2;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const d = Math.hypot(
            projected[i].x - projected[j].x,
            projected[i].y - projected[j].y
          );
          if (d < baseRadius * 1.5 * explodeFactor) {
            const alpha = Math.max(0.08, 0.4 - d / (baseRadius * 1.5 * explodeFactor));
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      projected.forEach((p, idx) => {
        const glow = Math.max(0.2, (p.z + baseRadius) / (baseRadius * 2));
        ctx.fillStyle = idx % 2 === 0 ? `rgba(0, 245, 255, ${glow})` : `rgba(255, 159, 28, ${glow})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Orbital Particles
      ringParticles.forEach((rp) => {
        rp.angle += rp.speed;
        const px = Math.cos(rp.angle) * rp.radius * explodeFactor;
        const pz = Math.sin(rp.angle) * rp.radius * explodeFactor;
        const py = rp.y + Math.sin(rp.angle * 2) * 12;

        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;

        const fov = 480;
        const scale = fov / (fov + z2 + baseRadius * 1.2);

        const sx = centerX + x1 * scale;
        const sy = centerY + y2 * scale;

        ctx.fillStyle = "rgba(0, 245, 255, 0.5)";
        ctx.fillRect(sx, sy, 2 * scale, 2 * scale);
      });

      // Center Core Beacon
      ctx.fillStyle = "rgba(0, 245, 255, 0.15)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 0.35 * explodeFactor, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isExploded]);

  return (
    <div className={`relative ${className}`} data-showblob={isExploded ? "COLLAPSE" : "EXPLODE"}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            sound.playClick(isExploded ? 900 : 1600);
            setIsExploded((prev) => !prev);
          }}
          className="px-4 py-2 rounded-full glass-panel text-xs font-mono tracking-wider uppercase text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{isExploded ? "[COLLAPSE CORE]" : "[EXPLODE CORE]"}</span>
        </button>
      </div>
    </div>
  );
}
