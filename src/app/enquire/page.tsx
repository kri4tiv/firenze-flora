import type { Metadata } from 'next'
import EnquireForm from '@/components/forms/EnquireForm'

export const metadata: Metadata = {
  title: 'Enquire | Firenze Flora Dubai',
  description: 'Enquire about wedding and event decor in Dubai. We respond within 24 hours.',
}

export default function EnquirePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="container-site max-w-xl mx-auto pt-40 pb-20">
        <h1 className="font-display text-display-lg text-[#F5F0E8] mb-4">Enquire</h1>
        <p className="font-body text-base text-[#8C8279] mt-4 mb-12">
          We respond within 24 hours.
        </p>
        <EnquireForm />
      </div>
    </div>
  )
}
