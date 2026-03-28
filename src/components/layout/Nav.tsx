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
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
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

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-site flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/brand/logo.png"
              alt="Firenze Flora"
              width={200}
              height={78}
              priority
              className="object-contain transition-[filter] duration-500 ease-in-out brightness-0 invert hover:brightness-100 hover:invert-0 cursor-pointer"
              style={{ height: '65px', width: 'auto' }}
            />
            <span className="sr-only">Firenze Flora</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-sm tracking-widest uppercase transition-colors duration-300 group ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              )
            })}
            <Link
              href="/enquire"
              className="font-body text-sm tracking-widest uppercase px-5 py-2.5 border border-[#D4A5B5] text-[#D4A5B5] hover:bg-[#D4A5B5] hover:text-white transition-all duration-300"
            >
              Enquire
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 items-center"
          >
            <span className="block w-5 h-px bg-[#F5F0E8]" />
            <span className="block w-5 h-px bg-[#F5F0E8]" />
            <span className="block w-5 h-px bg-[#F5F0E8]" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col md:hidden"
          >
            <div className="container-site flex items-center justify-between py-5 shrink-0">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/images/brand/logo.png"
                  alt="Firenze Flora"
                  width={160}
                  height={52}
                  className="object-contain brightness-0 invert"
                  style={{ height: '52px', width: 'auto' }}
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

            <div className="flex-1 flex flex-col items-end justify-center gap-0 text-right container-site py-8">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 48, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-px bg-[#D4A5B5] mb-6 self-end"
              />
              {[...navLinks, { href: '/enquire', label: 'Enquire' }].map((link, i) => {
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
                      className={`font-body text-2xl font-[300] tracking-wide block py-3 transition-colors duration-200 ${
                        isActive ? 'text-[#D4A5B5]' : 'text-[#F5F0E8]/50 hover:text-[#F5F0E8]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8 space-y-1"
              >
                <a href={`tel:${SITE.phoneTel}`} className="block font-body text-sm text-[#4A4540] hover:text-[#F5F0E8] transition-colors">{SITE.phoneDisplay}</a>
                <a href={`mailto:${SITE.email}`}  className="block font-body text-sm text-[#4A4540] hover:text-[#F5F0E8] transition-colors">{SITE.email}</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
