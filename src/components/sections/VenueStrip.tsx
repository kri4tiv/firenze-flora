'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const venues = [
  'Atlantis The Palm',
  'Burj Al Arab',
  'Armani Hotel Dubai',
  'Four Seasons DIFC',
  'Palazzo Versace',
  'Jumeirah Al Naseem',
  'Address Downtown',
  'One&Only Royal Mirage',
]

export default function VenueStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 bg-[#1C1C1A]" ref={ref}>
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-[10px] tracking-[0.25em] text-[#8C8279]/70 uppercase text-center mb-6"
        >
          Venues we&apos;ve decorated
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap items-center justify-center gap-y-3"
        >
          {venues.map((venue, i) => (
            <React.Fragment key={venue}>
              <span className="font-accent text-sm tracking-widest text-[#F5F0E8]/70 uppercase whitespace-nowrap">{venue}</span>
              {i < venues.length - 1 && <span className="text-[#B8963E] mx-3 md:mx-4">·</span>}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
