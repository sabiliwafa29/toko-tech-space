"use client";

import React from "react";
import Link from "next/link";

interface ButtonCircleProps {
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  ariaLabel: string;
  className?: string;
  theme?: "light" | "dark" | "market";
  size?: "sm" | "md" | "lg";
}

export function ButtonCircle({
  href,
  onClick,
  icon,
  ariaLabel,
  className = "",
  theme = "light",
  size = "md",
}: ButtonCircleProps) {
  const sizeClasses =
    size === "sm"
      ? "w-9 h-9 text-[1.2rem]"
      : size === "lg"
      ? "w-14 h-14 text-[1.6rem]"
      : "w-11 h-11 text-[1.4rem]";

  const themeClasses =
    theme === "dark"
      ? "border-white/30 text-white hover:border-white"
      : theme === "market"
      ? "border-[var(--marketContentContrast)] text-[var(--marketContentContrast)]"
      : "border-[#262626]/20 text-[#262626] hover:border-[#262626]";

  const content = (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative group overflow-hidden rounded-full border flex items-center justify-center transition-all duration-300 ${sizeClasses} ${themeClasses} ${className}`}
    >
      {/* Expanding Disc Background */}
      <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out bg-current opacity-10" />
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </button>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return content;
}
