import Link from 'next/link'

const services = [
  { href: '/services/weddings', label: 'Weddings' },
  { href: '/services/events', label: 'Events' },
  { href: '/services/other-services', label: 'Other Services' },
  { href: '/packages', label: 'Packages' },
]

const company = [
  { href: '/work', label: 'Work' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/enquire', label: 'Enquire' },
]

const legacy = [
  { href: '/wedding-cultures/church-wedding', label: 'Church Weddings' },
  { href: '/wedding-cultures/kosha-decor', label: 'Kosha Decor' },
  { href: '/winter-wonderland', label: 'Winter Wonderland' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1C1C1A] text-[#F5F0E8]">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl mb-4">Firenze Flora</p>
            <p className="text-sm text-[#8C8279] font-light leading-relaxed mb-6">
              Premium floral and event decor studio in Dubai. Bespoke concepts, flawless execution.
            </p>
            <a
              href="https://wa.me/971000000000?text=Hi%20Firenze%20Flora,%20I%27d%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <span>→</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-[#F5F0E8]/80 hover:text-[#F5F0E8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] mb-5">Company</p>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-[#F5F0E8]/80 hover:text-[#F5F0E8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] mb-5">Contact</p>
            <address className="not-italic space-y-2 text-sm font-light text-[#F5F0E8]/80">
              <p>Dubai, UAE</p>
              <a href="tel:+971000000000" className="block hover:text-[#F5F0E8] transition-colors">
                +971 00 000 0000
              </a>
              <a
                href="mailto:hello@firenzeflora.com"
                className="block hover:text-[#F5F0E8] transition-colors"
              >
                hello@firenzeflora.com
              </a>
            </address>
          </div>
        </div>

        {/* Legacy services (de-emphasized) */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="font-accent text-xs tracking-widest text-[#8C8279]/60 mb-3">Also available</p>
          <div className="flex flex-wrap gap-4">
            {legacy.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#8C8279]/60 hover:text-[#8C8279] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#8C8279]/60">
            © {year} Firenze Flora. All rights reserved.
          </p>
          <p className="text-xs text-[#8C8279]/40">
            Dubai, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  )
}
