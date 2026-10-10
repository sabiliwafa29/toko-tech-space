import { notFound } from "next/navigation";
import Link from "next/link";
import { MARKETS } from "@/data/markets";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

interface SubmarketProps {
  params: Promise<{ submarket: string }>;
}

export async function generateStaticParams() {
  const housing = MARKETS.find((m) => m.slug === "housing")!;
  return (housing.subMarkets || []).map((s) => ({
    submarket: s.slug,
  }));
}

export default async function SubmarketPage({ params }: SubmarketProps) {
  const { submarket } = await params;
  const housingMarket = MARKETS.find((m) => m.slug === "housing")!;
  const currentSub = housingMarket.subMarkets?.find((s) => s.slug === submarket);

  if (!currentSub) {
    notFound();
  }

  // Filter projects matching this submarket or related housing
  const matchingProjects = PROJECTS.filter(
    (p) => p.market === "housing" && (p.submarket === submarket || !p.submarket)
  );

  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-[#737373] font-S mb-6">
          <Link href="/markets" className="hover:text-black transition-colors">
            Markets
          </Link>
          <span>/</span>
          <Link href="/markets/housing" className="hover:text-black transition-colors">
            Housing
          </Link>
          <span>/</span>
          <span className="text-[#262626]">{currentSub.title}</span>
        </div>

        {/* Submarket Title Block */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <span className="font-XS uppercase tracking-widest text-[#737373] block mb-2">
            Housing Sector Focus
          </span>
          <h1 className="font-3XL mb-4">{currentSub.title}</h1>
          <p className="font-M text-[#737373] max-w-3xl leading-relaxed">
            {currentSub.description}
          </p>
        </div>

        {/* Other Submarkets Switcher */}
        <div className="flex flex-wrap gap-2 mb-16">
          {housingMarket.subMarkets?.map((sub) => (
            <Link
              key={sub.slug}
              href={`/markets/housing/${sub.slug}`}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                sub.slug === submarket
                  ? "bg-[#262626] text-white"
                  : "border border-black/10 hover:border-black/30 hover:bg-black/5"
              }`}
            >
              {sub.title} ({sub.count})
            </Link>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="border-b border-black/10 pb-6 mb-12 flex items-center justify-between">
          <h2 className="font-XXL">Projects in {currentSub.title}</h2>
          <ButtonArrow
            href={`/portfolio?market=housing`}
            title="View all housing"
            color="dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matchingProjects.map((p, idx) => (
            <ProjectCard
              key={p.slug}
              project={p}
              clippedCorner={idx === 0 ? "tl" : idx === 2 ? "br" : "none"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
