'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = 'Firenze Flora'.split('')

export default function PageLoader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return
    if (!sessionStorage.getItem('ff_loaded')) {
      setVisible(true)
      sessionStorage.setItem('ff_loaded', '1')
      const t = setTimeout(() => setVisible(false), 2200)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[99999] bg-[#1C1C1A] flex items-center justify-center"
        >
          <div className="flex gap-[0.05em] overflow-hidden">
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.055,
                  duration: 0.45,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-display text-[#F5F0E8] text-3xl md:text-4xl tracking-[0.12em] font-light"
                style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
