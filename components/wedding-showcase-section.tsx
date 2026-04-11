"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./carousel";

export default function WeddingShowcase() {
  const router = useRouter();
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);

  const offerings = [
    {
      id: "01.",
      slug: "/the-union",
      title: "WEDDING DAYS",
      desc: "Our signature service & most popular",
      img: "https://picsum.photos/id/10/800/1200",
      style: "uppercase tracking-tighter",
    },
    {
      id: "02.",
      slug: "/the-union/elopement",
      title: "elopement",
      desc: "A very intimate setting for couples",
      img: "https://picsum.photos/id/11/800/1200",
      style: "italic lowercase",
    },
    {
      id: "03.",
      slug: "/the-beginning/engagement",
      title: "engagement",
      desc: "Pre wedding bliss and always outdoors",
      img: "https://picsum.photos/id/12/800/1200",
      style: "italic lowercase",
    },
  ];

  return (
    <div className="relative w-full bg-[#f2f0e8]">
      <section className="sticky top-0 z-10 h-screen w-full overflow-hidden flex flex-col p-8 md:p-16 border-b border-black/10 bg-[#f2f0e8]">
        <header className="flex justify-between items-center mb-12 font-livvic">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] tracking-[0.5em] font-bold uppercase text-stone-500"
          >
            All of Our Offerings
          </motion.h2>
          <div className="space-y-1.5 cursor-pointer group flex flex-col items-end">
            <div className="w-8 h-px bg-black group-hover:w-12 transition-all duration-500"></div>
            <div className="w-12 h-px bg-black group-hover:w-8 transition-all duration-500"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center grow">
          <div className="lg:col-span-7 border-t border-black/20">
            {offerings.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveOfferIndex(index)}
                onClick={() => router.push(item.slug)}
                className="group flex items-center justify-between py-12 border-b border-black/20 cursor-pointer relative"
              >
                <div className="w-1/2 z-10">
                  <h3 className={`text-4xl md:text-7xl font-soria ${item.style} transition-all duration-700 group-hover:pl-6 ${activeOfferIndex === index ? "text-black opacity-100" : "text-stone-400 opacity-40"}`}>
                    {item.title}
                  </h3>
                </div>

                <div className="w-1/2 flex border-l border-black/20 pl-10 items-start gap-6 h-full transition-all duration-700">
                  <span className={`text-4xl italic font-soria leading-none transition-colors duration-500 ${activeOfferIndex === index ? "text-black" : "text-stone-300"}`}>
                    {item.id}
                  </span>
                  <p className={`max-w-[180px] text-[10px] leading-relaxed uppercase tracking-widest font-livvic font-medium transition-opacity duration-500 ${activeOfferIndex === index ? "opacity-100" : "opacity-0"}`}>
                    {item.desc}
                  </p>
                </div>
                <div className={`absolute inset-0 bg-white/40 -z-0 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100`} />
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 relative h-[65vh] w-full max-w-sm mx-auto overflow-hidden rounded-sm shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOfferIndex}
                initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image 
                  src={offerings[activeOfferIndex].img} 
                  alt={offerings[activeOfferIndex].title} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section>
        <Carousel />
      </section>
      
      <section className="relative z-30 bg-[#1a1a1a] text-[#f2f0e8] py-40 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center overflow-hidden">
        <div className="max-w-xl lg:ml-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative w-48 h-64 mb-14 p-3 border border-white/10 group"
          >
            <Image 
              src="https://picsum.photos/id/64/600/800" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Reviewer" 
            />
          </motion.div>
          <div className="flex gap-2 mb-10 text-amber-200/80 text-sm">★★★★★</div>
          <h2 className="text-5xl md:text-7xl font-soria italic mb-12 leading-[1.1] tracking-tight">
            "I never imagined my photos to be as perfect as they turned out"
          </h2>
          <div className="space-y-6">
            <p className="text-stone-400 text-[10px] leading-[2.2] uppercase tracking-[0.3em] font-livvic font-light max-w-md">
              Based on a true story of love and light. Every frame captured is a testament to the quiet beauty of existence.
            </p>
            <div className="w-12 h-px bg-stone-500"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold">The Henderson Tales, 2026</p>
          </div>
        </div>
        
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="relative h-[90vh] w-full rounded-tl-[120px] md:rounded-tl-[240px] overflow-hidden shadow-2xl"
        >
          <Image src="https://picsum.photos/id/35/1200/1600" fill className="object-cover" alt="Atmosphere" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]/80"></div>
        </motion.div>
      </section>
    </div>
  );
}