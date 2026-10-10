export interface ProductFinish {
  name: string;
  id: string;
  colorHex: string;
  bgPreview: string;
}

export interface ExplodedPart {
  name: string;
  material: string;
  function: string;
}

export interface Product {
  slug: string;
  name: string;
  code: string;
  tagline: string;
  category: "Neural Wearables" | "Spatial Audio" | "Cyber Decks" | "Kinetic Accessories";
  priceUSD: number;
  priceIDR: number;
  priceETH: number;
  badge?: string;
  heroImage: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  finishes: ProductFinish[];
  explodedParts?: ExplodedPart[];
  defaultFrequency?: number;
}

export const PRODUCTS: Product[] = [
  {
    slug: "kinetix-deck-01",
    name: "Kinetix Deck-01 Synth",
    code: "KTX-SYN-01",
    tagline: "Solid-State Kinetic Audio Synthesizer & Spatial Sequencer",
    category: "Spatial Audio",
    priceUSD: 849,
    priceIDR: 13900000,
    priceETH: 0.32,
    badge: "FLAGSHIP",
    heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    description: "Engineered from a monolithic block of 6061 aerospace-grade anodized aluminum. The Deck-01 features mechanical motorized faders, zero-latency FPGA audio DSP, discrete analog filters, and a high-precision optical jog wheel for tactile spatial sound sculpting.",
    features: [
      "Motorized ultra-low-friction Alps alpine faders",
      "32-bit / 384kHz Quad-DAC with discrete class-A preamps",
      "Multi-agent MIDI over USB-C and 2.4GHz Ultra-Wideband RF",
      "Field-replaceable tactile mechanical click switches"
    ],
    specs: {
      "Chassis Material": "CNC Milled Anodized 6061-T6 Aluminum",
      "Frequency Response": "5 Hz – 48,000 Hz ±0.05dB",
      "Audio Latency": "< 0.8 ms over Direct USB-C",
      "Battery Endurance": "18 Hours Continuous Synthesis",
      "Weight": "480 grams (Pocket Portable)"
    },
    finishes: [
      { name: "Matte Obsidian", id: "obsidian", colorHex: "#0F1117", bgPreview: "bg-[#0F1117]" },
      { name: "Titanium Frost", id: "titanium", colorHex: "#D1D5DB", bgPreview: "bg-[#D1D5DB]" },
      { name: "Cyberpunk Amber", id: "amber", colorHex: "#FF9F1C", bgPreview: "bg-[#FF9F1C]" },
      { name: "Neon Cyan", id: "cyan", colorHex: "#00F5FF", bgPreview: "bg-[#00F5FF]" }
    ],
    explodedParts: [
      { name: "Upper Faceplate", material: "Matte Ceramic Bead-Blasted Aluminum", function: "Tactile surface and structural rigidity" },
      { name: "Rotary Encoders", material: "Brass Bearing Core with Optical Sensors", function: "1024-step infinite precision parameter control" },
      { name: "FPGA DSP Board", material: "Gold-Plated 8-Layer Multilayer PCB", function: "Autonomous generative audio synthesis engine" },
      { name: "Lithium Polymer Pack", material: "Solid-State Graphene Cell", function: "Rapid 15-minute USB-C PD charge delivery" }
    ],
    defaultFrequency: 440
  },
  {
    slug: "neuroring-gen-4",
    name: "NeuroRing Gen-4",
    code: "KTX-NRG-04",
    tagline: "Autonomous Neural Interface & Gesture Telemetry Ring",
    category: "Neural Wearables",
    priceUSD: 399,
    priceIDR: 6490000,
    priceETH: 0.15,
    badge: "BESTSELLER",
    heroImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    description: "Weighing only 4.2 grams, NeuroRing Gen-4 reads sub-millivolt electrodermal signals and micro-muscular intentions. Seamlessly control spatial computing viewports, desktop terminal scripts, and smart cybernetic environments with subtle micro-gestures.",
    features: [
      "Sub-dermal EEG & PPG hemodynamic sensor array",
      "6-DoF micro-inertial measurement unit (IMU)",
      "Wireless inductive charging case with 7-day reserve",
      "IP68 waterproof up to 100 meters depth"
    ],
    specs: {
      "Enclosure": "Grade 5 Medical Titanium with Diamond-Like Carbon (DLC)",
      "Sensor Rate": "1,000 Hz Continuous Neuromuscular Sampling",
      "Connectivity": "Bluetooth 5.4 LE + Thread Mesh Protocol",
      "Battery Life": "84 Hours per Single Charge",
      "Weight": "4.2 grams"
    },
    finishes: [
      { name: "Obsidian DLC", id: "obsidian", colorHex: "#111116", bgPreview: "bg-[#111116]" },
      { name: "Polished Raw Titanium", id: "titanium", colorHex: "#E2E8F0", bgPreview: "bg-[#E2E8F0]" },
      { name: "Gold Ion Vapor", id: "amber", colorHex: "#F59E0B", bgPreview: "bg-[#F59E0B]" }
    ],
    defaultFrequency: 528
  },
  {
    slug: "spatial-visor-x",
    name: "Spatial Visor X",
    code: "KTX-VSR-0X",
    tagline: "Ultrawide Dual Micro-OLED Spatial Computing Terminal",
    category: "Neural Wearables",
    priceUSD: 1899,
    priceIDR: 31200000,
    priceETH: 0.72,
    badge: "FLAGSHIP",
    heroImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200&auto=format&fit=crop",
    description: "Experience spatial computing without visual fatigue. Spatial Visor X pairs custom pancake optics with twin 4K Micro-OLED panels operating at 144Hz. Seamlessly project infinite holographic browser terminals and spatial design canvas anywhere in physical space.",
    features: [
      "Twin 4K Micro-OLED panels delivering 48 PPD resolution",
      "Sub-10ms glass-to-glass color passthrough cameras",
      "Spatial acoustic beamforming ear-horns",
      "Magnetic custom prescription lens inserts"
    ],
    specs: {
      "Display Type": "Twin 1.3-inch 4K Micro-OLED (144 Hz)",
      "Field of View": "115° Diagonal FOV",
      "Optical Latency": "7.5 ms Photon-to-Motion",
      "Weight": "285 grams with Carbon Fiber Chassis",
      "Interface": "Kinetix Spatial OS 2026"
    },
    finishes: [
      { name: "Cyber Stealth Black", id: "obsidian", colorHex: "#0D0E12", bgPreview: "bg-[#0D0E12]" },
      { name: "Lunar White Magnesium", id: "titanium", colorHex: "#F1F5F9", bgPreview: "bg-[#F1F5F9]" }
    ],
    defaultFrequency: 639
  },
  {
    slug: "cybernetic-chronograph-01",
    name: "Cybernetic Chronograph 01",
    code: "KTX-CHR-01",
    tagline: "Exposed Kinetic Balance Wheel with Quantum Digital Sync",
    category: "Kinetic Accessories",
    priceUSD: 649,
    priceIDR: 10500000,
    priceETH: 0.24,
    badge: "LIMITED",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    description: "A tribute to mechanical horology fused with cybernetic intelligence. Features a sapphire crystal dial revealing a 28,800 vph automatic kinetic rotor synchronized with an atomic micro-clock GPS receiver.",
    features: [
      "Exposed tourbillon-style kinetic escapement",
      "Dot-matrix micro-OLED complication ring",
      "Integrated encrypted hardware cold-wallet key storage",
      "Sapphire crystal front and exhibition caseback"
    ],
    specs: {
      "Case Diameter": "41 mm",
      "Case Thickness": "10.4 mm",
      "Crystal": "Curved Anti-Reflective Synthetic Sapphire",
      "Water Resistance": "200 meters / 20 ATM",
      "Power Reserve": "60 Hours Mechanical / 30 Days Digital HUD"
    },
    finishes: [
      { name: "Matte DLC Carbon", id: "obsidian", colorHex: "#181A20", bgPreview: "bg-[#181A20]" },
      { name: "Brushed Steel", id: "titanium", colorHex: "#CBD5E1", bgPreview: "bg-[#CBD5E1]" }
    ],
    defaultFrequency: 396
  },
  {
    slug: "kinetix-neural-node",
    name: "Kinetix Neural Node",
    code: "KTX-NOD-AI",
    tagline: "Portable Autonomous AI Edge Compute Puck",
    category: "Cyber Decks",
    priceUSD: 529,
    priceIDR: 8700000,
    priceETH: 0.20,
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    description: "Execute local autonomous LLMs and vision models without sending a single byte to the cloud. Houses a 32-core neural tensor processor with 32GB unified LPDDR5X memory in an ultra-compact pocket puck.",
    features: [
      "Zero-cloud offline privacy guarantee",
      "Runs quantized 7B and 14B models at 45 tokens/sec",
      "Dual USB4 40Gbps ports with eGPU pass-through",
      "Whisper-quiet vapor chamber thermal dissipation"
    ],
    specs: {
      "NPU Compute": "68 INT8 TOPS",
      "Memory": "32GB LPDDR5X-8533 Unified Memory",
      "Storage": "1TB PCIe Gen4 NVMe Solid-State",
      "Dimensions": "85 mm × 85 mm × 18 mm",
      "Weight": "195 grams"
    },
    finishes: [
      { name: "Stealth Slate", id: "obsidian", colorHex: "#0F172A", bgPreview: "bg-[#0F172A]" },
      { name: "Clear Acrylic Shell", id: "titanium", colorHex: "#94A3B8", bgPreview: "bg-[#94A3B8]" }
    ],
    defaultFrequency: 741
  }
];
