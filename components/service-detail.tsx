  "use client";

  import React, { useRef, useState, useEffect } from "react";
  import Image from "next/image";
  import { motion, AnimatePresence } from "framer-motion";
  import { ArrowLeft, ArrowRight } from "lucide-react";

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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);
    const [cursorDir, setCursorDir] = useState<"left" | "right">("right");

    const rawItems = [
      { id: 101, label: "Silent Morning" },
      { id: 102, label: "The Vow" },
      { id: 103, label: "Golden Hour" },
      { id: 104, label: "Reception" },
      { id: 109, label: "The Legacy" },
    ];
    const carouselItems = [...rawItems, ...rawItems, ...rawItems];

    const handleMouseMove = (e: React.MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (scrollContainerRef.current) {
        const { left, width } = scrollContainerRef.current.getBoundingClientRect();
        const relativeX = e.clientX - left;
        setCursorDir(relativeX < width / 2 ? "left" : "right");
      }
    };

    const handleCarouselClick = () => {
      if (scrollContainerRef.current) {
        const scrollAmount = window.innerWidth * 0.3; 
        scrollContainerRef.current.scrollBy({
          left: cursorDir === "right" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    };

  
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 3;
      } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = container.scrollWidth / 3;
      }
    };

    useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollLeft = container.scrollWidth / 3;
        container.addEventListener("scroll", handleScroll);
      }
      return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <main className="bg-[#f2f0e8] text-[#1a1a1a] min-h-screen font-livvic selection:bg-[#EAB308] selection:text-black">
        
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <Image
            src="https://picsum.photos/id/103/1920/1080"
            fill
            priority
            className="object-cover"
            alt="Hero Banner"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 text-center text-white px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] tracking-[0.6em] uppercase mb-8 block font-bold"
            >
              {category.replace("-", " ")}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10vw] font-soria leading-[0.85] tracking-tighter uppercase"
            >
              {title.split(" ")[0]} <br />
              <span className="italic font-light lowercase opacity-90">{title.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
          </div>
        </section>

        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <h2 className="font-soria text-4xl md:text-6xl leading-tight">
              {description}
            </h2>
            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-10 border-t border-black/10 pt-10">
                <div>
                  <p className="text-[9px] tracking-widest uppercase mb-4 text-stone-400 font-bold">Investment</p>
                  <p className="text-2xl font-soria italic">{investment}</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase mb-4 text-stone-400 font-bold">Deliverables</p>
                  <p className="text-2xl font-soria italic">{deliverables}</p>
                </div>
              </div>
              <div>
                <p className="text-[9px] tracking-widest uppercase mb-6 text-stone-400 font-bold">What’s Included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                  {included.map((item, idx) => (
                    <p key={idx} className="text-[10px] uppercase tracking-wider text-stone-600 font-medium">• {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-40 relative">
          <div className="px-6 md:px-16 mb-12">
            <p className="text-[9px] tracking-[0.4em] uppercase text-stone-400 mb-2 font-bold">The Portfolio</p>
            <h3 className="font-soria text-3xl md:text-5xl italic">Visual Storytelling</h3>
          </div>

          <AnimatePresence>
            {showCursor && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="fixed top-0 left-0 pointer-events-none z-[100] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-xl"
                style={{ x: mousePos.x - 28, y: mousePos.y - 28 }}
              >
                {cursorDir === "right" ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
              </motion.div>
            )}
          </AnimatePresence>

          <div 
            ref={scrollContainerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            onClick={handleCarouselClick}
            className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-16 cursor-none select-none scroll-smooth"
          >
            {carouselItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex-none w-[80vw] md:w-[28vw] group"
              >
                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden mb-6">
                  <Image
                    src={`https://picsum.photos/id/${item.id}/800/1067`}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    alt={item.label}
                  />
                </div>
                <div className="text-center">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-800 transition-colors group-hover:text-stone-500">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }