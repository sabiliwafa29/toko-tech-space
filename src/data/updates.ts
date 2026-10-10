export interface UpdateItem {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
  image: string;
  link: string;
  category: "Award" | "News" | "Conference" | "Instagram";
  fullText?: string;
}

export const UPDATES: UpdateItem[] = [
  {
    id: "update-1",
    title: "Sacramento Business Journal Best Real Estate Projects of the Year Awards",
    date: "2026-09-24",
    formattedDate: "09.24.26",
    excerpt: "It was a big day for LPAS at the Sacramento Business Journal's Best Real Estate Projects of the Year Awards! Three projects for which LPAS served as Architect of Record were recognized: UC Davis Health Folsom MOB, On Broadway Affordable Housing, and Stone Creek Village.",
    image: "https://lpas.com/wp-content/uploads/2026/01/20_UCDH_Folsom-MOB_FULLSIZE.jpg",
    link: "https://www.instagram.com/p/DdsBfaOmZ2p/",
    category: "Award",
    fullText: "It was a big day for LPAS at the Sacramento Business Journal’s Best Real Estate Projects of the Year Awards! Three projects for which LPAS served as Architect of Record were recognized at this year’s awards breakfast: UC Davis Health Folsom Medical Office Building, On Broadway Affordable Housing, and Stone Creek Village Apartments. LPAS also served as the Design Architect on the Rancho Cordova Community Food Hub which also received an award. We are proud to see these projects recognized and grateful to our clients, contractors, partners, and consultants."
  },
  {
    id: "update-2",
    title: "Pleasant Grove Apartments Wins Affordable Housing Development of the Year",
    date: "2026-05-21",
    formattedDate: "05.21.26",
    excerpt: "We are proud to share that Pleasant Grove Apartments received the Affordable Housing Development of the Year award at the Sacramento Housing Alliance Annual Night of Champions event in Roseville.",
    image: "https://lpas.com/wp-content/uploads/2025/12/DJI_0490_1.jpg",
    link: "https://www.instagram.com/p/DYnEV_MCaDg/",
    category: "Award",
    fullText: "Located in Roseville, California, Pleasant Grove Apartments is a thoughtfully designed, multigenerational community developed by Mercy Housing. The project offers a social lounge and 49 affordable homes for households earning between 30% and 60% of AMI, including eight units supported through the Roseville Housing Authority. By combining affordability, accessibility, and thoughtful design, Pleasant Grove Apartments expands much-needed housing opportunities."
  },
  {
    id: "update-3",
    title: "DBIA-WPR 2026 Education Summit & Awards in Scottsdale",
    date: "2026-05-12",
    formattedDate: "05.12.26",
    excerpt: "LPAS will be at the DBIA-WPR 2026 Education Summit & Awards May 17-20 in Scottsdale. Our team will present design-build methodologies for higher education capital improvement projects.",
    image: "https://lpas.com/wp-content/uploads/2025/12/05_LAS-POSITAS-COLLEGE-ACADEMIC-SUPPORT.jpg",
    link: "https://www.instagram.com/p/DYPz1AVicrN/",
    category: "Conference"
  },
  {
    id: "update-4",
    title: "Tradeline College & University Facilities Conference",
    date: "2026-03-26",
    formattedDate: "03.26.26",
    excerpt: "We will be attending the Tradeline College & University Facilities 2026 Conference March 30-31, sharing forward-thinking strategies on modernizing community college spaces.",
    image: "https://lpas.com/wp-content/uploads/2026/01/02_ARC-Student-Center_Extr.jpg",
    link: "https://www.instagram.com/p/DWXNFWSEmi4/",
    category: "Conference"
  },
  {
    id: "update-5",
    title: "Housing California Annual Conference Connection",
    date: "2026-03-17",
    formattedDate: "03.17.26",
    excerpt: "Connecting with partners, advocates, and policy leaders at the Housing California Annual Conference to advance scalable solutions for equitable housing development.",
    image: "https://lpas.com/wp-content/uploads/2025/12/08_The-Emery.jpg",
    link: "https://www.instagram.com/p/DWASV2TD3bJ/",
    category: "News"
  },
  {
    id: "update-6",
    title: "New Digital Experience & Studio Identity Live",
    date: "2026-03-13",
    formattedDate: "03.13.26",
    excerpt: "We reimagined our digital presence to better reflect how we work and what sets LPAS apart: human-centered, process-driven architecture across California.",
    image: "https://lpas.com/wp-content/uploads/2025/12/02_LPAS-723-S-Street-Headquarters.jpg",
    link: "https://www.instagram.com/p/DV1dMSGFFGl/",
    category: "News",
    fullText: "Our new website is live. We reimagined the site to better reflect how we work and what sets LPAS apart. Our process is front and center, showing how programming, stakeholder engagement, and technical precision guide every project from the first conversation through construction."
  }
];
