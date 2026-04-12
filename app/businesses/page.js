'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function BusinessesPage() {
  const [expandedId, setExpandedId] = useState(null)

  const businesses = [
    {
      id: 1,
      name: 'Jerichem Pvt Ltd',
      industry: 'Detergent Manufacturing',
      overview: 'Specialized detergent manufacturing with focus on quality production standards',
      description: 'Jerichem Pvt Ltd operates modern detergent manufacturing facilities with comprehensive production capabilities. Our operations focus on delivering consistent product quality through controlled manufacturing processes and quality assurance protocols. We serve both retail and institutional market segments with scalable production capacity.',
    },
    {
      id: 2,
      name: 'Jericho Chemicals LLP',
      industry: 'Warehousing',
      overview: 'Professional warehousing solutions with strategic facility locations',
      description: 'Jericho Chemicals LLP provides comprehensive warehousing services with strategically located facilities designed to handle diverse storage requirements. Our infrastructure includes climate-controlled environments, advanced inventory management systems, and efficient material handling capabilities. We ensure secure storage and timely distribution for our clients.',
    },
    {
      id: 3,
      name: 'Jericho Distributor',
      industry: 'Logistics and Distribution',
      overview: 'Integrated logistics and distribution services across regional networks',
      description: 'Jericho Distributor manages comprehensive logistics and distribution operations serving multiple product categories. Our network combines transportation assets, warehousing facilities, and distribution management systems to ensure efficient supply chain performance. We provide end-to-end logistics solutions from warehousing to final delivery.',
    },
    {
      id: 4,
      name: 'Azure Hospitality',
      industry: 'Hospitality',
      overview: 'Quality hospitality services with focus on guest experience',
      description: 'Azure Hospitality delivers professional hospitality services through well-maintained properties and trained staff. Our approach combines comfortable accommodations with attentive service to meet the needs of business and leisure travelers. We maintain consistent service standards across all operations.',
    },
    {
      id: 5,
      name: 'Amaze Hospitality',
      industry: 'Hospitality',
      overview: 'Event management and hospitality services for diverse occasions',
      description: 'Amaze Hospitality specializes in event management and hospitality services, handling everything from planning to execution. Our team coordinates venue arrangements, catering services, and guest management for corporate and social events. We work closely with clients to deliver well-organized events that meet their specific requirements.',
    },
    {
      id: 6,
      name: 'SR Associates',
      industry: 'Consulting',
      overview: 'Business consulting services focused on practical solutions',
      description: 'SR Associates provides business consulting services to organizations seeking operational improvements and strategic guidance. Our consultants bring industry experience and analytical capabilities to address specific business challenges. We work collaboratively with client teams to develop practical recommendations and support implementation.',
    },
    {
      id: 7,
      name: 'Jericho Wines',
      industry: 'Wine Retail',
      overview: 'Premium wine retail with curated selection and expert guidance',
      description: 'Jericho Wines operates as a specialized wine retailer offering carefully selected wines from established producers. Our retail approach combines product knowledge with customer service to assist wine enthusiasts and casual buyers. We maintain proper storage conditions and provide guidance on wine selection and food pairing.',
    },
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Other Businesses
          </h1>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <div
                key={business.id}
                className={`transition-all duration-500 ${
                  expandedId === business.id
                    ? 'fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80'
                    : expandedId !== null
                    ? 'opacity-20 pointer-events-none'
                    : ''
                }`}
              >
                {expandedId === business.id ? (
                  /* Expanded Card */
                  <div className="bg-card rounded-lg p-10 max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
                    <button
                      onClick={() => toggleExpand(business.id)}
                      className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close"
                    >
                      <X size={24} />
                    </button>
                    <h2 className="text-3xl font-bold text-foreground mb-2 pr-12">
                      {business.name}
                    </h2>
                    <p className="text-sm text-primary font-medium mb-6">
                      {business.industry}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {business.description}
                    </p>
                    <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20">
                      <span className="text-muted-foreground text-sm">{business.name}</span>
                    </div>
                  </div>
                ) : (
                  /* Normal Card */
                  <div className="bg-secondary rounded-lg p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {business.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">
                        {business.industry}
                      </p>
                      <p className="text-muted-foreground mb-6 line-clamp-2">
                        {business.overview}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleExpand(business.id)}
                      className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors text-left"
                    >
                      Learn More
                    </button>
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