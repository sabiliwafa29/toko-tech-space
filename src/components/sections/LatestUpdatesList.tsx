"use client";

import React, { useState } from "react";
import { UPDATES, UpdateItem } from "@/data/updates";
import { ButtonArrow } from "../ui/ButtonArrow";

export function LatestUpdatesList() {
  const [hoveredImage, setHoveredImage] = useState<string>(UPDATES[0].image);

  return (
    <section className="py-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-12">
          <div>
            <span className="font-XS text-[#737373] uppercase tracking-widest block mb-2">
              Dispatch
            </span>
            <h2 className="font-XXL">Latest updates</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <ButtonArrow href="/latest" title="All news & updates" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive List */}
          <div className="lg:col-span-7 divide-y divide-black/10">
            {UPDATES.slice(0, 5).map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredImage(item.image)}
                className="group py-8 flex flex-col justify-between block transition-colors hover:bg-black/[0.01]"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-XS--semibold text-[#737373]">
                    {item.formattedDate}
                  </span>
                  <span className="font-XS uppercase px-2.5 py-0.5 rounded-full bg-black/5 text-[#737373]">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-L group-hover:text-black transition-colors my-2">
                  {item.title}
                </h3>

                <p className="font-S text-[#737373] line-clamp-2 max-w-2xl mt-1">
                  {item.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-end">
                  <ButtonArrow color="slate" direction="right" />
                </div>
              </a>
            ))}
          </div>

          {/* Right: Floating Image Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden bg-[#f4f4f4] border border-black/10 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out transform"
                style={{ backgroundImage: `url('${hoveredImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white font-XS uppercase tracking-wider">
                Photo Dispatch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
