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
  }, [slides.length])

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              Jericho Foods and Beverages LLP
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Scalable Beverage Manufacturing in Strategic Collaboration with RCPL
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - 3 White Cards */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-lg">
              <p className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                + 9 lakh sq. ft.
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Land Area
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-lg">
              <p className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                + ₹450 crore
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Investment
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-lg">
              <p className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                + 400+
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Employment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-32 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Overview
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Jericho Foods and Beverages LLP is the flagship manufacturing arm of the group, operating in collaboration with Reliance Consumer Products Ltd. (RCPL). The facility is designed for large-scale beverage production with a focus on operational efficiency, consistency, and supply reliability.
            </p>
            <p>
              The plant is structured to support large-scale production through multiple specialized bottling lines, ensuring consistent output across product categories.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Manufacturing Excellence
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Jericho Foods and Beverages LLP operates as a dedicated beverage manufacturing facility in collaboration with RCPL. Built on substantial land infrastructure and capital investment, the plant is equipped to handle high-volume operations with streamlined processes across production, storage, and dispatch.
            </p>
            <p>
              The facility operates exclusively for RCPL products, ensuring focused execution and alignment with brand standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Capabilities Section */}
      <section className="py-24 md:py-32 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Product Capabilities
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The facility includes two carbonated soft drink (CSD) bottling lines, manufacturing products such as Campa Cola, Campa Orange, Campa Lemon, Power-Up, and Berry Kick.
            </p>
            <p>
              In addition, a packaged drinking water (PDW) line is dedicated to the production of the Independence brand, while a separate hot-fill line is utilized for juice manufacturing under the Raskik brand.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution & Reach Section */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Distribution & Reach
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The site also serves as an Additional Place of Business (APOB), supporting the distribution of RCPL products across Assam and adjoining regions.
            </p>
            <p>
              Our strategic location and efficient logistics infrastructure enable reliable supply chain management and timely product delivery across designated markets.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
