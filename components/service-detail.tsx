"use client";

import React from "react";
import Image from "next/image";

interface ServiceDetailProps {
  title: string;
  category: string;
  investment: string;
  deliverables: string;
  description: string;
  heroImage?: string;
  secondaryImage?: string;
  parallaxImage?: string;
  included: string[];
}

export default function ServiceDetail({
  title,
  category,
  investment,
  deliverables,
  description,
  heroImage = "https://picsum.photos/id/45/600/800",
  secondaryImage = "https://picsum.photos/id/64/800/1200",
  parallaxImage = "https://picsum.photos/id/22/1600/900",
  included
}: ServiceDetailProps) {
  return (
    <main className="bg-[#f2f0e8] text-[#1a1a1a] min-h-screen font-serif">
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 border-b border-black/10">
        <span className="text-[10px] tracking-[0.5em] uppercase font-sans mb-8">
          {category.replace("-", " ")}
        </span>
        <h1 className="text-6xl md:text-9xl uppercase tracking-tighter leading-none">
          {title.split(" ")[0]} <br />
          <span className="italic font-light lowercase">
            {title.split(" ").slice(1).join(" ") || "Collection"}
          </span>
        </h1>

        <div className="absolute right-10 bottom-[-50px] w-48 h-64 md:w-64 md:h-80 z-10 shadow-2xl transition-transform duration-1000 ease-out hover:scale-105">
          <Image
            src={heroImage}
            fill
            className="object-cover border-[12px] border-white"
            alt={title}
          />
        </div>
      </section>

      <section className="relative z-20 bg-[#f2f0e8] py-32 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
          <div className="relative aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Image
              src={secondaryImage}
              fill
              className="object-cover"
              alt="Context image"
            />
          </div>
          <p className="mt-6 text-[10px] tracking-[0.3em] uppercase font-sans text-stone-500">
            Capturing the raw emotion of your day.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              {description}
            </h2>

            <div className="space-y-12 border-t border-black/20 pt-12">
              <DetailItem
                title="Investment"
                content={investment}
                desc="Includes coverage, professional curation, and a private online gallery."
              />
              <DetailItem
                title="The Deliverables"
                content={deliverables}
                desc="Carefully edited high-resolution images delivered via digital download."
              />
              <DetailItem
                title="Feelm Notes"
                content="Storytelling"
                desc="Every frame is picked to tell the unique tale of your connection."
              />
            </div>

            <button className="mt-20 group relative overflow-hidden border border-black rounded-full px-16 py-5 uppercase text-[10px] tracking-[0.4em] hover:text-white transition-colors duration-500">
              <span className="relative z-10">Inquire for Dates</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('${parallaxImage}')` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <section className="bg-white py-32 px-6 md:px-20 text-center">
        <h3 className="text-[10px] tracking-[0.5em] uppercase font-sans mb-20 text-stone-400">
          Everything you need
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {included.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[1px] h-12 bg-black/20 mb-6"></div>
              <p className="uppercase text-sm tracking-widest">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-40 px-6 text-center overflow-hidden">
        <span className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-10 block">
          Looking for more?
        </span>
        <a href="/" className="group inline-block">
          <h2 className="text-5xl md:text-8xl font-light hover:italic transition-all duration-700">
            Back Home <span className="text-stone-600">→</span>
          </h2>
          <div className="h-[1px] w-0 group-hover:w-full bg-white transition-all duration-700"></div>
        </a>
      </section>
    </main>
  );
}

function DetailItem({ title, content, desc }: { title: string; content: string; desc: string; }) {
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