import type { Metadata } from 'next'
import HeroSection from '@/components/ui/HeroSection'
import EnquireForm from '@/components/forms/EnquireForm'

export const metadata: Metadata = {
  title: 'Enquire | Firenze Flora Dubai',
  description: 'Enquire about wedding and event decor in Dubai. We respond within 24 hours.',
}

export default function EnquirePage() {
  return (
    <>
      <HeroSection
        title="Enquire"
        subtitle="Tell us your vision. We respond within 24 hours."
        imagePath="/images/heroes/hero-enquire.webp"
        imageAlt="Enquire about floral decor Dubai"
      />
      <div className="bg-[#0A0A0A]">
        <div className="container-site max-w-xl mx-auto py-20">
          <EnquireForm />
        </div>
      </div>
    </>
  )
}
