"use client";

import HeroSection from "@/components/hero-section";
import QuoteSection from "@/components/quote-section";
import WeddingShowcase from "@/components/wedding-showcase-section";
import FeaturedProject from "@/components/future-project";
import CategorySection from "@/components/category-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <QuoteSection />
        <FeaturedProject />
        <CategorySection/>
        <WeddingShowcase />
      </main>
    </div>
  );
}
