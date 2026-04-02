"use client";

import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F2F1EB] text-black border-t border-black/5 overflow-hidden font-sans">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* --- KOLOM KIRI (70% - Navigasi, Grid, Subscribe, Social) --- */}
        <div className="w-full md:w-[70%] p-8 md:p-16 flex flex-col justify-between">
          {/* Menu Navigasi (Sejajar Atas, Renggang) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-20 items-start">
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-[#B5A48B] font-bold">
                Main Pages
              </h4>
              <ul className="space-y-3 text-[12px] uppercase tracking-widest font-medium">
                <li>
                  <Link href="/" className="hover:italic">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:italic">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/investment" className="hover:italic">
                    Investment
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:italic">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/inquire" className="hover:italic">
                    Inquire
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-[#B5A48B] font-bold">
                Bonus Pages
              </h4>
              <ul className="space-y-3 text-[12px] uppercase tracking-widest font-medium">
                <li>
                  <Link href="#" className="hover:italic">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:italic">
                    Instagram Links
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:italic">
                    Coming Soon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:italic text-[10px]">
                    404 Not Found
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-[#B5A48B] font-bold">
                Blog Pages
              </h4>
              <ul className="space-y-3 text-[12px] uppercase tracking-widest font-medium">
                <li>
                  <Link href="#" className="hover:italic">
                    Post List
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:italic">
                    Category
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:italic">
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Grid Foto Kecil (Tengah, Jarak Rapat) */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-3 mb-24 max-w-4xl">
            <div className="aspect-square grayscale overflow-hidden group">
              <img
                src="https://picsum.photos/id/64/400/400"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="feed"
              />
            </div>
            <div className="aspect-square overflow-hidden group">
              <img
                src="https://picsum.photos/id/102/400/400"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="feed"
              />
            </div>
            <div className="aspect-square grayscale overflow-hidden group">
              <img
                src="https://picsum.photos/id/103/400/400"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="feed"
              />
            </div>
            <div className="aspect-square bg-black/5 opacity-20"></div>
          </div>

          {/* Social Media & Subscribe Button (Bawah, Sejajar) */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-10 mt-auto">
            <div className="flex flex-col gap-5 w-full md:w-auto">
              <h3 className="font-serif italic text-6xl lowercase leading-none tracking-tight">
                follow us
              </h3>
              <div className="flex gap-6 items-center">
                <Link href="#" className="hover:opacity-50">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="hover:opacity-50">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.036 2.612-.012 3.91-.01 1.58.143 3.13.404 4.59 1.045 1.98.87 3.45 2.37 4.08 4.41.48 1.56.74 3.19.89 4.83.02 1.25.01 2.5 0 3.75-.15 1.64-.41 3.27-.89 4.83-.63 2.04-2.1 3.54-4.08 4.41-1.46.64-3.01.9-4.59 1.04-1.3.01-2.6.03-3.91 0-1.58-.14-3.13-.4-4.59-1.04-1.98-.87-3.45-2.37-4.08-4.41-.48-1.56-.74-3.19-.89-4.83-.02-1.25-.01-2.5 0-3.75.15-1.64.41-3.27.89-4.83.63-2.04 2.1-3.54 4.08-4.41 1.46-.64 3.01-.9 4.59-1.04.43-.04.87-.04 1.3-.01z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-50">
                  <Youtube size={24} />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-auto text-center md:text-right">
              <button className="w-full md:w-[260px] py-4 rounded-full border border-black uppercase text-[12px] tracking-[0.4em] font-bold hover:bg-black hover:text-white transition-all duration-500 bg-transparent text-black">
                Subscribe
              </button>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold">
                Momenku Studio © 2026
              </p>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN (30% - Foto Portrait Ramping, Full Height) --- */}
        <div className="w-full md:w-[30%] h-screen md:h-auto border-l border-black/5">
          <img
            src="https://picsum.photos/id/64/600/1000"
            className="w-full h-full object-cover grayscale"
            alt="Portrait"
          />
        </div>
      </div>
    </footer>
  );
}
