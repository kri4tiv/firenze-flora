'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// template.tsx re-mounts on every route change (unlike layout.tsx which persists)
// This gives us a clean page-entrance fade on every navigation.
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
