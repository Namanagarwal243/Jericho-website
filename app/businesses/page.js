'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function BusinessesPage() {
  const [expandedId, setExpandedId] = useState(null)

  const businesses = [
    {
      id: 1,
      name: 'Jericho Logistics',
      industry: 'Supply Chain Management',
      overview: 'Comprehensive logistics solutions connecting global markets with precision and reliability.',
      detailedDescription: 'Jericho Logistics operates a sophisticated network of distribution centers, transportation assets, and technology platforms to deliver end-to-end supply chain solutions. With real-time tracking, predictive analytics, and dedicated customer support, we ensure your goods reach their destination on time, every time. Our services include freight forwarding, warehousing, customs brokerage, and last-mile delivery. We leverage advanced route optimization and inventory management systems to maximize efficiency and minimize costs.',
      hasImage: true,
    },
    {
      id: 2,
      name: 'Jericho Energy',
      industry: 'Renewable Energy Solutions',
      overview: 'Pioneering sustainable energy solutions for a cleaner tomorrow.',
      detailedDescription: 'Jericho Energy is at the forefront of the renewable energy revolution. We specialize in solar, wind, and hybrid energy systems, providing turnkey solutions from feasibility studies to long-term operations and maintenance. Our engineering team brings decades of experience in grid integration, energy storage, and smart grid technologies. We work with commercial, industrial, and utility-scale clients to develop customized renewable energy solutions that reduce costs, enhance energy security, and meet sustainability goals.',
      hasImage: true,
    },
    {
      id: 3,
      name: 'Jericho Materials',
      industry: 'Advanced Materials & Composites',
      overview: 'Developing next-generation materials that push the boundaries of performance.',
      detailedDescription: 'Jericho Materials operates cutting-edge research and production facilities dedicated to advanced materials science. Our expertise spans carbon fiber composites, ceramic matrix composites, high-performance polymers, and specialty alloys. We serve demanding industries where material performance is critical – aerospace, defense, automotive, and medical devices. Our ISO-certified laboratories conduct rigorous testing and validation to ensure every batch meets exacting specifications.',
      hasImage: false,
    },
    {
      id: 4,
      name: 'Jericho Technologies',
      industry: 'Industrial Automation',
      overview: 'Transforming manufacturing through intelligent automation.',
      detailedDescription: 'Jericho Technologies delivers comprehensive industrial automation solutions that increase productivity, improve quality, and enhance safety. Our offerings include robotic systems, machine vision, programmable logic controllers, supervisory control and data acquisition (SCADA) systems, and industrial IoT platforms. We provide end-to-end services from process analysis and system design to installation, commissioning, and ongoing support.',
      hasImage: true,
    },
    {
      id: 5,
      name: 'Jericho Infrastructure',
      industry: 'Construction & Development',
      overview: 'Building tomorrow\'s infrastructure with precision and sustainability.',
      detailedDescription: 'Jericho Infrastructure manages complex construction and infrastructure development projects across commercial, industrial, and public sectors. Our capabilities include project management, civil engineering, structural design, and general contracting. We have successfully delivered projects ranging from manufacturing facilities and logistics centers to transportation infrastructure and mixed-use developments. Our integrated approach combines experienced project management, value engineering, and sustainable construction practices.',
      hasImage: true,
    },
    {
      id: 6,
      name: 'Jericho Marine Systems',
      industry: 'Maritime Engineering',
      overview: 'Advanced maritime engineering solutions for modern shipping operations.',
      detailedDescription: 'Jericho Marine Systems provides specialized engineering solutions for the maritime industry. Our services include vessel design and modification, marine propulsion systems, offshore platform engineering, and port infrastructure development. We work with shipping companies, offshore energy operators, and port authorities to deliver solutions that enhance operational efficiency, safety, and environmental performance. Our engineering team brings deep expertise in hydrodynamics, structural analysis, and marine systems integration.',
      hasImage: false,
    },
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-card py-24 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-foreground">
            Other Businesses
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            A diverse portfolio of industry-leading businesses united by a commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Businesses List */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            {businesses.map((business) => (
              <div
                key={business.id}
                className={`bg-card border border-border/50 transition-all duration-300 ${
                  expandedId === business.id ? 'shadow-lg' : expandedId !== null ? 'opacity-40' : 'hover:border-primary/60'
                }`}
              >
                {/* Card Header */}
                <div className="p-10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {business.name}
                      </h2>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">
                        {business.industry}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {business.overview}
                  </p>
                  {expandedId !== business.id && (
                    <button
                      onClick={() => toggleExpand(business.id)}
                      className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
                    >
                      Learn more
                    </button>
                  )}
                </div>

                {/* Expanded Content */}
                {expandedId === business.id && (
                  <div className="border-t border-border/50 bg-secondary/20 p-10 relative">
                    <button
                      onClick={() => toggleExpand(business.id)}
                      className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close"
                    >
                      <X size={22} />
                    </button>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pr-10">
                      <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-lg font-semibold text-foreground mb-5">
                          Detailed Overview
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {business.detailedDescription}
                        </p>
                      </div>
                      {business.hasImage && (
                        <div className="lg:col-span-1">
                          <div className="bg-card border border-border/50 aspect-square flex items-center justify-center">
                            <span className="text-sm text-muted-foreground">
                              {business.name}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}