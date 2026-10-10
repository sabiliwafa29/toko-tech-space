import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Tech Space — Next Cosmic Era of Digital Commerce & Software",
  description:
    "Engineering the next cosmic era of high-performance web applications, autonomous AI pipelines, and deep-space digital architectures.",
  metadataBase: new URL("https://tokotechkekinian.biz.id"),
  openGraph: {
    title: "Toko Tech Space — Next Cosmic Era of Digital Commerce",
    description: "Discover deep-space digital experiences, autonomous systems, and modern web architectures.",
    url: "https://tokotechkekinian.biz.id",
    siteName: "Toko Tech Space",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Tech Space — Next Cosmic Era of Digital Commerce",
    description: "Discover deep-space digital experiences, autonomous systems, and modern web architectures.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#030014" />
      </head>
      <body className="antialiased bg-[#030014] text-slate-100">{children}</body>
    </html>
  );
}
