"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CategoryHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Array posisi 15 foto (Randomized)
  const images = [
    { id: 10, top: "5%", left: "10%", speed: -400, rotate: -5, size: "w-48 md:w-72" },
    { id: 20, top: "15%", right: "5%", speed: -800, rotate: 8, size: "w-40 md:w-64" },
    { id: 30, top: "25%", left: "30%", speed: -200, rotate: 3, size: "w-56 md:w-80" },
    { id: 40, top: "35%", right: "20%", speed: -600, rotate: -10, size: "w-44 md:w-72" },
    { id: 50, top: "45%", left: "5%", speed: -350, rotate: 12, size: "w-52 md:w-72" },
    { id: 60, top: "55%", right: "15%", speed: -900, rotate: -4, size: "w-36 md:w-60" },
    { id: 70, top: "65%", left: "25%", speed: -150, rotate: 7, size: "w-64 md:w-96" },
    { id: 80, top: "75%", right: "35%", speed: -500, rotate: -8, size: "w-48 md:w-72" },
    { id: 90, top: "85%", left: "12%", speed: -700, rotate: 5, size: "w-40 md:w-64" },
    { id: 100, top: "95%", right: "5%", speed: -300, rotate: -12, size: "w-56 md:w-80" },
    { id: 110, top: "105%", left: "40%", speed: -850, rotate: 2, size: "w-44 md:w-72" },
    { id: 120, top: "115%", right: "25%", speed: -250, rotate: 9, size: "w-52 md:w-72" },
    { id: 130, top: "125%", left: "8%", speed: -650, rotate: -6, size: "w-36 md:w-60" },
    { id: 140, top: "135%", right: "40%", speed: -450, rotate: 10, size: "w-64 md:w-96" },
    { id: 150, top: "145%", left: "20%", speed: -950, rotate: -3, size: "w-48 md:w-72" },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#f2f0e8] w-full" style={{ height: "400vh" }}>
      {/* Container untuk Background Images yang jalan */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, index) => {
          // Setiap foto punya kecepatan terbang (speed) yang beda
          const y = useTransform(scrollYProgress, [0, 1], [0, img.speed]);

          return (
            <motion.div
              key={index}
              style={{ 
                y, 
                top: img.top, 
                left: img.left || "auto", 
                right: img.right || "auto" 
              }}
              className={`absolute aspect-[3/4] shadow-2xl z-0 pointer-events-none`}
            >
              <div className={`relative ${img.size} aspect-[3/4]`}>
                <Image
                  src={`https://picsum.photos/id/${img.id + 10}/600/800`}
                  alt={`Gallery ${index}`}
                  fill
                  className="object-cover border-[10px] md:border-[15px] border-white shadow-xl"
                  style={{ transform: `rotate(${img.rotate}deg)` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Teks yang FIXED/STICKY di tengah */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-50 pointer-events-none">
        <div className="text-center px-6 pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[130px] font-soria text-black leading-none tracking-tighter uppercase mb-6"
          >
            The Beginning
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-stone-600 font-livvic text-[10px] md:text-sm tracking-[0.5em] uppercase mb-16 max-w-lg mx-auto leading-relaxed"
          >
            A collection of stories where every glance is a promise, and every moment is the start of forever.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/works/the-beginning/prewedding" className="group">
              <div className="px-14 py-6 border border-black rounded-full transition-all duration-500 hover:bg-black">
                <span className="font-livvic text-[10px] font-bold tracking-[0.4em] uppercase text-black group-hover:text-white">
                  Prewedding
                </span>
              </div>
            </Link>

            <Link href="/works/the-beginning/engagement" className="group">
              <div className="px-14 py-6 border border-black rounded-full transition-all duration-500 hover:bg-black">
                <span className="font-livvic text-[10px] font-bold tracking-[0.4em] uppercase text-black group-hover:text-white">
                  Engagement
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}