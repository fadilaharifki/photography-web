"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "WHATSAPP", href: "https://wa.me/yournumber" },
    { label: "EMAIL", href: "mailto:hello@momenku.com" },
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "TIKTOK", href: "https://tiktok.com" },
    { label: "THREADS", href: "https://threads.net" },
  ];

  return (
    <footer className="relative bg-[#F2F1EB] text-[#EAB308] border-t border-black/5 font-livvic">
      <div className="px-8 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16 transition-transform active:scale-95">
          <Image
            src="/logo-forest-green.png"
            alt="Momenku"
            fill
            className="object-contain"
          />
        </Link>

        <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <Link href={socialLinks[0].href} className="text-xs font-bold tracking-[0.3em] transition-colors hover:text-[#F7EFE7]">
              {socialLinks[0].label}
            </Link>
            <Link href={socialLinks[1].href} className="text-xs font-bold tracking-[0.3em] transition-colors hover:text-[#F7EFE7]">
              {socialLinks[1].label}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={socialLinks[2].href} className="text-xs font-bold tracking-[0.3em] transition-colors hover:text-[#F7EFE7]">
              {socialLinks[2].label}
            </Link>
            <Link href={socialLinks[3].href} className="text-xs font-bold tracking-[0.3em] transition-colors hover:text-[#F7EFE7]">
              {socialLinks[3].label}
            </Link>
            <Link href={socialLinks[4].href} className="text-xs font-bold tracking-[0.3em] transition-colors hover:text-[#F7EFE7]">
              {socialLinks[4].label}
            </Link>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="group px-10 cursor-pointer py-4 border border-black/20 rounded-xl text-black text-[10px] font-bold tracking-[0.3em] transition-all hover:bg-black hover:text-white"
        >
          BACK TO TOP
        </button>
      </div>

      <div className="pb-8 text-center">
        <p className="text-[10px] text-black/20 tracking-[0.4em] uppercase font-bold">
          Faalm Tales © 2026
        </p>
      </div>
    </footer>
  );
}