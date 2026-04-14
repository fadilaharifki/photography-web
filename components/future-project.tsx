"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
  });

  const springConfig = { stiffness: 120, damping: 40, mass: 0.5 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const yLeft = useTransform(smoothProgress, [0, 1], [-440, 1000]);
  const yRight = useTransform(smoothProgress, [0, 1], [1000, -1300]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
   <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[100vh] bg-[#F2F0EB] flex flex-col items-center justify-center overflow-hidden cursor-none py-32 md:py-40"
    >
      <Link href="/backstory" className="absolute inset-0 z-[50]">
        <span className="sr-only">View Backstory</span>
      </Link>

      <motion.div
        className="fixed top-0 left-0 w-32 h-12 bg-black text-white rounded-full flex items-center justify-center text-[9px] font-livvic font-bold tracking-[0.2em] pointer-events-none z-[100] shadow-2xl"
        animate={{
          x: mousePos.x - 64,
          y: mousePos.y - 24,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        VIEW BACKSTORY
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl w-full">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-soria italic text-xl md:text-2xl text-stone-600 mb-16"
        >
          Featured project
        </motion.span>

        <h2 className="font-soria text-5xl md:text-[110px] leading-[0.85] text-black tracking-tight uppercase">
          Nadia Lee Cohen — <br />
          <span className="font-livvic font-light text-4xl md:text-7xl block mt-6 tracking-normal">
            “Holy Ohio,” a new <br /> family photobook
          </span>
        </h2>
      </div>

      <motion.div
        style={{ y: yLeft }}
        className="absolute left-[8%] md:left-[12%] top-[15%] w-32 md:w-[220px] aspect-[3/4] z-20"
      >
        <div className="relative w-full h-full rotate-[-4deg] shadow-[30px_30px_80px_rgba(0,0,0,0.18)]">
          <Image
            src="https://picsum.photos/id/103/800/1067"
            alt="Project left image"
            fill
            priority
            className="object-coverS"
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: yRight }}
        className="absolute right-[8%] md:right-[12%] bottom-[10%] w-32 md:w-[280px] aspect-square z-20"
      >
        <div className="relative w-full h-full rotate-[6deg] shadow-[30px_30px_80px_rgba(0,0,0,0.18)]">
          <Image
            src="https://picsum.photos/id/102/800/800"
            alt="Project right image"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-white/40 pointer-events-none opacity-40" />
    </section>
  );
}