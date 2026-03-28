'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { SITE } from '@/lib/content'

interface DrawerContent {
  intro: string
  whatWeDo: string[]
  florals: string[]
  setup: string[]
}

interface DrawerProps {
  open: boolean
  onClose: () => void
  title: string
  image: string
  content: DrawerContent
}

export default function ServiceDrawer({ open, onClose, title, image, content }: DrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to enquire about ${title} decoration`)}`

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0F0F0F] overflow-y-auto"
            style={{ maxHeight: '90vh' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Hero image */}
            <div className="relative w-full aspect-video">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
              <h2 className="absolute bottom-6 left-8 font-display text-display-md text-white">{title}</h2>
            </div>

            {/* Content */}
            <div className="px-8 md:px-16 py-12 max-w-4xl mx-auto">
              <p className="text-[#B0A89E] text-lg leading-relaxed mb-10">{content.intro}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-display text-xl text-[#F5F0E8] mb-4">What We Do</h3>
                  <ul className="space-y-2">
                    {content.whatWeDo.map(item => (
                      <li key={item} className="text-sm text-[#8C8279]">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Florals</h3>
                  <ul className="space-y-2">
                    {content.florals.map(item => (
                      <li key={item} className="text-sm text-[#8C8279]">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Setup</h3>
                  <ul className="space-y-2">
                    {content.setup.map(item => (
                      <li key={item} className="text-sm text-[#8C8279]">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#242424] flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enquire"
                  className="px-6 py-3 bg-[#D4A5B5] text-white text-sm tracking-widest uppercase hover:bg-[#E8C4D0] transition-colors text-center"
                >
                  Enquire About This
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#242424] text-[#8C8279] text-sm tracking-widest uppercase hover:border-[#D4A5B5] hover:text-[#D4A5B5] transition-colors text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
