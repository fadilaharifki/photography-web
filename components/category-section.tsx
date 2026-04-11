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
    rotate: -3,
  },
  {
    title: "The Union",
    slug: "the-union",
    subs: ["Wedding", "Holy Matrimony"],
    cursorImage: "https://picsum.photos/id/202/600/600?grayscale",
    bgImage: "https://picsum.photos/id/111/1200/1600",
    rotate: 2,
  },
  {
    title: "The Legacy",
    slug: "the-legacy",
    subs: ["Maternity", "Family"],
    cursorImage: "https://picsum.photos/id/203/600/600?grayscale",
    bgImage: "https://picsum.photos/id/115/1200/1600",
    rotate: -2,
  },
];

const CustomCursor = ({ mousePosition, activeService }: { mousePosition: { x: number; y: number }; activeService: (typeof SERVICES)[0] | null; }) => {
  if (!activeService) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 overflow-hidden rounded-full shadow-2xl bg-white p-2"
      style={{
        width: 150,
        height: 150,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
      className="bg-[#f2f0e8] text-[#1a1a1a] py-32 px-6 font-livvic relative group"
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
          <h2 className="text-4xl md:text-5xl font-light italic leading-tight">
            We exist to capture <span className="text-stone-400">the</span> quiet moments, <br /> ensuring your tale is never forgotten.
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(service)}
              onMouseLeave={() => setActiveService(null)}
              whileHover={{
                scale: 1.05,
                rotate: service.rotate,
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
              className="relative aspect-[3/4] md:aspect-[3/4] rounded-[4rem] overflow-hidden border-2 border-black/10 transition-colors duration-500 hover:border-black group shadow-sm bg-stone-100"
            >
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110 pointer-events-none z-0">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <Link
                href={`/${service.slug}`}
                className="relative flex flex-col justify-end text-center w-full h-full p-12 z-10 text-white"
              >
                <h3 className="text-3xl font-soria italic tracking-tight mb-6">
                  {service.title}
                </h3>

                <AnimatePresence>
                  {activeService?.slug === service.slug && (
                    <motion.div
                      className="flex flex-col gap-2 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {service.subs.map((sub) => (
                        <p
                          key={sub}
                          className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/80"
                        >
                          {sub}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}