export interface SubMarket {
  slug: string;
  title: string;
  count: number;
  description: string;
}

export interface Market {
  slug: string;
  title: string;
  subtitle: string;
  index: number;
  colorKey: "housing" | "interiors" | "higherEducation" | "civic" | "commercial";
  heroImage: string;
  overview: string;
  extendedText?: string[];
  subMarkets?: SubMarket[];
}

export const MARKETS: Market[] = [
  {
    slug: "housing",
    title: "Housing",
    subtitle: "Residential Housing",
    index: 1,
    colorKey: "housing",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/08_The-Emery.jpg",
    overview: "Every housing market demands a distinct strategy shaped by its community, funding structure, regulatory environment, and long-term vision.",
    extendedText: [
      "At LPAS, we understand that affordable, student, market rate, and senior housing each require a highly targeted approach. From financing complexities and entitlement pathways to resident experience and operational performance, no two sectors are the same.",
      "Our experience across multiple housing sectors strengthens our expertise within each one. Insights gained from student housing inform efficiencies in market rate developments. Lessons from affordable housing deepen our understanding of funding and community engagement."
    ],
    subMarkets: [
      {
        slug: "affordable-housing",
        title: "Affordable Housing",
        count: 7,
        description: "Equitable, well-crafted homes integrated into resilient communities with supportive amenities and sustainable practices."
      },
      {
        slug: "student-housing",
        title: "Student Housing",
        count: 3,
        description: "Engaging collegiate living spaces that cultivate academic focus, social connection, and collegiate identity."
      },
      {
        slug: "market-rate-housing",
        title: "Market Rate Housing",
        count: 15,
        description: "High-value multifamily developments engineered for operational efficiency, modern resident lifestyles, and civic character."
      },
      {
        slug: "senior-housing",
        title: "Senior Housing",
        count: 5,
        description: "Empathetic environments designed for comfort, wellness, intergenerational interaction, and aging in place."
      }
    ]
  },
  {
    slug: "interiors",
    title: "Interiors",
    subtitle: "Design for everyday life",
    index: 2,
    colorKey: "interiors",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/12_Block-52_Madison-by-Lennar.jpg",
    overview: "Interior spaces are where human experience unfolds at intimate scale. We design textures, acoustics, light, and transitions that resonate deeply.",
    extendedText: [
      "Our interiors team works hand-in-hand with our architects from project conception, ensuring an unbroken continuity between the exterior form and inner sanctuary.",
      "We balance material durability with sensory warmth, crafting environments for living, working, and healing that stand the test of time."
    ]
  },
  {
    slug: "higher-education",
    title: "Higher Education",
    subtitle: "Architecture for academic community",
    index: 3,
    colorKey: "higherEducation",
    heroImage: "https://lpas.com/wp-content/uploads/2025/09/lpas_image-13.jpg",
    overview: "Colleges and universities shape future generations. We create dynamic learning ecosystems that encourage cross-disciplinary discovery.",
    extendedText: [
      "From cutting-edge STEM facilities and student success centers to performance halls and dining hubs, our higher education designs reflect the ethos of each campus.",
      "We engage students, faculty, and administrators through structured workshops to build consensus and enduring institutional pride."
    ]
  },
  {
    slug: "civic",
    title: "Civic",
    subtitle: "Architecture in service",
    index: 4,
    colorKey: "civic",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/16_316-Vernon.jpg",
    overview: "Public architecture reflects democratic values and civic duty. We design community facilities that inspire trust, accessibility, and pride.",
    extendedText: [
      "Our civic work encompasses municipal centers, emergency operations, public safety hubs, and community gathering spaces.",
      "We prioritize security, accessibility, and environmental stewardship, delivering public infrastructure that serves generations of residents."
    ]
  },
  {
    slug: "commercial",
    title: "Commercial",
    subtitle: "Design for business value",
    index: 5,
    colorKey: "commercial",
    heroImage: "https://lpas.com/wp-content/uploads/2026/01/20_UCDH_Folsom-MOB_FULLSIZE.jpg",
    overview: "Commercial spaces must adapt to shifting economies while expressing corporate vision and supporting high productivity.",
    extendedText: [
      "We partner with developers, healthcare networks, and innovative enterprises to design workplaces, clinics, and mixed-use commercial centers.",
      "Every square foot is engineered for operational agility, tenant retention, and measurable business performance."
    ]
  }
];
