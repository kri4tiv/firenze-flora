'use client'

import { useState } from 'react'
import { SITE } from '@/lib/content'

const input = 'bg-[#141414] border border-[#242424] text-[#F5F0E8] placeholder:text-[#4A4540] px-4 py-3.5 w-full focus:outline-none focus:border-[#D4A5B5] transition-colors duration-200 font-body text-base'

export default function ContactForm() {
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [message, setMessage] = useState('')
  const [sent,    setSent]    = useState(false)

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  if (sent) {
    return (
      <div className="py-8">
        <p className="font-display text-2xl text-[#F5F0E8] mb-4">Message sent.</p>
        <p className="font-body text-base text-[#8C8279]">We&apos;ll get back to you within 24 hours.</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-3 bg-[#25D366] text-white font-body text-sm tracking-widest uppercase">
          Or chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <input
        type="text" placeholder="Your name"
        value={name} onChange={e => setName(e.target.value)}
        className={input}
      />
      <input
        type="email" placeholder="your@email.com"
        value={email} onChange={e => setEmail(e.target.value)}
        className={input}
      />
      <textarea
        rows={4} placeholder="Tell us about your event..."
        value={message} onChange={e => setMessage(e.target.value)}
        className={`${input} resize-none`}
      />
      <button
        onClick={() => (name && email) && setSent(true)}
        disabled={!name || !email}
        className="w-full py-4 bg-[#D4A5B5] text-white font-body text-sm tracking-widest uppercase hover:bg-[#E8C4D0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Send Message
      </button>
    </div>
  )
}
