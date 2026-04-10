'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function BusinessesPage() {
  const [expandedId, setExpandedId] = useState(null)

  const businesses = [
    {
      id: 1,
      name: 'Jerichem Pvt Ltd',
      overview: 'Specialized chemical manufacturing and processing',
      description: 'Jerichem Pvt Ltd operates advanced chemical manufacturing facilities producing specialty chemicals for industrial applications. With a focus on innovation and safety, we serve diverse sectors including pharmaceuticals, agriculture, and industrial processing. Our state-of-the-art laboratories and experienced technical teams enable us to deliver customized chemical solutions meeting the most demanding specifications. We maintain comprehensive quality management systems and environmental compliance protocols across all operations.',
    },
    {
      id: 2,
      name: 'Jericho Chemicals LLP',
      overview: 'Industrial chemical solutions and distribution',
      description: 'Jericho Chemicals LLP provides comprehensive chemical distribution and logistics services, connecting manufacturers with end-users across multiple industries. Our extensive network ensures reliable supply chain management and timely delivery of chemical products. We maintain proper storage facilities, handling equipment, and safety protocols to manage diverse chemical inventories. Our technical support team assists customers with product selection, application guidance, and regulatory compliance requirements.',
    },
    {
      id: 3,
      name: 'Jericho Distributor',
      overview: 'Multi-sector distribution and logistics network',
      description: 'Jericho Distributor manages large-scale distribution operations across multiple product categories and geographic regions. Our integrated logistics platform combines warehousing, transportation, and inventory management capabilities to serve manufacturers and retailers efficiently. With strategically located distribution centers and advanced tracking systems, we ensure optimal supply chain performance. Our distribution network handles diverse product ranges from consumer goods to industrial supplies.',
    },
    {
      id: 4,
      name: 'Azure Hospitality',
      overview: 'Premium hospitality services and experiences',
      description: 'Azure Hospitality delivers exceptional guest experiences through our portfolio of premium hospitality properties and services. We focus on combining modern amenities with personalized service to create memorable stays for both business and leisure travelers. Our properties feature contemporary design, well-appointed accommodations, and comprehensive facilities. Professional staff training and quality service protocols ensure consistent excellence across all touchpoints.',
    },
    {
      id: 5,
      name: 'Amaze Hospitality',
      overview: 'Distinctive hospitality and event management',
      description: 'Amaze Hospitality specializes in creating distinctive hospitality experiences and managing diverse events. From corporate conferences to social celebrations, we provide end-to-end event planning and execution services. Our experienced team handles venue selection, catering coordination, technical setup, and guest management. We work closely with clients to understand their vision and deliver events that exceed expectations while maintaining attention to every detail.',
    },
    {
      id: 6,
      name: 'Jericho Wines',
      overview: 'Premium wine selection and distribution',
      description: 'Jericho Wines curates and distributes premium wine selections from renowned vineyards and emerging wine regions. Our portfolio includes diverse varietals catering to sophisticated palates and varied preferences. We maintain optimal storage conditions and proper handling procedures to preserve wine quality. Our sommelier-trained team provides expert guidance on wine selection, food pairing, and cellar management. Through strategic partnerships with wineries and distributors, we offer competitive pricing on exceptional wines.',
    },
    {
      id: 7,
      name: 'SR Associates',
      overview: 'Strategic business consulting and advisory',
      description: 'SR Associates provides strategic business consulting services to organizations seeking growth, operational improvement, and market expansion. Our consultants bring deep industry expertise and analytical rigor to complex business challenges. We offer services spanning strategy development, process optimization, market entry planning, and organizational transformation. Through collaborative engagement with client teams, we develop actionable recommendations and support implementation to achieve measurable results.',
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
                    <h2 className="text-3xl font-bold text-foreground mb-4 pr-12">
                      {business.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {business.description}
                    </p>
                  </div>
                ) : (
                  /* Normal Card */
                  <div className="bg-secondary rounded-lg p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {business.name}
                      </h3>
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