import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ShopYourDesign } from "@/components/sections/ShopYourDesign";
import { StylesGrid } from "@/components/sections/StylesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Muebly — AI Interior Design App",
  description:
    "Redesign any room with AI in seconds. Upload a photo, choose a style, and get a photorealistic interior design — then shop the look instantly.",
  alternates: { canonical: "https://muebly.app" },
  openGraph: {
    title: "Muebly — AI Interior Design App",
    description:
      "Redesign any room with AI in seconds. Upload a photo, choose a style, and get a photorealistic interior design — then shop the look instantly.",
    url: "https://muebly.app",
    images: [{ url: "https://muebly.app/og-image.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Muebly",
  applicationCategory: "DesignApplication",
  operatingSystem: "iOS, Android, Web",
  description: "AI interior design app that lets anyone redesign any room instantly from a photo.",
  url: "https://muebly.app",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
    { "@type": "Offer", price: "9.99", priceCurrency: "USD", name: "Monthly" },
    { "@type": "Offer", price: "49.99", priceCurrency: "USD", name: "Yearly" },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <ShopYourDesign />
          <StylesGrid />
          <HowItWorks />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
}
