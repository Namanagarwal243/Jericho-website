'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import SplashScreen from '@/components/SplashScreen'

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash')
    if (hasSeenSplash) {
      setShowSplash(false)
    }
  }, [])

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true')
    setShowSplash(false)
  }

  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <title>Jericho - Premium Industrial Conglomerate</title>
        <meta name="description" content="Premium industrial conglomerate" />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="min-h-screen">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        {!showSplash && (
          <>
            <Navigation />
            <main className="pt-24">
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  )
}