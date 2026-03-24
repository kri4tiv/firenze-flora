'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function EnquireCTA() {
  return (
    <section className="bg-[#1C1C1A] py-20 md:py-28">
      <div className="container-site text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-accent text-[#B8963E] text-xs tracking-[0.25em] uppercase block mb-6">
            Based in Dubai · Available Across UAE
          </span>
          <h2 className="font-display text-display-lg text-[#FDFCFA] mb-6 max-w-2xl mx-auto">
            Ready to create something extraordinary?
          </h2>
          <p className="font-body text-sm font-light text-[#8C8279] mb-10 max-w-md mx-auto leading-relaxed">
            Tell us your vision, event date, and venue. We'll come back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquire"
              className="px-8 py-4 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] transition-colors duration-250"
            >
              Start Your Enquiry
            </Link>
            <a
              href="https://wa.me/971000000000?text=Hi%20Firenze%20Flora"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-body text-sm tracking-widest uppercase hover:border-white/50 transition-colors duration-250"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
