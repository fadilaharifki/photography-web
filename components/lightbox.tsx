"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: number[] | string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}: LightboxProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[510]"
          >
            <X size={40} strokeWidth={1} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[510] p-4"
          >
            <ArrowLeft size={48} strokeWidth={1} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[510] p-4"
          >
            <ArrowRight size={48} strokeWidth={1} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={typeof images[currentIndex] === 'number' 
                ? `https://picsum.photos/id/${images[currentIndex]}/1200/1600`
                : images[currentIndex] as string
              }
              alt=""
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="absolute bottom-8 text-white/30 text-[10px] tracking-[0.5em] uppercase pointer-events-none font-livvic">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}