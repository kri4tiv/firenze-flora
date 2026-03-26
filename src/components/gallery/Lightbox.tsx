'use client'

import { useState } from 'react'
import Image from 'next/image'
import YarlLightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  className?: string
}

export default function Lightbox({ images, className }: LightboxProps) {
  const [open,  setOpen]  = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="break-inside-avoid mb-3 overflow-hidden cursor-pointer group"
            onClick={() => { setIndex(i); setOpen(true) }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <YarlLightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map(img => ({ src: img.src }))}
        styles={{ container: { backgroundColor: '#0A0A0A' } }}
      />
    </>
  )
}
