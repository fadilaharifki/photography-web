"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    {
      label: "Home",
      href: "/",
      subItems: [
        { label: "Backstory", href: "/backstory" },
        { label: "The Beginning", href: "/the-beginning" },
        { label: "The Union", href: "/the-union" },
        { label: "The Legacy", href: "/the-legacy" },
      ],
    },
    { label: "Backstory", href: "/backstory" },
    {
      label: "Works",
      href: "#",
      subItems: [
        {
          label: "The Beginning",
          href: "#",
          nested: [
            { label: "Prewedding", href: "/the-beginning/prewedding" },
            { label: "Engagement", href: "/the-beginning/engagement" },
          ],
        },
        {
          label: "The Union",
          href: "#",
          nested: [
            { label: "Wedding", href: "/the-union/wedding" },
          ],
        },
        {
          label: "The Legacy",
          href: "#",
          nested: [
            { label: "Maternity", href: "/the-legacy/maternity" },
            { label: "Family", href: "/the-legacy/family" },
          ],
        },
      ],
    },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#f2f0e8]/80 backdrop-blur-md border-b border-black/5 font-livvic">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-12 w-32 md:h-14 md:w-40 transition-opacity hover:opacity-80">
              <Image
                src="/logo-forest-green.png"
                alt="Feelm Tales"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isHome = link.label === "Home";
                const hasSub = link.subItems && link.subItems.length > 0;

                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setActiveSubmenu(link.label)}
                    onMouseLeave={() => {
                      setActiveSubmenu(null);
                      setActiveNestedMenu(null);
                    }}
                  >
                    {isHome || !hasSub ? (
                      <Link
                        href={link.href}
                        className="text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 hover:italic transition-all"
                      >
                        {link.label}
                        {hasSub && <ChevronDown size={12} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />}
                      </Link>
                    ) : (
                      <span className="cursor-default text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 hover:italic transition-all">
                        {link.label}
                        <ChevronDown size={12} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />
                      </span>
                    )}

                    <AnimatePresence>
                      {hasSub && activeSubmenu === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full -left-5 pt-4"
                        >
                          <div className="bg-[#f2f0e8] border border-black/10 shadow-2xl rounded-2xl min-w-64 py-4 px-2 backdrop-blur-xl flex flex-col gap-1">
                            {link.subItems?.map((sub) => {
                              const hasNested = 'nested' in sub && sub.nested.length > 0;
                              
                              return (
                                <div
                                  key={sub.label}
                                  className="relative"
                                  onMouseEnter={() => hasNested && setActiveNestedMenu(sub.label)}
                                >
                                  {!hasNested ? (
                                    <Link
                                      href={sub.href}
                                      className="flex items-center justify-between px-6 py-3 text-[10px] font-medium uppercase tracking-[0.15em] hover:bg-black/5 hover:italic rounded-xl transition-all"
                                    >
                                      {sub.label}
                                    </Link>
                                  ) : (
                                    <span className="flex items-center justify-between px-6 py-3 text-[10px] font-medium uppercase tracking-[0.15em] hover:bg-black/5 hover:italic rounded-xl transition-all cursor-default">
                                      {sub.label}
                                      <ChevronRight size={10} />
                                    </span>
                                  )}

                                  {hasNested && activeNestedMenu === sub.label && (
                                    <div className="absolute left-full top-0 ml-2 bg-[#f2f0e8] border border-black/10 shadow-2xl rounded-2xl min-w-48 py-3 px-2 flex flex-col gap-1">
                                      {sub.nested.map((nest) => (
                                        <Link
                                          key={nest.label}
                                          href={nest.href}
                                          className="px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.15em] hover:bg-black/5 hover:italic rounded-lg transition-all"
                                        >
                                          {nest.label}
                                        </Link>
                                      ))}
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

              <Link
                href="#contact"
                className="text-[10px] font-bold uppercase tracking-[0.3em] border-2 border-black rounded-full px-8 py-2.5 hover:bg-black hover:text-[#f2f0e8] transition-all duration-300"
              >
                Inquire
              </Link>
            </div>

            <button onClick={() => setIsOpen(true)} className="md:hidden p-2">
              <Menu size={28} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
                <Image src="/logo-forest-green.png" alt="Logo" fill className="object-contain object-left" />
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-black/5 rounded-full">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pt-10 pb-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => {
                  const isHome = link.label === "Home";
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
                        {isHome || !hasSub ? (
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
                              const hasNested = 'nested' in sub && sub.nested.length > 0;

                              return (
                                <div key={sub.label} className="flex flex-col gap-2">
                                  {!hasNested ? (
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
                                      {sub.nested.map((nest) => (
                                        <Link
                                          key={nest.label}
                                          href={nest.href}
                                          onClick={() => setIsOpen(false)}
                                          className="text-sm font-livvic uppercase tracking-widest text-stone-500 hover:text-black"
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