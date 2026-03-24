'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface LightboxItem {
  id: number
  src: string
  alt: string
  category: string
}

interface LightboxGalleryProps {
  items: LightboxItem[]
  currentIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function LightboxGallery({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxGalleryProps) {
  const isOpen = currentIndex !== null
  const item = isOpen ? items[currentIndex] : null
  const prefersReduced = useReducedMotion()

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [isOpen, onClose, onPrev, onNext]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          key="lightbox-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
        >
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              className="relative flex items-center justify-center"
              style={{ maxWidth: '88vw', maxHeight: '82vh', width: '100%', height: '100%' }}
              initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: prefersReduced ? 1 : 0.97 }}
              transition={{ duration: prefersReduced ? 0.01 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="max-w-full max-h-[82vh] w-auto h-auto object-contain shadow-2xl"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption + counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <p className="font-accent text-[10px] text-white/50 tracking-[0.3em] uppercase">
              {item.category}
            </p>
            <p className="font-body text-[11px] text-white/30 mt-1">
              {currentIndex + 1} / {items.length}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white border border-white/15 hover:border-white/40 transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white border border-white/15 hover:border-white/40 transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
