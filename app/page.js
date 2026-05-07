'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const businesses = [
    { name: 'Jericho Foods and Beverages', industry: 'Beverage Manufacturing', href: '/flagship' },
    { name: 'Jerichem Pvt Ltd', industry: 'Detergent Manufacturing', href: '/businesses' },
    { name: 'Jericho Chemicals LLP', industry: 'Warehousing', href: '/businesses' },
    { name: 'Jericho Distributor', industry: 'Logistics and Distribution', href: '/businesses' },
    { name: 'Allure Hospitality', industry: 'Hospitality', href: '/businesses' },
    { name: 'Amaze Hospitality', industry: 'Hospitality', href: '/businesses' },
    { name: 'SR Associates', industry: 'Consulting', href: '/businesses' },
    { name: 'Jericho Wines', industry: 'Wine Retail', href: '/businesses' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section - Full Width Image Slider */}
      <HeroSlider />

      {/* Company Overview Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-foreground text-center">
            Company Overview
          </h2>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground leading-snug">
              Jericho Group — A Diversified Business Collective
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Jericho Group, with over 30 years of industry experience, is one of the most prominent business collectives in North-East India, operating across manufacturing, distribution, hospitality, retail, and consulting. Built on strong operational foundations and long-term partnerships, the group is driven by scalable, execution-led growth while continuously adapting to evolving market dynamics across sectors.
            </p>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-lg text-muted-foreground mt-8 sm:mt-10 lg:mt-12">
              <li className="flex items-start">
                <span className="text-primary mr-3 sm:mr-4 mt-1 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="leading-relaxed">Multi-sector presence with strong regional expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 sm:mr-4 mt-1 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="leading-relaxed">Execution-led approach with scalable operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 sm:mr-4 mt-1 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="leading-relaxed">Backed by strategic partnerships and long-term vision</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-secondary/50 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 sm:mb-16 lg:mb-20 text-foreground text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Execution-driven</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Focused on efficient operations and timely delivery
              </p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Scalable operations</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Built to expand across sectors and markets
              </p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Long-term partnerships</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Strong emphasis on reliability and continuity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses Section - MOBILE RESPONSIVE */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 text-foreground text-center">
            Our Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businesses.map((business, index) => (
              <Link
                key={index}
                href={business.href}
                className="group bg-white rounded-xl p-10 flex flex-col items-center justify-center text-center h-[240px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-border shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
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

      {/* Work With Us Section - MOBILE RESPONSIVE */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-secondary/30 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 text-foreground text-center">
            Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Careers at Jericho Card */}
            <Link
              href="/contact"
              className="group bg-white rounded-xl p-10 flex flex-col items-center justify-center text-center h-[280px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-border shadow-md"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                Careers at Jericho
              </h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Build your career with a group driven by execution and scale.
              </p>
              <span className="text-primary font-semibold underline underline-offset-4 group-hover:text-primary/80 transition-colors">
                View Opportunities
              </span>
            </Link>

            {/* Partner With Us Card */}
            <Link
              href="/contact"
              className="group bg-white rounded-xl p-10 flex flex-col items-center justify-center text-center h-[280px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-border shadow-md"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                Partner With Us
              </h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Collaborate, distribute, or expand with Jericho across sectors.
              </p>
              <span className="text-primary font-semibold underline underline-offset-4 group-hover:text-primary/80 transition-colors">
                Start a Conversation
              </span>
            </Link>
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
    { id: 5, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/hw5myhd9_DSC07259.JPG' },
    { id: 6, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/2o1tiy4o_DSC07325.JPG' },
    { id: 7, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/z221dfm3_Jerichem%201.png' },
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
      
      {/* Centered Text - MOBILE RESPONSIVE */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-3 sm:mb-4 tracking-wide">
            Jericho Group
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight">
            A diversified business collective
          </h1>
        </div>
      </div>
    </section>
  )
}