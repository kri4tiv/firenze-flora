import Link from 'next/link'
import { SITE } from '@/lib/content'

export default function CTAStrip() {
  return (
    <section className="bg-gradient-to-r from-[#B8849A] to-[#E8C4D0] py-20 text-center">
      <div className="container-site">
        <h2 className="font-display text-display-md text-[#0A0A0A]">
          Ready to create something extraordinary?
        </h2>
        <p className="font-body text-base text-[#0A0A0A]/70 mt-4 mb-10">
          Tell us your vision. We&apos;ll handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/enquire"
            className="bg-[#0A0A0A] text-[#F5F0E8] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#1A1A1A] transition-colors"
          >
            Start Your Enquiry
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-4 font-body text-sm tracking-widest uppercase hover:border-[#0A0A0A] transition-colors"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
