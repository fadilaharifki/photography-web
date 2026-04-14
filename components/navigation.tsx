"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORY_DATA } from "@/constants/content";

const workSubItems = Object.entries(CATEGORY_DATA)
  .filter(([_, value]) => value.showInNav)
  .map(([_, value]) => ({
    label: value.title,
    href: value.href,
    clickable: true,
    nested: value.services, 
  }));

const NAV_LINKS = [
  { 
    label: CATEGORY_DATA["backstory"].title, 
    href: CATEGORY_DATA["backstory"].href, 
    clickable: true 
  },
  {
    label: "Works",
    href: "#",
    clickable: false,
    subItems: workSubItems, 
  },
  { 
    label: CATEGORY_DATA["connect"].title, 
    href: CATEGORY_DATA["connect"].href, 
    clickable: true 
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-livvic ${
        isScrolled ? "bg-[#f2f0e8]/10 backdrop-blur-md border-b border-black/5 py-3 md:py-4 shadow-sm" : "bg-[#f2f0e8]/50 backdrop-blur-[2px] py-5 md:py-8 border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative h-12 w-32 md:h-14 md:w-40 transition-opacity hover:opacity-80">
            <Image src="/logo-forest-green.png" alt="Feelm Tales" fill priority className="object-contain object-left" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative" onMouseEnter={() => setActiveSubmenu(link.label)} onMouseLeave={() => setActiveSubmenu(null)}>
                {link.clickable ? (
                  <Link 
                    href={link.href} 
                    className="text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 transition-all py-2 hover:scale-110 origin-center"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div className="text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 cursor-default py-2 transition-all">
                    {link.label}
                    {link.subItems && <ChevronDown size={12} className={`opacity-40 transition-transform duration-300 ${activeSubmenu === link.label ? "rotate-180" : ""}`} />}
                  </div>
                )}

                <AnimatePresence>
                  {link.subItems && activeSubmenu === link.label && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: 10 }} 
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-[#f2f0e8] border border-black/10 shadow-2xl rounded-2xl min-w-[240px] py-5 px-3 backdrop-blur-xl flex flex-col gap-2">
                        {link.subItems.map((sub, idx) => (
                          <div key={sub.label} className="group/sub">
                            <Link 
                              href={sub.href} 
                              className="block w-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all hover:bg-black/5 text-black text-center origin-center hover:scale-105"
                            >
                              {sub.label}
                            </Link>
                            <div className="overflow-hidden max-h-0 group-hover/sub:max-h-20 transition-all duration-500 ease-in-out">
                              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-4 pb-3 pt-1">
                                {sub.nested.map(nest => (
                                  <span key={nest} className="text-[8px] uppercase tracking-[0.15em] text-stone-400 font-medium cursor-default">
                                    {nest}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {idx !== link.subItems!.length - 1 && <div className="w-12 h-px bg-black/5 mx-auto my-1" />}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu size={28} strokeWidth={1} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-[110] bg-[#f2f0e8] md:hidden flex flex-col">
            <div className="flex justify-between items-center px-6 py-4 border-b border-black/5">
              <div className="relative h-10 w-28">
                <Image src="/logo-forest-green.png" alt="Feelm Tales" fill className="object-contain object-left" />
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-black/5 rounded-full">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pt-10 pb-10 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="border-b border-black/5 pb-4">
                  <div className="flex justify-between items-center">
                    {link.clickable ? (
                      <Link href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-soria italic tracking-tight">
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-3xl font-soria italic tracking-tight opacity-50">{link.label}</span>
                    )}
                    {link.subItems && (
                      <button onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)} className="bg-black/5 p-2 rounded-full">
                        <ChevronDown size={18} className={`transition-transform duration-500 ${activeSubmenu === link.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.subItems && activeSubmenu === link.label && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-6 mt-6 ml-4">
                        {link.subItems.map((sub) => (
                          <div key={sub.label} className="flex flex-col gap-2">
                            <Link href={sub.href} onClick={() => setIsOpen(false)} className="text-xl font-soria text-black italic flex items-center gap-3">
                              <span className="w-4 h-px bg-black" />
                              {sub.label}
                            </Link>
                            <div className="flex flex-wrap gap-4 ml-8">
                              {sub.nested.map(nest => (
                                <span key={nest} className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-bold">
                                  {nest}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <Link href="/connect" onClick={() => setIsOpen(false)} className="mt-4 font-livvic inline-block text-[11px] font-bold tracking-[0.4em] uppercase bg-black text-[#f2f0e8] rounded-full px-10 py-5 w-full text-center active:scale-95 transition-transform">
                Inquire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}