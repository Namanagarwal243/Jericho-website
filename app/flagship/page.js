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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              Jericho Foods and Beverages LLP
            </h1>
          </div>
        </div>
      </section>

      {/* Headline Section */}
      <section className="py-20 md:py-24 bg-card px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Scalable Beverage Manufacturing in Strategic Collaboration with RCPL
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Jericho Foods and Beverages LLP is the flagship manufacturing arm of the group, operating in collaboration with Reliance Consumer Products Ltd. (RCPL). The facility is designed for large-scale beverage production with a focus on operational efficiency, consistency, and supply reliability.
          </p>
        </div>
      </section>

      {/* Infrastructure & Scale Section */}
      <section className="py-20 md:py-24 bg-background px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Infrastructure & Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-background p-12 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Land Area</h3>
              <p className="text-3xl md:text-4xl font-bold">+ 9 lakh sq. ft.</p>
            </div>
            <div className="bg-white text-background p-12 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Investment</h3>
              <p className="text-3xl md:text-4xl font-bold">+ ₹450 crore</p>
            </div>
            <div className="bg-white text-background p-12 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Employment</h3>
              <p className="text-3xl md:text-4xl font-bold">+ 400+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 md:py-32 bg-card px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Manufacturing Excellence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jericho Foods and Beverages LLP operates as a dedicated beverage manufacturing facility in collaboration with Reliance Consumer Products Ltd. (RCPL). The plant is structured to support large-scale production through multiple specialized bottling lines, ensuring consistent output across product categories.
                </p>
                <p>
                  The facility includes two carbonated soft drink (CSD) bottling lines, manufacturing products such as Campa Cola, Campa Orange, Campa Lemon, Power-Up, and Berry Kick. In addition, a packaged drinking water (PDW) line is dedicated to the production of the Independence brand, while a separate hot-fill line is utilized for juice manufacturing under the Raskik brand.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Operational Infrastructure
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Built on substantial land infrastructure and capital investment, the plant is equipped to handle high-volume operations with streamlined processes across production, storage, and dispatch. The facility operates exclusively for RCPL products, ensuring focused execution and alignment with brand standards.
                </p>
                <p>
                  The site also serves as an Additional Place of Business (APOB), supporting the distribution of RCPL products across Assam and adjoining regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
