'use client'

import { motion } from 'framer-motion'
import { HOME } from '@/lib/content'

export default function StatsStrip() {
  return (
    <section className="bg-[#0A0A0A] border-t border-b border-[#242424] py-14 md:py-16">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {HOME.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center md:text-left md:border-l md:border-[#242424] md:pl-8 first:border-l-0 first:pl-0"
            >
              <p className="font-display text-5xl md:text-6xl leading-none text-[#D4A5B5] mb-2">{stat.value}</p>
              <p className="font-accent text-sm tracking-[0.2em] uppercase text-[#8C8279]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
