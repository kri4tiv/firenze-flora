import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CONTACT } from '@/lib/content'

export const metadata: Metadata = {
  title: CONTACT.metaTitle,
  description: CONTACT.metaDescription,
}

export default function ContactPage() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <div className="pt-32 pb-20 container-site">
      <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Get In Touch</span>
      <h1 className="font-display text-display-lg text-[#1C1C1A] mb-4">{CONTACT.headline}</h1>
      <p className="font-body text-sm font-light text-[#8C8279] mb-12">{CONTACT.responseTime}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="space-y-8">
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] uppercase mb-2">Location</p>
            <p className="font-body text-sm text-[#1C1C1A] leading-relaxed">{SITE.address}</p>
          </div>
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] uppercase mb-2">Phone</p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-body text-sm text-[#1C1C1A] hover:text-[#B8963E] transition-colors"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] uppercase mb-2">Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="font-body text-sm text-[#1C1C1A] hover:text-[#B8963E] transition-colors"
            >
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="font-accent text-xs tracking-widest text-[#8C8279] uppercase mb-2">WhatsApp</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors"
            >
              Chat with us →
            </a>
          </div>
          <div className="pt-4">
            <Link
              href="/enquire"
              className="inline-block px-7 py-3.5 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] transition-colors"
            >
              Start an Enquiry
            </Link>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="aspect-square md:aspect-auto min-h-64 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785571654!2d55.2242!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTMnMjcuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '320px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Firenze Flora location — Sheikh Zayed Road, Dubai"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  )
}
