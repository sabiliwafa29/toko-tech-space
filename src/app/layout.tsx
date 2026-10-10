import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { CursorBlob } from "@/components/ui/CursorBlob";

export const metadata: Metadata = {
  metadataBase: new URL("https://tokotechkekinian.biz.id"),
  title: "LPAS - Architecture and Interiors",
  description:
    "Clear Process. Creative Results. Human-centered. Always Curious. At LPAS, we design with people at the center and purpose at every turn.",
  keywords: [
    "LPAS",
    "Architecture",
    "Interiors",
    "Housing",
    "Higher Education",
    "Civic Architecture",
    "Commercial Design",
    "Sacramento",
    "Oakland"
  ],
  openGraph: {
    title: "LPAS - Architecture and Interiors",
    description:
      "Clear Process. Creative Results. Human-centered. Always Curious. At LPAS, we design with people at the center and purpose at every turn.",
    url: "https://tokotechkekinian.biz.id",
    siteName: "LPAS Architecture + Design",
    images: [
      {
        url: "https://lpas.com/wp-content/uploads/2026/01/Contact-LPAS.jpg",
        width: 2500,
        height: 985,
        alt: "LPAS Architecture + Design"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LPAS - Architecture and Interiors",
    description: "Clear Process. Creative Results. Human-centered. Always Curious.",
    images: ["https://lpas.com/wp-content/uploads/2026/01/Contact-LPAS.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#262626] selection:text-white">
        <Preloader />
        <CursorBlob />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
