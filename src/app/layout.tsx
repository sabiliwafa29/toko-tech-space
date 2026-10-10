import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
import { TelemetryHUD } from "@/components/layout/TelemetryHUD";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CursorHUD } from "@/components/ui/CursorHUD";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tokotechkekinian.biz.id"),
  title: "KINETIX // Toko Tech Kekinian — Cybernetic Hardware & Spatial Instruments",
  description:
    "Avant-garde digital flagship for next-generation cybernetic cyberdecks, neural wearables, and spatial audio instruments. Engineered for the post-silicon era.",
  keywords: [
    "KINETIX",
    "Toko Tech Kekinian",
    "Cybernetic Hardware",
    "Neural Interface",
    "Spatial Audio",
    "Cyberdeck",
    "NeuroRing",
    "Spatial Visor",
    "Tokotech",
    "Indonesia Tech",
  ],
  authors: [{ name: "KINETIX R&D Labs", url: "https://tokotechkekinian.biz.id" }],
  creator: "KINETIX Engineering Foundry",
  openGraph: {
    title: "KINETIX // Toko Tech Kekinian — Next-Gen Cybernetics",
    description:
      "Avant-garde digital flagship for next-generation cybernetic hardware, neural wearables, and spatial audio instruments.",
    url: "https://tokotechkekinian.biz.id",
    siteName: "KINETIX Hardware Foundry",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
        width: 1920,
        height: 1080,
        alt: "KINETIX Hardware Ecosystem",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KINETIX // Toko Tech Kekinian",
    description:
      "Avant-garde digital flagship for next-generation cybernetic hardware and spatial instruments.",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08090D] text-[#F8FAFC] antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <CartProvider>
          {/* Procedural Magnetic HUD Cursor follower */}
          <CursorHUD />

          {/* Top HUD Telemetry Dock & Navigation */}
          <TelemetryHUD />

          {/* Slide-out Cybernetic Cart Drawer */}
          <CartDrawer />

          {/* Main Viewport Content */}
          <main className="min-h-screen pt-20">
            {children}
          </main>

          {/* Cybernetic Foundry Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
