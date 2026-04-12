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

      {/* Company Overview Section - WHITE BACKGROUND */}
      <section className="py-32 md:py-40 bg-white px-6">
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

      {/* Our Approach Section - LIGHT BACKGROUND */}
      <section className="py-32 md:py-40 bg-secondary/50 px-6">
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

      {/* Our Businesses Section - WHITE BACKGROUND WITH WHITE CARDS */}
      <section className="py-32 md:py-40 bg-white px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-foreground text-center">
            Our Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businesses.map((business, index) => (
              <Link
                key={index}
                href={business.href}
                className="group bg-white rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[220px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-border shadow-md"
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
    { id: 1, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/a6m7ikni_DJI_0466.JPG' },
    { id: 2, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/zm39y1iz_DJI_0477.JPG' },
    { id: 3, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/e9dedkou_DJI_0500.JPG' },
    { id: 4, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/7s0gqyvt_DJI_0508.jpg' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Slider */}
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
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Centered Text */}
      <div className="relative z-20 h-full flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-lg md:text-xl text-white/80 mb-4 tracking-wide">
            Jericho Group
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            A diversified business collective
          </h1>
        </div>
      </div>
    </section>
  )
}