import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TESTIMONIALS, SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Firenze Flora | Wedding & Event Decor in Dubai',
  description: 'Premium floral and event decor studio in Dubai. Bespoke wedding styling, corporate events, and private celebrations. Enquire today.',
}

const galleryImages = [
  { src: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp', alt: 'Arabic wedding floral decor Dubai', colSpan: true },
  { src: '/images/portfolio/indian-wedding/indian-wedding-01.webp',  alt: 'Indian wedding florals Dubai' },
  { src: '/images/portfolio/centrepiece/centrepiece-01.webp',        alt: 'Wedding centrepiece Dubai' },
  { src: '/images/portfolio/flower-arch/flower-arch-01.webp',        alt: 'Flower arch Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-01.webp',alt: 'Reception decor Dubai' },
  { src: '/images/portfolio/iranian-wedding/iranian-wedding-01.webp',alt: 'Iranian wedding Dubai' },
  { src: '/images/portfolio/corporate-hero.webp',                    alt: 'Corporate event florals Dubai' },
  { src: '/images/portfolio/bridal-bouquet.webp',                    alt: 'Bridal bouquet Dubai' },
]

const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/portfolio/arabic-wedding/arabic-wedding-01.webp"
          alt="Firenze Flora — wedding decor Dubai"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-site pb-16 md:pb-24 w-full">
          <h1 className="font-display text-display-xl text-[#FDFCFA] mb-5 max-w-4xl leading-[1.05]">
            Where flowers<br />
            <em>tell your story.</em>
          </h1>
          <p className="font-body text-base text-[#F5F0E8]/60 mb-8">
            Premium floral and event decor. Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/enquire"
              className="px-7 py-3 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] transition-colors"
            >
              Enquire Now
            </Link>
            <Link
              href="/gallery"
              className="px-7 py-3 border border-white/30 text-white font-body text-sm tracking-widest uppercase hover:border-white/70 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. BRAND STATEMENT ── */}
      <section className="bg-[#141414] py-24 md:py-32">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="font-display text-display-sm text-[#F5F0E8]/90 italic leading-snug">
            &ldquo;At Firenze Flora, we possess the artistry and passion to craft the extraordinary.
            Whether it&apos;s a wedding, a corporate event, or a private celebration — we transform
            your vision into reality.&rdquo;
          </p>
          <div className="w-[60px] h-px bg-[#B8963E] mx-auto my-8" />
          <p className="font-body text-sm tracking-widest text-[#8C8279] uppercase">
            14 Years &nbsp;·&nbsp; 5,000+ Events &nbsp;·&nbsp; 3,000+ Clients
          </p>
        </div>
      </section>

      {/* ── 3. SERVICES — two cards ── */}
      <div className="flex flex-col md:flex-row">
        {/* Card 1 — Weddings */}
        <Link href="/weddings" className="relative flex-1 min-h-[70vh] group block overflow-hidden">
          <Image
            src="/images/portfolio/arabic-wedding/arabic-wedding-01.webp"
            alt="Wedding decor Dubai"
            fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 p-10 md:p-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#B8963E] mb-3">Weddings</p>
            <h2 className="font-display text-display-md text-white leading-tight">
              Where your story begins.
            </h2>
            <span className="block font-body text-sm text-white/70 group-hover:text-white mt-4 transition-colors">
              Explore →
            </span>
          </div>
        </Link>

        {/* Card 2 — Events */}
        <Link href="/events" className="relative flex-1 min-h-[70vh] group block overflow-hidden">
          <Image
            src="/images/portfolio/corporate-hero.webp"
            alt="Event decor Dubai"
            fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 p-10 md:p-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#B8963E] mb-3">Events</p>
            <h2 className="font-display text-display-md text-white leading-tight">
              Every moment, perfected.
            </h2>
            <span className="block font-body text-sm text-white/70 group-hover:text-white mt-4 transition-colors">
              Explore →
            </span>
          </div>
        </Link>
      </div>

      {/* ── 4. GALLERY PREVIEW ── */}
      <section className="bg-[#141414] py-24">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-display-md text-[#F5F0E8]">Selected Work</h2>
            <Link href="/gallery" className="font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`overflow-hidden group ${(img as { colSpan?: boolean }).colSpan ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-16">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242424]">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#0A0A0A] p-10 flex flex-col">
                <div className="flex gap-1 mb-6" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#B8963E] text-sm" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="font-display text-xl italic text-[#F5F0E8]/80 leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-body text-sm font-medium text-[#F5F0E8]">{t.author}</p>
                  <p className="font-body text-xs text-[#B8963E] tracking-wide mt-1">{t.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA STRIP ── */}
      <section className="bg-[#B8963E] py-20 text-center">
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
    </>
  )
}
