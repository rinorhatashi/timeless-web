"use client"

import { useI18n } from '@/lib/i18n/context'
import { PageSkeleton } from './skeleton-loader'
import { ReactNode, useEffect, useState } from 'react'

interface ContentLoaderProps {
  children: ReactNode
  skeleton?: ReactNode
  minLoadingTime?: number
}

export const ContentLoader = ({ 
  children, 
  skeleton,
  minLoadingTime = 300
}: ContentLoaderProps) => {
  const { isLoading } = useI18n()
  const [hasMounted, setHasMounted] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null)

  // Track mount to prevent hydration issues
  useEffect(() => {
    setHasMounted(true)
    setLoadStartTime(Date.now())
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    if (isLoading) {
      // Track when loading started (if not already set)
      if (loadStartTime === null) {
        setLoadStartTime(Date.now())
      }
      setShouldRender(false)
      setShowContent(false)
    } else if (loadStartTime !== null) {
      // Calculate how long we've been loading
      const elapsed = Date.now() - loadStartTime
      const remainingTime = Math.max(0, minLoadingTime - elapsed)
      
      // Wait for minimum loading time, then show content
      const timer = setTimeout(() => {
        setShouldRender(true)
        // Small delay for smooth fade-in
        setTimeout(() => setShowContent(true), 50)
      }, remainingTime)
      
      return () => clearTimeout(timer)
    }
  }, [isLoading, minLoadingTime, loadStartTime, hasMounted])

  // Always show skeleton until fully ready
  if (!hasMounted || isLoading || !shouldRender) {
    return <>{skeleton || <PageSkeleton />}</>
  }

  return (
    <div 
      className="content-wrapper"
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
      }}
    >
      {children}
    </div>
  )
} 