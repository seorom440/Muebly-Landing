import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StylesGrid } from "@/components/sections/StylesGrid";
import { ShopYourDesign } from "@/components/sections/ShopYourDesign";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StylesGrid />
        <ShopYourDesign />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
