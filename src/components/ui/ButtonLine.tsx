"use client";

import React from "react";
import Link from "next/link";

interface ButtonLineProps {
  href: string;
  label: string;
  className?: string;
  target?: "_blank" | "_self";
  color?: "white" | "dark";
}

export function ButtonLine({
  href,
  label,
  className = "",
  target = "_self",
  color = "dark",
}: ButtonLineProps) {
  const textColor = color === "white" ? "text-white" : "text-[#262626]";
  const lineColor = color === "white" ? "bg-white" : "bg-[#262626]";

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <span className={`group inline-flex flex-col cursor-pointer text-[1.4rem] font-medium ${textColor} ${className}`}>
      <span>{label}</span>
      <span className="relative h-[1.5px] w-full overflow-hidden mt-0.5">
        <span
          className={`absolute inset-0 w-full h-full ${lineColor} transition-transform duration-300 transform group-hover:translate-x-full`}
        />
        <span
          className={`absolute inset-0 w-full h-full ${lineColor} transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0`}
        />
      </span>
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
