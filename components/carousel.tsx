"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  { id: 1, title: "JENNA & OLIVER", color: "#7db4d8", img: "https://picsum.photos/id/20/800/800" },
  { id: 2, title: "PALM SPRINGS", color: "#b8e8db", img: "https://picsum.photos/id/26/800/800" },
  { id: 3, title: "VENTURING OUT", color: "#fff721", img: "https://picsum.photos/id/28/800/800" },
  { id: 4, title: "THE LEGACY", color: "#8ce6ff", img: "https://picsum.photos/id/42/800/800" },
  { id: 5, title: "MODERN LOVE", color: "#ffb3ba", img: "https://picsum.photos/id/54/800/800" },
  { id: 6, title: "URBAN TALES", color: "#ffdcb1", img: "https://picsum.photos/id/64/800/800" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(works.length * 10);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const itemWidth = isMobile ? 300 : 380;
  const gap = isMobile ? 20 : 40;
  const stepSize = itemWidth + gap;

  const moveNext = () => setCurrentIndex((prev) => prev + 1);
  const movePrev = () => setCurrentIndex((prev) => prev - 1);

  return (
    <section className="relative z-20 bg-white pt-32 pb-32 overflow-hidden font-livvic">
      <div className="max-w-4xl mx-auto text-center mb-24 px-6">
        <p className="mt-4 text-stone-500 text-[10px] uppercase tracking-[0.4em]">
          Drag to explore our latest stories
        </p>
      </div>

      <div className="relative w-full cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) moveNext();
            else if (info.offset.x > 50) movePrev();
          }}
          animate={{ x: -(currentIndex * stepSize) + (windowWidth / 2) - (itemWidth / 2) }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
          className="flex items-center"
          style={{ gap: `${gap}px` }}
        >
          {[...Array(works.length * 20)].map((_, i) => {
            const item = works[i % works.length];
            const isActive = i === currentIndex;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isActive ? 1.1 : 0.85,
                  opacity: isActive ? 1 : 0.25,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: `${itemWidth}px` }}
                className="shrink-0 flex flex-col items-center"
              >
                <div 
                  className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-xl"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <motion.div 
                      className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white"
                      animate={{ 
                        scale: isHovered && isActive ? 1.1 : 1,
                        rotate: isHovered && isActive ? 2 : 0 
                      }}
                    >
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
                
                <div className={`mt-10 text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <h3 className="font-bold text-xs uppercase tracking-[0.4em] text-black">
                    {item.title}
                  </h3>
                  <p className="font-soria italic text-stone-400 mt-2 text-sm uppercase">View Full Story</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center gap-8 mt-20">
        <button 
          onClick={movePrev}
          className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center transition-all hover:bg-black hover:text-white active:scale-90"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button 
          onClick={moveNext}
          className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center transition-all hover:bg-black hover:text-white active:scale-90"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}