"use client"

import { useI18n } from '@/lib/i18n/context'
import { PageSkeleton } from './skeleton-loader'
import { ReactNode, useEffect, useState } from 'react'

interface ContentLoaderProps {
  children: ReactNode
  skeleton?: ReactNode
}

export const ContentLoader = ({ children, skeleton }: ContentLoaderProps) => {
  const { isLoading } = useI18n()
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      // Small delay for smooth transition
      const timer = setTimeout(() => setShouldRender(true), 50)
      return () => clearTimeout(timer)
    } else {
      setShouldRender(false)
    }
  }, [isLoading])

  if (isLoading) {
    return <>{skeleton || <PageSkeleton />}</>
  }

  return (
    <div ˀ
      className="content-wrapper"
      style={{
        opacity: shouldRender ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out'
      }}
    >
      {children}
    </div>
  )
} 