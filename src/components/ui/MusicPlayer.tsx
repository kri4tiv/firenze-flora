'use client'

import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = new Audio('/audio/background-music.mp3')
    audio.loop = true
    audio.volume = 0.82
    audio.preload = 'auto'
    audioRef.current = audio

    const tryPlay = () => {
      audio.play().catch(() => {})
    }

    audio.addEventListener('canplaythrough', tryPlay)

    const onInteraction = () => {
      if (audio.paused) audio.play().catch(() => {})
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
    document.addEventListener('click', onInteraction)
    document.addEventListener('touchstart', onInteraction)

    return () => {
      audio.pause()
      audio.src = ''
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
  }, [])

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (muted) {
      audio.muted = false
      if (audio.paused) audio.play().catch(() => {})
      setMuted(false)
    } else {
      audio.muted = true
      setMuted(true)
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={muted ? 'Unmute background music' : 'Mute background music'}
      title={muted ? 'Unmute music' : 'Mute music'}
      className={`fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${!muted ? 'music-playing' : ''}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: muted ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(212, 165, 181, 0.8)',
      }}
    >
      {muted ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  )
}
