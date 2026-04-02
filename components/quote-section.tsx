"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function QuoteSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax untuk gambar-gambar di Section 2
  const y1 = useTransform(scrollYProgress, [0, 0.6], ["100vh", "-120vh"]);
  const y2 = useTransform(scrollYProgress, [0, 0.7], ["130vh", "-100vh"]);
  const y3 = useTransform(scrollYProgress, [0, 0.8], ["160vh", "-150vh"]);
  const y4 = useTransform(scrollYProgress, [0, 0.9], ["180vh", "-80vh"]);

  // Animasi untuk Section 3 (Background Hitam)
  // Dia mulai naik setelah scroll jalan sedikit (0.5) dan mentok di atas (0)
  const ySection3 = useTransform(scrollYProgress, [0.6, 1], ["100vh", "0vh"]);

  const marqueeText = "AUTHENTIC DREAMERS WEDDING PHOTOGRAPHY • ";

  return (
    <div ref={containerRef} className="relative bg-[#F2F0EB]">
      {/* AREA SCROLL TOTAL (Tempat bermanuver) */}
      <div className="h-[400vh] relative">
        {/* --- SECTION 1: TEKS STICKY (DIAM DI TEMPAT) --- */}
        <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
          {/* Marquee Top */}
          <div className="absolute top-0 left-0 w-full py-4 border-b border-black/5 bg-[#F2F0EB] z-30">
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-black"
              >
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="pr-4">
                    {marqueeText}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Headline Tengah */}
          <div className="relative z-10 text-center px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 leading-[0.85]">
              <h2 className="text-6xl md:text-[130px] font-serif text-black tracking-tighter uppercase">
                REAL
              </h2>
              <span className="text-5xl md:text-[110px] font-serif italic text-black font-light md:ml-4">
                beauty
              </span>
            </div>
            <h2 className="text-6xl md:text-[130px] font-serif text-black leading-[0.85] tracking-tighter uppercase">
              COMES FROM
            </h2>
            <h2 className="text-6xl md:text-[130px] font-serif text-black leading-[0.85] tracking-tighter uppercase">
              WITHIN
            </h2>
            <div className="mt-14">
              <button className="px-12 py-3 border border-black/30 rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-black hover:text-white transition-all duration-700 bg-transparent text-black">
                Book Now
              </button>
            </div>
          </div>

          {/* --- SECTION 2: GAMBAR DEKORASI (MELUNCUR DI ATAS STICKY) --- */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <motion.div
              style={{ y: y1 }}
              className="absolute left-[5%] w-44 md:w-64 aspect-[3/4]"
            >
              <img
                src="https://picsum.photos/id/64/600/800"
                className="w-full h-full object-cover grayscale opacity-90 shadow-2xl"
                alt="deco"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute right-[5%] w-40 md:w-60 aspect-[3/4]"
            >
              <img
                src="https://picsum.photos/id/65/600/900"
                className="w-full h-full object-cover grayscale opacity-90 shadow-2xl"
                alt="deco"
              />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="absolute left-[15%] w-48 md:w-80 aspect-[2/3]"
            >
              <img
                src="https://picsum.photos/id/102/600/800"
                className="w-full h-full object-cover grayscale opacity-90 shadow-2xl"
                alt="deco"
              />
            </motion.div>

            <motion.div
              style={{ y: y4 }}
              className="absolute right-[10%] w-56 md:w-[400px] aspect-video"
            >
              <img
                src="https://picsum.photos/id/103/800/600"
                className="w-full h-full object-cover grayscale opacity-90 shadow-2xl"
                alt="deco"
              />
            </motion.div>
          </div>

          {/* --- SECTION 3: FULL SCREEN BLACK (MELUNCUR NAIK) --- */}
          {/* Ini sekarang ditaruh di dalam sticky container tapi ditarik y-nya dari bawah */}
          <motion.section
            style={{ y: ySection3 }}
            className="absolute inset-0 z-40 bg-black flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/id/24/1920/1080"
                alt="End Background"
                fill
                className="object-cover opacity-40 grayscale"
              />
            </div>
            <div className="relative z-50 text-center text-white px-4">
              <h3 className="text-4xl md:text-8xl font-serif tracking-tight leading-none uppercase">
                PHOTOGRAPHING
              </h3>
              <h3 className="text-4xl md:text-8xl font-serif italic font-light leading-none uppercase">
                authentic COUPLES
              </h3>
              <div className="w-[1px] h-32 bg-white/30 mx-auto mt-16"></div>
            </div>
          </motion.section>
        </section>
      </div>
    </div>
  );
}
