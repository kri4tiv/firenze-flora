'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'
import { SITE } from '@/lib/content'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/events',   label: 'Events' },
  { href: '/about',    label: 'About' },
  { href: '/enquire',  label: 'Enquire' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
    <LazyMotion features={domAnimation}>
      {/* Fixed header bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={() => setMenuOpen(false)} className="group">
            <Image
              src="/images/brand/logo.png"
              alt="Firenze Flora"
              width={180}
              height={60}
              priority
              className={`object-contain transition-[filter] duration-500 ease-in-out ${
                scrolled
                  ? 'filter-none'
                  : 'brightness-0 invert hover:brightness-100 hover:invert-0'
              }`}
              style={{ height: '50px', width: 'auto' }}
            />
            <span className="sr-only">Firenze Flora</span>
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

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col"
          >
            {/* Top bar */}
            <div className="container-site flex items-center justify-between h-16 md:h-20 shrink-0">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/images/brand/logo.png"
                  alt="Firenze Flora"
                  width={160}
                  height={44}
                  className="object-contain brightness-0 invert"
                  style={{ height: '44px', width: 'auto' }}
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 container-site flex items-stretch overflow-hidden">
              {/* Left — contact (desktop only) */}
              <div className="hidden md:flex flex-col justify-end pb-16 pr-12 shrink-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="space-y-1"
                >
                  <p className="text-sm text-[#4A4540]">{SITE.phoneDisplay}</p>
                  <p className="text-sm text-[#4A4540]">{SITE.email}</p>
                </motion.div>
              </div>

              {/* Right — nav links */}
              <div className="flex-1 flex flex-col items-end justify-center gap-0 text-right py-8">
                {/* Thin gold line above nav items */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 48, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="w-px bg-[#B8963E] mb-6 self-end"
                />

                {navLinks.map((link, i) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.15, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-body text-2xl md:text-3xl font-[300] tracking-wide block py-1.5 transition-colors duration-200 ${
                          isActive ? 'text-[#B8963E]' : 'text-[#F5F0E8]/50 hover:text-[#F5F0E8]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Contact on mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.06 + 0.3, duration: 0.4 }}
                  className="md:hidden mt-8 space-y-1"
                >
                  <a href={`tel:${SITE.phoneTel}`} className="block font-body text-base text-[#4A4540] hover:text-[#F5F0E8] transition-colors">{SITE.phoneDisplay}</a>
                  <a href={`mailto:${SITE.email}`}  className="block font-body text-base text-[#4A4540] hover:text-[#F5F0E8] transition-colors">{SITE.email}</a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
