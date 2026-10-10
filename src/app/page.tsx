"use client";

import React, { useState } from "react";
import { Starfield } from "@/components/canvas/Starfield";
import { SpaceHUD } from "@/components/navigation/SpaceHUD";
import { HeroMission } from "@/components/sections/HeroMission";
import { OrbitalSystems } from "@/components/sections/OrbitalSystems";
import { CosmicMetrics } from "@/components/sections/CosmicMetrics";
import { ConstellationShowcase } from "@/components/sections/ConstellationShowcase";
import { TransmissionConsole } from "@/components/sections/TransmissionConsole";
import { SpaceFooter } from "@/components/navigation/SpaceFooter";

export default function SpaceLandingPage() {
  const [isWarping, setIsWarping] = useState(false);

  const handleWarpToggle = () => {
    setIsWarping((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* 60 FPS Procedural 3D Starfield & Particle Warp Canvas */}
      <Starfield isWarping={isWarping} />

      {/* Floating Space HUD & Top Telemetry Nav */}
      <SpaceHUD onWarpToggle={handleWarpToggle} isWarping={isWarping} />

      {/* Main Single Page Viewport Sectors */}
      <div className="relative z-10 space-y-8">
        <HeroMission onWarpToggle={handleWarpToggle} isWarping={isWarping} />
        <OrbitalSystems />
        <CosmicMetrics />
        <ConstellationShowcase />
        <TransmissionConsole />
      </div>

      {/* Cosmic Footer */}
      <SpaceFooter />
    </main>
  );
}
