import Link from 'next/link'

export default function Home() {
  const businesses = [
    'Jericho Foods and Beverages LLP',
    'Jerichem Pvt Ltd',
    'Jericho Chemicals LLP',
    'Jericho Distributor',
    'Azure Hospitality',
    'Amaze Hospitality',
    'Jericho Wines',
    'SR Associates',
  ]

  return (
    <div className="w-full">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
            Jericho
          </h1>
        </div>
      </section>

      {/* What Do We Do Section */}
      <section className="py-24 md:py-32 bg-card px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            What do we do?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Jericho is a diversified industrial conglomerate operating across food and beverage manufacturing, chemical production, distribution networks, hospitality ventures, and specialized consulting services.
          </p>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="py-24 md:py-32 bg-background px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Our Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((business, index) => (
              <Link
                key={index}
                href={index === 0 ? '/flagship' : '/businesses'}
                className="bg-secondary rounded-lg p-8 flex items-center justify-center text-center min-h-[180px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {business}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 md:py-32 bg-card px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Company Overview
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With a legacy spanning multiple decades, Jericho has evolved into a diversified industrial group with operations across multiple sectors and continents. Our portfolio encompasses comprehensive capabilities from manufacturing to distribution, hospitality to consulting.
            </p>
            <p>
              We maintain the highest standards of quality and operational efficiency across all business units. Our integrated business model enables us to deliver comprehensive solutions while staying ahead in an ever-evolving industrial landscape.
            </p>
            <p>
              Each business unit operates with autonomy while benefiting from shared resources, expertise, and our unified vision of sustainable growth and market leadership.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}