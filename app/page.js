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
      {/* Hero Section - Simplified */}
      <section className="relative bg-card py-28 md:py-36 lg:py-44 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-foreground">
              Jericho
            </h1>
            <p className="text-3xl md:text-4xl font-light mb-6 text-foreground/90" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              A step ahead
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {business.name}
                </h3>
                <p className="text-sm text-muted-foreground">{business.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Business Preview */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/40 border border-border/50 p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Jericho Foods and Beverages LLP
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our flagship division delivers excellence in food and beverage manufacturing. With state-of-the-art facilities and decades of expertise, we set industry standards in quality, safety, and innovation.
              </p>
              <Link href="/flagship">
                <Button size="lg" className="font-medium text-base">
                  Learn More About Our Flagship Business
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get In Touch
            </h2>
            <p className="text-lg mb-10 opacity-90 leading-relaxed">
              Ready to discuss how Jericho can support your business needs?
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-card text-primary hover:bg-card/90 font-medium border-0 text-base px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}