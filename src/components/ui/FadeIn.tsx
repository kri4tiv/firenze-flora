'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'none'
  className?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up'   ? 24 : 0,
        x: direction === 'left' ? -24 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
