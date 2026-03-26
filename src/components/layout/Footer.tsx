import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/content'

const navLinks = [
  { href: '/weddings', label: 'Weddings' },
  { href: '/events',   label: 'Events' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/about',    label: 'About' },
  { href: '/enquire',  label: 'Enquire' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#242424]">
      <div className="container-site py-16">
        {/* Main row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left */}
          <div>
            <Image
              src="/images/brand/logo.png"
              alt="Firenze Flora"
              height={32} width={96}
              className="h-8 w-auto object-contain brightness-0 invert opacity-70"
            />
            <p className="text-xs text-[#4A4540] mt-4 leading-relaxed max-w-[200px]">
              {SITE.address}
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                <Link href={link.href} className="text-sm text-[#4A4540] hover:text-[#F5F0E8] transition-colors">
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && <span className="text-[#242424]">·</span>}
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-1.5">
            <a href={`tel:${SITE.phoneTel}`} className="block text-sm text-[#8C8279] hover:text-[#F5F0E8] transition-colors">{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}  className="block text-sm text-[#8C8279] hover:text-[#F5F0E8] transition-colors">{SITE.email}</a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors">WhatsApp →</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#242424] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-[#4A4540]">© {year} Firenze Flora. All rights reserved.</p>
          <p className="text-xs text-[#4A4540]">Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  )
}
