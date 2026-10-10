"use client";

import React, { useState } from "react";
import { TEAM_MEMBERS, TeamMember } from "@/data/team";
import { TeamDrawer } from "@/components/sections/TeamDrawer";

export default function AboutPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Leadership" | "Sacramento" | "Oakland">("All");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredTeam = TEAM_MEMBERS.filter((m) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Leadership") return m.category === "Leadership";
    if (activeFilter === "Sacramento") return m.office === "Sacramento";
    if (activeFilter === "Oakland") return m.office === "Oakland";
    return true;
  });

  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      {/* 1. Header Block */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-16">
        <div className="border-b border-black/10 pb-8 mb-8">
          <span className="font-S text-[#737373] uppercase tracking-wider block mb-2">
            Creativity, Community, Connection
          </span>
          <h1 className="font-3XL">About</h1>
          <p className="font-L text-[#737373] max-w-3xl mt-4">
            We believe the best designs emerge when diverse voices come together to imagine and build with purpose.
          </p>
        </div>

        {/* Hero Photo Banner */}
        <div className="relative w-full h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden bg-[#f4f4f4] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lpas.com/wp-content/uploads/2025/12/02_LPAS-723-S-Street-Headquarters.jpg')`,
            }}
          />
        </div>
      </div>

      {/* 2. Philosophy & Overview */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-black/10 pb-16">
          <div className="lg:col-span-5">
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-4">
              Our Practice
            </span>
            <h2 className="font-XL leading-tight">
              LPAS Architecture + Design is an award-winning multidisciplinary firm providing architecture, interior design, and planning services.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 font-M text-[#737373] leading-relaxed">
            <p>
              With offices in Sacramento and Oakland, LPAS works collaboratively with clients on higher education, civic, housing, and commercial projects that respond to context, community, and purpose.
            </p>
            <p>
              Our philosophy reflects an open process uniting design disciplines with client goals to produce thoughtful, lasting built environments. Our work emphasizes environmental responsibility, sense of place, and design excellence that supports both operational performance and community value.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Team Directory */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-16">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-12 gap-6">
          <div>
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-2">
              Our People
            </span>
            <h2 className="font-XXL">People shape the spaces we design.</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", "Leadership", "Sacramento", "Oakland"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-full font-S transition-colors ${
                  activeFilter === tab
                    ? "bg-[#262626] text-white"
                    : "bg-black/5 hover:bg-black/10 text-[#262626]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.slug}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer block"
              data-showblob="View Bio"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden bg-[#f4f4f4] mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-L group-hover:underline">{member.name}</h3>
              <p className="font-S text-[#737373] mt-0.5">{member.role}</p>
              <span className="font-XS text-[#737373] uppercase tracking-wider block mt-1">
                {member.office} Studio
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-out Bio Modal */}
      <TeamDrawer
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
