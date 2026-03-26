'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/content'

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/events',   label: 'Events' },
  { href: '/about',    label: 'About' },
  { href: '/enquire',  label: 'Enquire' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/brand/logo.png"
              alt="Firenze Flora"
              height={44} width={132}
              className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col justify-center gap-[5px] p-2"
          >
            <span className="block w-5 h-px bg-[#F5F0E8]" />
            <span className="block w-5 h-px bg-[#F5F0E8]" />
            <span className="block w-5 h-px bg-[#F5F0E8]" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col"
          >
            {/* Top bar with logo + close */}
            <div className="container-site flex items-center justify-between h-16 md:h-20 shrink-0">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/images/brand/logo.png"
                  alt="Firenze Flora"
                  height={44} width={132}
                  className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line x1="2" y1="2" x2="18" y2="18" stroke="#F5F0E8" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="2" x2="2" y2="18" stroke="#F5F0E8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <div className="flex-1 container-site flex flex-col justify-center gap-1">
              {navLinks.map((link, i) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-display text-display-md block py-1 transition-colors duration-200 ${isActive ? 'text-[#B8963E]' : 'text-[#F5F0E8]/60 hover:text-[#F5F0E8]'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              {/* Contact below nav */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.4 }}
                className="mt-10 space-y-1.5"
              >
                <a href={`tel:${SITE.phoneTel}`} className="block font-body text-sm text-[#8C8279] hover:text-[#F5F0E8] transition-colors">{SITE.phoneDisplay}</a>
                <a href={`mailto:${SITE.email}`}  className="block font-body text-sm text-[#8C8279] hover:text-[#F5F0E8] transition-colors">{SITE.email}</a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors">WhatsApp →</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
