"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WeddingShowcase() {
  const router = useRouter();
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);

  const offerings = [
    {
      id: "01.",
      slug: "wedding-days",
      title: "WEDDING DAYS",
      desc: "Our signature service & most popular",
      img: "https://picsum.photos/id/10/800/1200",
      style: "uppercase tracking-widest",
    },
    {
      id: "02.",
      slug: "elopement",
      title: "elopement",
      desc: "A very intimate setting for couples",
      img: "https://picsum.photos/id/11/800/1200",
      style: "italic lowercase",
    },
    {
      id: "03.",
      slug: "engagement",
      title: "engagement",
      desc: "Pre wedding bliss and always outdoors",
      img: "https://picsum.photos/id/12/800/1200",
      style: "italic lowercase",
    },
  ];

  return (
    <div className="relative w-full bg-[#f2f0e8]">
      {/* SECTION 1: OFFERINGS (STICKY) */}
      {/* h-[110vh] agar ada sedikit ruang scroll sebelum tertutup section bawah */}
      <section className="sticky top-0 z-10 h-screen w-full overflow-hidden flex flex-col p-8 md:p-16 border-b border-black/10">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase">
            All of Our Offerings
          </h2>
          <div className="space-y-1.5 cursor-pointer group">
            <div className="w-8 h-[1px] bg-black group-hover:w-6 transition-all"></div>
            <div className="w-8 h-[1px] bg-black"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow">
          <div className="lg:col-span-7 border-t border-black">
            {offerings.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveOfferIndex(index)}
                onClick={() => {
                  router.push(item.slug);
                }}
                className="group flex items-center justify-between py-10 border-b border-black cursor-pointer"
              >
                <div className="w-1/2">
                  <h3
                    className={`text-4xl md:text-7xl font-serif ${item.style} transition-all group-hover:pl-4`}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="w-1/2 flex border-l border-black pl-8 items-start gap-4 h-full">
                  <span className="text-4xl italic text-stone-400 font-serif leading-none">
                    {item.id}
                  </span>
                  <p className="max-w-[150px] text-[11px] leading-relaxed uppercase tracking-tight font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 relative h-[70vh] w-full max-w-md mx-auto">
            {offerings.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  activeOfferIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SAMPLING WORKS (OVERLAYING) */}
      {/* Section ini akan naik menutupi Section 1 karena z-index lebih tinggi */}
      <section className="relative z-20 bg-[#f2f0e8] pt-32 pb-20 px-10 shadow-[0_-30px_60px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-3xl md:text-5xl font-serif leading-[1.2] text-stone-800">
            From San Francisco <span className="italic text-stone-500">to</span>{" "}
            Paris, we photograph your special moments from around{" "}
            <span className="italic text-stone-500">the</span> globe. Our
            attention <span className="italic text-stone-500">to</span> detail
            and reliability makes us{" "}
            <span className="italic text-stone-500">the</span> BEST in the biz.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              id: "01.",
              t: "JENNA & OLIVER",
              img: "https://picsum.photos/id/20/600/800",
            },
            {
              id: "02.",
              t: "PALM SPRINGS",
              img: "https://picsum.photos/id/26/600/800",
            },
            {
              id: "03.",
              t: "VENTURING OUT",
              img: "https://picsum.photos/id/28/600/800",
            },
          ].map((work, i) => (
            <div
              key={i}
              className="group overflow-hidden border-l border-black/10 pl-6"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src={work.img}
                  alt={work.t}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="flex gap-3 font-serif text-xl tracking-widest items-center">
                <span className="text-stone-400 italic text-2xl">
                  {work.id}
                </span>
                <h3 className="uppercase">{work.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TESTIMONIAL (BLACK) */}
      <section className="relative z-30 bg-[#1a1a1a] text-white py-32 px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-md lg:ml-auto">
          <div className="relative w-40 h-52 mb-10 border border-white/20 p-2">
            <Image
              src="https://picsum.photos/id/64/400/600"
              fill
              className="object-cover grayscale"
              alt="Reviewer"
            />
          </div>
          <div className="flex gap-1 mb-8 text-amber-200">★★★★★</div>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
            "I never imagined my photos to be as perfect as they turned out"
          </h2>
          <p className="text-stone-400 text-xs leading-loose uppercase tracking-[0.2em] font-light max-w-sm">
            Based on a true story of love and light. Scenester williamsburg
            small batch viral typewriter blog, schlitz skateboard squid.
          </p>
        </div>
        <div className="relative h-[80vh] w-full rounded-tl-[100px]">
          <Image
            src="https://picsum.photos/id/35/1200/1600"
            fill
            className="object-cover opacity-50"
            alt="Atmosphere"
          />
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION (VINTAGE LOOK) */}
      <section className="relative z-30 bg-[#0f0f0f] text-white py-40 px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-stone-500 mb-12 block">
              Freebie Alert
            </span>
            <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[1] uppercase">
              Download{" "}
              <span className="italic font-light lowercase text-stone-400">
                the preset
              </span>{" "}
              for a <br />
              VINTAGE WEDDING LOOK
            </h2>
            <p className="text-stone-500 mb-12 text-lg max-w-lg leading-relaxed">
              Elevate your gallery with our signature warm tones. Grab this free
              guide and stand out from the crowd.
            </p>
            <button className="group relative border border-white/30 rounded-full px-12 py-5 overflow-hidden transition-all hover:border-white">
              <span className="relative z-10 uppercase text-[10px] tracking-[0.3em]">
                Download Now
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
          <div className="w-full lg:w-1/3 aspect-[3/4] relative shadow-2xl">
            <Image
              src="https://picsum.photos/id/42/800/1000"
              fill
              className="object-cover border-[12px] border-[#1a1a1a]"
              alt="Preset Preview"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
