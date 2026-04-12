'use client'

import { useState, useEffect } from 'react'

export default function FlagshipPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, label: 'Beverage Manufacturing Excellence' },
    { id: 2, label: 'Quality Production Standards' },
    { id: 3, label: 'Modern Facilities' },
    { id: 4, label: 'Distribution Network' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-secondary flex items-center justify-center transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-muted-foreground text-sm">{slide.label}</span>
            </div>
          ))}
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              Jericho Foods and Beverages LLP
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 bg-card px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-16">
            {/* Section 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Manufacturing Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Jericho Foods and Beverages operates state-of-the-art beverage manufacturing facilities designed to meet the highest industry standards. Our production infrastructure combines modern technology with rigorous quality control processes.
                </p>
              </div>
              <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20">
                <span className="text-muted-foreground text-sm">Manufacturing Facility</span>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20 order-2 lg:order-1">
                <span className="text-muted-foreground text-sm">Production Process</span>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Quality Standards
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We maintain comprehensive quality assurance protocols throughout the production cycle, from raw material sourcing to final packaging. Our commitment to excellence ensures consistent product quality and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Market Presence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through strategic distribution partnerships and efficient logistics networks, we serve diverse market segments across multiple regions. Our scalable operations enable us to meet evolving customer demands while maintaining operational efficiency.
                </p>
              </div>
              <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20">
                <span className="text-muted-foreground text-sm">Distribution Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}