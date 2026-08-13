'use client'

import { useState, useEffect } from 'react'

// Placeholder for Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE'

export default function DistributionPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [brandForm, setBrandForm] = useState({
    companyName: '',
    productCategory: '',
    contactPerson: '',
    email: '',
    mobile: '',
    stateRegion: '',
    annualSales: ''
  })
  const [supplierForm, setSupplierForm] = useState({
    companyName: '',
    location: '',
    contactPerson: '',
    mobile: '',
    currentBrands: '',
    monthlySales: ''
  })
  const [brandSubmitting, setBrandSubmitting] = useState(false)
  const [supplierSubmitting, setSupplierSubmitting] = useState(false)
  const [brandSuccess, setBrandSuccess] = useState(false)
  const [supplierSuccess, setSupplierSuccess] = useState(false)
  const [brandError, setBrandError] = useState('')
  const [supplierError, setSupplierError] = useState('')

  const slides = [
    { id: 1, url: 'https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/1ybja785_Jericho%20Distributor.png' },
  ]

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [slides.length])

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateMobile = (mobile) => {
    return /^\d{10,}$/.test(mobile.replace(/[\s\-\+]/g, ''))
  }

  const handleBrandSubmit = async (e) => {
    e.preventDefault()
    setBrandError('')

    // Validation
    if (!brandForm.companyName || !brandForm.productCategory || !brandForm.contactPerson || 
        !brandForm.email || !brandForm.mobile || !brandForm.stateRegion || !brandForm.annualSales) {
      setBrandError('All fields are mandatory')
      return
    }
    if (!validateEmail(brandForm.email)) {
      setBrandError('Please enter a valid email address')
      return
    }
    if (!validateMobile(brandForm.mobile)) {
      setBrandError('Please enter a valid mobile number (minimum 10 digits)')
      return
    }

    setBrandSubmitting(true)

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          leadType: 'Brand Partnership',
          ...brandForm,
          timestamp: new Date().toISOString()
        })
      })

      // With no-cors, we can't read response, so assume success
      setBrandSuccess(true)
      setBrandForm({
        companyName: '',
        productCategory: '',
        contactPerson: '',
        email: '',
        mobile: '',
        stateRegion: '',
        annualSales: ''
      })
      setTimeout(() => setBrandSuccess(false), 5000)
    } catch (error) {
      setBrandError('Failed to submit. Please try again.')
    } finally {
      setBrandSubmitting(false)
    }
  }

  const handleSupplierSubmit = async (e) => {
    e.preventDefault()
    setSupplierError('')

    // Validation
    if (!supplierForm.companyName || !supplierForm.location || 
        !supplierForm.contactPerson || !supplierForm.mobile || 
        !supplierForm.currentBrands || !supplierForm.monthlySales) {
      setSupplierError('All fields are mandatory')
      return
    }
    if (!validateMobile(supplierForm.mobile)) {
      setSupplierError('Please enter a valid mobile number (minimum 10 digits)')
      return
    }

    setSupplierSubmitting(true)

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          leadType: 'Supplier Partnership',
          ...supplierForm,
          timestamp: new Date().toISOString()
        })
      })

      setSupplierSuccess(true)
      setSupplierForm({
        companyName: '',
        location: '',
        contactPerson: '',
        mobile: '',
        currentBrands: '',
        monthlySales: ''
      })
      setTimeout(() => setSupplierSuccess(false), 5000)
    } catch (error) {
      setSupplierError('Failed to submit. Please try again.')
    } finally {
      setSupplierSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.url}
                alt={`Distribution ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Jericho Distributor
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-foreground text-center">
            Overview
          </h2>
          <div className="text-base sm:text-lg text-muted-foreground leading-relaxed md:leading-loose text-center max-w-3xl md:max-w-4xl mx-auto">
            <p className="md:text-justify md:px-8">
              Jericho Distributor is a leading FMCG distribution company serving the North-East region of India, partnering with established and emerging brands to expand their market presence. Backed by strategically located warehouses, a dedicated distribution network, and an experienced on-ground team, the company ensures timely and efficient supply of products across the region. With a strong presence in institutional sales, Jericho Distributor serves over 1,000+ institutions, delivering reliable logistics, consistent execution, and scalable market access for its partners.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - 3 Boxes with Labels Above */}
      <section className="py-20 bg-secondary/30 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">
                BRANDS
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg h-32 flex items-center justify-center">
                <p className="text-4xl font-bold text-foreground whitespace-nowrap">
                  13+
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">
                SUPPLIERS
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg h-32 flex items-center justify-center">
                <p className="text-4xl font-bold text-foreground whitespace-nowrap">
                  1000+
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">
                DISTRICTS
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg h-32 flex items-center justify-center">
                <p className="text-4xl font-bold text-foreground whitespace-nowrap">
                  10+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Forms Section - Side by Side on Desktop/Tablet */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
            
            {/* List Your Brand - Brand Partnership Form */}
            <div className="lg:pr-8 lg:border-r lg:border-gray-300">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground text-center">
                List Your Brand
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 text-center">
                Partner with us to distribute your FMCG products across North-East India
              </p>

              {brandSuccess ? (
                <div className="bg-primary/10 border border-primary rounded-xl p-8 text-center">
                  <p className="text-lg text-foreground font-medium">
                    Thank you for your interest. Our business development team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBrandSubmit} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg space-y-6">
                  {brandError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {brandError}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={brandForm.companyName}
                      onChange={(e) => setBrandForm({...brandForm, companyName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Product Category / Product Type *
                    </label>
                    <input
                      type="text"
                      value={brandForm.productCategory}
                      onChange={(e) => setBrandForm({...brandForm, productCategory: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="e.g., Beverages, Snacks, Personal Care"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      value={brandForm.contactPerson}
                      onChange={(e) => setBrandForm({...brandForm, contactPerson: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={brandForm.email}
                        onChange={(e) => setBrandForm({...brandForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                        placeholder="email@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={brandForm.mobile}
                        onChange={(e) => setBrandForm({...brandForm, mobile: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      State / Region Currently Operating In *
                    </label>
                    <input
                      type="text"
                      value={brandForm.stateRegion}
                      onChange={(e) => setBrandForm({...brandForm, stateRegion: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="e.g., Assam, West Bengal, Pan India"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Current Annual Sales (₹) *
                    </label>
                    <input
                      type="text"
                      value={brandForm.annualSales}
                      onChange={(e) => setBrandForm({...brandForm, annualSales: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="e.g., ₹50 Lakhs, ₹2 Crores"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={brandSubmitting}
                    className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {brandSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Supply Partnerships - Supplier Partnership Form */}
            <div className="lg:pl-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground text-center">
                Supply Partnerships
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 text-center">
                Become a vendor for Jericho Distributor
              </p>

              {supplierSuccess ? (
                <div className="bg-primary/10 border border-primary rounded-xl p-8 text-center">
                  <p className="text-lg text-foreground font-medium">
                    Thank you for connecting with us. Our procurement team will contact you if your profile matches our requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSupplierSubmit} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg space-y-6">
                  {supplierError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {supplierError}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={supplierForm.companyName}
                      onChange={(e) => setSupplierForm({...supplierForm, companyName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Location (North-East India) *
                    </label>
                    <input
                      type="text"
                      value={supplierForm.location}
                      onChange={(e) => setSupplierForm({...supplierForm, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      value={supplierForm.contactPerson}
                      onChange={(e) => setSupplierForm({...supplierForm, contactPerson: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={supplierForm.mobile}
                      onChange={(e) => setSupplierForm({...supplierForm, mobile: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Current Brands *
                    </label>
                    <input
                      type="text"
                      value={supplierForm.currentBrands}
                      onChange={(e) => setSupplierForm({...supplierForm, currentBrands: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="e.g., Brand A, Brand B"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Monthly Sales (₹) *
                    </label>
                    <input
                      type="text"
                      value={supplierForm.monthlySales}
                      onChange={(e) => setSupplierForm({...supplierForm, monthlySales: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="e.g., ₹5 Lakhs, ₹20 Lakhs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={supplierSubmitting}
                    className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {supplierSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
