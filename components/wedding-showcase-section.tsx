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
      slug: "/the-union/elopement",
      title: "elopement",
      desc: "A very intimate setting for couples",
      img: "https://picsum.photos/id/11/800/1200",
      style: "italic lowercase",
    },
    {
      id: "02.",
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
    </div>
  );
}