"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "./carousel";

export default function ServiceDetail({ title, category, serviceSlug }: { title: string; category: string; serviceSlug: string }) {
  const rawItems = [
    { id: 101, label: "Silent Morning", slug: "silent-morning" },
    { id: 102, label: "The Vow", slug: "the-vow" },
    { id: 103, label: "Golden Hour", slug: "golden-hour" },
    { id: 104, label: "Reception", slug: "reception" },
    { id: 109, label: "The Legacy", slug: "the-legacy" },
  ];

  return (
    <main className="bg-[#f2f0e8] text-[#1a1a1a] min-h-screen font-livvic">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image src="https://picsum.photos/id/103/1920/1080" fill priority className="object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 className="text-6xl md:text-[10vw] font-soria leading-[0.85] uppercase">{title}</motion.h1>
        </div>
      </section>

      <section className="pb-40 relative pt-10">
        <div className="px-6 md:px-16 mb-12 text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-stone-400 mb-2 font-bold">The Portfolio</p>
          <h3 className="font-soria text-3xl md:text-5xl italic">Visual Storytelling</h3>
        </div>

        <Carousel items={rawItems} category={category} serviceSlug={serviceSlug} />
      </section>
    </main>
  );
}