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
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-foreground tracking-tight">
            Jericho
          </h1>
          <p className="text-3xl md:text-4xl font-light mb-6 text-foreground/90">
            A step ahead
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mt-12">
            What do we do?
          </p>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="py-24 md:py-32 bg-card px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Our Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-8 flex items-center justify-center text-center min-h-[180px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {business}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 md:py-32 bg-background px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Company Overview
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Jericho is a diversified industrial conglomerate with a legacy spanning multiple decades. Our portfolio encompasses food and beverage manufacturing, chemical production, distribution networks, hospitality ventures, and specialized consulting services.
            </p>
            <p>
              With a commitment to excellence and innovation, we serve markets across diverse sectors, maintaining the highest standards of quality and operational efficiency. Our integrated business model enables us to deliver comprehensive solutions while staying ahead in an ever-evolving industrial landscape.
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