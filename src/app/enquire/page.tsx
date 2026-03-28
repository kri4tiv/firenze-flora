import type { Metadata } from 'next'
import Image from 'next/image'
import EnquireForm from '@/components/forms/EnquireForm'

export const metadata: Metadata = {
  title: 'Enquire | Firenze Flora Dubai',
  description: 'Enquire about wedding and event decor in Dubai. We respond within 24 hours.',
}

export default function EnquirePage() {
  return (
    <>
      {/* Fixed background — behind everything including footer */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/heroes/hero-enquire.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          style={{ filter: 'blur(3px)', transform: 'scale(1.06)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Page content — flex column, min-h-screen pushes footer down */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="pt-36 pb-12 text-center px-6">
            <h1 className="font-display text-display-lg text-[#F5F0E8]">Enquire</h1>
            <p className="mt-4 text-lg text-[#F5F0E8]/70 font-body">
              Tell us your vision. We respond within 24 hours.
            </p>
          </div>

          <div className="max-w-xl mx-auto px-6 w-full pb-24">
            <EnquireForm />
          </div>
        </div>
      </div>
    </>
  )
}
