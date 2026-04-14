"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  label: string;
  slug: string;
  color?: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  category: string;
  serviceSlug: string;
}

export function Carousel({ items, category, serviceSlug }: PortfolioCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  const showControls = useCallback(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", showControls);
    emblaApi.on("pointerDown", showControls);
    return () => {
      emblaApi.off("scroll", showControls);
      emblaApi.off("pointerDown", showControls);
    };
  }, [emblaApi, showControls]);

  const carouselItems = [...items, ...items, ...items];

  return (
    <div className="relative group">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[45%] -translate-y-1/2 left-0 w-full flex justify-between px-4 md:px-10 z-30 pointer-events-none"
          >
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center pointer-events-auto shadow-2xl active:scale-90 transition-transform"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center pointer-events-auto shadow-2xl active:scale-90 transition-transform"
            >
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-hidden px-6 md:px-16" ref={emblaRef}>
        <div className="flex gap-4">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_22%] min-w-0"
            >
              <Link href={`/${category}/${serviceSlug}/${item.slug}`} className="block group/item">
                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden mb-4 select-none">
                  <Image
                    src={`https://picsum.photos/id/${item.id}/800/1067`}
                    fill
                    draggable={false}
                    className="object-cover transition-transform duration-[1.5s] group-hover/item:scale-110"
                    alt={item.label}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center">
                  <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-stone-800 transition-colors group-hover/item:text-stone-500">
                    {item.label}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}