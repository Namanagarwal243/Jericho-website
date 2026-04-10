import ThreeDotsMotif from '@/components/ThreeDotsMotif'

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-6">
            <ThreeDotsMotif size="md" color="cream" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            About Jericho
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Building the future through industrial excellence and innovation.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Jericho represents a legacy of industrial excellence spanning over three decades. From our origins as a precision manufacturing operation, we have evolved into a diversified industrial group with operations across multiple sectors and continents.
              </p>
              <p>
                Our philosophy is simple: stay a step ahead. This commitment to forward-thinking drives everything we do, from investing in cutting-edge technology to developing our people and continuously improving our processes.
              </p>
              <p>
                Today, Jericho operates through six specialized business units, each a leader in its respective field. Together, we employ over 5,000 professionals and serve clients across industries including aerospace, automotive, energy, logistics, and infrastructure development.
              </p>
              <p>
                We believe in building long-term partnerships based on trust, quality, and consistent delivery. Our success is measured not just in financial performance, but in the lasting value we create for our customers, our people, and the communities where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
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

      {/* Contact Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">General Inquiries</h3>
                  <p className="text-muted-foreground">info@jericho.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Business Development</h3>
                  <p className="text-muted-foreground">business@jericho.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Media Relations</h3>
                  <p className="text-muted-foreground">media@jericho.com</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">
                    Jericho Industrial Group<br />
                    123 Industrial Parkway<br />
                    Suite 500<br />
                    City, State 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}