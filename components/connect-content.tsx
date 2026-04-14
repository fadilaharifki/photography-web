"use client";

import React from "react";

export default function ConnectContent() {
  return (
    <main className="bg-[#f2f0e8] min-h-screen pt-40 pb-32 px-6 md:px-12 font-livvic selection:bg-[#EAB308] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <span className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-8 block">
            Get in touch
          </span>
          <h1 className="text-5xl md:text-[120px] font-soria leading-[0.8] text-black tracking-tighter uppercase">
            Let's Start <br /> <span className="italic ml-[0.1em]">Your Tale</span>.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-20">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-stone-400 mb-6 uppercase font-bold">Inquiries</p>
              <a href="mailto:hello@feelmtales.com" className="text-2xl md:text-4xl font-soria hover:italic transition-all inline-block border-b border-transparent hover:border-black">
                hello@feelmtales.com
              </a>
            </div>
            
            <div>
              <p className="text-[10px] tracking-[0.4em] text-stone-400 mb-6 uppercase font-bold">WhatsApp</p>
              <a href="https://wa.me/yournumber" className="text-2xl md:text-4xl font-soria hover:italic transition-all inline-block border-b border-transparent hover:border-black">
                +62 812 3456 7890
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.4em] text-stone-400 mb-6 uppercase font-bold">Studio</p>
              <p className="text-xs leading-relaxed text-stone-600 max-w-xs uppercase tracking-[0.2em]">
                Jakarta, Indonesia — Available for global travel.
              </p>
            </div>
          </div>

          <div className="bg-white/40 p-8 md:p-12 rounded-[2rem] border border-black/5 backdrop-blur-sm shadow-sm">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3 border-b border-black/10 pb-2 transition-colors focus-within:border-black">
                  <label className="text-[9px] tracking-widest uppercase font-bold text-stone-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent outline-none text-sm py-1 placeholder:text-stone-300 font-medium" 
                    placeholder="Your name" 
                  />
                </div>
                <div className="space-y-3 border-b border-black/10 pb-2 transition-colors focus-within:border-black">
                  <label className="text-[9px] tracking-widest uppercase font-bold text-stone-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent outline-none text-sm py-1 placeholder:text-stone-300 font-medium" 
                    placeholder="Email address" 
                  />
                </div>
              </div>
              <div className="space-y-3 border-b border-black/10 pb-2 transition-colors focus-within:border-black">
                <label className="text-[9px] tracking-widest uppercase font-bold text-stone-400">Service interest</label>
                <select className="w-full bg-transparent outline-none text-sm py-1 appearance-none cursor-pointer font-medium">
                  <option>The Beginning</option>
                  <option>The Union</option>
                  <option>The Legacy</option>
                </select>
              </div>
              <div className="space-y-3 border-b border-black/10 pb-2 transition-colors focus-within:border-black">
                <label className="text-[9px] tracking-widest uppercase font-bold text-stone-400">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent outline-none text-sm py-1 resize-none placeholder:text-stone-300 font-medium" 
                  placeholder="Tell us about your plans" 
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-black text-white text-[10px] font-bold tracking-[0.4em] uppercase rounded-full hover:bg-[#EAB308] hover:text-black transition-all duration-700 active:scale-95"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}