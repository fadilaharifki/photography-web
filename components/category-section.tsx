"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    title: "The Beginning",
    slug: "the-beginning",
    subs: ["Prewedding", "Engagement"],
    cursorImage: "https://picsum.photos/id/201/600/600?grayscale",
    bgImage: "https://picsum.photos/id/103/1200/1600",
  },
  {
    title: "The Union",
    slug: "the-union",
    subs: ["Wedding", "Holy Matrimony"],
    cursorImage: "https://picsum.photos/id/202/600/600?grayscale",
    bgImage: "https://picsum.photos/id/111/1200/1600",
  },
  {
    title: "The Legacy",
    slug: "the-legacy",
    subs: ["Maternity", "Family"],
    cursorImage: "https://picsum.photos/id/203/600/600?grayscale",
    bgImage: "https://picsum.photos/id/115/1200/1600",
  },
];

const CustomCursor = ({ mousePosition, activeService }: { mousePosition: { x: number; y: number }; activeService: (typeof SERVICES)[0] | null; }) => {
  if (!activeService) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 overflow-hidden rounded-full bg-white p-1 shadow-xl"
      style={{
        width: 120,
        height: 120,
        x: mousePosition.x - 60,
        y: mousePosition.y - 60,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src={activeService.cursorImage}
          alt={activeService.title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default function CategorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<(typeof SERVICES)[0] | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#f2f0e8] text-[#1a1a1a] py-32 px-6 font-livvic relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ cursor: activeService ? 'none' : 'default' }}
    >
      <AnimatePresence>
        {activeService && (
          <CustomCursor mousePosition={mousePosition} activeService={activeService} />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-6">
            Explore our collections
          </p>
          <h2 className="text-3xl md:text-4xl font-light italic leading-tight font-soria">
            We exist to capture <span className="text-stone-400">the</span> quiet moments, <br /> ensuring your tale is never forgotten.
          </h2>
        </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {SERVICES.map((service) => (
    <div
      key={service.slug}
      onMouseEnter={() => setActiveService(service)}
      onMouseLeave={() => setActiveService(null)}
      className="relative aspect-[3/4.5] rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={service.bgImage}
          alt={service.title}
          fill
          className="object-cover transition-all duration-[1.5s] ease-out scale-100 group-hover:scale-110 grayscale-0 opacity-100"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <Link
        href={`/${service.slug}`}
        className="relative flex flex-col justify-end items-center w-full h-full p-10 z-10"
      >
        <h3 className="text-xl md:text-2xl font-soria italic tracking-tight mb-4 text-white drop-shadow-md transition-colors duration-500">
          {service.title}
        </h3>

        <div className="h-10 flex flex-col items-center justify-start overflow-hidden">
          <AnimatePresence>
            {activeService?.slug === service.slug && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-1 items-center"
              >
                {service.subs.map((sub) => (
                  <p
                    key={sub}
                    className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/80"
                  >
                    {sub}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}