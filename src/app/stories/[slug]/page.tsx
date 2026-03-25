import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'

interface StoryContent {
  slug: string
  title: string
  category: string
  date: string
  service: string
  location: string
  heroSeed: number
  heroImage?: string
  brief: string
  approach: string[]
  created: string[]
  result: string
  galleryImages: Array<{ src?: string; seed: number; alt: string; aspect: 'landscape' | 'portrait' }>
}

const stories: StoryContent[] = [
  {
    slug: 'arabic-wedding-downtown-dubai',
    title: 'An Arabic Wedding in Downtown Dubai',
    category: 'Weddings',
    date: 'March 2025',
    service: '/services/weddings',
    location: 'Address Downtown, Dubai',
    heroSeed: 96,
    heroImage: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp',
    brief: 'The family came to us with a single instruction: make it feel like a garden suspended in the sky. The bride had grown up surrounded by jasmine and rose; the groom\'s family had a tradition of outdoor gatherings under fig trees. They wanted their wedding — set in a tower overlooking the Burj Khalifa — to honour both.',
    approach: [
      'We visited the venue at three different times of day to understand how the light moved across the space. The evening gold hour was extraordinary — we decided the florals should work with it, not compete.',
      'Our concept was layered verticals: hanging installations that pulled the eye upward, anchored by low centrepieces at table level. We used white and blush garden roses, jasmine vine, cascading amaranthus, and sculptural branches to create density without heaviness.',
      'Every element was selected to be readable from across the ballroom, but also intimate enough to reward a guest who leaned in. The scent was as important as the visuals — we sourced freshly cut jasmine to perfume the entrance corridor.',
    ],
    created: [
      '14 suspended floral chandeliers, each hand-assembled on-site over six hours',
      '22 low centrepieces in oxidised brass vessels',
      'A 4-metre floral arch framing the main entrance',
      'Scattered petal pathways from entrance to reception floor',
      'Custom floral crown and bridal arrangement in garden rose and lily of the valley',
    ],
    result: 'The wedding was attended by over 400 guests. The bride messaged us at midnight: "Every single person asked me who did the flowers. I told them I know a secret." That is the Firenze Flora signature — work so considered that guests feel it before they name it.',
    galleryImages: [
      { src: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp', seed: 96, alt: 'Arabic wedding floral arch Downtown Dubai', aspect: 'landscape' },
      { src: '/images/portfolio/arabic-wedding/arabic-wedding-02.webp', seed: 10, alt: 'Arabic wedding centrepiece arrangement', aspect: 'portrait' },
      { src: '/images/portfolio/arabic-wedding/arabic-wedding-03.webp', seed: 58, alt: 'Suspended floral chandelier installation', aspect: 'landscape' },
      { src: '/images/portfolio/arabic-wedding/arabic-wedding-04.webp', seed: 64, alt: 'Wedding entrance floral decor', aspect: 'portrait' },
      { seed: 40, alt: 'Bridal table floral arrangement', aspect: 'landscape' },
    ],
  },
  {
    slug: 'corporate-gala-difc',
    title: 'A Corporate Gala at DIFC',
    category: 'Corporate',
    date: 'February 2025',
    service: '/services/events',
    location: 'Gate Building, DIFC, Dubai',
    heroSeed: 38,
    heroImage: '/images/portfolio/reception-decor/reception-decor-01.webp',
    brief: 'A global financial services firm needed their annual client gala to feel like a celebration, not a conference. Three hundred guests, a strict brand palette of navy and gold, and a head of events who had seen every tired corporate floral arrangement in existence. The brief was explicit: surprise us.',
    approach: [
      'Corporate events fail florally when they default to symmetry and safety. We went structural instead — dramatic single-variety installations that referenced the client\'s brand geometry without resorting to logo placement.',
      'The colour palette (navy, gold, ivory) gave us room to work with dark foliage alongside bright blooms. We used deep navy agapanthus, white lisianthus, and gold spray roses. The result read as intentional rather than accidental.',
      'We staged the installations to create a journey through the event: arrival moment at the entrance, a statement piece behind the podium, and a series of smaller arrangements designed to invite conversation at cocktail tables.',
    ],
    created: [
      '1 statement installation (2.5m high) for the main stage backdrop',
      '3 entrance column arrangements in dark foliage and white blooms',
      '18 cocktail table arrangements with low-profile brass bowls',
      '6 buffet styling arrangements in coordinated vessels',
    ],
    result: 'The client\'s global head of communications called the next morning to ask if we could be booked for their Singapore office launch. The photos circulated internally for weeks. That is what florals can do for a brand — make the room memorable.',
    galleryImages: [
      { src: '/images/portfolio/reception-decor/reception-decor-01.webp', seed: 38, alt: 'Corporate gala DIFC main installation', aspect: 'landscape' },
      { src: '/images/portfolio/reception-decor/reception-decor-02.webp', seed: 1, alt: 'Corporate event table arrangements', aspect: 'portrait' },
      { seed: 2, alt: 'Entrance floral columns DIFC', aspect: 'landscape' },
      { seed: 30, alt: 'Corporate cocktail table florals', aspect: 'portrait' },
      { seed: 62, alt: 'Stage backdrop floral installation', aspect: 'landscape' },
    ],
  },
  {
    slug: 'indian-wedding-palm',
    title: 'An Indian Wedding on the Palm',
    category: 'Weddings',
    date: 'January 2025',
    service: '/services/weddings',
    location: 'Atlantis The Palm, Dubai',
    heroSeed: 81,
    heroImage: '/images/portfolio/indian-wedding/indian-wedding-01.webp',
    brief: 'Three days, two ceremonies, one spectacular location. The family had a clear vision — the mehndi should feel like a garden at dusk, the baraat should feel like a procession through a flower market, and the reception should feel like nothing anyone at Atlantis had ever seen before. No pressure.',
    approach: [
      'Indian weddings require a fundamentally different approach to Western ones. Colour is not accent — it is the primary language. We embraced this fully, building palettes that shifted across the three days: terracotta and marigold for mehndi, deep crimson and gold for baraat, soft blush and champagne for the reception.',
      'We sourced marigolds from two suppliers to ensure the freshness and volume required for the 800-guest reception garlands alone. All arrangements were assembled the morning of each event to preserve the integrity of the blooms in Dubai\'s heat.',
      'The mandap was our centrepiece work: a 6-metre structure woven entirely in fresh flowers, including hanging orchid columns, a floral ceiling canopy, and a base ring of white rose and greenery. It took our team 11 hours to construct.',
    ],
    created: [
      'Mehndi: garden-inspired lounge florals, ceiling drape installation, 40 low centrepieces',
      'Baraat: processional garlands, floral pathway markers, entrance arch in marigold and rose',
      'Reception: 6-metre mandap structure, 60 reception centrepieces, bride\'s hanging entrance installation',
      'Bridal arrangements: bouquet, hair flowers, and flower jewellery pieces',
    ],
    result: 'The reception mandap photograph became one of the most shared images from any Dubai wedding that season. The family have since referred three couples to us. The bride\'s mother told us it was the only aspect of the three days that made her cry before the ceremony.',
    galleryImages: [
      { src: '/images/portfolio/indian-wedding/indian-wedding-01.webp', seed: 81, alt: 'Indian wedding mandap Atlantis Palm Dubai', aspect: 'landscape' },
      { src: '/images/portfolio/indian-wedding/indian-wedding-02.webp', seed: 20, alt: 'Indian wedding mehndi garden florals', aspect: 'portrait' },
      { src: '/images/portfolio/indian-wedding/indian-wedding-03.webp', seed: 40, alt: 'Marigold baraat processional arch', aspect: 'landscape' },
      { seed: 58, alt: 'Reception table centrepieces Indian wedding', aspect: 'portrait' },
      { seed: 10, alt: 'Bridal bouquet Indian wedding flowers', aspect: 'landscape' },
    ],
  },
  {
    slug: 'intimate-proposal-jumeirah',
    title: 'An Intimate Proposal in Jumeirah',
    category: 'Private',
    date: 'December 2024',
    service: '/services/events',
    location: 'Private Residence, Jumeirah, Dubai',
    heroSeed: 62,
    brief: 'He had planned it for eight months. He knew exactly which room in their home she would be led to, and he knew the moment the door opened had to be perfect. He called us three weeks before, slightly panicked, and described what he was imagining: rose petals, yes, but not the hotel-package version. Something personal. Something that looked like it had been placed by hand, not staged.',
    approach: [
      'Proposal styling is intimate work. We visited the apartment to understand the space — the natural light, the existing colour palette of the furniture, the height of the ceilings. The room was cream and warm wood. We decided to work within that, not against it.',
      'We built a floating arch of garden roses and trailing greenery in the centre of the room. Below it, a low arrangement of peonies and ranunculus on a mirrored tray. The petal pathway was made from individual petals placed by hand — no bulk scattering — so that each step felt deliberate.',
      'We finished with candlelight coordination: flameless candles at floor level along the pathway, a single real candle on the table where the ring box would sit. We were done two hours before the moment and had left the apartment before either of them arrived.',
    ],
    created: [
      'Standing floral arch in garden rose and eucalyptus',
      'Hand-placed rose petal pathway, entrance to arch',
      'Low centrepiece arrangement in peony and ranunculus',
      'Candle coordination: 18 flameless + 1 pillar candle at proposal point',
    ],
    result: 'She said yes immediately. He sent us a photograph at 10pm that night. The room looked exactly as it had when we left it — which told us it had worked.',
    galleryImages: [
      { seed: 62, alt: 'Intimate proposal setup Jumeirah Dubai', aspect: 'landscape' },
      { seed: 20, alt: 'Floral arch proposal roses Dubai', aspect: 'portrait' },
      { seed: 50, alt: 'Rose petal pathway proposal', aspect: 'landscape' },
      { seed: 70, alt: 'Candlelit proposal arrangement', aspect: 'portrait' },
      { seed: 80, alt: 'Peony and ranunculus centrepiece', aspect: 'landscape' },
    ],
  },
  {
    slug: 'brand-launch-event',
    title: 'A Brand Launch That Turned Heads',
    category: 'Corporate',
    date: 'November 2024',
    service: '/services/events',
    location: 'Museum of the Future, Dubai',
    heroSeed: 2,
    heroImage: '/images/portfolio/flower-arch/flower-arch-01.webp',
    brief: 'A luxury skincare brand launching in the UAE for the first time. The brand identity was botanical — their entire product line was built on rare flower extracts. They needed the launch event to make that tangible. Guests should feel surrounded by the brand, not merely at an event with branded banners. The venue was the Museum of the Future: futuristic, curved, dramatic.',
    approach: [
      'The tension between the botanical brand and the architectural venue was actually the creative opportunity. We proposed contrast: structured contemporary forms built from organic materials. Think geometric frames wound with living botanicals, not natural arrangements on modern shelving.',
      'We sourced flowers that appeared in the brand\'s ingredient list — damask rose, blue lotus, white peony — and made them the story of the decor. Labels were incorporated into the arrangements so guests could read what they were seeing.',
      'The hero installation was a 3-metre circular frame suspended above the central tasting table, wound entirely in damask rose and trailing jasmine. The scent was powerful enough to be noticed from the entrance.',
    ],
    created: [
      '1 suspended circular hero installation (3m diameter) in damask rose and jasmine',
      '4 geometric frame wall installations with botanical labelling',
      '16 product table arrangements in individual bloom species',
      'Entrance statement arch with brand colour palette in flower',
    ],
    result: 'The launch was covered in three regional lifestyle publications. The hero installation photograph was used as the brand\'s UAE social media header for six months. The brand booked us for their Riyadh launch three months later.',
    galleryImages: [
      { src: '/images/portfolio/flower-arch/flower-arch-01.webp', seed: 2, alt: 'Brand launch flower arch Museum of the Future Dubai', aspect: 'landscape' },
      { src: '/images/portfolio/flower-arch/flower-arch-02.webp', seed: 1, alt: 'Geometric botanical installation brand launch', aspect: 'portrait' },
      { seed: 38, alt: 'Suspended rose installation brand event', aspect: 'landscape' },
      { seed: 30, alt: 'Product table floral arrangements', aspect: 'portrait' },
      { seed: 62, alt: 'Brand launch entrance floral arch', aspect: 'landscape' },
    ],
  },
  {
    slug: 'western-garden-wedding',
    title: 'A Western Garden Wedding',
    category: 'Weddings',
    date: 'October 2024',
    service: '/services/weddings',
    location: 'One&Only Royal Mirage, Dubai',
    heroSeed: 10,
    heroImage: '/images/portfolio/iranian-wedding/iranian-wedding-01.webp',
    brief: 'October in Dubai is the beginning of the golden season — warm days, cool evenings, and a sky that turns extraordinary colours at dusk. The couple wanted their outdoor ceremony to feel like an English garden transplanted to the desert: abundant, slightly wild, romantic without being fussy. She had a Pinterest board of six years.',
    approach: [
      'We had one advantage with October weddings: the temperature allows blooms to hold through a full outdoor ceremony and dinner, which is not always possible in Dubai. We could work with more delicate flowers than we might in the summer months.',
      'The aesthetic required controlled abundance — arrangements that looked almost overgrown, but were in fact precisely engineered to maintain shape through a four-hour outdoor event. We used garden roses, sweet peas, ranunculus, foxglove, and meadow grasses in ivory, blush, and sage.',
      'The aisle installation was our favourite element: a double row of flower column arrangements in varying heights, creating a cathedral effect without a ceiling. The ceremony arch was constructed over three hours on the morning of the wedding, using branches brought from a supplier in the Netherlands.',
    ],
    created: [
      'Ceremony aisle: 18 column arrangements in graduating heights',
      'Ceremony arch: 3m branch-and-floral structure in garden rose and sweet pea',
      '35 reception centrepieces in three size variations',
      'Bridal party: bouquet, buttonholes, and flower crowns for two bridesmaids',
      'Sweetheart table: dedicated floral styling in cascading arrangement',
    ],
    result: 'The ceremony photographs looked like they were taken in the English countryside — which was exactly the brief. The wedding planner told us afterward that the florals were the most discussed element of the day among guests. The couple sent us a card from their honeymoon.',
    galleryImages: [
      { src: '/images/portfolio/iranian-wedding/iranian-wedding-01.webp', seed: 10, alt: 'Western garden wedding ceremony Dubai', aspect: 'landscape' },
      { seed: 58, alt: 'Garden wedding aisle floral columns', aspect: 'portrait' },
      { seed: 96, alt: 'Wedding ceremony arch branch and rose', aspect: 'landscape' },
      { seed: 64, alt: 'Garden wedding reception centrepieces', aspect: 'portrait' },
      { seed: 81, alt: 'Bridal bouquet garden roses sweet pea', aspect: 'landscape' },
    ],
  },
]

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = stories.find((s) => s.slug === params.slug)
  const title = story?.title ?? 'Story'
  return {
    title: `${title} | Firenze Flora`,
    description: `${title} — ${story?.location ?? 'Dubai'}. A story of precision and beauty by Firenze Flora.`,
  }
}

