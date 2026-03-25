import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { PACKAGES } from '@/lib/content'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: PACKAGES.metaTitle,
  description: PACKAGES.metaDescription,
}

export default function PackagesPage() {
  return (
    <>
      <div className="pt-32 pb-20 container-site">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Investment</span>
        <h1 className="font-display text-display-lg text-[#1C1C1A] mb-4">{PACKAGES.headline}</h1>
        <p className="font-body text-base font-light text-[#8C8279] max-w-lg leading-relaxed mb-2">
          {PACKAGES.intro}
        </p>
        <p className="font-body text-xs font-light text-[#8C8279]/70">{PACKAGES.note}</p>
      </div>

      <section className="container-site pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EDE6D8] overflow-visible mt-6">
          {PACKAGES.items.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                'p-10 flex flex-col relative',
                pkg.highlight
                  ? 'bg-[#1C1C1A] border-2 border-[#B8963E]'
                  : 'bg-[#F5F0E8]'
              )}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-accent text-[9px] tracking-widest text-white uppercase bg-[#B8963E] px-4 py-1.5 whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <span
                className={cn(
                  'font-accent text-xs tracking-widest uppercase block mb-3',
                  pkg.highlight ? 'text-[#B8963E]' : 'text-[#B8963E]'
                )}
              >
                {pkg.note}
              </span>
              <h2
                className={cn(
                  'font-display text-3xl mb-2',
                  pkg.highlight ? 'text-[#FDFCFA]' : 'text-[#1C1C1A]'
                )}
              >
                {pkg.name}
              </h2>
              <p className="font-display text-3xl text-[#B8963E] mb-8">{pkg.range}</p>
              <ul className="space-y-2 mb-10 flex-1">
                {pkg.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'font-body text-sm font-light flex items-start gap-2',
                      pkg.highlight ? 'text-[#F5F0E8]/80' : 'text-[#2E2E2C]'
                    )}
                  >
                    <span className="text-[#B8963E] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/enquire"
                className={cn(
                  'block text-center px-6 py-3 font-body text-sm tracking-widest uppercase transition-all duration-250',
                  pkg.highlight
                    ? 'bg-[#B8963E] text-white hover:bg-[#D4B062]'
                    : 'border border-[#B8963E] text-[#B8963E] hover:bg-[#B8963E] hover:text-white'
                )}
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
