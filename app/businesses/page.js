'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// Image Slider Component for businesses with multiple images
function BusinessImageSlider({ images, businessName }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [images.length])

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`${businessName} - Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default function BusinessesPage() {
  const [expandedId, setExpandedId] = useState(null)

  const businesses = [
    {
      id: 1,
      name: 'Jerichem Pvt Ltd',
      industry: 'Detergent Manufacturing',
      overview: 'Home care manufacturing company operating across North East India, marketing products under the Quick and Jaya brands through a structured regional distribution network.',
      description: 'Jerichem Pvt Ltd operates as a dedicated manufacturer of home care products with a focus on regional market presence. The company markets its products under the Quick and Jaya brands through an established distribution network across North East India. Operations are structured to maintain consistent product quality and supply reliability to support market requirements in the region. The company maintains manufacturing capabilities designed for scalable production while meeting local demand patterns.',
      images: [], // No images provided
    },
    {
      id: 2,
      name: 'Jericho Chemicals LLP',
      industry: 'Warehousing',
      overview: 'Large-scale warehouse facility providing storage and logistics support for chemical and industrial products.',
      description: 'Jericho Chemicals LLP operates a purpose-built warehouse facility designed for the storage and handling of chemical and industrial products. The infrastructure includes controlled storage environments, material handling systems, and safety protocols aligned with warehousing standards. The facility serves as a logistics hub for inventory management and distribution support. Operations are structured to handle diverse storage requirements while maintaining compliance with safety and regulatory guidelines.',
      images: [
        'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/9mkeo0l8_Jericho%20Chemicals%20LLp%201.jpg',
        'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/nnroggx3_Jericho%20Chemicals%20LLP%202.jpg',
      ],
    },
    {
      id: 3,
      name: 'Jericho Distributor',
      industry: 'Logistics and Distribution',
      overview: 'Engaged in institutional distribution of Consumer Packaged Goods (CPG) products through structured supply networks.',
      description: 'Jericho Distributor operates as a partnership firm focused on the institutional distribution of Consumer Packaged Goods (CPG) products. The business manages supply chain operations connecting manufacturers with institutional buyers through established logistics networks. Operations are structured to handle bulk distribution requirements with focus on timely delivery and inventory management. The firm maintains partnerships with CPG brands to serve institutional demand across designated regions.',
      images: ['https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/1ybja785_Jericho%20Distributor.png'],
    },
    {
      id: 4,
      name: 'Jericho Wines',
      industry: 'Wine Retail',
      overview: 'Established retail liquor outlet operating since 1998, built on long-standing market presence and customer relationships.',
      description: 'Established in 1998, Jericho Wines has built a long-standing presence in the retail liquor sector. The outlet operates with a focus on product selection and customer service, serving a consistent client base over more than two decades. The business maintains reliable supply relationships and operates within regulatory compliance standards. Jericho Wines has developed regional recognition through sustained operations and market positioning.',
      images: [], // No images provided
    },
    {
      id: 5,
      name: 'Allure Hospitality',
      industry: 'Hospitality',
      overview: 'Operates Dhaba Estd 1986 Delhi in collaboration with brand owners, focused on restaurant management and operations.',
      description: 'Allure Hospitality operates Dhaba Estd 1986 Delhi in collaboration with the brand owners. The restaurant is positioned in the casual dining segment with focus on operational management and customer service. Operations are conducted under franchise or partnership arrangements with emphasis on maintaining brand standards and service consistency. The business handles day-to-day restaurant operations including kitchen management, service delivery, and facility maintenance.',
      images: [
        'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/75kd1r5a_Allure%20Hospitality%201.png',
        'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/azznv017_Allure%20Hospitality%202.jpg',
      ],
    },
    {
      id: 6,
      name: 'Amaze Hospitality',
      industry: 'Hospitality',
      overview: 'Operates Dhaba Estd 1986 and Mamagoto restaurant brands in collaboration with brand owners.',
      description: 'Amaze Hospitality operates both Dhaba Estd 1986 and Mamagoto restaurant brands in collaboration with respective brand owners. The business manages multi-brand restaurant operations with focus on maintaining service standards and operational efficiency. Operations are conducted under partnership or franchise arrangements covering restaurant management, service delivery, and brand compliance. The company handles operational aspects including staff management, supply coordination, and customer service across both brands.',
      images: [], // No images provided
    },
    {
      id: 7,
      name: 'SR Associates',
      industry: 'Consulting',
      overview: 'Partnership firm providing manpower outsourcing and consulting services to corporate clients.',
      description: 'SR Associates operates as a professionally managed firm providing manpower outsourcing and consulting services. The business focuses on supplying skilled and semi-skilled personnel to corporate clients across various sectors. Services include workforce management, deployment, and administrative support aligned with client requirements. The firm maintains recruitment processes and compliance frameworks to ensure quality service delivery. Operations are structured to handle client relationships, resource allocation, and contract management.',
      images: [], // No images provided
    },
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header - CENTERED */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Other Businesses
          </h1>
        </div>
      </section>

      {/* Businesses Grid - FORCED ROW LAYOUT: 2-3-2 */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Row 1: First 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {businesses.slice(0, 2).map((business) => (
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
                    {/* Image Display - Slider for multiple images, single image, or placeholder */}
                    {business.images && business.images.length > 0 ? (
                      <BusinessImageSlider images={business.images} businessName={business.name} />
                    ) : (
                      <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20 rounded-lg">
                        <span className="text-muted-foreground text-sm">{business.name}</span>
                      </div>
                    )}
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

          {/* Row 2: Next 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {businesses.slice(2, 5).map((business) => (
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
                    {/* Image Display - Slider for multiple images, single image, or placeholder */}
                    {business.images && business.images.length > 0 ? (
                      <BusinessImageSlider images={business.images} businessName={business.name} />
                    ) : (
                      <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20 rounded-lg">
                        <span className="text-muted-foreground text-sm">{business.name}</span>
                      </div>
                    )}
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

          {/* Row 3: Last 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businesses.slice(5, 7).map((business) => (
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
                    {/* Image Display - Slider for multiple images, single image, or placeholder */}
                    {business.images && business.images.length > 0 ? (
                      <BusinessImageSlider images={business.images} businessName={business.name} />
                    ) : (
                      <div className="bg-secondary aspect-video flex items-center justify-center border border-border/20 rounded-lg">
                        <span className="text-muted-foreground text-sm">{business.name}</span>
                      </div>
                    )}
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
