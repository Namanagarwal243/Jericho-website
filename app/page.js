import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ThreeDotsMotif from '@/components/ThreeDotsMotif'

export default function Home() {
  const businesses = [
    { name: 'Jericho Industrial Solutions', industry: 'Manufacturing & Engineering' },
    { name: 'Jericho Logistics', industry: 'Supply Chain Management' },
    { name: 'Jericho Energy', industry: 'Renewable Energy Solutions' },
    { name: 'Jericho Materials', industry: 'Advanced Materials & Composites' },
    { name: 'Jericho Technologies', industry: 'Industrial Automation' },
    { name: 'Jericho Infrastructure', industry: 'Construction & Development' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-32 md:py-40 lg:py-48">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="mb-6">
              <ThreeDotsMotif size="md" color="cream" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Jericho
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 text-primary-foreground/90">
              A step ahead
            </p>
            <p className="text-lg md:text-xl max-w-2xl text-primary-foreground/80 leading-relaxed">
              Leading industrial excellence across diverse sectors with innovation, precision, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="group border border-border bg-card p-8 transition-all duration-300 hover:border-primary hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {business.name}
                </h3>
                <p className="text-muted-foreground">{business.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Business Preview */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="mb-4">
                <ThreeDotsMotif size="sm" color="green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Jericho Industrial Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our flagship division delivers comprehensive manufacturing and engineering excellence. With state-of-the-art facilities and decades of expertise, we set industry standards in precision, innovation, and reliability.
              </p>
              <Link href="/flagship">
                <Button size="lg" className="font-medium">
                  Explore Our Flagship
                </Button>
              </Link>
            </div>
            <div className="bg-secondary/50 aspect-video flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm">Flagship Business Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Businesses Preview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From logistics to renewable energy, our diverse business units work together to deliver integrated solutions across industries.
            </p>
          </div>
          <div className="text-center">
            <Link href="/businesses">
              <Button variant="outline" size="lg" className="font-medium">
                View All Businesses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}