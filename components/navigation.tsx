"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Mencegah scroll saat menu mobile buka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#f2f0e8]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-serif tracking-tighter flex items-center gap-2"
            >
              <span className="font-bold">LILLIAN</span>
              <span className="italic font-light text-stone-400">&</span>
              <span className="font-bold">OSCAR</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold hover:italic transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="text-[10px] uppercase tracking-[0.3em] border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all"
              >
                Inquire
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-[110] relative p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-[#f2f0e8] flex flex-col justify-center items-center p-10 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif italic hover:text-stone-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-[0.4em] uppercase border border-black rounded-full px-12 py-5"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute bottom-10 text-[10px] tracking-[0.5em] uppercase opacity-30">
              Est. 2026 — Photography
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
