import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triseno Systems — AI Infrastructure, Engineered",
  description:
    "Triseno Systems designs AI infrastructure that compresses workflows, automates decision-making, and turns operational complexity into competitive advantage.",
  openGraph: {
    title: "Triseno Systems — AI Infrastructure, Engineered",
    description:
      "We build the intelligence layer your business runs on. Multi-agent orchestration, workflow compression, and decision-layer automation.",
    url: "https://trisenosystems.com",
    siteName: "Triseno Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triseno Systems — AI Infrastructure, Engineered",
    description:
      "We build the intelligence layer your business runs on.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
