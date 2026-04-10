import ThreeDotsMotif from '@/components/ThreeDotsMotif'

export default function FlagshipPage() {
  const imageGallery = [
    { id: 1, alt: 'Manufacturing facility' },
    { id: 2, alt: 'Engineering precision' },
    { id: 3, alt: 'Innovation lab' },
    { id: 4, alt: 'Quality control' },
    { id: 5, alt: 'Team excellence' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-32 md:py-40 lg:py-52">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="mb-6">
              <ThreeDotsMotif size="md" color="cream" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              Jericho Industrial Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl">
              Setting the benchmark in manufacturing and engineering excellence through innovation, precision, and decades of industry-leading expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGallery.map((image, index) => (
              <div
                key={image.id}
                className={`bg-secondary/50 aspect-video flex items-center justify-center border border-border ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-[16/9]' : ''
                }`}
              >
                <span className="text-muted-foreground text-sm">{image.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Overview
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Jericho Industrial Solutions represents the pinnacle of our commitment to manufacturing excellence. With over three decades of proven expertise, we have established ourselves as a trusted partner for complex engineering challenges across multiple industries.
              </p>
              <p>
                Our state-of-the-art facilities span over 500,000 square feet of advanced manufacturing space, equipped with cutting-edge technology and operated by industry-leading professionals. We combine traditional craftsmanship with modern innovation to deliver solutions that exceed expectations.
              </p>
              <p>
                From concept to completion, we provide end-to-end manufacturing services, ensuring precision, quality, and reliability at every stage of the production process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  Precision Manufacturing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced CNC machining, metal fabrication, and assembly services with tolerances measured in microns.
                </p>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  Engineering Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-spectrum engineering support from design and prototyping to production optimization.
                </p>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive testing and certification processes ensuring compliance with international standards.
                </p>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  Supply Chain Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamless coordination with global supply networks for efficient, just-in-time delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Key Strengths
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Technical Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Industry-leading expertise backed by continuous investment in advanced manufacturing technologies and workforce development.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Proven Track Record
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Three decades of successful project delivery across automotive, aerospace, defense, and industrial sectors.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Scalable Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible manufacturing capacity to accommodate projects from prototype to high-volume production.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Commitment to Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated R&D facilities focused on developing next-generation manufacturing processes and materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}