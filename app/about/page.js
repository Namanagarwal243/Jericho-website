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
      {/* Header - CENTERED */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
            About Us
          </h1>
        </div>
      </section>

      {/* Company Note - Clean and Structured */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-xl p-12 shadow-md">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Jericho Group operates across manufacturing, distribution, hospitality, and consulting sectors with a focus on operational excellence and strategic partnerships. Led by experienced leadership, the organization maintains a diversified portfolio while driving sustainable growth and regional market presence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ashis Agarwal */}
            <div className="bg-card rounded-lg p-10">
              {/* Photo */}
              <div className="w-full aspect-square rounded-lg mb-8 overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/hy0fgmmy_Ashis%20Agarwal%20photo.jpeg" 
                  alt="Ashis Agarwal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ashis Agarwal
              </h3>
              <p className="text-primary font-semibold mb-6">
                Promoter and Director
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ashis Agarwal serves as Promoter and Director of Jericho Group, providing strategic direction and leadership across the organization. With extensive business experience, he guides the group's diversified operations and long-term growth initiatives while maintaining focus on operational excellence and market development.
              </p>
            </div>

            {/* Beejeet Prakash */}
            <div className="bg-card rounded-lg p-10">
              {/* Photo */}
              <div className="w-full aspect-square rounded-lg mb-8 overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/zj0wqz9u_Beejeet%20Prakash%20photo.jpeg" 
                  alt="Beejeet Prakash"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Beejeet Prakash
              </h3>
              <p className="text-primary font-semibold mb-6">
                Managing Director
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beejeet Prakash serves as Managing Director, responsible for overall management and operational execution across business units. He ensures alignment with strategic objectives while driving performance improvements and maintaining strong stakeholder relationships across the organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}