'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    body: 'We begin with a conversation — your vision, your guest count, your aesthetic. No templates, no assumptions.',
  },
  {
    number: '02',
    title: 'Concept',
    body: 'Our designers translate your story into a mood board: colour palette, florals, lighting, and spatial flow.',
  },
  {
    number: '03',
    title: 'Curation',
    body: 'Every stem, every drape, every candle is sourced and tested. Details that guests notice without knowing why.',
  },
  {
    number: '04',
    title: 'Execution',
    body: 'Our team transforms the venue on the day, invisible and precise. You arrive to perfection.',
  },
]

export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-[#FDFCFA]" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="gold-line mb-4" />
          <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-3">
            Our Process
          </p>
          <h2 className="font-display text-display-md text-[#1C1C1A]">
            How we bring<br />your event to life
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[2.25rem] left-0 right-0 h-px bg-[#EDE6D8]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative"
              >
                {/* Number circle */}
                <div className="flex items-center gap-4 mb-5 md:mb-6">
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full border border-[#B8963E]/30 bg-[#FDFCFA] flex items-center justify-center shrink-0 md:shrink-0">
                    <span className="font-accent text-xs tracking-widest text-[#B8963E]">
                      {step.number}
                    </span>
                  </div>
                  {/* Vertical connecting line — mobile only */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute left-9 top-[4.5rem] w-px h-[calc(100%-4.5rem+3rem)] bg-[#EDE6D8]" />
                  )}
                </div>

                <h3 className="font-display text-xl text-[#1C1C1A] mb-3">{step.title}</h3>
                <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
