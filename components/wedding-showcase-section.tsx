"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "./carousel";

export default function WeddingShowcase() {
  const router = useRouter();
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  const offerings = [
    {
      id: "01.",
      slug: "wedding-days",
      title: "WEDDING DAYS",
      desc: "Our signature service & most popular",
      img: "https://picsum.photos/id/10/800/1200",
      style: "uppercase tracking-widest",
    },
    {
      id: "02.",
      slug: "elopement",
      title: "elopement",
      desc: "A very intimate setting for couples",
      img: "https://picsum.photos/id/11/800/1200",
      style: "italic lowercase",
    },
    {
      id: "03.",
      slug: "engagement",
      title: "engagement",
      desc: "Pre wedding bliss and always outdoors",
      img: "https://picsum.photos/id/12/800/1200",
      style: "italic lowercase",
    },
  ];

  const samplingWorks = [
    {
      id: "01.",
      title: "JENNA & OLIVER",
      desc: "A Manifesto by Ai Weiwei — The artist's 10 rules for life and creativity",
      img: "https://picsum.photos/id/20/600/800",
      bgColor: "bg-[#7db4d8]", // Blue
    },
    {
      id: "02.",
      title: "PALM SPRINGS",
      desc: "A Manifesto by Alain de Botton — 10 rules for life from the world-renowned philosopher",
      img: "https://picsum.photos/id/26/600/800",
      bgColor: "bg-[#b8e8db]", // Mint
    },
    {
      id: "03.",
      title: "VENTURING OUT",
      desc: "A Manifesto by Pussy Riot — The Russian punk band's 10 rules for life",
      img: "https://picsum.photos/id/28/600/800",
      bgColor: "bg-[#fff721]", // Yellow
    },
    {
      id: "04.",
      title: "THE LEGACY",
      desc: "A Manifesto by Walker — Exploring the roots of timeless storytelling",
      img: "https://picsum.photos/id/42/600/800",
      bgColor: "bg-[#8ce6ff]", // Light Blue
    },
  ];

  return (
    <div className="relative w-full bg-[#f2f0e8]">
      {/* SECTION 1: OFFERINGS (STICKY) */}
      <section className="sticky top-0 z-10 h-screen w-full overflow-hidden flex flex-col p-8 md:p-16 border-b border-black/10">
        <header className="flex justify-between items-center mb-12 font-livvic">
          <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase">
            All of Our Offerings
          </h2>
          <div className="space-y-1.5 cursor-pointer group">
            <div className="w-8 h-px bg-black group-hover:w-6 transition-all"></div>
            <div className="w-8 h-px bg-black"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center grow">
          <div className="lg:col-span-7 border-t border-black">
            {offerings.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveOfferIndex(index)}
                onClick={() => router.push(item.slug)}
                className="group flex items-center justify-between py-10 border-b border-black cursor-pointer"
              >
                <div className="w-1/2">
                  <h3 className={`text-4xl md:text-7xl font-soria ${item.style} transition-all group-hover:pl-4`}>
                    {item.title}
                  </h3>
                </div>
                <div className="w-1/2 flex border-l border-black pl-8 items-start gap-4 h-full">
                  <span className="text-4xl italic text-stone-400 font-soria leading-none">
                    {item.id}
                  </span>
                  <p className="max-w-37.5 text-[11px] leading-relaxed uppercase tracking-tight font-livvic font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 relative h-[70vh] w-full max-w-md mx-auto">
            {offerings.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  activeOfferIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SAMPLING WORKS (CARDS STYLE) */}
      <Carousel />

      {/* SECTION 3: TESTIMONIAL (BLACK) */}
      <section className="relative z-30 bg-[#1a1a1a] text-white py-32 px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-md lg:ml-auto font-soria">
          <div className="relative w-40 h-52 mb-10 border border-white/20 p-2">
            <Image src="https://picsum.photos/id/64/400/600" fill className="object-cover grayscale" alt="Reviewer" />
          </div>
          <div className="flex gap-1 mb-8 text-amber-200">★★★★★</div>
          <h2 className="text-4xl md:text-6xl italic mb-10 leading-tight">
            "I never imagined my photos to be as perfect as they turned out"
          </h2>
          <p className="text-stone-400 text-xs leading-loose uppercase tracking-[0.2em] font-livvic font-light max-w-sm">
            Based on a true story of love and light. Scenester williamsburg small batch viral typewriter blog.
          </p>
        </div>
        <div className="relative h-[80vh] w-full rounded-tl-[100px] overflow-hidden">
          <Image src="https://picsum.photos/id/35/1200/1600" fill className="object-cover opacity-50" alt="Atmosphere" />
        </div>
      </section>

     
    </div>
  );
}