import type { Metadata } from 'next'
import EnquireForm from '@/components/forms/EnquireForm'
import { SITE, CONTACT } from '@/lib/content'

export const metadata: Metadata = {
  title: CONTACT.metaTitle,
  description: CONTACT.metaDescription,
}

export default function ContactPage() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Dark left panel — 40% */}
      <div className="md:w-2/5 bg-[#1C1C1A] text-[#F5F0E8] flex flex-col justify-between pt-32 pb-16 px-10 md:px-14 shrink-0">
        <div>
          <span className="gold-line mb-5" />
          <span className="font-accent text-[10px] tracking-[0.25em] text-[#8C8279] uppercase block mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-display-md text-[#F5F0E8] mb-4 leading-tight">
            {CONTACT.headline}
          </h1>
          <p className="font-body text-sm font-light text-[#8C8279] mb-12">
            {CONTACT.responseTime}
          </p>

          <div className="space-y-8">
            <div>
              <p className="font-accent text-[10px] tracking-[0.2em] text-[#8C8279]/60 uppercase mb-2">
                Location
              </p>
              <p className="font-body text-sm font-light text-[#F5F0E8]/80 leading-relaxed">
                {SITE.address}
              </p>
            </div>
            <div>
              <p className="font-accent text-[10px] tracking-[0.2em] text-[#8C8279]/60 uppercase mb-2">
                Phone
              </p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="font-body text-sm text-[#F5F0E8]/80 hover:text-[#B8963E] transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="font-accent text-[10px] tracking-[0.2em] text-[#8C8279]/60 uppercase mb-2">
                Email
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="font-body text-sm text-[#F5F0E8]/80 hover:text-[#B8963E] transition-colors"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="font-display text-xl italic text-[#F5F0E8]/30 mt-16">
          Where flowers tell your story.
        </p>
      </div>

      {/* Cream right panel — 60% */}
      <div className="flex-1 bg-[#F5F0E8] flex items-start justify-center pt-32 pb-16 px-8 md:px-16">
        <div className="w-full max-w-xl">
          <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-8">
            Start an Enquiry
          </p>
          <EnquireForm />
        </div>
      </div>
    </div>
  )
}
