import type { Metadata } from 'next'
import { SITE, CONTACT } from '@/lib/content'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: CONTACT.metaTitle,
  description: CONTACT.metaDescription,
}

export default function ContactPage() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-40 pb-24">
      <div className="container-site max-w-4xl">
        <h1 className="font-display text-display-lg text-[#F5F0E8]">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Left */}
          <div>
            <h2 className="font-display text-display-sm text-[#F5F0E8]">Get in touch</h2>
            <p className="font-body text-base text-[#8C8279] mt-4 leading-relaxed">
              We&apos;d love to hear about your event. Reach us directly or use the enquiry form.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-[#4A4540] mb-1">Phone</p>
                <a href={`tel:${SITE.phoneTel}`} className="font-body text-base text-[#F5F0E8] hover:text-[#D4A5B5] transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-[#4A4540] mb-1">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-body text-base text-[#F5F0E8] hover:text-[#D4A5B5] transition-colors">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-[#4A4540] mb-1">WhatsApp</p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-body text-base text-[#D4A5B5] hover:text-[#E8C4D0] transition-colors">
                  Chat with us →
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-[#4A4540] mb-1">Address</p>
                <p className="font-body text-base text-[#F5F0E8]">{SITE.address}</p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
