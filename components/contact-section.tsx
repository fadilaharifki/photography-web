'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'wedding',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', eventType: 'wedding', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'scroll-slide-up visible' : 'scroll-slide-up'}`}>
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Let&apos;s Create Something
            <br />
            <span className="text-accent">Beautiful Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to book your session? We&apos;d love to hear about your vision and discuss how we can capture your special moments.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={isVisible ? 'scroll-slide-up visible' : 'scroll-slide-up'}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm tracking-wider mb-2 uppercase">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 focus-visible:ring-0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm tracking-wider mb-2 uppercase">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 focus-visible:ring-0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm tracking-wider mb-2 uppercase">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border rounded-none px-0 py-2 text-foreground focus:border-accent focus:ring-0 focus-visible:ring-0 appearance-none cursor-pointer"
                >
                  <option value="wedding" className="bg-background">Wedding</option>
                  <option value="portrait" className="bg-background">Portrait Session</option>
                  <option value="engagement" className="bg-background">Engagement</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-wider mb-2 uppercase">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vision..."
                  className="bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 focus-visible:ring-0 resize-none min-h-[100px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-opacity-90 transition-all duration-300 text-sm tracking-wider mt-8"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'SEND MESSAGE'}
              </Button>

              {submitted && (
                <p className="text-center text-accent text-sm">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'scroll-slide-up visible' : 'scroll-slide-up'}`} style={{ transitionDelay: isVisible ? '0.1s' : '0s' }}>
            {/* Email */}
            <div className={isVisible ? 'scroll-scale visible' : 'scroll-scale'} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light mb-2">Email</h3>
                  <a
                    href="mailto:hello@lillianandoscar.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@lillianandoscar.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className={isVisible ? 'scroll-scale visible' : 'scroll-scale'} style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}>
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className={isVisible ? 'scroll-scale visible' : 'scroll-scale'} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Available for travel worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className={`pt-4 border-t border-border ${isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}`} style={{ transitionDelay: isVisible ? '0.5s' : '0s' }}>
              <h3 className="text-lg font-light mb-4">Working Hours</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
