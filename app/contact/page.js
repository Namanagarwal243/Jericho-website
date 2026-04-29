export default function ContactPage() {
  const contacts = [
    {
      name: 'Jericho Foods and Beverages',
      person: 'Mr. Parijat Mahanta',
      phone: '+91 9854049452',
      email: 'parijat.mahanta@jericho.co.in',
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
      name: 'Jericho Distributor',
      person: 'Mr. Ajay Verma',
      phone: '+91 9085903455',
      email: 'ajay.verma@jericho.co.in',
    },
    {
      name: 'Azure Hospitality',
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

      {/* Head Office Section - 2x2 GRID */}
      <section className="pb-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Head Office
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-16 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {/* Top Left - Contact Person */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  CONTACT PERSON
                </p>
                <p className="text-lg text-foreground font-medium">
                  Mr. Ajay Verma
                </p>
              </div>

              {/* Top Right - Phone */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  PHONE NUMBER
                </p>
                <p className="text-lg text-foreground font-medium">
                  +91 9085903455
                </p>
              </div>

              {/* Bottom Left - Email */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  EMAIL ID
                </p>
                <p className="text-lg text-foreground font-medium">
                  ajay.verma@jericho.co.in
                </p>
              </div>

              {/* Bottom Right - Address */}
              <div>
                <p className="text-xs text-primary mb-3 uppercase tracking-wide font-semibold">
                  ADDRESS
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  Near House No. 43A,<br />
                  Momo Ghar Lane,<br />
                  GNB Road, Ambari,<br />
                  Guwahati, 781001
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <h3 className="text-lg font-bold text-foreground mb-6 min-h-[3.5rem] flex items-start">
                  {contact.name}
                </h3>
                <div className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <p className="text-sm text-primary font-semibold">
                      For more details
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Contact Person</p>
                      <p className="text-sm text-foreground">{contact.person}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Phone Number</p>
                      <p className="text-sm text-foreground">{contact.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Email ID</p>
                      <p className="text-sm text-foreground break-all">{contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}