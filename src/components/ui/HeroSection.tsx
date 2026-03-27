import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  imagePath: string
  imageAlt: string
}

export default function HeroSection({ title, subtitle, imagePath, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          style={{ filter: 'blur(3px)', transform: 'scale(1.06)' }}
          sizes="100vw"
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
          }}
        />
        {/* Extra overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <h1 className="font-display text-display-lg text-[#F5F0E8]">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-[#F5F0E8]/80 font-body max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
