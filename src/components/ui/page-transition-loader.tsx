"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const PageTransitionLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)

  useEffect(() => {
    // Only show loader if pathname actually changed
    if (pathname !== prevPathname) {
      setIsLoading(true)
      setProgress(0)
      
      // Fast initial progress to give immediate feedback
      setProgress(30)
      
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 85) return prev
          return prev + Math.random() * 15
        })
      }, 150)

      // Complete loading after route is ready
      const timer = setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsLoading(false)
          setProgress(0)
        }, 150)
      }, 300)

      setPrevPathname(pathname)

      return () => {
        clearInterval(progressInterval)
        clearTimeout(timer)
      }
    }
  }, [pathname, prevPathname])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
        }}
      />
    </div>
  )
} 