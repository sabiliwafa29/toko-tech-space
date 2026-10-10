import React from "react";
import { UPDATES } from "@/data/updates";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

export default function LatestUpdatesPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-16">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <span className="font-S text-[#737373] uppercase tracking-wider block mb-2">
            Firm News & Awards
          </span>
          <h1 className="font-3XL">Latest Updates</h1>
          <p className="font-L text-[#737373] max-w-3xl mt-4">
            Recent recognition, project milestones, conference presentations, and stories from our studios.
          </p>
        </div>

        {/* Updates Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {UPDATES.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden border border-black/10 p-6 bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-[#f4f4f4] mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              {/* Text Meta */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-XS mb-2 text-[#737373]">
                    <span className="font-semibold">{item.formattedDate}</span>
                    <span className="px-2 py-0.5 rounded-full bg-black/5 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h2 className="font-L group-hover:underline mb-3">
                    {item.title}
                  </h2>

                  <p className="font-S text-[#737373] line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="font-XS text-[#737373]">Read dispatch</span>
                  <ButtonArrow href={item.link} color="slate" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
