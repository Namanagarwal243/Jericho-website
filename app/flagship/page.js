'use client'

import { useState, useEffect } from 'react'

export default function FlagshipPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, label: 'Manufacturing Facility' },
    { id: 2, label: 'Production Excellence' },
    { id: 3, label: 'Quality Standards' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section with Auto-Sliding Background */}
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Jericho Foods and Beverages LLP
            </h1>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-primary w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Full Content Section */}
      <section className="py-24 md:py-32 bg-card px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">
                Overview
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jericho Foods and Beverages LLP stands as our flagship operation, representing decades of expertise in food and beverage manufacturing. With state-of-the-art production facilities and a commitment to quality, we serve both domestic and international markets.
                </p>
                <p>
                  Our operations encompass the entire value chain from sourcing premium raw materials to final product delivery, ensuring consistency and excellence at every stage.
                </p>
              </div>
            </div>

            {/* Manufacturing Excellence */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">
                Manufacturing Excellence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our manufacturing infrastructure spans multiple facilities equipped with advanced automation and quality control systems. We maintain certifications from leading international food safety and quality organizations.
                </p>
                <p>
                  Continuous investment in technology and process optimization enables us to maintain competitive advantages while adhering to the strictest quality standards.
                </p>
              </div>
            </div>

            {/* Market Presence */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">
                Market Presence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With an extensive distribution network and strong partnerships, Jericho Foods and Beverages serves diverse customer segments including retail, institutional, and export markets.
                </p>
                <p>
                  Our product portfolio continues to evolve based on market insights and consumer preferences, positioning us for sustained growth in the competitive food and beverage sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}