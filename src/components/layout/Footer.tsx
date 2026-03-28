import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/content'

const navLinks = [
  { href: '/weddings', label: 'Weddings' },
  { href: '/events',   label: 'Events' },
  { href: '/about',    label: 'About' },
  { href: '/enquire',  label: 'Enquire' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <footer className="relative z-10 bg-[#0A0A0A] border-t border-[#242424]">
      <div className="container-site py-20">
        {/* Main row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left */}
          <div>
            <Image
              src="/images/brand/logo.png"
              alt="Firenze Flora"
              height={40} width={120}
              className="h-12 w-auto object-contain brightness-0 invert opacity-70"
            />
            <p className="text-sm text-[#8C8279] mt-4 leading-relaxed max-w-[200px]">
              {SITE.address}
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                <Link
                  href={link.href}
                  className="group relative text-sm text-[#8C8279] hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A5B5] group-hover:w-full transition-all duration-300" />
                </Link>
                {i < navLinks.length - 1 && <span className="text-[#242424]">·</span>}
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-1.5">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="group relative block text-sm text-[#B0A89E] hover:text-[#F5F0E8] transition-colors duration-300 w-fit"
            >
              {SITE.phoneDisplay}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A5B5] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="group relative block text-sm text-[#B0A89E] hover:text-[#F5F0E8] transition-colors duration-300 w-fit"
            >
              {SITE.email}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A5B5] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block text-sm text-[#D4A5B5] hover:text-[#E8C4D0] transition-colors duration-300 w-fit"
            >
              WhatsApp →
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E8C4D0] group-hover:w-full transition-all duration-300" />
            </a>
            <div className="flex gap-2 pt-2">
              <a
                href="https://www.instagram.com/firenzeflora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 border border-[#3A3A3A] text-[#8C8279] hover:border-[#D4A5B5] hover:text-[#D4A5B5] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/firenzeflora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 border border-[#3A3A3A] text-[#8C8279] hover:border-[#D4A5B5] hover:text-[#D4A5B5] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/firenzeflora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2 border border-[#3A3A3A] text-[#8C8279] hover:border-[#D4A5B5] hover:text-[#D4A5B5] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#242424] mt-16 pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-[#8C8279]/60">© {year} Firenze Flora. All rights reserved.</p>
          <p className="text-xs text-[#8C8279]/60">Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  )
}
