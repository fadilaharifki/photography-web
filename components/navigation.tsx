"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

 const navLinks = [

    { label: "Backstory", href: "/backstory", clickable: true },

    {

      label: "Works",

      href: "#",

      clickable: false,

      subItems: [

        {

          label: "The Beginning",

          href: "/the-beginning",

          clickable: true,

          nested: [

            { label: "Prewedding", href: "/the-beginning/prewedding", clickable: false },

            { label: "Engagement", href: "/the-beginning/engagement", clickable: false },

          ],

        },

        {

          label: "The Union",

          href: "/the-union",

          clickable: true,

          nested: [

            { label: "Wedding", href: "/the-union/wedding", clickable: false },

          ],

        },

        {

          label: "The Legacy",

          href: "/the-legacy",

          clickable: true,

          nested: [

            { label: "Maternity", href: "/the-legacy/maternity", clickable: false },

            { label: "Family", href: "/the-legacy/family", clickable: false },

          ],

        },

      ],

    },

    { label: "Connect", href: "#contact", clickable: true },

  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 font-livvic ${
          isScrolled 
            ? "bg-[#f2f0e8]/10 backdrop-blur-md border-b border-black/5 py-3 md:py-4 shadow-sm" 
            : "bg-[#f2f0e8]/50 backdrop-blur-[2px] py-5 md:py-8 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-12 w-32 md:h-14 md:w-40 transition-opacity hover:opacity-80">
              <Image
                src="/logo-forest-green.png"
                alt="Momenku"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const hasSub = link.subItems && link.subItems.length > 0;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(link.label)}
                    onMouseLeave={() => {
                      setActiveSubmenu(null);
                      setActiveNestedMenu(null);
                    }}
                  >
                    {link.clickable ? (
                      <Link
                        href={link.href}
                        className="text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 font-livvic hover:font-soria transition-all py-2"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div className="text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 font-livvic hover:font-soria transition-all py-2 cursor-default">
                        {link.label}
                        {hasSub && (
                          <ChevronDown 
                            size={12} 
                            className={`opacity-40 transition-transform duration-300 ${activeSubmenu === link.label ? "rotate-180" : ""}`} 
                          />
                        )}
                      </div>
                    )}

                    <AnimatePresence>
                      {hasSub && activeSubmenu === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full right-0 pt-4"
                        >
                          <div className="bg-[#f2f0e8] border border-black/10 shadow-2xl rounded-2xl min-w-[220px] py-4 px-2 backdrop-blur-xl flex flex-col gap-1">
                            {link.subItems?.map((sub) => {
                              const hasNested = sub.nested && sub.nested.length > 0;
                              
                              return (
                                <div
                                  key={sub.label}
                                  className="relative"
                                  onMouseEnter={() => hasNested && setActiveNestedMenu(sub.label)}
                                >
                                  {sub.clickable ? (
                                    <Link
                                      href={sub.href}
                                      className="flex items-center justify-between px-6 py-3 text-[10px] font-medium uppercase tracking-[0.15em] rounded-xl transition-all hover:bg-black/5 hover:font-soria"
                                    >
                                      {sub.label}
                                    </Link>
                                  ) : (
                                    <div className={`flex items-center justify-between px-6 py-3 text-[10px] font-medium uppercase tracking-[0.15em] rounded-xl transition-all cursor-default ${activeNestedMenu === sub.label ? "bg-black/5 font-soria" : "hover:bg-black/5 hover:font-soria"}`}>
                                      {sub.label}
                                      {hasNested && <ChevronLeft size={10} className="mr-1" />}
                                    </div>
                                  )}

                                  {hasNested && activeNestedMenu === sub.label && (
                                    <div 
                                      className="absolute right-full top-0 pr-2"
                                      onMouseLeave={() => setActiveNestedMenu(null)}
                                    >
                                      <div className="bg-[#f2f0e8] border border-black/10 shadow-2xl rounded-2xl min-w-[180px] py-3 px-2 flex flex-col gap-1">
                                        {sub.nested?.map((nest) => {
                                          return (
                                           <>
                                           {
                                            sub.clickable ? (
                                                <Link
                                                  key={nest.label}
                                                  href={nest.href}
                                                  className="px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.15em] hover:bg-black/5 font-livvic hover:font-soria rounded-lg transition-all block"
                                                >
                                                  {nest.label}
                                                </Link>
                                            ) : (
                                              <div
                                                key={nest.label}
                                                className="block px-6 py-2 text-[9px] uppercase tracking-[0.4em] rounded-lg transition-all hover:bg-black/5"
                                              >
                                                {nest.label}
                                              </div>
                                            )
                                           }
                                           </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <button onClick={() => setIsOpen(true)} className="md:hidden p-2">
              <Menu size={28} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#f2f0e8] md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-black/5">
              <div className="relative h-10 w-28">
                <Image src="/logo-forest-green.png" alt="Momenku" fill className="object-contain object-left" />
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-black/5 rounded-full">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pt-10 pb-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => {
                  const hasSub = link.subItems && link.subItems.length > 0;

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-b border-black/5 pb-4"
                    >
                      <div className="flex justify-between items-center">
                        {link.clickable ? (
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-soria italic tracking-tight"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <span className="text-3xl font-soria italic tracking-tight opacity-50">
                            {link.label}
                          </span>
                        )}
                        {hasSub && (
                          <button
                            onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                            className="bg-black/5 p-2 rounded-full"
                          >
                            <ChevronDown size={18} className={`transition-transform duration-500 ${activeSubmenu === link.label ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {hasSub && activeSubmenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-4 mt-6 ml-4"
                          >
                            {link.subItems?.map((sub) => {
                              const hasNested = sub.nested && sub.nested.length > 0;

                              return (
                                <div key={sub.label} className="flex flex-col gap-2">
                                  {sub.clickable ? (
                                    <Link
                                      href={sub.href}
                                      onClick={() => setIsOpen(false)}
                                      className="text-xl font-soria text-black italic flex items-center gap-3"
                                    >
                                      <span className="w-4 h-px bg-black" />
                                      {sub.label}
                                    </Link>
                                  ) : (
                                    <span className="text-xl font-soria text-black italic flex items-center gap-3 opacity-50">
                                      <span className="w-4 h-px bg-black" />
                                      {sub.label}
                                    </span>
                                  )}
                                  
                                  {hasNested && (
                                    <div className="flex flex-col gap-2 ml-8 border-l border-black/10 pl-4">
                                      {sub.nested?.map((nest) => (
                                        <Link
                                          key={nest.label}
                                          href={nest.href}
                                          onClick={() => setIsOpen(false)}
                                          className="text-sm tracking-widest text-stone-500 hover:text-black py-1"
                                        >
                                          {nest.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="font-livvic inline-block text-[11px] font-bold tracking-[0.4em] uppercase bg-black text-[#f2f0e8] rounded-full px-10 py-5 w-full text-center active:scale-95 transition-transform"
                  >
                    Inquire
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}