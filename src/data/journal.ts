export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  abstract: string;
  author: string;
  image: string;
  body: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "zero-latency-tactile-synthesis",
    title: "Zero-Latency Tactile Sound Synthesis: Engineering the Deck-01",
    category: "Acoustics & DSP",
    date: "2026.08.14",
    readTime: "6 Min Read",
    abstract: "How we bypassed standard operating system audio driver buffers to achieve sub-0.8ms DAC latency with direct FPGA synthesis.",
    author: "Ryu Tanaka, Head of Acoustics",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    body: [
      "Modern digital audio workstations introduce an unavoidable layer of cognitive disconnect. Even a 5ms latency buffer disrupts the illusion of physical instrument resonance.",
      "With the Kinetix Deck-01, our engineering team rethought audio signal routing from the silicon level up. Rather than running a Linux kernel or microcontroller loop, we implemented a custom hardware state machine directly on a low-power FPGA.",
      "The result is an acoustic instrument that reacts as instantaneously as a physical acoustic guitar string, bridging digital sound design and physical muscle memory."
    ]
  },
  {
    slug: "sub-millivolt-neural-telemetry",
    title: "Decoding Sub-Millivolt Intent: The Science of NeuroRing Gen-4",
    category: "Neural Interfaces",
    date: "2026.07.28",
    readTime: "8 Min Read",
    abstract: "A breakdown of non-invasive electrodermal sensing, spatial micro-gestures, and the challenges of battery efficiency in titanium enclosures.",
    author: "Dr. Maya Arisawa, Neural Systems Lead",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    body: [
      "Traditional human-computer interaction relies on physical displacement: pressing a key, moving a mouse, or tapping a glass screen.",
      "NeuroRing Gen-4 operates at the threshold of intention. Before a finger moves through physical space, the motor cortex emits measurable micro-potentials through peripheral nerves.",
      "By isolating these signals from ambient electromagnetic noise using an adaptive neural filter, we enable spatial computing navigation with zero perceptible physical effort."
    ]
  },
  {
    slug: "local-first-edge-intelligence",
    title: "Why The Future of AI Hardware Must Live Offline",
    category: "Edge Computing",
    date: "2026.06.19",
    readTime: "5 Min Read",
    abstract: "The environmental, architectural, and philosophical rationale for localized neural tensor pucks over centralized cloud APIs.",
    author: "Karel Wijaya, Systems Architect",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    body: [
      "Cloud latency and data surveillance have turned personal computers into thin terminals. We reject this paradigm.",
      "The Kinetix Neural Node proves that modern 4-bit quantized neural architectures can run entirely within an 18-watt pocket enclosure, outperforming cloud round-trips while keeping every keystroke private.",
      "Hardware sovereignty is the foundation of digital dignity in 2026."
    ]
  }
];
