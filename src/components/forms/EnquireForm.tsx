'use client'

import { useState } from 'react'
import { SITE } from '@/lib/content'

type Step = 1 | 2

interface FormData {
  eventType: string
  eventDate: string
  message: string
  name: string
  phone: string
  email: string
}

const eventTypes = ['Wedding', 'Birthday', 'Corporate', 'Opening', 'Anniversary', 'Other']

const input = 'bg-[#141414] border border-[#242424] text-[#F5F0E8] placeholder:text-[#4A4540] px-4 py-3.5 w-full focus:outline-none focus:border-[#D4A5B5] transition-colors duration-200 font-body text-base'

export default function EnquireForm() {
  const [step,      setStep]      = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [data,      setData]      = useState<FormData>({
    eventType: '', eventDate: '', message: '', name: '', phone: '', email: '',
  })

  const update = (field: keyof FormData, value: string) =>
    setData(prev => ({ ...prev, [field]: value }))

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="font-display text-display-sm text-[#F5F0E8] mb-4">
          Thank you. We&apos;ll be in touch within 24 hours.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-[#25D366] text-white font-body text-sm tracking-widest uppercase"
        >
          Continue on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-4 mb-12">
        {([1, 2] as Step[]).map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div className={`flex items-center gap-2 ${step === s ? 'opacity-100' : 'opacity-40'}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body transition-all ${step >= s ? 'bg-[#D4A5B5] text-[#0A0A0A]' : 'border border-[#242424] text-[#8C8279]'}`}>
                0{s}
              </span>
              <span className="font-body text-sm text-[#8C8279] uppercase tracking-widest">
                {s === 1 ? 'Event' : 'Contact'}
              </span>
            </div>
            {s < 2 && <div className={`w-16 h-px ${step > 1 ? 'bg-[#D4A5B5]' : 'bg-[#242424]'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => update('eventType', type)}
                className={`border px-4 py-3 text-sm font-body transition-all duration-200 ${
                  data.eventType === type
                    ? 'border-[#D4A5B5] text-[#F5F0E8] bg-[#D4A5B5]/10'
                    : 'border-[#242424] bg-[#0A0A0A] text-white hover:border-[#D4A5B5]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="relative mb-4">
            <input
              type="date"
              value={data.eventDate}
              onChange={(e) => update('eventDate', e.target.value)}
              onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
              className="w-full bg-[#141414] border border-[#242424] text-[#F5F0E8] text-base px-4 py-4 focus:outline-none focus:border-[#D4A5B5] transition-colors cursor-pointer"
              style={{ colorScheme: 'dark' }}
            />
          </div>
          <textarea
            rows={3}
            placeholder="Tell us about your vision..."
            value={data.message}
            onChange={e => update('message', e.target.value)}
            className={`${input} resize-none mb-8`}
          />
          <button
            onClick={() => data.eventType && setStep(2)}
            disabled={!data.eventType}
            className="w-full py-4 bg-[#D4A5B5] text-white font-body text-sm tracking-widest uppercase hover:bg-[#E8C4D0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={data.name}
            onChange={e => update('name', e.target.value)}
            className={`${input} mb-4`}
          />
          <input
            type="tel"
            placeholder="+971 00 000 0000"
            value={data.phone}
            onChange={e => update('phone', e.target.value)}
            className={`${input} mb-4`}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={data.email}
            onChange={e => update('email', e.target.value)}
            className={`${input} mb-8`}
          />
          <button
            onClick={() => (data.name && data.email) && setSubmitted(true)}
            disabled={!data.name || !data.email}
            className="w-full py-4 bg-[#D4A5B5] text-white font-body text-sm tracking-widest uppercase hover:bg-[#E8C4D0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors mb-6"
          >
            Send Enquiry
          </button>
          <p className="text-center font-body text-sm text-[#8C8279]">
            Prefer WhatsApp?{' '}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-[#D4A5B5] hover:text-[#E8C4D0]">
              Chat with us →
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
