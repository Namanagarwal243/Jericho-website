export default function AboutPage() {
  const leadership = [
    {
      name: 'Ashis Agarwal',
      title: 'Promoter and Director',
      bio: 'Visionary entrepreneur with extensive experience in building and scaling diversified business portfolios. Drives strategic direction and long-term growth initiatives across the conglomerate.',
    },
    {
      name: 'Beejeet Prakash',
      title: 'Managing Director',
      bio: 'Seasoned executive responsible for operational excellence and business performance. Leads day-to-day management and ensures alignment with strategic objectives across all business units.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            About Us
          </h1>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((person, index) => (
              <div key={index} className="bg-card rounded-lg p-10">
                {/* Image Placeholder */}
                <div className="w-full aspect-square bg-secondary rounded-lg mb-8 flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                
                {/* Details */}
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {person.name}
                </h2>
                <p className="text-primary font-semibold mb-6">
                  {person.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}