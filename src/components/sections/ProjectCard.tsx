"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
  clippedCorner?: "tl" | "br" | "none";
  className?: string;
}

export function ProjectCard({
  project,
  large = false,
  clippedCorner = "none",
  className = "",
}: ProjectCardProps) {
  const clipClass =
    clippedCorner === "tl"
      ? "data-clipcorner=\"tl\""
      : clippedCorner === "br"
      ? "data-clipcorner=\"br\""
      : "";

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group block w-full overflow-hidden ${className}`}
      data-showblob="View"
    >
      {/* Image Container with Clipped Corner */}
      <div
        className={`relative overflow-hidden w-full bg-[#f4f4f4] ${
          large ? "h-[360px] md:h-[500px]" : "h-[260px] md:h-[320px]"
        }`}
        {...(clippedCorner === "tl" ? { "data-clipcorner": "tl" } : {})}
        {...(clippedCorner === "br" ? { "data-clipcorner": "br" } : {})}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Meta Text */}
      <div className="mt-4 flex flex-col">
        <h3 className="font-M font-normal text-[#262626] group-hover:text-black transition-colors">
          {project.title}
        </h3>
        <span className="font-XS text-[#737373] mt-1 uppercase tracking-wider">
          {project.location}
        </span>
      </div>
    </Link>
  );
}
