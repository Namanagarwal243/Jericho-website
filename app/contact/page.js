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
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-foreground mb-6">
                  {contact.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-4">
                      For more details
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Contact Person</p>
                    <p className="text-sm text-foreground">{contact.person}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone Number</p>
                    <p className="text-sm text-foreground">{contact.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email ID</p>
                    <p className="text-sm text-foreground break-all">{contact.email}</p>
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