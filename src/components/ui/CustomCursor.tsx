'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let raf: number
    let x = -100
    let y = -100

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"]')) {
        dot.classList.add('cursor--hover')
      }
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"]')) {
        dot.classList.remove('cursor--hover')
      }
    }

    const render = () => {
      if (dot) {
        dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter, { passive: true })
    document.addEventListener('mouseout', onLeave, { passive: true })
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  )
}
