'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-muted/30" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`relative ${isVisible ? 'scroll-slide-up visible' : 'scroll-slide-up'}`}>
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=600&fit=crop"
                alt="Photography Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className={`${isVisible ? 'scroll-slide-up visible' : 'scroll-slide-up'}`} style={{ transitionDelay: isVisible ? '0.1s' : '0s' }}>
            <p className="text-sm tracking-[0.2em] text-muted-foreground mb-6 uppercase">
              Our Story
            </p>
            <h2 className="text-4xl font-light tracking-tight mb-6">
              Crafting Timeless
              <br />
              <span className="text-accent">Memories</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in luxury wedding and portrait photography, we&apos;ve had the privilege of capturing the most intimate and beautiful moments of our clients&apos; lives.
              </p>

              <p>
                Our approach is rooted in authenticity and elegance. We believe the best photographs come from understanding your unique story and telling it with artistic vision and technical excellence.
              </p>

              <p>
                Every session is a collaboration. We work closely with you to create images that not only look stunning but also feel deeply personal and meaningful.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className={isVisible ? 'scroll-scale visible' : 'scroll-scale'} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
                <p className="text-3xl font-light mb-2">500+</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase">Weddings</p>
              </div>
              <div className={isVisible ? 'scroll-scale visible' : 'scroll-scale'} style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}>
                <p className="text-3xl font-light mb-2">15+</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase">Years</p>
              </div>
              <div className={isVisible ? 'scroll-scale visible' : 'scroll-scale'} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
                <p className="text-3xl font-light mb-2">98%</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase">Satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
