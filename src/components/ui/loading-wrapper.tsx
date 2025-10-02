"use client"

import { ReactNode, useState, useEffect } from 'react'
import { PageSkeleton } from './skeleton-loader'

interface LoadingWrapperProps {
  children: ReactNode
  isLoading?: boolean
  skeleton?: ReactNode
  minLoadTime?: number
  className?: string
}

export const LoadingWrapper = ({
  children,
  isLoading = false,
  skeleton,
  minLoadTime = 200,
  className = ''
}: LoadingWrapperProps) => {
  const [showContent, setShowContent] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const minTimer = setTimeout(() => {
        setShouldRender(true)
        setTimeout(() => setShowContent(true), 50)
      }, minLoadTime)
      
      return () => clearTimeout(minTimer)
    } else {
      setShouldRender(false)
      setShowContent(false)
    }
  }, [isLoading, minLoadTime])

  if (isLoading || !shouldRender) {
    return <>{skeleton || <PageSkeleton />}</>
  }

  return (
    <div
      className={`transition-all duration-300 ${className}`}
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'translateY(0)' : 'translateY(10px)'
      }}
    >
      {children}
    </div>
  )
}

// Hook for managing async loading states
export const useAsyncLoading = (asyncFn: () => Promise<void>, deps: React.DependencyList = []) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const executeAsync = async () => {
      try {
        setIsLoading(true)
        setError(null)
        await asyncFn()
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('An error occurred'))
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    executeAsync()

    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { isLoading, error }
} 