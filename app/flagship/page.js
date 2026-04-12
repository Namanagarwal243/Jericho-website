'use client'

import { useState, useEffect } from 'react'

export default function FlagshipPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/qn93mjnu_DSC07259.JPG' },
    { id: 2, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/zpie463e_DJI_0508.JPG' },
    { id: 3, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/1kjlmge9_DJI_0500.JPG' },
    { id: 4, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/q7xffo8q_DJI_0477.JPG' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="w-full">
      {/* Hero Section with Real Image Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Jericho Foods and Beverages LLP
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section - MOVED UP */}
      <section className="py-24 md:py-28 bg-white px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Overview
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Jericho Foods and Beverages LLP is the flagship manufacturing arm of the group, operating in collaboration with Reliance Consumer Products Ltd. (RCPL).
            </p>
            <p>
              The facility is designed for large-scale beverage production with a focus on operational efficiency, consistency, and supply reliability.
            </p>
            <p>
              The plant is structured to support large-scale production through multiple specialized bottling lines, ensuring consistent output across product categories.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - 3 White Cards */}
      <section className="py-24 md:py-28 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-lg">
              <p className="text-5xl font-bold text-foreground mb-4">
                9 lakh sq. ft.
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                LAND AREA
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-lg">
              <p className="text-5xl font-bold text-foreground mb-4">
                ₹450 crore
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                INVESTMENT
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-lg">
              <p className="text-5xl font-bold text-foreground mb-4">
                400+
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                EMPLOYMENT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Strength Section - NEW */}
      <section className="py-24 md:py-28 bg-white px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
            Operational Strength
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Built on substantial land infrastructure and capital investment, the plant is equipped to handle high-volume operations with streamlined processes across production, storage, and dispatch.
            </p>
            <p>
              The facility operates exclusively for RCPL products, ensuring focused execution and alignment with brand standards while maintaining operational excellence across all production lines.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-24 md:py-28 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
            Manufacturing Excellence
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The facility is engineered for precision manufacturing with state-of-the-art production infrastructure designed to meet stringent quality standards and production efficiency requirements.
            </p>
            <p>
              Advanced automation systems and quality control protocols ensure consistent product output while maintaining operational reliability across all manufacturing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Product Capabilities Section */}
      <section className="py-24 md:py-28 bg-white px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
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
      <section className="py-24 md:py-28 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
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
