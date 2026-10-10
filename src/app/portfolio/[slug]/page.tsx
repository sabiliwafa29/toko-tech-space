import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <article className="pt-32 pb-24 bg-white text-[#262626]">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-8 flex items-center justify-between text-[#737373] font-S">
        <Link href="/portfolio" className="hover:text-black transition-colors">
          ← Back to Portfolio
        </Link>
        <span className="uppercase tracking-widest text-xs">
          {project.market}
        </span>
      </div>

      {/* Main Full-Bleed Hero */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-16">
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden bg-[#f4f4f4]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
          />
        </div>
      </div>

      {/* Project Title & Metadata Grid */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-black/10 pb-16 mb-16">
          {/* Title & Core Location */}
          <div className="lg:col-span-8">
            <h1 className="font-3XL mb-4">{project.title}</h1>
            <p className="font-L text-[#737373]">{project.location}</p>
          </div>

          {/* Project Spec Metrics */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 font-S border-t lg:border-t-0 lg:border-l border-black/10 pt-6 lg:pt-0 lg:pl-8">
            <div>
              <span className="text-[#737373] block mb-1">Client</span>
              <span className="font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-[#737373] block mb-1">Year Completed</span>
              <span className="font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-[#737373] block mb-1">Scale / Size</span>
              <span className="font-medium">{project.squareFootage}</span>
            </div>
            <div>
              <span className="text-[#737373] block mb-1">Market Sector</span>
              <span className="font-medium capitalize">{project.market}</span>
            </div>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-7">
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-4">
              Design Solution
            </span>
            <p className="font-M text-[#262626] leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.highlights && (
            <div className="lg:col-span-5 bg-[#f9f9f9] p-8 rounded-2xl border border-black/5">
              <span className="font-XS uppercase tracking-widest text-[#737373] block mb-4">
                Key Deliverables & Innovations
              </span>
              <ul className="space-y-3 font-S">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Quote Block (if present) */}
        {project.quote && (
          <div className="my-20 p-8 md:p-16 rounded-2xl bg-[#141414] text-white">
            <blockquote className="font-XL md:font-XXL italic font-normal tracking-tight max-w-4xl">
              “{project.quote.text}”
            </blockquote>
            <div className="mt-8 font-S text-white/70">
              <span className="font-semibold text-white block">
                {project.quote.author}
              </span>
              <span>{project.quote.role}</span>
            </div>
          </div>
        )}

        {/* Photo Gallery */}
        {project.gallery.length > 1 && (
          <div className="my-20">
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-8">
              Visual Documentation
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-[360px] md:h-[460px] rounded-2xl overflow-hidden bg-[#f4f4f4]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Adjacent Project Pagination */}
        <div className="border-t border-black/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href={`/portfolio/${prevProject.slug}`}
            className="group flex flex-col items-start"
          >
            <span className="font-XS text-[#737373] uppercase mb-1">Previous Project</span>
            <span className="font-M group-hover:underline">{prevProject.title}</span>
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group flex flex-col items-end"
          >
            <span className="font-XS text-[#737373] uppercase mb-1">Next Project</span>
            <span className="font-M group-hover:underline">{nextProject.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
