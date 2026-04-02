"use client";

import React from "react";
import Image from "next/image";

export default function PackageDetail() {
  return (
    <main className="bg-[#f2f0e8] text-[#1a1a1a] min-h-screen font-serif">
      {/* 1. HERO SECTION - STICKY TITLE EFFECT */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 border-b border-black/10">
        <span className="text-[10px] tracking-[0.5em] uppercase font-sans mb-8">
          Package One
        </span>
        <h1 className="text-6xl md:text-9xl uppercase tracking-tighter leading-none">
          Wedding <br />
          <span className="italic font-light lowercase">Collection</span>
        </h1>

        {/* Decorative Floating Image (Parallax Effect) */}
        <div className="absolute right-10 bottom-[-50px] w-48 h-64 md:w-64 md:h-80 z-10 shadow-2xl transition-transform duration-1000 ease-out hover:scale-105">
          <Image
            src="https://picsum.photos/id/45/600/800"
            fill
            className="object-cover border-[12px] border-white"
            alt="Wedding Detail"
          />
        </div>
      </section>

      {/* 2. THE INVESTMENT & DETAILS */}
      <section className="relative z-20 bg-[#f2f0e8] py-32 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Sticky Image */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
          <div className="relative aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Image
              src="https://picsum.photos/id/64/800/1200"
              fill
              className="object-cover"
              alt="The Couple"
            />
          </div>
          <p className="mt-6 text-[10px] tracking-[0.3em] uppercase font-sans text-stone-500">
            Capturing the raw emotion of your day.
          </p>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              A full day of coverage <span className="italic">to</span> ensure
              every <span className="italic">moment</span> is preserved forever.
            </h2>

            <div className="space-y-12 border-t border-black/20 pt-12">
              <DetailItem
                title="Investment"
                content="Starts at $4,500"
                desc="Includes 8-10 hours of coverage, two photographers, and a private online gallery."
              />
              <DetailItem
                title="The Deliverables"
                content="600+ High Res Images"
                desc="Carefully curated and professionally edited images delivered within 8 weeks."
              />
              <DetailItem
                title="Add-Ons"
                content="Film & Albums"
                desc="Optional 35mm film coverage and custom heirloom wedding albums available."
              />
            </div>

            <button className="mt-20 group relative overflow-hidden border border-black rounded-full px-16 py-5 uppercase text-[10px] tracking-[0.4em] hover:text-white transition-colors duration-500">
              <span className="relative z-10">Inquire for Dates</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. PARALLAX IMAGE BREAK */}
      <section
        className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://picsum.photos/id/22/1600/900')`,
        }}
      >
        {/* Overlay tipis agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* 4. WHAT'S INCLUDED GRID */}
      <section className="bg-white py-32 px-6 md:px-20 text-center">
        <h3 className="text-[10px] tracking-[0.5em] uppercase font-sans mb-20 text-stone-400">
          Everything you need
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            "Timeline Assistance",
            "Print Rights",
            "High Res Files",
            "Engagement Session",
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[1px] h-12 bg-black/20 mb-6"></div>
              <p className="uppercase text-sm tracking-widest">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER / NEXT PACKAGE */}
      <section className="bg-[#1a1a1a] text-white py-40 px-6 text-center overflow-hidden">
        <span className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-10 block">
          Looking for more?
        </span>
        <a href="#" className="group inline-block">
          <h2 className="text-5xl md:text-8xl font-light hover:italic transition-all duration-700">
            Next Package <span className="text-stone-600">→</span>
          </h2>
          <div className="h-[1px] w-0 group-hover:w-full bg-white transition-all duration-700"></div>
        </a>
      </section>
    </main>
  );
}

// Sub-komponen untuk list detail
function DetailItem({
  title,
  content,
  desc,
}: {
  title: string;
  content: string;
  desc: string;
}) {
  return (
    <div className="group">
      <h4 className="text-[10px] tracking-[0.3em] uppercase font-sans text-stone-400 mb-2">
        {title}
      </h4>
      <p className="text-2xl md:text-3xl font-normal mb-4">{content}</p>
      <p className="text-stone-500 text-sm leading-relaxed font-sans font-light max-w-sm">
        {desc}
      </p>
    </div>
  );
}
