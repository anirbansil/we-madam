import { Link } from "react-router-dom"
import { MapPin, Phone, Mail } from "lucide-react"

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-cream-100">
      <div className="h-1 bg-gradient-to-r from-transparent via-turmeric-500 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="We Madam logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="max-w-xs text-sm leading-relaxed text-cream-200/60">
              A homestyle Bengali kitchen in the heart of Kolkata, a unit of
              UUC Hospitality. Come home to the taste of a madam&rsquo;s
              own cooking.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-cream-200/60 transition hover:border-turmeric-500 hover:text-turmeric-400"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-cream-200/60 transition hover:border-turmeric-500 hover:text-turmeric-400"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-turmeric-400">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/70">
              <li><Link className="transition hover:text-turmeric-400" to="/">Home</Link></li>
              <li><Link className="transition hover:text-turmeric-400" to="/#story">Our Story</Link></li>
              <li><Link className="transition hover:text-turmeric-400" to="/#menu">Menu</Link></li>
              <li><Link className="transition hover:text-turmeric-400" to="/gallery">Gallery</Link></li>
              <li><Link className="transition hover:text-turmeric-400" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-turmeric-400">
              Our Family
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/70">
              <li>We Madam Kitchen</li>
              <li>Café Firefly</li>
              <li>Banquet Hall</li>
              <li>Turf &amp; Game Zone</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-turmeric-400">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-spice-500" />
                42 College Street, College Square, Kolkata 700012
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-spice-500" />
                +91 33 2241 1962
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-spice-500" />
                hello@wemadam.in
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-cream-200/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} We Madam &middot; A Unit of UUC Hospitality Pvt. Ltd. All rights reserved.</p>
          <p className="font-bengali">মায়ের হাতের রান্না</p>
        </div>
      </div>
    </footer>
  )
}
