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
      <section className="relative h-[80vh] overflow-hidden">
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

      {/* Overview Section - Clean Layout - UNIFORM SPACING */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
            Overview
          </h2>
          <ul className="space-y-4 text-base text-muted-foreground max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Flagship manufacturing arm in collaboration with Reliance Consumer Products Ltd. (RCPL)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Large-scale beverage production focused on operational efficiency and consistency</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Multiple specialized bottling lines ensuring consistent output across product categories</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stats Section - Labels Above Boxes - FIXED SIZING */}
      <section className="py-20 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">
                LAND AREA
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg h-32 flex items-center justify-center">
                <p className="text-4xl font-bold text-foreground whitespace-nowrap">
                  9 lakh sq. ft.
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">
                INVESTMENT
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg h-32 flex items-center justify-center">
                <p className="text-4xl font-bold text-foreground whitespace-nowrap">
                  ₹450 crore
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">
                EMPLOYMENT
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg h-32 flex items-center justify-center">
                <p className="text-4xl font-bold text-foreground whitespace-nowrap">
                  400+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Strip - Increased Padding */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl font-semibold text-foreground">
            Built for scale. Designed for consistency. Trusted by RCPL.
          </p>
        </div>
      </section>

      {/* Key Capabilities - 3 Horizontal Blocks - EXACT SAME SIZING */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Bottling Infrastructure
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Multiple specialized bottling lines for CSD, PDW, and juice production
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Product Capabilities
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manufacturing across Campa, Independence, and Raskik brands
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Distribution Network
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategic APOB for Assam and adjoining regional markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Strength - Clean Layout - UNIFORM SPACING */}
      <section className="py-20 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
            Operational Strength
          </h2>
          <ul className="space-y-4 text-base text-muted-foreground max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>High-volume operations with streamlined processes across production, storage, and dispatch</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Exclusive focus on RCPL products ensuring brand alignment and operational excellence</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Substantial land infrastructure and capital investment supporting scalable growth</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Manufacturing Excellence - Clean Layout - UNIFORM SPACING */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
            Manufacturing Excellence
          </h2>
          <ul className="space-y-4 text-base text-muted-foreground max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>State-of-the-art production infrastructure meeting stringent quality standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Advanced automation systems ensuring consistent product output</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Quality control protocols maintaining operational reliability</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
