"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  category: string;
  investment: string;
  deliverables: string;
  description: string;
  included: string[];
}

export default function ServiceDetail({
  title,
  category,
  investment,
  deliverables,
  description,
  included
}: ServiceDetailProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const rawItems = [
    { id: 101, label: "Silent Morning" },
    { id: 102, label: "The Vow" },
    { id: 103, label: "Golden Hour" },
    { id: 104, label: "Reception" },
    { id: 109, label: "The Legacy" },
  ];
  const carouselItems = [...rawItems, ...rawItems, ...rawItems];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.5;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 3;
    } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = container.scrollWidth / 3;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = container.scrollWidth / 3;
      container.addEventListener("scroll", handleScroll);
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#f2f0e8] text-[#1a1a1a] min-h-screen font-livvic selection:bg-[#EAB308] selection:text-black">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/id/103/1920/1080"
          fill
          priority
          className="object-cover"
          alt="Hero Banner"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.6em] uppercase mb-8 block font-bold"
          >
            {category.replace("-", " ")}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[10vw] font-soria leading-[0.85] tracking-tighter uppercase"
          >
            {title.split(" ")[0]} <br />
            <span className="italic font-light lowercase opacity-90">{title.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <h2 className="font-soria text-4xl md:text-6xl leading-tight">{description}</h2>
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-10 border-t border-black/10 pt-10">
              <div>
                <p className="text-[9px] tracking-widest uppercase mb-4 text-stone-400 font-bold">Investment</p>
                <p className="text-2xl font-soria italic">{investment}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-widest uppercase mb-4 text-stone-400 font-bold">Deliverables</p>
                <p className="text-2xl font-soria italic">{deliverables}</p>
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-widest uppercase mb-6 text-stone-400 font-bold">What’s Included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                {included.map((item, idx) => (
                  <p key={idx} className="text-[10px] uppercase tracking-wider text-stone-600 font-medium">• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40 relative">
        <div className="px-6 md:px-16 mb-12 text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-stone-400 mb-2 font-bold">The Portfolio</p>
          <h3 className="font-soria text-3xl md:text-5xl italic">Visual Storytelling</h3>
        </div>

        <div className="relative group/carousel">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-2 md:px-6 z-30 pointer-events-none">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg pointer-events-auto hidden md:flex"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg pointer-events-auto hidden md:flex"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-16 select-none scroll-smooth"
          >
            {carouselItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-none w-[75vw] sm:w-[45vw] md:w-[22vw] group">
                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden mb-4">
                  <Image
                    src={`https://picsum.photos/id/${item.id}/800/1067`}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    alt={item.label}
                  />
                </div>
                <div className="text-center">
                  <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-stone-800 transition-colors group-hover:text-stone-500">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}