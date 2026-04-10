export default function FlagshipPage() {
  const imageGallery = [
    { id: 1, alt: 'Manufacturing facility' },
    { id: 2, alt: 'Production line' },
    { id: 3, alt: 'Quality control' },
    { id: 4, alt: 'Distribution center' },
    { id: 5, alt: 'Innovation lab' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-foreground">
              Jericho Foods and Beverages LLP
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Setting the benchmark in food and beverage manufacturing through innovation, quality assurance, and decades of industry-leading expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageGallery.map((image, index) => (
              <div
                key={image.id}
                className={`bg-white border border-border aspect-video flex items-center justify-center ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <span className="text-sm text-muted-foreground">{image.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Overview
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Jericho Foods and Beverages LLP represents the pinnacle of our commitment to manufacturing excellence. With over three decades of proven expertise, we have established ourselves as a trusted partner for quality food and beverage production across multiple markets.
              </p>
              <p>
                Our state-of-the-art facilities span over 500,000 square feet of advanced manufacturing space, equipped with cutting-edge technology and operated by industry-leading professionals. We combine traditional craftsmanship with modern innovation to deliver products that exceed expectations.
              </p>
              <p>
                From sourcing raw materials to final distribution, we provide end-to-end manufacturing services, ensuring quality, safety, and reliability at every stage of the production process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Food Manufacturing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete food production services from processing to packaging, with strict adherence to safety and quality standards.
                </p>
              </div>
              <div className="bg-white border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Beverage Production
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced beverage manufacturing capabilities including formulation, bottling, and quality control systems.
                </p>
              </div>
              <div className="bg-white border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive testing and certification processes ensuring compliance with international food safety standards.
                </p>
              </div>
              <div className="bg-white border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Supply Chain Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamless coordination with distribution networks for efficient delivery to retail and wholesale partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}