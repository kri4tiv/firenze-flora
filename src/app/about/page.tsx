import type { Metadata } from 'next'
import StatsStrip from '@/components/sections/StatsStrip'
import CTAStrip from '@/components/sections/CTAStrip'
import { ABOUT } from '@/lib/content'

export const metadata: Metadata = {
  title: ABOUT.metaTitle,
  description: ABOUT.metaDescription,
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#0A0A0A] pt-40 pb-24">
        <div className="container-site">
          <h1 className="font-display text-display-lg text-[#F5F0E8]">About</h1>
          <p className="font-display text-display-sm text-[#F5F0E8]/60 italic mt-4">
            We don&apos;t decorate spaces. We compose experiences.
          </p>
        </div>
      </div>

      {/* Brand story */}
      <section className="bg-[#141414] py-24">
        <div className="container-site max-w-2xl mx-auto">
          <div className="space-y-6">
            {ABOUT.body.map((para, i) => (
              <p key={i} className="font-body text-base text-[#8C8279] leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Closing quote */}
      <section className="bg-[#141414] py-24 text-center">
        <div className="container-site max-w-2xl mx-auto">
          <p className="font-display text-display-sm italic text-[#F5F0E8]/80 leading-snug">
            &ldquo;Every arrangement we create is made to be remembered — not just on the day, but for years after.&rdquo;
          </p>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
