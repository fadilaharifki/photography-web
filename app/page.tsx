"use client";

import { useState } from "react";
import { Menu, X, Mail, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import QuoteSection from "@/components/quote-section";
import WeddingShowcase from "@/components/wedding-showcase-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <QuoteSection />
        <AboutSection />
        <WeddingShowcase />
      </main>
    </div>
  );
}
