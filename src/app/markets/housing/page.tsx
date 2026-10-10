import Link from "next/link";
import { MARKETS } from "@/data/markets";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

export default function HousingMarketPage() {
  const housingMarket = MARKETS.find((m) => m.slug === "housing")!;
  const housingProjects = PROJECTS.filter((p) => p.market === "housing");

  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      {/* Sector Header Block */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-8 gap-4">
          <div>
            <span className="font-S text-[#737373] block mb-1">Our focus on</span>
            <span className="font-M font-medium text-[#737373]">Residential Housing</span>
          </div>

          {/* Subpages Tabs */}
          <div className="flex flex-wrap gap-2">
            {housingMarket.subMarkets?.map((sub) => (
              <Link
                key={sub.slug}
                href={`/markets/housing/${sub.slug}`}
                className="px-4 py-2 rounded-full border border-black/10 text-xs font-medium hover:border-black/40 hover:bg-black/5 transition-colors"
              >
                {sub.title} ({sub.count})
              </Link>
            ))}
          </div>
        </div>

        <h1 className="font-3XL mb-8">Housing</h1>

        {/* Hero Photo Banner */}
        <div className="relative w-full h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden bg-[#f4f4f4] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${housingMarket.heroImage}')` }}
          />
        </div>
      </div>

      {/* Intro Double Block */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-black/10 pb-16">
          <div className="lg:col-span-5">
            <span className="font-S uppercase tracking-wider text-[#737373] block mb-4">
              Sector Strategy
            </span>
            <h2 className="font-XL leading-tight">
              {housingMarket.overview}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 font-M text-[#737373] leading-relaxed">
            {housingMarket.extendedText?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Projects */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-12">
          <h2 className="font-XXL">Highlighted Housing Projects</h2>
          <ButtonArrow
            href="/portfolio?market=housing"
            title="All Housing Projects"
            color="dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {housingProjects.map((p, idx) => (
            <ProjectCard
              key={p.slug}
              project={p}
              clippedCorner={idx === 0 ? "tl" : idx === 2 ? "br" : "none"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
