"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    type: "image",
    src: "https://picsum.photos/id/64/1200/1600",
  },
  {
    type: "image",
    src: "https://picsum.photos/id/364/1200/1600",
  },
  {
    type: "image",
    src: "https://picsum.photos/id/658/1200/1600",
  },
];

export default function SplitHeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-[#0a0a0a] overflow-hidden">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden border-r border-white/10">
        <Image
          src="https://picsum.photos/id/65/1200/1600"
          alt="Feelm Tales Static"
          fill
          priority
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlideIndex].src}
              alt="Feelm Tales Slideshow"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 right-10 z-30 flex gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-px transition-all duration-700 ${currentSlideIndex === i ? "w-12 bg-white" : "w-6 bg-white/20"}`}
            />
          ))}
        </div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 group transition-all"
      >
        <span className="text-[9px] font-livvic text-white/40 tracking-[0.5em] uppercase group-hover:text-white transition-colors">
          Explore
        </span>
        <div className="p-2 border border-white/10 rounded-full group-hover:border-white/40 transition-colors">
          <ChevronDown size={18} className="text-white/40 group-hover:text-white animate-bounce" />
        </div>
      </button>
    </section>
  );
}