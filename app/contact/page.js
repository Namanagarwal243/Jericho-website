'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [selectedBusiness, setSelectedBusiness] = useState('')

  const businesses = [
    'General Inquiry',
    'Jericho Foods and Beverages LLP',
    'Jericho Logistics',
    'Jericho Energy',
    'Jericho Materials',
    'Jericho Technologies',
    'Jericho Infrastructure',
    'Jericho Marine Systems',
  ]

  const businessContacts = [
    {
      name: 'Jericho Foods and Beverages LLP',
      email: 'foods@jericho.com',
      phone: '+1 (555) 123-4501',
    },
    {
      name: 'Jericho Logistics',
      email: 'logistics@jericho.com',
      phone: '+1 (555) 123-4502',
    },
    {
      name: 'Jericho Energy',
      email: 'energy@jericho.com',
      phone: '+1 (555) 123-4503',
    },
    {
      name: 'Jericho Materials',
      email: 'materials@jericho.com',
      phone: '+1 (555) 123-4504',
    },
    {
      name: 'Jericho Technologies',
      email: 'tech@jericho.com',
      phone: '+1 (555) 123-4505',
    },
    {
      name: 'Jericho Infrastructure',
      email: 'infrastructure@jericho.com',
      phone: '+1 (555) 123-4506',
    },
  ]

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-card py-24 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-foreground">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Get in touch with us to discuss how we can support your business needs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border/50 p-10 md:p-12">
              <h2 className="text-3xl font-bold mb-10 text-foreground">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Select Business *
                  </label>
                  <select
                    value={selectedBusiness}
                    onChange={(e) => setSelectedBusiness(e.target.value)}
                    className="w-full px-4 py-3 border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Please select...</option>
                    {businesses.map((business, index) => (
                      <option key={index} value={business}>
                        {business}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full font-medium text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Contact Cards */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-14 text-foreground">
              Direct Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessContacts.map((contact, index) => (
                <div key={index} className="bg-secondary/30 border border-border/50 p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-5">
                    {contact.name}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-foreground">
              Our Location
            </h2>
            <div className="bg-card border border-border/50 aspect-video flex items-center justify-center">
              <span className="text-muted-foreground">Map Placeholder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}