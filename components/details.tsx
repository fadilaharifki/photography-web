"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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
  "backstory": [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415]
};

export default function Details({ title, description, services, category }: DetailsProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const categoryIds = CATEGORY_PICSUM_IDS[category.toLowerCase()] || CATEGORY_PICSUM_IDS["the-beginning"];

  const images = [
    { id: categoryIds[0], top: "5%", left: "10%", speed: -400, rotate: -5, size: "w-48 md:w-72" },
    { id: categoryIds[1], top: "15%", right: "5%", speed: -800, rotate: 8, size: "w-40 md:w-64" },
    { id: categoryIds[2], top: "25%", left: "30%", speed: -200, rotate: 3, size: "w-56 md:w-80" },
    { id: categoryIds[3], top: "35%", right: "20%", speed: -600, rotate: -10, size: "w-44 md:w-72" },
    { id: categoryIds[4], top: "45%", left: "5%", speed: -350, rotate: 12, size: "w-52 md:w-72" },
    { id: categoryIds[5], top: "55%", right: "15%", speed: -900, rotate: -4, size: "w-36 md:w-60" },
    { id: categoryIds[6], top: "65%", left: "25%", speed: -150, rotate: 7, size: "w-64 md:w-96" },
    { id: categoryIds[7], top: "75%", right: "35%", speed: -500, rotate: -8, size: "w-48 md:w-72" },
    { id: categoryIds[8], top: "85%", left: "12%", speed: -700, rotate: 5, size: "w-40 md:w-64" },
    { id: categoryIds[9], top: "95%", right: "5%", speed: -300, rotate: -12, size: "w-56 md:w-80" },
    { id: categoryIds[10], top: "105%", left: "40%", speed: -850, rotate: 2, size: "w-44 md:w-72" },
    { id: categoryIds[11], top: "115%", right: "25%", speed: -250, rotate: 9, size: "w-52 md:w-72" },
    { id: categoryIds[12], top: "125%", left: "8%", speed: -650, rotate: -6, size: "w-36 md:w-60" },
    { id: categoryIds[13], top: "135%", right: "40%", speed: -450, rotate: 10, size: "w-64 md:w-96" },
    { id: categoryIds[14], top: "145%", left: "20%", speed: -950, rotate: -3, size: "w-48 md:w-72" },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#f2f0e8] w-full" style={{ height: "400vh" }}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, index) => {
          const y = useTransform(scrollYProgress, [0, 1], [0, img.speed]);

          return (
            <motion.div
              key={index}
              style={{ y, top: img.top, left: img.left || "auto", right: img.right || "auto" }}
              className={`absolute aspect-3/4 shadow-2xl z-0 pointer-events-none`}
            >
              <div className={`relative ${img.size} aspect-3/4`}>
                <Image
                  src={`https://picsum.photos/id/${img.id}/600/800`}
                  alt={`Gallery ${index}`}
                  fill
                  className="object-cover border-10 md:border-15 border-white shadow-xl"
                  style={{ transform: `rotate(${img.rotate}deg)` }}
                />
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
        </div>
      </div>
    </section>
  );
}