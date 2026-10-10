import React from "react";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

interface JobOpening {
  title: string;
  office: "Sacramento" | "Oakland" | "Flexible";
  type: string;
  experience: string;
  description: string;
}

const OPENINGS: JobOpening[] = [
  {
    title: "Senior Project Architect (Higher Education)",
    office: "Sacramento",
    type: "Full-Time",
    experience: "8–12+ Years",
    description: "Lead technical documentation, DSA agency reviews, and consultant coordination for college and university capital projects."
  },
  {
    title: "Project Designer / Architect (Housing)",
    office: "Oakland",
    type: "Full-Time",
    experience: "5–8 Years",
    description: "Design and coordinate high-density multifamily residential developments from schematic concepts through construction administration."
  },
  {
    title: "Interior Designer",
    office: "Sacramento",
    type: "Full-Time",
    experience: "3–6 Years",
    description: "Curate finish schedules, interior architectural detailing, custom joinery, and FF&E specifications for commercial and residential spaces."
  },
  {
    title: "Job Captain / BIM Specialist",
    office: "Flexible",
    type: "Full-Time",
    experience: "3–5 Years",
    description: "Coordinate Revit models, standard details, clash detection, and architectural sheet sets across multidisciplinary project teams."
  }
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-16">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-8">
          <span className="font-S text-[#737373] uppercase tracking-wider block mb-2">
            Build Your Career With Us
          </span>
          <h1 className="font-3XL">Careers</h1>
          <p className="font-L text-[#737373] max-w-3xl mt-4">
            We are looking for curious minds, passionate designers, and collaborative problem-solvers who care deeply about the built environment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-black/10 pb-16">
          <div className="space-y-2">
            <span className="font-XS uppercase tracking-widest text-[#737373] block">01 / Wellness</span>
            <h3 className="font-L">Comprehensive Health</h3>
            <p className="font-S text-[#737373]">100% employer-sponsored health, dental, and vision insurance options for full-time employees.</p>
          </div>
          <div className="space-y-2">
            <span className="font-XS uppercase tracking-widest text-[#737373] block">02 / Future</span>
            <h3 className="font-L">401(k) Matching</h3>
            <p className="font-S text-[#737373]">Generous 401(k) company contribution and annual profit-sharing distributions.</p>
          </div>
          <div className="space-y-2">
            <span className="font-XS uppercase tracking-widest text-[#737373] block">03 / Growth</span>
            <h3 className="font-L">Licensure Support</h3>
            <p className="font-S text-[#737373]">Paid study materials, testing fee reimbursements, and bonus compensation upon passing ARE exams.</p>
          </div>
          <div className="space-y-2">
            <span className="font-XS uppercase tracking-widest text-[#737373] block">04 / Balance</span>
            <h3 className="font-L">Hybrid Flexibility</h3>
            <p className="font-S text-[#737373]">Hybrid work arrangements, generous PTO, and paid community service days.</p>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="border-b border-black/10 pb-6 mb-8 flex items-center justify-between">
            <h2 className="font-XXL">Current Openings</h2>
            <span className="font-S text-[#737373]">{OPENINGS.length} Roles Available</span>
          </div>

          <div className="divide-y divide-black/10">
            {OPENINGS.map((job, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5">
                  <span className="font-XS uppercase tracking-widest text-[#737373] block mb-1">
                    {job.office} Studio • {job.type}
                  </span>
                  <h3 className="font-L">{job.title}</h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-M text-[#737373]">{job.description}</p>
                  <span className="font-XS text-[#737373] block mt-2">Required: {job.experience}</span>
                </div>

                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <a
                    href="mailto:careers@lpas.com?subject=Application for ${job.title}"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#262626] text-white hover:bg-black text-[1.3rem] transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
