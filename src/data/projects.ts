export interface Project {
  slug: string;
  title: string;
  location: string;
  market: "housing" | "interiors" | "higher-education" | "civic" | "commercial";
  submarket?: string;
  featured?: boolean;
  heroImage: string;
  gallery: string[];
  year: string;
  client: string;
  squareFootage: string;
  description: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  highlights?: string[];
  clippedCorner?: "tl" | "br" | "none";
}

export const PROJECTS: Project[] = [
  {
    slug: "las-positas-college-academic-support-building",
    title: "Las Positas College Academic Support Building",
    location: "Livermore, CA",
    market: "higher-education",
    featured: true,
    clippedCorner: "tl",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/05_LAS-POSITAS-COLLEGE-ACADEMIC-SUPPORT.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/05_LAS-POSITAS-COLLEGE-ACADEMIC-SUPPORT.jpg",
      "https://lpas.com/wp-content/uploads/2025/09/lpas_image-13.jpg",
      "https://lpas.com/wp-content/uploads/2026/01/25_UCD-Pitzer-Center.jpg"
    ],
    year: "2024",
    client: "Chabot-Las Positas Community College District",
    squareFootage: "82,000 SF",
    description: "Designed as a vibrant academic crossroads, the Academic Support Building at Las Positas College unites tutoring centers, computer labs, faculty offices, and active learning spaces. The dynamic architecture embraces passive daylighting, outdoor study courtyards, and state-of-the-art technological infrastructure.",
    quote: {
      text: "The new Academic Support Building has transformed how students engage with faculty and tutors. It is an inspiring beacon on our campus.",
      author: "Dr. Dyrell Foster",
      role: "President, Las Positas College"
    },
    highlights: ["LEED Gold Certification Target", "Integrated Student Commons", "High-Performance Glazing System"]
  },
  {
    slug: "prospera-at-fiddyment-ranch",
    title: "Prospera at Fiddyment Ranch",
    location: "Roseville, CA",
    market: "housing",
    submarket: "affordable-housing",
    featured: true,
    clippedCorner: "none",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/DJI_0490_1.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/DJI_0490_1.jpg",
      "https://lpas.com/wp-content/uploads/2025/12/08_The-Emery.jpg"
    ],
    year: "2023",
    client: "USA Properties Fund",
    squareFootage: "185,000 SF (198 Units)",
    description: "Prospera at Fiddyment Ranch provides high-quality affordable apartment homes in a rapidly growing master-planned community. Designed with craftsman architectural vernacular, the community features an expansive clubhouse, pool, community garden, and electric vehicle charging infrastructure.",
    highlights: ["100% Affordable Housing Units", "Resident Resource Center", "All-Electric Building Systems"]
  },
  {
    slug: "uc-davis-health-folsom-medical-care-clinic",
    title: "UC Davis Health Folsom Medical Care Clinic",
    location: "Folsom, CA",
    market: "commercial",
    featured: true,
    clippedCorner: "none",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/18_UCDH_Folsom-MOB_FULLSIZE.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/18_UCDH_Folsom-MOB_FULLSIZE.jpg",
      "https://lpas.com/wp-content/uploads/2026/01/20_UCDH_Folsom-MOB_FULLSIZE.jpg"
    ],
    year: "2025",
    client: "UC Davis Health",
    squareFootage: "110,000 SF",
    description: "A state-of-the-art outpatient healthcare facility bridging clinical excellence and human-centered comfort. Features patient navigation hubs, advanced specialty care suites, infusion bays with natural daylight, and an integrated wellness garden.",
    highlights: ["Sacramento Business Journal Best Real Estate Project Award", "Patient Biophilic Design", "Flexible Modular Exam Rooms"]
  },
  {
    slug: "the-frederic",
    title: "The Frederic",
    location: "Sacramento, CA",
    market: "housing",
    submarket: "market-rate-housing",
    featured: true,
    clippedCorner: "none",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/05_FREDERIC_Storefront.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/05_FREDERIC_Storefront.jpg",
      "https://lpas.com/wp-content/uploads/2025/12/09_Block-52_Madison-by-Lennar.jpg"
    ],
    year: "2023",
    client: "Heller Pacific",
    squareFootage: "75,000 SF (80 Units)",
    description: "The Frederic combines urban vitality with serene residential sanctuaries in the heart of downtown Sacramento. Ground-floor neighborhood retail activates the street, while custom metal scrims provide dynamic sun shading and architectural privacy.",
    highlights: ["Downtown Infill Transit-Oriented", "Rooftop Sky Lounge", "Curated Streetfront Retail"]
  },
  {
    slug: "california-highway-patrol-truckee-field-office",
    title: "California Highway Patrol Truckee Field Office",
    location: "Truckee, CA",
    market: "civic",
    featured: true,
    clippedCorner: "none",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/02_CHP-Truckee.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/02_CHP-Truckee.jpg",
      "https://lpas.com/wp-content/uploads/2025/12/16_316-Vernon.jpg"
    ],
    year: "2022",
    client: "State of California, DGS",
    squareFootage: "36,000 SF",
    description: "Engineered to withstand heavy Sierra snow loads and extreme mountain climates, the Truckee CHP Field Office provides essential public safety operations, secure logistics, dispatch, and community meeting spaces.",
    highlights: ["Heavy Snow Load Engineered Timber Structure", "Essential Services Act Compliance", "Zero Net Energy Ready"]
  },
  {
    slug: "the-emery",
    title: "The Emery",
    location: "Emeryville, CA",
    market: "housing",
    submarket: "market-rate-housing",
    featured: true,
    clippedCorner: "br",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/11_The-Emery.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/11_The-Emery.jpg",
      "https://lpas.com/wp-content/uploads/2025/12/08_The-Emery.jpg"
    ],
    year: "2024",
    client: "Sherwin-Williams Master Redevelopment / Lennar",
    squareFootage: "320,000 SF (380 Units)",
    description: "A flagship multifamily development anchoring the historic Sherwin-Williams master redevelopment. The Emery celebrates industrial heritage with brick details, contemporary steel accents, and panoramic views of the San Francisco Bay.",
    quote: {
      text: "LPAS created an iconic architectural anchor for Emeryville that honors the district's industrial roots while looking forward.",
      author: "Development Director",
      role: "Lennar Multifamily Communities"
    },
    highlights: ["Master-Planned Bay Area Landmark", "Multi-Courtyard Network", "Bicycle Transit Hub"]
  },
  {
    slug: "madison-by-lennar-condominiums",
    title: "Madison by Lennar Condominiums",
    location: "San Francisco, CA",
    market: "housing",
    submarket: "market-rate-housing",
    featured: false,
    clippedCorner: "tl",
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/09_Block-52_Madison-by-Lennar.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/09_Block-52_Madison-by-Lennar.jpg",
      "https://lpas.com/wp-content/uploads/2025/12/12_Block-52_Madison-by-Lennar.jpg"
    ],
    year: "2024",
    client: "Lennar",
    squareFootage: "140,000 SF",
    description: "Urban condominiums overlooking the San Francisco skyline, featuring bespoke interior finishes, expansive private balconies, and shared rooftop terrace gardens.",
    highlights: ["Boutique Bay Area Living", "Private Terrace Patios", "Custom Interior Joinery"]
  },
  {
    slug: "novo-interiors",
    title: "Novo Creative Interiors",
    location: "Oakland, CA",
    market: "interiors",
    featured: false,
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/12_Block-52_Madison-by-Lennar.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/12_Block-52_Madison-by-Lennar.jpg"
    ],
    year: "2023",
    client: "Novo Ventures",
    squareFootage: "42,000 SF",
    description: "A rich material palette celebrating reclaimed California timber, polished concrete, and acoustic felt installations for an agile modern creative workplace.",
    highlights: ["Acoustic Excellence", "Bespoke Lighting Installations", "Biophilic Planter Partitions"]
  },
  {
    slug: "american-river-college-student-center-cafeteria",
    title: "American River College Student Center & Cafeteria",
    location: "Sacramento, CA",
    market: "higher-education",
    featured: true,
    heroImage: "https://lpas.com/wp-content/uploads/2026/01/02_ARC-Student-Center_Extr.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2026/01/02_ARC-Student-Center_Extr.jpg"
    ],
    year: "2025",
    client: "Los Rios Community College District",
    squareFootage: "48,000 SF",
    description: "A renewed dining and social hub for thousands of students and faculty. Features broad glass curtain walls connecting interior dining zones to outdoor shade canopies and amphitheater seating.",
    highlights: ["Campus Social Crossroads", "High-Efficiency Commercial Kitchen", "Indoor-Outdoor Dining Loggias"]
  },
  {
    slug: "alwell-pleasant-hill",
    title: "Alwell Pleasant Hill",
    location: "Pleasant Hill, CA",
    market: "housing",
    submarket: "senior-housing",
    featured: false,
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/08_Alwell_FULLSIZE.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/08_Alwell_FULLSIZE.jpg"
    ],
    year: "2024",
    client: "Alwell Senior Living",
    squareFootage: "98,000 SF",
    description: "A compassionate, design-forward senior living community providing independent and assisted living options with sensory gardens, wellness suites, and gourmet culinary venues.",
    highlights: ["Memory Care Courtyards", "Universal Design Standards", "Daylit Movement Studios"]
  },
  {
    slug: "solano-transportation-authority",
    title: "Solano Transportation Authority Headquarters",
    location: "Suisun City, CA",
    market: "civic",
    featured: false,
    heroImage: "https://lpas.com/wp-content/uploads/2025/12/16_316-Vernon.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2025/12/16_316-Vernon.jpg"
    ],
    year: "2023",
    client: "Solano Transportation Authority",
    squareFootage: "24,000 SF",
    description: "Civic transit headquarters coordinating multimodal transit across Solano County. Designed with civic transparency, public board chambers, and emergency transportation dispatch.",
    highlights: ["Transit-Connected Civic Plaza", "Zero Carbon Operations", "Public Hearing Chambers"]
  },
  {
    slug: "uc-davis-pitzer-center",
    title: "Ann E. Pitzer Center, UC Davis",
    location: "Davis, CA",
    market: "higher-education",
    featured: false,
    heroImage: "https://lpas.com/wp-content/uploads/2026/01/25_UCD-Pitzer-Center.jpg",
    gallery: [
      "https://lpas.com/wp-content/uploads/2026/01/25_UCD-Pitzer-Center.jpg"
    ],
    year: "2022",
    client: "University of California, Davis",
    squareFootage: "17,500 SF",
    description: "An acoustically pristine recital hall and musical teaching facility accommodating solo recitals, chamber ensembles, and masterclasses with variable acoustic banners.",
    highlights: ["NC-15 Acoustic Quiet Criteria", "399-Seat Recital Hall", "Steinway Model D Specially Tuned Resonance"]
  }
];
