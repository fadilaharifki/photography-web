"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLayoutStore } from "@/store/useLayoutStore";
import Lightbox from "@/components/lightbox";

interface DetailsProps {
  title: string;
  description: string;
  services: string[];
  category: string;
}

const CATEGORY_PICSUM_IDS: Record<string, number[]> = {
  "the-beginning": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
  "the-union": [201, 202, 203, 204, 206, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217],
  "the-legacy": [301, 302, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316],
};

export default function Details({ title, description, services, category }: DetailsProps) {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setFooterVisibility = useLayoutStore((state) => state.setFooterVisibility);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [cursorDir, setCursorDir] = useState<"left" | "right">("right");
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const isSingleService = services.length === 1;
  const categoryIds = CATEGORY_PICSUM_IDS[category.toLowerCase()] || CATEGORY_PICSUM_IDS["the-beginning"];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const nextImage = useCallback(() => {
    setSelectedImgIndex((prev) => (prev !== null ? (prev + 1) % categoryIds.length : null));
  }, [categoryIds.length]);

  const prevImage = useCallback(() => {
    setSelectedImgIndex((prev) => (prev !== null ? (prev - 1 + categoryIds.length) % categoryIds.length : null));
  }, [categoryIds.length]);

  const editorialImages = [
    { id: categoryIds[0], top: "5%", left: "10%", speed: 0, rotate: -5, size: "w-48 md:w-72" },
    { id: categoryIds[1], top: "15%", right: "5%", speed: 0, rotate: 8, size: "w-40 md:w-64" },
    { id: categoryIds[2], top: "25%", left: "30%", speed: 0, rotate: 3, size: "w-56 md:w-80" },
    { id: categoryIds[3], top: "35%", right: "20%", speed: 0, rotate: -10, size: "w-44 md:w-72" },
    { id: categoryIds[4], top: "45%", left: "5%", speed: 0, rotate: 12, size: "w-52 md:w-72" },
    { id: categoryIds[5], top: "55%", right: "15%", speed: 0, rotate: -4, size: "w-36 md:w-60" },
    { id: categoryIds[6], top: "65%", left: "25%", speed: 0, rotate: 7, size: "w-64 md:w-96" },
  ];

  const carouselItems = [...categoryIds, ...categoryIds].map((id, i) => ({ id, label: `Tales ${i + 1}` }));

  useEffect(() => {
    setFooterVisibility(false);
    return () => setFooterVisibility(true);
  }, [setFooterVisibility]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (scrollContainerRef.current) {
      const { left, width } = scrollContainerRef.current.getBoundingClientRect();
      setCursorDir((e.clientX - left) < width / 2 ? "left" : "right");
    }
  };

  const handleCarouselClick = () => {
    if (scrollContainerRef.current) {
      const amount = window.innerWidth * 0.3;
      scrollContainerRef.current.scrollBy({ left: cursorDir === "right" ? amount : -amount, behavior: "smooth" });
    }
  };

  return (
    <main ref={containerRef} className="bg-[#f2f0e8] text-[#1a1a1a] font-livvic selection:bg-[#EAB308]">
      
      <Lightbox 
        isOpen={selectedImgIndex !== null}
        onClose={() => setSelectedImgIndex(null)}
        images={categoryIds}
        currentIndex={selectedImgIndex ?? 0}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <section className="relative w-full h-[400vh]">
     <div className="absolute inset-0 z-0 overflow-hidden">
  {editorialImages.map((img, index) => {
    return (
      <motion.div
        key={index}
        style={{ 
          top: img.top, 
          left: img.left || "auto", 
          right: img.right || "auto",
          transform: `rotate(${img.rotate}deg)` 
        }}
        className="absolute aspect-3/4 shadow-2xl z-0 cursor-pointer"
        onClick={() => setSelectedImgIndex(index)}
      >
        <div className={`relative ${img.size} aspect-3/4 group overflow-hidden`}>
          <Image
            src={`https://picsum.photos/id/${img.id}/600/800`}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
      </motion.div>
    );
  })}
</div>

        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-50 pointer-events-none">
          <div className="text-center px-6 pointer-events-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[130px] font-soria text-black leading-none tracking-tighter uppercase mb-6"
            >
              {title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-stone-600 font-livvic text-[10px] md:text-sm tracking-[0.5em] uppercase mb-16 max-w-lg mx-auto leading-relaxed"
            >
              {description}
            </motion.p>

            {!isSingleService && (
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                {services?.map((service) => (
                  <Link 
                    key={service}
                    href={`/${category}/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="group"
                  >
                    <div className="px-14 py-6 border border-black rounded-full transition-all duration-500 hover:bg-black">
                      <span className="font-livvic text-[10px] font-bold tracking-[0.4em] uppercase text-black group-hover:text-white">
                        {service}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {isSingleService && (
        <section className="relative z-[60] bg-[#f2f0e8] pt-20 pb-40 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
            <h2 className="font-soria text-4xl md:text-6xl italic leading-tight">
              A single moment, <br /> an eternal union.
            </h2>
            
            <div className="space-y-16">
              <div className="grid grid-cols-2 gap-10 border-t border-black/10 pt-10">
                <div>
                  <p className="text-[9px] tracking-widest uppercase mb-4 text-stone-400 font-bold">Investment</p>
                  <p className="text-3xl font-soria italic">Starts from 25M</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase mb-4 text-stone-400 font-bold">Deliverables</p>
                  <p className="text-3xl font-soria italic">Full Day Session</p>
                </div>
              </div>
              <div>
                <p className="text-[9px] tracking-widest uppercase mb-6 text-stone-400 font-bold">What’s Included</p>
                <div className="grid grid-cols-2 gap-y-4 text-[10px] uppercase tracking-wider text-stone-600 font-medium">
                  <p>• 3 Photographers</p>
                  <p>• Premium Storybook</p>
                  <p>• all high-res files</p>
                  <p>• online gallery access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-16 mb-12">
            <p className="text-[9px] tracking-[0.4em] uppercase text-stone-400 mb-2 font-bold font-livvic">Portfolio Highlights</p>
            <h3 className="font-soria text-3xl md:text-5xl italic">Visual Narrative</h3>
          </div>

          <div className="relative group/carousel">
            <AnimatePresence>
              {showCursor && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="fixed top-0 left-0 pointer-events-none z-[100] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-xl font-bold" style={{ x: mousePos.x - 28, y: mousePos.y - 28 }}>
                  {cursorDir === "right" ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
                </motion.div>
              )}
            </AnimatePresence>

            <div 
              ref={scrollContainerRef} 
              onMouseMove={handleMouseMove} onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)} onClick={handleCarouselClick}
              className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-16 cursor-none select-none scroll-smooth"
            >
              {carouselItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-none w-[80vw] md:w-[28vw] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImgIndex(index % categoryIds.length);
                  }}
                >
                  <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden mb-6">
                    <Image src={`https://picsum.photos/id/${item.id}/800/1067`} fill className="object-cover transition-transform duration-[1.5s] hover:scale-105" alt="" />
                  </div>
                  <p className="text-center text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}