"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceDetailProps {
  title: string;
  category: string;
  investment: string;
  deliverables: string;
  description: string;
  included: string[];
}

export default function ServiceDetail({
  title,
  category,
  investment,
  deliverables,
  description,
  included
}: ServiceDetailProps) {
  return (
    <main className="bg-[#f2f0e8] text-[#1a1a1a] min-h-screen">
      {/* HERO SECTION - ELEGANT TYPOGRAPHY */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.6em] uppercase font-livvic mb-8 text-stone-500"
        >
          {category.replace("-", " ")}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-[12vw] font-soria leading-none tracking-tighter uppercase z-10"
        >
          {title.split(" ")[0]} <br />
          <span className="italic font-light lowercase opacity-80">{title.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Floating Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-[-10%] md:bottom-[-20%] right-[5%] md:right-[10%] w-64 h-80 md:w-[30vw] md:h-[40vw] z-0"
        >
          <Image
            src="https://picsum.photos/id/103/800/1200"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            alt="Hero Visual"
          />
        </motion.div>
      </section>

      {/* STORYTELLING GRID - MULTIPLE PHOTOS */}
      <section className="py-40 px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
          
          {/* Left Side: Large Portrait & Small Detail */}
          <div className="md:col-span-5 flex flex-col gap-20">
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-xl">
              <Image src="https://picsum.photos/id/111/800/1200" fill className="object-cover" alt="Detail 1" />
            </div>
            <div className="md:pl-20">
              <div className="relative aspect-square w-full md:w-80 overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/id/120/600/600" fill className="object-cover grayscale" alt="Detail 2" />
              </div>
              <p className="mt-8 font-livvic text-[10px] uppercase tracking-[0.3em] text-stone-500 leading-loose">
                Every frame is a curated memory, <br /> designed to be felt, not just seen.
              </p>
            </div>
          </div>

          {/* Right Side: Text & Wide Image */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div className="max-w-xl mb-20 md:mb-0">
              <h2 className="font-soria text-4xl md:text-6xl leading-tight mb-12">
                {description}
              </h2>
              
              <div className="space-y-16 pt-16 border-t border-black/10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                   <div className="flex-1">
                      <p className="text-[10px] tracking-widest uppercase mb-4 text-stone-400">Investment</p>
                      <p className="text-3xl font-soria italic">{investment}</p>
                   </div>
                   <div className="flex-1">
                      <p className="text-[10px] tracking-widest uppercase mb-4 text-stone-400">Deliverables</p>
                      <p className="text-3xl font-soria italic">{deliverables}</p>
                   </div>
                </div>

                <div>
                   <p className="text-[10px] tracking-widest uppercase mb-8 text-stone-400">What’s Included</p>
                   <div className="grid grid-cols-2 gap-y-4">
                      {included.map(item => (
                        <p key={item} className="font-livvic text-[10px] uppercase tracking-wider">• {item}</p>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/id/129/1200/800" fill className="object-cover" alt="Cinematic Wide" />
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH PARALLAX MOMENT */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image 
          src="https://picsum.photos/id/133/1600/900" 
          fill 
          className="object-cover scale-110" 
          alt="Parallax"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <p className="text-white font-soria italic text-4xl md:text-7xl">The beauty of the mundane.</p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-40 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-10">Available for 2026/2027</p>
          <h2 className="text-5xl md:text-8xl font-soria italic leading-none mb-16">
            Let’s tell <br /> your tale together
          </h2>
          <button className="group relative px-20 py-6 border border-white/20 rounded-full overflow-hidden transition-all hover:border-white">
            <span className="relative z-10 font-livvic text-[10px] uppercase tracking-[0.4em]">Get in Touch</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          
          <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <a href="/" className="font-soria text-2xl italic hover:opacity-50 transition-opacity">← Feelm Tales</a>
            <div className="flex gap-10 text-[9px] uppercase tracking-widest text-stone-500">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}