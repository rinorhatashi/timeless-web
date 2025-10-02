import React from 'react'

interface SkeletonProps {
  className?: string
  width?: string
  height?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4' 
}) => {
  return (
    <div 
      className={`${width} ${height} bg-gray-200 rounded animate-pulse ${className}`}
    />
  )
}

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Skeleton */}
      <section className="hero">
        <div className="hero-content">
          <Skeleton height="h-16" className="mb-6" />
          <Skeleton height="h-6" width="w-3/4" className="mb-4" />
          <Skeleton height="h-6" width="w-2/3" className="mb-8" />
          <div className="flex gap-4">
            <Skeleton width="w-32" height="h-12" />
            <Skeleton width="w-32" height="h-12" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <Skeleton height="h-8" width="w-64" className="mb-4" />
            <Skeleton height="h-6" width="w-96" className="mb-4" />
            <Skeleton height="h-6" width="w-80" />
          </div>
          
          <div className="grid-3 mt-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton width="w-12" height="h-12" />
                  <Skeleton width="w-20" height="h-6" />
                </div>
                <Skeleton height="h-6" className="mb-3" />
                <Skeleton height="h-4" className="mb-2" />
                <Skeleton height="h-4" width="w-3/4" className="mb-4" />
                <div className="space-y-2">
                  <Skeleton height="h-4" width="w-2/3" />
                  <Skeleton height="h-4" width="w-1/2" />
                  <Skeleton height="h-4" width="w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export const CardSkeleton = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <Skeleton width="w-12" height="h-12" />
        <Skeleton width="w-20" height="h-6" />
      </div>
      <Skeleton height="h-6" className="mb-3" />
      <Skeleton height="h-4" className="mb-2" />
      <Skeleton height="h-4" width="w-3/4" className="mb-4" />
      <div className="space-y-2">
        <Skeleton height="h-4" width="w-2/3" />
        <Skeleton height="h-4" width="w-1/2" />
        <Skeleton height="h-4" width="w-3/4" />
      </div>
    </div>
  )
}

export default Skeleton 