import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/vf99rh9y_JERICHO%20LOGO.png"
              alt="Jericho"
              width={160}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              A step ahead
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/flagship" className="text-muted-foreground hover:text-primary transition-colors">
                  Flagship Business
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="text-muted-foreground hover:text-primary transition-colors">
                  Other Businesses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@jericho.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Industrial Avenue</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jericho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}