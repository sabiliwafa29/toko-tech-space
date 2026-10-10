import Link from "next/link";
import { MARKETS } from "@/data/markets";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

export default function MarketsHubPage() {
  return (
    <div className="pt-36 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="border-b border-black/10 pb-12 mb-16">
          <span className="font-S text-[#737373] uppercase tracking-wider block mb-2">
            Practice Sectors
          </span>
          <h1 className="font-3XL">Our Markets</h1>
          <p className="font-M text-[#737373] max-w-3xl mt-4">
            We organize our practice around specialized markets, ensuring deep sector expertise, regulatory fluency, and human-centered design for every project type.
          </p>
        </div>

        {/* Markets Cards List */}
        <div className="space-y-16">
          {MARKETS.map((market, idx) => (
            <div
              key={market.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-black/10 pb-16"
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 h-[360px] md:h-[480px] rounded-2xl overflow-hidden bg-[#f4f4f4] ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${market.heroImage}')` }}
                />
              </div>

              {/* Text */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="font-XS text-[#737373] uppercase tracking-widest block">
                  Sector {market.index} of 5
                </span>
                <h2 className="font-XXL">{market.title}</h2>
                <p className="font-M text-[#737373] leading-relaxed">
                  {market.overview}
                </p>

                {market.subMarkets && (
                  <div className="pt-2">
                    <span className="font-XS uppercase tracking-widest text-[#737373] block mb-3">
                      Specialized Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {market.subMarkets.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/markets/${market.slug}/${sub.slug}`}
                          className="px-3.5 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-xs font-medium text-[#262626] transition-colors"
                        >
                          {sub.title} ({sub.count})
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <ButtonArrow
                    href={`/markets/${market.slug}`}
                    title={`Explore ${market.title}`}
                    color="dark"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
