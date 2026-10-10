export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  office: "Sacramento" | "Oakland";
  category: "Leadership" | "Team";
  image: string;
  bio: string;
  education?: string;
  credentials?: string[];
  favoriteProject?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "chris-kelly",
    name: "Chris Kelly",
    role: "President & CEO, AIA, LEED AP",
    office: "Sacramento",
    category: "Leadership",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_37.jpg",
    bio: "Chris provides strategic leadership across LPAS, guiding our architectural, interior design, and planning teams with a focus on collaborative excellence, environmental stewardship, and design precision.",
    education: "B.Arch, California Polytechnic State University, San Luis Obispo",
    credentials: ["AIA", "LEED AP BD+C", "NCARB"]
  },
  {
    slug: "manuel-vivar-nieto",
    name: "Manuel Vivar-Nieto",
    role: "Principal, Director of Higher Education",
    office: "Sacramento",
    category: "Leadership",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg",
    bio: "Manuel spearheads the firm’s academic practice, designing transformative campus centers, laboratories, and student housing complexes across California's top college systems.",
    education: "M.Arch, University of California, Berkeley",
    credentials: ["AIA", "LEED AP"]
  },
  {
    slug: "laurel-chavez",
    name: "Laurel Chavez",
    role: "Principal, Director of Housing Practice",
    office: "Oakland",
    category: "Leadership",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_37.jpg",
    bio: "Laurel brings over two decades of expertise in high-density urban residential, affordable housing finance structures, and master-planned community developments.",
    education: "B.Arch, University of Oregon",
    credentials: ["AIA", "Housing California Board"]
  },
  {
    slug: "melissa-sabala",
    name: "Melissa Sabala",
    role: "Principal, Director of Interior Architecture",
    office: "Sacramento",
    category: "Leadership",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg",
    bio: "Melissa guides the interior design studio, synthesizing spatial choreography, tactile finishes, and wellness acoustics across healthcare, workplace, and residential projects.",
    education: "B.A. Interior Architecture, California State University, Sacramento",
    credentials: ["IIDA", "CID", "LEED AP ID+C"]
  },
  {
    slug: "david-oliveira",
    name: "David Oliveira",
    role: "Principal, Director of Civic & Public Projects",
    office: "Sacramento",
    category: "Leadership",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_37.jpg",
    bio: "David specializes in public safety facilities, municipal master plans, and courthouse design, balancing stringent security requirements with accessible community engagement.",
    education: "B.Arch, Cal Poly San Luis Obispo",
    credentials: ["AIA"]
  },
  {
    slug: "nick-shanks",
    name: "Nick Shanks",
    role: "Principal, Oakland Studio Director",
    office: "Oakland",
    category: "Leadership",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg",
    bio: "Nick champions sustainable Bay Area design, leading mixed-use and multifamily residential developments with a passion for mass timber and carbon-conscious construction.",
    education: "M.Arch, University of Washington",
    credentials: ["AIA", "LEED AP"]
  },
  {
    slug: "angelique-dionisio",
    name: "Angelique Dionisio",
    role: "Senior Project Architect",
    office: "Sacramento",
    category: "Team",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_37.jpg",
    bio: "Angelique coordinates complex project documentation and construction administration for higher education and healthcare environments.",
    education: "B.Arch, University of Southern California",
    credentials: ["AIA"]
  },
  {
    slug: "bethanie-taylor",
    name: "Bethanie Taylor",
    role: "Senior Interior Designer",
    office: "Oakland",
    category: "Team",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg",
    bio: "Bethanie creates human-centered material narratives for modern multifamily residential amenities and workplace headquarters.",
    education: "B.S. Interior Design, San Francisco State University",
    credentials: ["NCIDQ"]
  },
  {
    slug: "craig-speck",
    name: "Craig Speck",
    role: "Senior Project Manager",
    office: "Sacramento",
    category: "Team",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_37.jpg",
    bio: "Craig guides project teams through complex agency reviews, cost control, and rigorous technical execution for commercial and institutional clients.",
    education: "B.Arch, California State Polytechnic University, Pomona",
    credentials: ["AIA"]
  },
  {
    slug: "kristina-gwinn",
    name: "Kristina Gwinn",
    role: "Project Architect",
    office: "Oakland",
    category: "Team",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg",
    bio: "Kristina specializes in urban infill housing and community engagement workshops.",
    education: "B.Arch, Woodbury University",
    credentials: ["AIA", "LEED Green Associate"]
  },
  {
    slug: "kyle-lamb",
    name: "Kyle Lamb",
    role: "Project Designer",
    office: "Sacramento",
    category: "Team",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_37.jpg",
    bio: "Kyle is focused on parametric building envelope modeling and high-performance passive climate design.",
    education: "M.Arch, UC Berkeley",
    credentials: ["Assoc. AIA"]
  },
  {
    slug: "morgan-tauzer",
    name: "Morgan Tauzer",
    role: "Interior Designer",
    office: "Sacramento",
    category: "Team",
    image: "https://lpas.com/wp-content/uploads/2025/12/HW23_LPAS_web-res_41.jpg",
    bio: "Morgan specializes in hospitality-infused multi-residential interiors and biophilic material selections.",
    education: "B.A. Interior Architecture, UC Davis",
    credentials: ["ASID"]
  }
];
