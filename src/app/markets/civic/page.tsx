import Link from "next/link";
import { MARKETS } from "@/data/markets";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

export default function CivicMarketPage() {
  const market = MARKETS.find((m) => m.slug === "civic")!;
  const projects = PROJECTS.filter((p) => p.market === "civic");

  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]" data-marketcolor="civic">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-12">
        <div className="border-b border-black/10 pb-8 mb-8">
          <span className="font-S text-[#737373] block mb-1">Our focus on</span>
          <span className="font-M font-medium text-[#737373]">{market.subtitle}</span>
          <h1 className="font-3XL mt-4">{market.title}</h1>
        </div>

        {/* Hero Banner */}
        <div className="relative w-full h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden bg-[#f4f4f4] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${market.heroImage}')` }}
          />
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-black/10 pb-16 mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-XL leading-tight">{market.overview}</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 font-M text-[#737373] leading-relaxed">
            {market.extendedText?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-12">
          <h2 className="font-XXL">Civic & Public Projects</h2>
          <ButtonArrow href="/portfolio?market=civic" title="All Civic Projects" color="dark" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={p.slug} project={p} clippedCorner={idx === 0 ? "tl" : "none"} />
          ))}
        </div>
      </div>
    </div>
  );
}
