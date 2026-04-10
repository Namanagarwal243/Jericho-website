import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  const businesses = [
    { name: 'Jericho Foods and Beverages LLP', industry: 'Food & Beverage Manufacturing' },
    { name: 'Jericho Logistics', industry: 'Supply Chain Management' },
    { name: 'Jericho Energy', industry: 'Renewable Energy Solutions' },
    { name: 'Jericho Materials', industry: 'Advanced Materials & Composites' },
    { name: 'Jericho Technologies', industry: 'Industrial Automation' },
    { name: 'Jericho Infrastructure', industry: 'Construction & Development' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Optional: Light industrial background image with white overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
              Jericho
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 text-foreground">
              A step ahead
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Leading industrial excellence across diverse sectors with innovation, precision, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="bg-white border border-border p-8 transition-all duration-300 hover:border-primary hover:shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {business.name}
                </h3>
                <p className="text-sm text-muted-foreground">{business.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Business Preview */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/20 border border-border p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Jericho Foods and Beverages LLP
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our flagship division delivers excellence in food and beverage manufacturing. With state-of-the-art facilities and decades of expertise, we set industry standards in quality, safety, and innovation.
              </p>
              <Link href="/flagship">
                <Button size="lg" className="font-medium">
                  Learn More About Our Flagship Business
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Ready to discuss how Jericho can support your business needs? Contact us today to explore partnership opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 font-medium border-0">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}