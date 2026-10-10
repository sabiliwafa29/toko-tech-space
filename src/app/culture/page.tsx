import React from "react";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

export default function CulturePage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-16">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-8">
          <span className="font-S text-[#737373] uppercase tracking-wider block mb-2">
            Inside the Studio
          </span>
          <h1 className="font-3XL">Culture</h1>
          <p className="font-L text-[#737373] max-w-3xl mt-4">
            Curiosity, collaboration, and camaraderie drive everything we create. We thrive in an open environment where every voice contributes to our collective growth.
          </p>
        </div>

        {/* Hero Photo Banner */}
        <div className="relative w-full h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden bg-[#f4f4f4] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg')`,
            }}
          />
        </div>

        {/* Culture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-black/10 pb-20 mb-20">
          <div>
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-3">
              01 / Shared Discovery
            </span>
            <h2 className="font-XL mb-4">Design Charettes</h2>
            <p className="font-M text-[#737373] leading-relaxed">
              We hold regular interdisciplinary studio pin-ups where interns, project architects, and principals collaborate on real-time spatial critiques and sketch ideation.
            </p>
          </div>

          <div>
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-3">
              02 / Stewardship
            </span>
            <h2 className="font-XL mb-4">Community Impact</h2>
            <p className="font-M text-[#737373] leading-relaxed">
              Through pro-bono consulting, Habitat for Humanity partnerships, and university mentorship programs, our team actively gives back to Sacramento and Bay Area communities.
            </p>
          </div>

          <div>
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-3">
              03 / Wellbeing
            </span>
            <h2 className="font-XL mb-4">Life Beyond Work</h2>
            <p className="font-M text-[#737373] leading-relaxed">
              From our annual studio retreats to Friday social hours and cycling clubs, we foster genuine connection and celebrate each other’s personal milestones.
            </p>
          </div>
        </div>

        {/* Call to Careers */}
        <div className="p-8 md:p-16 rounded-2xl bg-[#f9f9f9] border border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-XXL">Interested in joining our team?</h3>
            <p className="font-M text-[#737373] mt-2">
              Explore open positions in our Sacramento and Oakland studios.
            </p>
          </div>
          <ButtonArrow href="/careers" title="View Careers" color="dark" />
        </div>
      </div>
    </div>
  );
}
