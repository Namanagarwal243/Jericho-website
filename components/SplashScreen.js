'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 600)
    }, 2800)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background ${fadeOut ? 'fade-out' : ''}`}>
      <div className="logo-grow">
        <Image
          src="https://customer-assets.emergentagent.com/job_corporate-jericho/artifacts/vf99rh9y_JERICHO%20LOGO.png"
          alt="Jericho"
          width={700}
          height={350}
          className="w-auto h-auto max-w-[85vw] max-h-[45vh]"
          priority
        />
      </div>
    </div>
  )
}