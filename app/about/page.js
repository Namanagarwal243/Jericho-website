export default function AboutPage() {
  const leadership = [
    {
      name: 'Ashis Agarwal',
      title: 'Promoter and Director',
      bio: 'Ashis Agarwal serves as Promoter and Director of Jericho Group, providing strategic direction and leadership across the organization. With extensive business experience, he guides the group\'s diversified operations and long-term growth initiatives while maintaining focus on operational excellence and market development.',
    },
    {
      name: 'Beejeet Prakash',
      title: 'Managing Director',
      bio: 'Beejeet Prakash serves as Managing Director, responsible for overall management and operational execution across business units. He ensures alignment with strategic objectives while driving performance improvements and maintaining strong stakeholder relationships across the organization.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
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