"use client";

import React from "react";
import Image from "next/image";

export default function BackstoryContent() {
  return (
    <main className="bg-[#f2f0e8] min-h-screen pt-40 pb-32 px-6 md:px-12 font-livvic selection:bg-[#EAB308] selection:text-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-6 block">
            Our Narrative
          </span>
          <h1 className="text-5xl md:text-[100px] font-soria leading-[0.9] text-black tracking-tight uppercase">
            Weaving silence <br /> into <span className="italic">timeless</span> tales.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-32">
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
              <Image 
                src="https://picsum.photos/id/64/1200/1500" 
                alt="Feelm Tales Story Philosophy" 
                fill 
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:pt-20">
            <h2 className="text-2xl font-soria italic mb-8 text-black">The Philosophy</h2>
            <div className="space-y-6">
              <p className="text-xs leading-[2] text-stone-600 uppercase tracking-[0.15em] text-justify">
                Feelm Tales lahir dari keinginan untuk menangkap kejujuran. Bukan hanya tentang estetika, tapi tentang bagaimana sebuah momen "terasa" saat ia terjadi.
              </p>
              <p className="text-xs leading-[2] text-stone-600 uppercase tracking-[0.15em] text-justify">
                Kami percaya bahwa setiap manusia memiliki cerita yang sunyi namun dalam. Tugas kami adalah menjadi saksi bisu yang merangkai fragmen tersebut menjadi memori yang abadi.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="font-soria text-4xl mb-6 uppercase tracking-tight">The Vision</h3>
            <p className="text-stone-500 text-sm leading-[1.8] tracking-wide uppercase">
              Menjadi wadah bercerita bagi mereka yang menghargai setiap detik keberadaan. Mengedepankan pendekatan sinematik dan emosional dalam setiap bingkai foto yang kami ambil.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
             <Image 
                src="https://picsum.photos/id/101/1200/800" 
                alt="Feelm Tales Visual Vision" 
                fill 
                className="object-cover"
              />
          </div>
        </div>
      </div>
    </main>
  );
}