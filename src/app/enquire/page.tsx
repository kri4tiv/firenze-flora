import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireForm from '@/components/forms/EnquireForm'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Enquire | Firenze Flora Dubai',
  description: 'Enquire about wedding and event decor in Dubai. Quick multi-step form plus WhatsApp.',
}

export default function EnquirePage() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <div className="pt-32 pb-20">
      <div className="container-site max-w-2xl">
        <span className="gold-line mb-5" />
        <h1 className="font-display text-display-lg text-[#1C1C1A] mb-4">
          Let&apos;s Create Something Extraordinary
        </h1>
        <p className="font-body text-base font-light text-[#8C8279] mb-12 leading-relaxed">
          Tell us about your event and we&apos;ll come back to you within 24 hours with ideas and next steps.
        </p>

        <EnquireForm />

        {/* Prefer to talk */}
        <div className="mt-16 pt-10 border-t border-[#EDE6D8]">
          <p className="font-display text-xl text-[#1C1C1A] mb-6">Prefer to talk?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 font-body text-sm text-[#2E2E2C] border border-[#EDE6D8] px-6 py-3 hover:border-[#1C1C1A] transition-colors duration-250"
            >
              Call us — {SITE.phoneDisplay}
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-[#25D366] border border-[#25D366]/40 px-6 py-3 hover:border-[#25D366] transition-colors duration-250"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
