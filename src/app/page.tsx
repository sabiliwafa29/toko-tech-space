import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { LatestUpdatesList } from "@/components/sections/LatestUpdatesList";
import { ButtonArrow } from "@/components/ui/ButtonArrow";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const lasPositas = PROJECTS.find((p) => p.slug === "las-positas-college-academic-support-building")!;
  const prospera = PROJECTS.find((p) => p.slug === "prospera-at-fiddyment-ranch")!;
  const ucDavis = PROJECTS.find((p) => p.slug === "uc-davis-health-folsom-medical-care-clinic")!;
  const frederic = PROJECTS.find((p) => p.slug === "the-frederic")!;
  const chp = PROJECTS.find((p) => p.slug === "california-highway-patrol-truckee-field-office")!;
  const emery = PROJECTS.find((p) => p.slug === "the-emery")!;

  return (
    <div className="w-full">
      {/* 1. Hero Section with 5 Market Cards */}
      <HomeHero />

      {/* 2. Manifesto / Studio Intro */}
      <section className="py-24 md:py-36 bg-white text-[#262626]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-S text-[#737373] tracking-wider uppercase block">
              Listen. Plan. Analyze. Shape.
            </span>
            <h2 className="font-XXL md:font-3XL font-normal tracking-tight text-[#141414]">
              Clear Process. Creative Results. Human Centered. Always Curious.
            </h2>
            <p className="font-M text-[#737373] max-w-3xl leading-relaxed">
              At LPAS, we design with people at the center and purpose at every turn. We believe great architecture starts by listening, truly listening, to the communities, students, families, and leaders who will live, learn, and grow in the spaces we create. Our process is open, honest, and relentlessly collaborative.
            </p>
            <div className="pt-4">
              <ButtonArrow href="/about" title="More about us" color="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Work: A Selection of Our Work */}
      <section className="py-24 bg-[#f9f9f9] text-[#262626]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-16 gap-6">
            <div>
              <span className="font-XS text-[#737373] uppercase tracking-widest block mb-2">
                Portfolio Focus
              </span>
              <h2 className="font-XXL">A selection of our work</h2>
            </div>

            {/* Quick Sector Filter Links */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/portfolio?market=housing"
                className="px-4 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[1.3rem] transition-colors"
              >
                Housing <span className="text-xs opacity-60">30</span>
              </Link>
              <Link
                href="/portfolio?market=interiors"
                className="px-4 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[1.3rem] transition-colors"
              >
                Interiors <span className="text-xs opacity-60">17</span>
              </Link>
              <Link
                href="/portfolio?market=higher-education"
                className="px-4 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[1.3rem] transition-colors"
              >
                Higher Education <span className="text-xs opacity-60">13</span>
              </Link>
              <Link
                href="/portfolio?market=civic"
                className="px-4 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[1.3rem] transition-colors"
              >
                Civic <span className="text-xs opacity-60">6</span>
              </Link>
              <Link
                href="/portfolio?market=commercial"
                className="px-4 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[1.3rem] transition-colors"
              >
                Commercial <span className="text-xs opacity-60">14</span>
              </Link>
              <div className="ml-2">
                <ButtonArrow href="/portfolio" title="All projects" color="dark" />
              </div>
            </div>
          </div>

          {/* Asymmetric Layout One */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            {/* 1 Large with Top-Left Clipped Corner */}
            <div className="lg:col-span-8">
              <ProjectCard
                project={lasPositas}
                large={true}
                clippedCorner="tl"
              />
            </div>
            {/* 2 Stacked Medium Cards */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <ProjectCard project={prospera} />
              <ProjectCard project={ucDavis} />
            </div>
          </div>

          {/* Asymmetric Layout Two */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 2 Stacked Medium Cards */}
            <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
              <ProjectCard project={frederic} />
              <ProjectCard project={chp} />
            </div>
            {/* 1 Large with Bottom-Right Clipped Corner */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <ProjectCard
                project={emery}
                large={true}
                clippedCorner="br"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Updates & News with Hover Image Reveal */}
      <LatestUpdatesList />
    </div>
  );
}
