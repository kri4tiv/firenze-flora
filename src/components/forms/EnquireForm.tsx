'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 1 | 2 | 3

interface FormData {
  eventType: string
  eventDate: string
  venue: string
  budget: string
  name: string
  phone: string
  email: string
  message: string
}

const eventTypes = [
  'Wedding', 'Birthday', 'Corporate Event', 'Opening / Launch',
  'Anniversary', 'Baby Shower', 'Proposal', 'Other',
]

const budgetRanges = [
  'AED 3,000 – 8,000',
  'AED 8,000 – 20,000',
  'AED 20,000 – 50,000',
  'AED 50,000+',
  'Not sure yet',
]

export default function EnquireForm() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<FormData>({
    eventType: '', eventDate: '', venue: '', budget: '',
    name: '', phone: '', email: '', message: '',
  })

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async () => {
    // TODO: wire to form endpoint (Formspree, Resend, or owner's backend)
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-6">
          Thank You
        </span>
        <h2 className="font-display text-3xl text-[#1C1C1A] mb-4">
          We'll be in touch shortly.
        </h2>
        <p className="font-body text-sm text-[#8C8279] mb-8 max-w-sm mx-auto">
          Our team typically responds within 24 hours. For urgent requests, reach us on WhatsApp.
        </p>
        <a
          href="https://wa.me/971000000000?text=Hi%20Firenze%20Flora,%20I%20just%20submitted%20an%20enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#25D366] text-white font-body text-sm tracking-widest uppercase hover:bg-[#128C7E] transition-colors"
        >
          Continue on WhatsApp
        </a>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-10">
        {([1, 2, 3] as Step[]).map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-body transition-all duration-250 ${
                s === step
                  ? 'bg-[#B8963E] text-white'
                  : s < step
                  ? 'bg-[#B8963E]/30 text-[#B8963E]'
                  : 'bg-[#EDE6D8] text-[#8C8279]'
              }`}
            >
              {s < step ? '✓' : s}
            </div>
            {s < 3 && <div className={`flex-1 h-px w-8 ${s < step ? 'bg-[#B8963E]' : 'bg-[#EDE6D8]'}`} />}
          </div>
        ))}
        <span className="ml-2 font-body text-xs text-[#8C8279]">
          {step === 1 ? 'Event Details' : step === 2 ? 'Location & Budget' : 'Your Info'}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-2xl text-[#1C1C1A] mb-6">What are we celebrating?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => update('eventType', type)}
                  className={`py-3 px-3 text-xs font-body tracking-wide border transition-all duration-250 text-left ${
                    data.eventType === type
                      ? 'border-[#B8963E] bg-[#B8963E]/10 text-[#B8963E]'
                      : 'border-[#EDE6D8] text-[#2E2E2C] hover:border-[#B8963E]/40'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="mb-8">
              <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">
                Event Date
              </label>
              <input
                type="date"
                value={data.eventDate}
                onChange={(e) => update('eventDate', e.target.value)}
                className="w-full md:w-64 border border-[#EDE6D8] bg-white px-4 py-3 font-body text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B8963E] transition-colors"
              />
            </div>
            <button
              onClick={() => data.eventType && setStep(2)}
              disabled={!data.eventType}
              className="px-7 py-3.5 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-250"
            >
              Next →
            </button>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-2xl text-[#1C1C1A] mb-6">Venue & budget</h3>
            <div className="mb-6">
              <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">
                Venue / Area in Dubai
              </label>
              <input
                type="text"
                placeholder="e.g. Jumeirah, Downtown, DIFC, Palm..."
                value={data.venue}
                onChange={(e) => update('venue', e.target.value)}
                className="w-full border border-[#EDE6D8] bg-white px-4 py-3 font-body text-sm text-[#1C1C1A] placeholder:text-[#8C8279]/50 focus:outline-none focus:border-[#B8963E] transition-colors"
              />
            </div>
            <div className="mb-8">
              <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">
                Approximate Budget
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => update('budget', range)}
                    className={`py-3 px-4 text-xs font-body border text-left transition-all duration-250 ${
                      data.budget === range
                        ? 'border-[#B8963E] bg-[#B8963E]/10 text-[#B8963E]'
                        : 'border-[#EDE6D8] text-[#2E2E2C] hover:border-[#B8963E]/40'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-3.5 border border-[#EDE6D8] text-[#8C8279] font-body text-sm tracking-widest uppercase hover:border-[#8C8279] transition-colors duration-250"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-7 py-3.5 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] transition-colors duration-250"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-2xl text-[#1C1C1A] mb-6">How can we reach you?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full border border-[#EDE6D8] bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-[#B8963E] transition-colors"
                />
              </div>
              <div>
                <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+971 00 000 0000"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full border border-[#EDE6D8] bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-[#B8963E] transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={data.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full border border-[#EDE6D8] bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-[#B8963E] transition-colors"
              />
            </div>
            <div className="mb-8">
              <label className="font-accent text-xs tracking-widest text-[#8C8279] uppercase block mb-2">
                Tell us more (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Share your vision, inspiration, or any specific requirements..."
                value={data.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full border border-[#EDE6D8] bg-white px-4 py-3 font-body text-sm resize-none focus:outline-none focus:border-[#B8963E] transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-3.5 border border-[#EDE6D8] text-[#8C8279] font-body text-sm tracking-widest uppercase hover:border-[#8C8279] transition-colors duration-250"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!data.name || !data.email}
                className="px-7 py-3.5 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-250"
              >
                Send Enquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
