export default function ContactPage() {
  const contacts = [
    {
      name: 'Jericho Foods and Beverages',
      person: 'Mr. Parijat Mahanta',
      phone: '+91 7099073488',
      email: 'hr.executive@jericho.co.in',
    },
    {
      name: 'Jericho Distributor',
      person: 'Mr. Priyank Jalan',
      phone: '+91 7099026243',
      email: 'jerichodistributor@jericho.co.in',
    },
    {
      name: 'Jerichem Pvt Ltd',
      person: 'Mr. Ajay Verma',
      phone: '+91 9085903455',
      email: 'ajay.verma@jericho.co.in',
    },
    {
      name: 'Jericho Chemicals LLP',
      person: 'Mr. Ajay Verma',
      phone: '+91 9085903455',
      email: 'ajay.verma@jericho.co.in',
    },
    {
      name: 'Amaze Hospitality',
      person: 'Mr. Ajay Verma',
      phone: '+91 9085903455',
      email: 'ajay.verma@jericho.co.in',
    },
    {
      name: 'SR Associates',
      person: 'Mr. Ajay Verma',
      phone: '+91 9085903455',
      email: 'ajay.verma@jericho.co.in',
    },
    {
      name: 'Jericho Wines',
      person: 'Mr. Ajay Verma',
      phone: '+91 9085903455',
      email: 'ajay.verma@jericho.co.in',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header - CENTERED */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Head Office Section - 2x2 GRID - MOBILE RESPONSIVE */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 md:mb-10 text-center">
            Head Office
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-x-20 md:gap-y-12">
              {/* Top Left - Contact Person */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  CONTACT PERSON
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  Mr. Ajay Verma
                </p>
              </div>

              {/* Top Right - Phone */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  PHONE NUMBER
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  +91 9085903455
                </p>
              </div>

              {/* Bottom Left - Email */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  EMAIL ID
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium break-all">
                  ajay.verma@jericho.co.in
                </p>
              </div>

              {/* Bottom Right - Address */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  ADDRESS
                </p>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Near House No. 43A, Momo Ghar Lane,<br />
                  GNB Road Ambari, Guwahati, 781001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Contact Cards Grid */}
      <section className="py-16 md:py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Business Units
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`${index === 0 ? 'md:col-span-2' : 'md:col-span-1'} bg-white border border-gray-200 rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                {/* Company Name - Centered and Larger */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
                  {contact.name}
                </h3>

                {/* For More Details - Closer to Name */}
                <p className="text-sm text-primary font-semibold mb-6 text-center">
                  For more details
                </p>

                {/* Mobile: Stack all left-aligned. Desktop: Contact Person (Left) and Phone Number (Right) - Same Line */}
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Contact Person</p>
                    <p className="text-sm text-foreground">{contact.person}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Phone Number</p>
                    <p className="text-sm text-foreground">{contact.phone}</p>
                  </div>
                </div>

                {/* Email ID - Mobile: left-aligned, Desktop: Centered Below */}
                <div className="md:text-center">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Email ID</p>
                  <p className="text-sm text-foreground break-all">{contact.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}