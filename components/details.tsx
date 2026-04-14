"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Car } from "lucide-react";
import { useLayoutStore } from "@/store/useLayoutStore";
import Lightbox from "@/components/lightbox";
import { Carousel } from "./carousel";

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

   const rawItems = [
    { id: 101, label: "Silent Morning", slug: "silent-morning" },
    { id: 102, label: "The Vow", slug: "the-vow" },
    { id: 103, label: "Golden Hour", slug: "golden-hour" },
    { id: 104, label: "Reception", slug: "reception" },
    { id: 109, label: "The Legacy", slug: "the-legacy" },
  ];


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
        className="absolute aspect-3/4 z-0 cursor-pointer"
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
        
          <Carousel items={rawItems} category={category} serviceSlug={services[0].toLowerCase().replace(/\s+/g, '-')} />
        </section>
      )}
    </main>
  );
}