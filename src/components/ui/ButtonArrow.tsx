"use client";

import React from "react";
import Link from "next/link";
import { ArrowIcon } from "./Icons";

interface ButtonArrowProps {
  href?: string;
  onClick?: () => void;
  title?: string;
  className?: string;
  color?: "slate" | "white" | "dark";
  direction?: "right" | "down" | "up";
}

export function ButtonArrow({
  href,
  onClick,
  title,
  className = "",
  color = "slate",
  direction = "right",
}: ButtonArrowProps) {
  const content = (
    <div
      className={`group inline-flex items-center gap-3 cursor-pointer select-none text-[1.4rem] font-medium transition-colors ${
        color === "white"
          ? "text-white"
          : color === "dark"
          ? "text-[#262626]"
          : "text-[#262626] hover:text-[#000]"
      } ${className}`}
      onClick={onClick}
    >
      {title && (
        <span className="button__title transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </span>
      )}
      <div
        className={`relative overflow-hidden w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
          color === "white"
            ? "border-white/40 group-hover:border-white group-hover:bg-white/10"
            : "border-[#262626]/20 group-hover:border-[#262626] group-hover:bg-[#262626]/5"
        }`}
      >
        <div
          className={`relative w-4 h-4 overflow-hidden flex items-center justify-center ${
            direction === "down"
              ? "rotate-90"
              : direction === "up"
              ? "-rotate-90"
              : ""
          }`}
        >
          {/* First Arrow (slides out to right) */}
          <span className="absolute transition-transform duration-300 ease-out transform group-hover:translate-x-5">
            <ArrowIcon className="w-3.5 h-3.5" />
          </span>
          {/* Second Arrow (slides in from left) */}
          <span className="absolute transition-transform duration-300 ease-out transform -translate-x-5 group-hover:translate-x-0">
            <ArrowIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
