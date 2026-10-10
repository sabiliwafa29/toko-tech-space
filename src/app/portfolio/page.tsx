"use client";

import React, { useState, useMemo } from "react";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function PortfolioPage() {
  const [selectedMarket, setSelectedMarket] = useState<string>("all");
  const [selectedSubmarket, setSelectedSubmarket] = useState<string>("all");

  // Calculate live counts
  const counts = useMemo(() => {
    const acc: Record<string, number> = { all: PROJECTS.length };
    PROJECTS.forEach((p) => {
      acc[p.market] = (acc[p.market] || 0) + 1;
    });
    return acc;
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (selectedMarket !== "all" && p.market !== selectedMarket) {
        return false;
      }
      if (
        selectedSubmarket !== "all" &&
        p.submarket &&
        p.submarket !== selectedSubmarket
      ) {
        return false;
      }
      return true;
    });
  }, [selectedMarket, selectedSubmarket]);

  return (
    <div className="pt-36 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        {/* Page Header */}
        <div className="border-b border-black/10 pb-12 mb-12">
          <div className="flex items-center justify-between text-[#737373] font-S mb-4">
            <span>Our Work</span>
            <span>Overview ({filteredProjects.length})</span>
          </div>
          <h1 className="font-3XL">Portfolio</h1>
        </div>

        {/* Filter Controls */}
        <div className="mb-16">
          <PortfolioFilter
            selectedMarket={selectedMarket}
            onSelectMarket={setSelectedMarket}
            selectedSubmarket={selectedSubmarket}
            onSelectSubmarket={setSelectedSubmarket}
            counts={counts}
          />
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center text-[#737373] font-M">
            No projects found for the selected category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                clippedCorner={idx % 3 === 0 ? "tl" : idx % 3 === 2 ? "br" : "none"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
