"use client";

import React from "react";
import { MARKETS } from "@/data/markets";

interface PortfolioFilterProps {
  selectedMarket: string;
  onSelectMarket: (market: string) => void;
  selectedSubmarket?: string;
  onSelectSubmarket?: (sub: string) => void;
  counts: Record<string, number>;
}

export function PortfolioFilter({
  selectedMarket,
  onSelectMarket,
  selectedSubmarket = "all",
  onSelectSubmarket,
  counts,
}: PortfolioFilterProps) {
  const currentMarketObj = MARKETS.find((m) => m.slug === selectedMarket);

  return (
    <div className="w-full space-y-6">
      {/* Primary Market Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 border-b border-black/10 pb-6">
        <button
          type="button"
          onClick={() => {
            onSelectMarket("all");
            onSelectSubmarket?.("all");
          }}
          className={`px-5 py-2 rounded-full font-S transition-all ${
            selectedMarket === "all"
              ? "bg-[#262626] text-white"
              : "bg-black/5 text-[#262626] hover:bg-black/10"
          }`}
        >
          <span>All</span>
          <span className="ml-2 text-xs opacity-60">({counts["all"] || 0})</span>
        </button>

        {MARKETS.map((market) => {
          const isSelected = selectedMarket === market.slug;
          const count = counts[market.slug] || 0;

          return (
            <button
              key={market.slug}
              type="button"
              onClick={() => {
                onSelectMarket(market.slug);
                onSelectSubmarket?.("all");
              }}
              className={`px-5 py-2 rounded-full font-S transition-all ${
                isSelected
                  ? "bg-[#262626] text-white"
                  : "bg-black/5 text-[#262626] hover:bg-black/10"
              }`}
            >
              <span>{market.title}</span>
              <span className="ml-2 text-xs opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Secondary Sub-market Filter Bar */}
      {currentMarketObj && currentMarketObj.subMarkets && (
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="font-XS uppercase tracking-widest text-[#737373] mr-2">
            Focus:
          </span>
          <button
            type="button"
            onClick={() => onSelectSubmarket?.("all")}
            className={`px-4 py-1.5 rounded-full font-XS transition-all ${
              selectedSubmarket === "all"
                ? "bg-[#737373] text-white"
                : "border border-black/10 text-[#737373] hover:border-black/30"
            }`}
          >
            All {currentMarketObj.title}
          </button>

          {currentMarketObj.subMarkets.map((sub) => {
            const isSubSelected = selectedSubmarket === sub.slug;
            return (
              <button
                key={sub.slug}
                type="button"
                onClick={() => onSelectSubmarket?.(sub.slug)}
                className={`px-4 py-1.5 rounded-full font-XS transition-all ${
                  isSubSelected
                    ? "bg-[#737373] text-white"
                    : "border border-black/10 text-[#737373] hover:border-black/30"
                }`}
              >
                <span>{sub.title}</span>
                <span className="ml-1 opacity-60">({sub.count})</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