export default function StoryPage({ params }: Props) {
  const story = stories.find((s) => s.slug === params.slug)
  if (!story) return null

  const serviceLabel = story.service.includes('weddings') ? 'Wedding Services' : 'Event Services'

  return (
    <>
      {/* Hero image — full width */}
      <div className="relative w-full h-[55vh] md:h-[70vh] bg-[#1C1C1A] overflow-hidden">
        <Image
          src={story.heroImage ?? `https://picsum.photos/seed/${story.heroSeed}/1920/1080`}
          alt={story.title}
          fill
          className="object-cover opacity-80"
          sizes="100vw"
          priority
          unoptimized={!story.heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent" />

        {/* Story meta overlay */}
        <div className="absolute bottom-0 left-0 right-0 container-site pb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/stories" className="font-body text-xs text-white/70 hover:text-white transition-colors">
              ← Stories
            </Link>
            <span className="text-white/30">·</span>
            <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase">{story.category}</span>
            <span className="text-white/30">·</span>
            <span className="font-body text-xs text-white/60">{story.date}</span>
          </div>
          <h1 className="font-display text-display-md md:text-display-lg text-[#F5F0E8] max-w-3xl leading-tight">
            {story.title}
          </h1>
          <p className="font-accent text-[10px] tracking-[0.2em] text-[#8C8279] uppercase mt-3">
            {story.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="bg-[#FDFCFA]">
        <div className="container-site py-20 max-w-[860px]">

          {/* The Brief */}
          <section className="mb-16">
            <p className="font-accent text-[10px] tracking-[0.25em] text-[#B8963E] uppercase mb-6">
              The Brief
            </p>
            <p className="font-display text-display-sm text-[#1C1C1A] italic leading-snug mb-6">
              &ldquo;{story.brief.split('.')[0]}.&rdquo;
            </p>
            <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed">
              {story.brief.split('.').slice(1).join('.').trim()}
            </p>
          </section>

          {/* Gallery strip */}
          <section className="mb-16 -mx-4 md:-mx-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-4 md:px-8">
              {story.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={
                    'relative overflow-hidden bg-[#EDE6D8] ' +
                    (i === 0 ? 'col-span-2 md:col-span-2 aspect-[3/2]' : 'aspect-square')
                  }
                >
                  <Image
                    src={img.src ?? `https://picsum.photos/seed/${img.seed}/800/600`}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 20vw"
                    unoptimized={!img.src}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16">
            <p className="font-accent text-[10px] tracking-[0.25em] text-[#B8963E] uppercase mb-6">
              Our Approach
            </p>
            <div className="space-y-5">
              {story.approach.map((paragraph, i) => (
                <p key={i} className="font-body text-base font-light text-[#2E2E2C] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* What We Created */}
          <section className="mb-16 py-12 border-t border-b border-[#EDE6D8]">
            <p className="font-accent text-[10px] tracking-[0.25em] text-[#B8963E] uppercase mb-6">
              What We Created
            </p>
            <ul className="space-y-3">
              {story.created.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#B8963E] shrink-0" />
                  <p className="font-body text-sm font-light text-[#2E2E2C] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* The Result */}
          <section className="mb-16">
            <p className="font-accent text-[10px] tracking-[0.25em] text-[#B8963E] uppercase mb-6">
              The Result
            </p>
            <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed">
              {story.result}
            </p>
          </section>

          {/* CTA links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={story.service}
              className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] border border-[#B8963E] px-5 py-3 hover:bg-[#B8963E] hover:text-white transition-all duration-250"
            >
              {serviceLabel} →
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 font-body text-sm text-[#8C8279] border border-[#EDE6D8] px-5 py-3 hover:border-[#8C8279] transition-colors duration-250"
            >
              More Stories
            </Link>
          </div>
        </div>
      </article>

      <EnquireCTA />
    </>
  )
}
