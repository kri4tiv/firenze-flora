'use client'

import { motion } from 'framer-motion'
import { HOME } from '@/lib/content'

export default function StatsStrip() {
  return (
    <section className="bg-[#1C1C1A] py-14 md:py-16">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {HOME.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center md:text-left md:border-l md:border-white/10 md:pl-8 first:border-l-0 first:pl-0"
            >
              <p className="font-display text-[2.5rem] md:text-[3rem] leading-none text-[#B8963E] mb-2">
                {stat.value}
              </p>
              <p className="font-accent text-[10px] tracking-[0.2em] uppercase text-[#8C8279]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
