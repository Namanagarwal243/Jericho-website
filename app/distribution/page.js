'use client'

import { useState, useEffect } from 'react'

export default function DistributionPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/1ybja785_Jericho%20Distributor.png' },
  ]

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [slides.length])

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.url}
                alt={`Distribution ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Jericho Distributor
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section - PLACEHOLDER */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-foreground text-center">
            Overview
          </h2>
          <div className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-6">
              [Overview content to be provided]
            </p>
            <p>
              [Additional overview details]
            </p>
          </div>
        </div>
      </section>

      {/* 3 Info Boxes - Brands, Suppliers, Districts */}
      <section className="py-20 md:py-28 bg-secondary/30 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brands Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Brands
              </h3>
              <div className="text-base sm:text-lg text-muted-foreground">
                <p>[Brand details to be provided]</p>
              </div>
            </div>

            {/* Suppliers Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Suppliers
              </h3>
              <div className="text-base sm:text-lg text-muted-foreground">
                <p>[Supplier details to be provided]</p>
              </div>
            </div>

            {/* Districts Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Districts
              </h3>
              <div className="text-base sm:text-lg text-muted-foreground">
                <p>[District details to be provided]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section - PLACEHOLDER */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-foreground text-center">
            [Section Title]
          </h2>
          <div className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              [Content to be provided]
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
