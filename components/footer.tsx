"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "WHATSAPP", href: "https://wa.me/yournumber" },
    { label: "EMAIL", href: "mailto:hello@feelmtales.com" },
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "TIKTOK", href: "https://tiktok.com" },
    { label: "THREADS", href: "https://threads.net" },
  ];

  return (
    <footer className="relative bg-[#1a1a1a] text-white font-livvic selection:bg-[#EAB308] selection:text-black">
      <div className="px-8 py-6 md:px-16 flex flex-col items-center">
        
        <Link href="/" className="relative w-28 h-10 md:w-36 md:h-12 mb-6 transition-opacity hover:opacity-80">
          <Image
            src="/logo-white.png" 
            alt="Feelm Tales"
            fill
            className="object-contain"
          />
        </Link>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-16 mb-6 max-w-4xl">
          {socialLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="text-[10px] font-bold tracking-[0.4em] transition-colors hover:text-[#EAB308]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="group px-6 py-2.5 border border-white/20 rounded-full text-white text-[9px] font-bold tracking-[0.3em] transition-all hover:bg-white hover:text-black mb-6"
        >
          BACK TO TOP
        </button>

        <div className="w-full border-t border-white/5 pt-6">
          <p className="text-[8px] md:text-[9px] text-white/30 tracking-[0.5em] uppercase font-medium text-center">
            Feelm Tales All Rights Reserved © 2023
          </p>
        </div>
      </div>
    </footer>
  );
}