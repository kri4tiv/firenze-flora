import type { Metadata } from 'next'
import EnquireForm from '@/components/forms/EnquireForm'

export const metadata: Metadata = {
  title: 'Enquire | Firenze Flora Dubai',
  description: 'Enquire about wedding and event decor in Dubai. Quick multi-step form plus WhatsApp.',
}

export default function EnquirePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-site max-w-2xl">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Let's Talk</span>
        <h1 className="font-display text-display-lg text-[#1C1C1A] mb-4">Enquire</h1>
        <p className="font-body text-base font-light text-[#8C8279] mb-12 leading-relaxed">
          Tell us about your event and we'll come back to you within 24 hours with ideas and next steps.
        </p>
        <EnquireForm />
      </div>
    </div>
  )
}
