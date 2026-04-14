"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "@/components/lightbox";

interface PortfolioDetailProps {
  title: string;
  category: string;
}

export default function PortfolioDetail({ title, category }: PortfolioDetailProps) {
  const [index, setIndex] = useState<number | null>(null);

  const stories = [
    { id: 10, copy: "A story written in the stars, told through the lens." },
  ];

  const galleryImages = Array.from({ length: 12 }).map((_, i) => ({
    id: 120 + i,
    alt: `Gallery image ${i + 1}`
  }));

  const allImages = [...stories.map(s => s.id), ...galleryImages.map(g => g.id)];

  const next = () => setIndex((prev) => (prev !== null ? (prev + 1) % allImages.length : null));
  const prev = () => setIndex((prev) => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : null));

  return (
    <main className="bg-[#f2f0e8] text-[#1a1a1a] font-livvic selection:bg-black selection:text-white">
      {stories.map((story, idx) => (
        <section 
          key={story.id} 
          className="relative h-screen w-full overflow-hidden border-b border-black/5"
        >
          <div 
            className="relative h-full w-full cursor-zoom-in group" 
            onClick={() => setIndex(idx)}
          >
            <Image
              src={`https://picsum.photos/id/${story.id}/1920/1080`}
              fill
              priority={idx === 0}
              className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
              alt={`${title} - ${idx + 1}`}
            />
            
            <div className="absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/50" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl"
              >
                {idx === 0 ? (
                  <div className="space-y-6">
                    <span className="text-[10px] tracking-[0.8em] uppercase block font-bold opacity-70">
                      {category?.replace("-", " ")}
                    </span>
                    <h1 className="text-6xl md:text-[10vw] font-soria leading-[0.8] uppercase tracking-tighter">
                      {title}
                    </h1>
                    <p className="font-soria italic text-xl md:text-3xl opacity-90 pt-4">
                      {story.copy}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="w-12 h-px bg-white/40 mx-auto mb-8" />
                    <p className="font-soria italic text-2xl md:text-5xl leading-[1.15]">
                      "{story.copy}"
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="relative aspect-[3/4] group overflow-hidden bg-stone-200 cursor-zoom-in"
              onClick={() => setIndex(stories.length + idx)}
            >
              <Image
                src={`https://picsum.photos/id/${img.id}/900/1200`}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <Lightbox
        isOpen={index !== null}
        onClose={() => setIndex(null)}
        images={allImages}
        currentIndex={index ?? 0}
        onNext={next}
        onPrev={prev}
      />

      <section className="h-[40vh] flex flex-col items-center justify-center bg-white text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] tracking-[0.5em] uppercase font-bold text-black border-b border-black pb-1 hover:opacity-40 transition-opacity"
        >
          Back to top
        </button>
      </section>
    </main>
  );
}