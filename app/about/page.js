export default function AboutPage() {
  const founders = [
    {
      name: 'John Doe',
      designation: 'Co-Founder & CEO',
      summary: 'Visionary leader with over 25 years of experience in industrial manufacturing and strategic business development. Led the company through multiple successful expansions across diverse sectors.',
    },
    {
      name: 'Jane Smith',
      designation: 'Co-Founder & COO',
      summary: 'Operations expert specializing in supply chain optimization and manufacturing excellence. Instrumental in establishing Jericho\'s reputation for quality and reliability.',
    },
    {
      name: 'Michael Johnson',
      designation: 'Co-Founder & CTO',
      summary: 'Technology innovator driving automation and digital transformation across all business units. Pioneer in implementing Industry 4.0 solutions in traditional manufacturing.',
    },
  ]

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Building the future through industrial excellence and innovation.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Jericho represents a legacy of industrial excellence spanning over three decades. From our origins as a food and beverage manufacturing operation, we have evolved into a diversified industrial group with operations across multiple sectors and continents.
              </p>
              <p>
                Our philosophy is simple: stay a step ahead. This commitment to forward-thinking drives everything we do, from investing in cutting-edge technology to developing our people and continuously improving our processes.
              </p>
              <p>
                Today, Jericho operates through six specialized business units, each a leader in its respective field. Together, we employ over 5,000 professionals and serve clients across industries including food & beverage, logistics, energy, materials, automation, and infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="bg-muted/20 border border-border p-8">
                  {/* Placeholder for founder image */}
                  <div className="w-full aspect-square bg-white border border-border mb-6 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {founder.designation}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {founder.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We set the highest standards and consistently exceed them through continuous improvement and attention to detail.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We embrace new technologies and methodologies, always seeking better ways to serve our customers.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct business with transparency, honesty, and unwavering ethical standards.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We build for the long term, balancing economic success with environmental and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}