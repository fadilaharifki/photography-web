"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";

const slides = [
  {
    type: "image",
    src: "https://picsum.photos/id/64/1200/1600", // Wedding-ish vibes
    name: "OSCAR",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2016/09/21/5309-183674690_tiny.mp4",
    poster: "https://picsum.photos/id/454/1200/1600",
    name: "OSCAR",
  },
  {
    type: "image",
    src: "https://picsum.photos/id/364/1200/1600",
    name: "OSCAR",
  },
  {
    type: "image",
    src: "https://picsum.photos/id/658/1200/1600",
    name: "OSCAR",
  },
];

export default function SplitHeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!(slides[currentSlideIndex].type === "video" && isVideoPlaying)) {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlideIndex, isVideoPlaying]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-[#0a0a0a] overflow-hidden">
      {/* --- SISI KIRI: STATIS --- */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden border-r border-white/10">
        <Image
          src="https://picsum.photos/id/65/1200/1600"
          alt="Lillian"
          fill
          priority
          className="object-cover grayscale hover:scale-105 transition-transform duration-[3000ms]"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-y-0 right-0 flex items-center z-20">
          <h1 className="text-white text-5xl md:text-8xl font-light tracking-[0.1em] translate-x-1/2 md:translate-x-0 md:mr-4">
            LILLIAN
          </h1>
        </div>
      </div>

      {/* --- TENGAH: LOGO '&' --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="w-20 h-28 md:w-32 md:h-44 rounded-[100%] border border-white/40 flex items-center justify-center backdrop-blur-[2px]">
          <span className="text-white/80 text-4xl md:text-6xl font-serif italic">
            &
          </span>
        </div>
      </div>

      {/* --- SISI KANAN: DYNAMIC SLIDER --- */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentSlideIndex].type === "image" ? (
              <img
                src={slides[currentSlideIndex].src}
                alt={slides[currentSlideIndex].name}
                className="w-full h-full object-cover grayscale"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={slides[currentSlideIndex].src}
                  poster={slides[currentSlideIndex].poster}
                  muted
                  playsInline
                  className="w-full h-full object-cover grayscale"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center group z-40"
                >
                  <div className="p-4 rounded-full bg-black/20 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isVideoPlaying ? (
                      <Pause className="text-white" />
                    ) : (
                      <Play className="text-white" />
                    )}
                  </div>
                </button>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Nama Dynamic - Rata Kiri di sisi kanan */}
        <div className="absolute inset-y-0 left-0 flex items-center z-20">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlideIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-5xl md:text-8xl font-light tracking-[0.1em] -translate-x-1/2 md:translate-x-0 md:ml-4 uppercase"
            >
              {slides[currentSlideIndex].name}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-500 ${currentSlideIndex === i ? "w-8 bg-white" : "w-4 bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/50 tracking-[0.4em] uppercase">
          Explore
        </span>
        <ChevronDown size={20} className="text-white/50 animate-bounce" />
      </div>
    </section>
  );
}
