import type { Metadata } from "next";
import WebDesignHero from "@/components/sections/web-design/WebDesignHero";
import WebDesignDifferentiators from "@/components/sections/web-design/WebDesignDifferentiators";
import WebDesignServices from "@/components/sections/web-design/WebDesignServices";
import WebDesignProcess from "@/components/sections/web-design/WebDesignProcess";
import WebDesignWhyDifferent from "@/components/sections/web-design/WebDesignWhyDifferent";
import WebDesignCTA from "@/components/sections/web-design/WebDesignCTA";

export const metadata: Metadata = {
  title: "Web Design & Development — Triseno Systems",
  description:
    "AI-native web design and development. Custom websites, web applications, and e-commerce — engineered for intelligence, speed, and conversion.",
  openGraph: {
    title: "Web Design & Development — Triseno Systems",
    description:
      "AI-native web design and development. Custom websites, web applications, and e-commerce — engineered for intelligence, speed, and conversion.",
    url: "https://trisenosystems.com/web-design",
    siteName: "Triseno Systems",
    type: "website",
  },
};

export default function WebDesignPage() {
  return (
    <>
      <WebDesignHero />

      <WebDesignDifferentiators />

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/12 to-transparent" />
      </div>

      <WebDesignServices />

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/12 to-transparent" />
      </div>

      <WebDesignProcess />

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/12 to-transparent" />
      </div>

      <WebDesignWhyDifferent />

      <WebDesignCTA />
    </>
  );
}
