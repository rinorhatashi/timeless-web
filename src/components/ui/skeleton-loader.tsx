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
      className={`${width} ${height} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded ${className}`}
      style={{
        animation: 'shimmer 1.5s ease-in-out infinite'
      }}
    />
  )
}

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 animate-fadeIn">
      {/* Breadcrumb Skeleton */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-content">
          <div className="flex items-center gap-2">
            <Skeleton width="w-20" height="h-4" />
            <Skeleton width="w-2" height="h-4" />
            <Skeleton width="w-32" height="h-4" />
          </div>
        </div>
      </div>

      {/* Page Header Skeleton */}
      <div className="page-header">
        <div className="page-header-content">
          <Skeleton height="h-12" width="w-2/3 max-w-2xl" className="mb-4" />
          <Skeleton height="h-6" width="w-3/4 max-w-3xl" className="mb-2" />
          <Skeleton height="h-6" width="w-1/2 max-w-xl" />
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <section className="section">
        <div className="section-content">
          <div className="section-header mb-8">
            <Skeleton height="h-10" width="w-64" className="mb-4" />
            <Skeleton height="h-5" width="w-96" className="mb-2" />
            <Skeleton height="h-5" width="w-80" />
          </div>
          
          <div className="grid-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton width="w-12" height="h-12" className="rounded-lg" />
                  <Skeleton width="w-20" height="h-6" />
                </div>
                <Skeleton height="h-6" className="mb-3" />
                <Skeleton height="h-4" className="mb-2" />
                <Skeleton height="h-4" width="w-3/4" className="mb-4" />
                <div className="space-y-2 mt-4">
                  <Skeleton height="h-3" width="w-2/3" />
                  <Skeleton height="h-3" width="w-1/2" />
                  <Skeleton height="h-3" width="w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section Skeleton */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="grid-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton width="w-14" height="h-14" className="rounded-lg" />
                  <Skeleton height="h-6" width="w-40" />
                </div>
                <Skeleton height="h-4" className="mb-2" />
                <Skeleton height="h-4" width="w-5/6" />
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