'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const businesses = [
    { name: 'Jericho Foods and Beverages', industry: 'Beverage Manufacturing', href: '/flagship' },
    { name: 'Jerichem Pvt Ltd', industry: 'Detergent Manufacturing', href: '/businesses' },
    { name: 'Jericho Chemicals LLP', industry: 'Warehousing', href: '/businesses' },
    { name: 'Jericho Distributor', industry: 'Logistics and Distribution', href: '/businesses' },
    { name: 'Azure Hospitality', industry: 'Hospitality', href: '/businesses' },
    { name: 'Amaze Hospitality', industry: 'Hospitality', href: '/businesses' },
    { name: 'SR Associates', industry: 'Consulting', href: '/businesses' },
    { name: 'Jericho Wines', industry: 'Wine Retail', href: '/businesses' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section - Full Width Image Slider */}
      <HeroSlider />

      {/* Company Overview Section */}
      <section className="py-32 md:py-40 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-foreground">
            Company Overview
          </h2>
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl font-semibold text-foreground leading-snug">
              Jericho Group — A Diversified Business Collective
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jericho Group operates across manufacturing, distribution, hospitality, retail, and consulting, built on strong operational foundations and long-term partnerships. The group focuses on scalable, execution-driven growth while adapting to evolving market dynamics across sectors.
            </p>
            <ul className="space-y-6 text-lg text-muted-foreground mt-12">
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1 text-2xl">•</span>
                <span className="leading-relaxed">Multi-sector presence with strong regional expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1 text-2xl">•</span>
                <span className="leading-relaxed">Execution-led approach with scalable operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1 text-2xl">•</span>
                <span className="leading-relaxed">Backed by strategic partnerships and long-term vision</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-32 md:py-40 bg-card px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-foreground text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Execution-driven</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Focused on efficient operations and timely delivery
              </p>
            </div>
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Scalable operations</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built to expand across sectors and markets
              </p>
            </div>
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Long-term partnerships</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strong emphasis on reliability and continuity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="py-32 md:py-40 bg-background px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-foreground text-center">
            Our Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businesses.map((business, index) => (
              <Link
                key={index}
                href={business.href}
                className="group bg-card rounded-lg p-10 flex flex-col items-center justify-center text-center min-h-[220px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:bg-secondary/50 cursor-pointer border border-border/50 hover:border-primary/50"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {business.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {business.industry}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, label: 'Industrial Excellence' },
    { id: 2, label: 'Manufacturing Facility' },
    { id: 3, label: 'Operational Quality' },
    { id: 4, label: 'Business Innovation' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
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
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
    </section>
  )
}