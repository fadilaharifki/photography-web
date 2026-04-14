"use client";

import React, { useState, useEffect, useRef } from "react";

export default function QuoteSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [videoSize, setVideoSize] = useState({ 
    width: 160, 
    height: 100, 
    radius: 20,
    opacity: 1 
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const totalScrollArea = rect.height - windowHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollArea, 0), 1);

      const isMobile = windowWidth < 768;
      
      // Desktop tetap pakai base awalmu (320x200), Mobile 9:16 (80x142)
      const baseWidth = isMobile ? 5 : 320; 
      const baseHeight = isMobile ? 10 : 200; 

      setVideoSize({
        width: baseWidth + (windowWidth - baseWidth) * progress,
        height: baseHeight + (windowHeight - baseHeight) * progress,
        radius: isMobile ? Math.max(10 - (progress * 100), 0) : Math.max(20 - (progress * 100), 0),
        opacity: progress > 0.7 ? Math.max(1 - (progress - 0.7) * 4, 0) : 1
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#F2F0EB]" style={{ height: "300vh" }}>
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        <div 
          style={{ opacity: videoSize.opacity }}
          className="relative z-[60] w-full pointer-events-none mb-[-2vw] md:mb-[-4vw]s"
        >
          <h2 className="text-[18vw] pb-5 md:pb-10 font-soria uppercase text-black leading-none tracking-tighter">
            Let's Plant
          </h2>
        </div>

        <div className="relative w-full flex">
          
          <div 
            style={{ opacity: videoSize.opacity }}
            className="relative z-60 w-full flex gap-0 md:gap-10 pointer-events-none"
          >
            <h2 className="text-[18vw] font-soria uppercase text-black leading-none tracking-tighter">
              Your
            </h2>
            
            <div className="w-18 md:w-[320px] shrink-0" /> 

            <h2 className="text-[18vw] font-soria uppercase text-black leading-none tracking-tighter">
              Flag
            </h2>
          </div>

          <div
            style={{
              width: `${videoSize.width}px`,
              height: `${videoSize.height}px`,
              borderRadius: `${videoSize.radius}px`,
              position: "absolute",
              zIndex: 50,
              left: "50%",
              top: "40%",
              transform: "translate(-50%, -50%)", 
              willChange: "width, height"
            }}
            className="bg-black overflow-hidden flex items-center justify-center shadow-2xl"
          >
            <iframe
              className="w-full h-full object-cover scale-[1.5] pointer-events-none"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1"
              title="Feelm Tales"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </div>

      </section>
    </div>
  );
}