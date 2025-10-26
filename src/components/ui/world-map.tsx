"use client"

import { useState } from 'react'
import { useTheme } from 'next-themes'

interface Office {
  id: string
  name: string
  country: string
  region: string
  coordinates: { x: number; y: number } // Pixel coordinates for the SVG
}

// Manually calculated coordinates for the world-map.svg (viewBox: 0 0 2000 857)
// These are based on the actual SVG dimensions and geographic positions
const offices: Office[] = [
  // North America
  { id: 'sf', name: 'San Francisco', country: 'USA', region: 'North America', coordinates: { x: 240, y: 350 } },
  { id: 'nyc', name: 'New York', country: 'USA', region: 'North America', coordinates: { x: 440, y: 320 } },
  { id: 'dc', name: 'Washington DC', country: 'USA', region: 'North America', coordinates: { x: 460, y: 340 } },
  { id: 'toronto', name: 'Toronto', country: 'Canada', region: 'North America', coordinates: { x: 420, y: 300 } },
  
  // Europe
  { id: 'london', name: 'London', country: 'UK', region: 'Europe', coordinates: { x: 990, y: 280 } },
  { id: 'stuttgart', name: 'Stuttgart', country: 'Germany', region: 'Europe', coordinates: { x: 1020, y: 290 } },
  { id: 'vienna', name: 'Vienna', country: 'Austria', region: 'Europe', coordinates: { x: 1050, y: 300 } },
  { id: 'zurich', name: 'Zurich', country: 'Switzerland', region: 'Europe', coordinates: { x: 1024, y: 310 } },
  { id: 'pristina', name: 'Pristina', country: 'Kosovo', region: 'Europe', coordinates: { x: 1080, y: 320 } },
  
  // Middle East
  { id: 'telaviv', name: 'Tel Aviv', country: 'Israel', region: 'Middle East', coordinates: { x: 1130, y: 380 } },
  { id: 'riyadh', name: 'Riyadh', country: 'Saudi Arabia', region: 'Middle East', coordinates: { x: 1180, y: 420 } },
  { id: 'abudhabi', name: 'Abu Dhabi', country: 'UAE', region: 'Middle East', coordinates: { x: 1210, y: 430 } },
]

export const WorldMap = () => {
  const { theme } = useTheme()
  const [hoveredOffice, setHoveredOffice] = useState<Office | null>(null)

  const handleOfficeHover = (office: Office) => {
    setHoveredOffice(office)
  }

  const handleOfficeLeave = () => {
    setHoveredOffice(null)
  }

  const getMarkerColor = (region: string) => {
    switch (region) {
      case 'North America':
        return '#60A5FA' // blue-400 - brighter for black background
      case 'Europe':
        return '#34D399' // emerald-400 - brighter for black background
      case 'Middle East':
        return '#A78BFA' // violet-400 - brighter for black background
      default:
        return '#9CA3AF' // gray-400
    }
  }

  const getMarkerColorLight = (region: string) => {
    switch (region) {
      case 'North America':
        return '#93C5FD' // blue-300 - lighter glow
      case 'Europe':
        return '#6EE7B7' // emerald-300 - lighter glow
      case 'Middle East':
        return '#C4B5FD' // violet-300 - lighter glow
      default:
        return '#D1D5DB' // gray-300
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-2">12</div>
          <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Locations</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-2">8</div>
          <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-2">250+</div>
          <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">People Involved</div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full bg-white dark:bg-black rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        {/* Map wrapper */}
        <div className="relative w-full aspect-[2000/857] bg-white dark:bg-black rounded-xl overflow-hidden">
          {/* Professional World Map SVG */}
          <svg
            viewBox="0 0 2000 857"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Glow effect for markers */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Shadow for markers */}
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* World Map Background */}
            <g className="world-map-base">
              {/* Load the SVG content using an image element */}
              <image
                href="/world-map.svg"
                x="0"
                y="0"
                width="2000"
                height="857"
                className="w-full h-full"
                style={{ 
                  filter: theme === 'dark' 
                    ? 'brightness(0.3) contrast(1.2) invert(1) hue-rotate(180deg)' 
                    : 'brightness(0.7) contrast(1.2) invert(0) hue-rotate(0deg)',
                }}
              />
            </g>

            {/* Office markers overlay */}
            {offices.map((office) => {
              const isHovered = hoveredOffice?.id === office.id
              const markerColor = getMarkerColor(office.region)
              const markerColorLight = getMarkerColorLight(office.region)
              
              return (
                <g
                  key={office.id}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => handleOfficeHover(office)}
                  onMouseLeave={handleOfficeLeave}
                  role="button"
                  tabIndex={0}
                  aria-label={`${office.name}, ${office.country}`}
                >
                  {/* Outer pulse ring */}
                  <circle
                    cx={office.coordinates.x}
                    cy={office.coordinates.y}
                    r={isHovered ? 30 : 22}
                    fill={markerColorLight}
                    opacity={isHovered ? 0.4 : 0.2}
                    className="transition-all duration-300"
                  >
                    <animate
                      attributeName="r"
                      values={isHovered ? "30;40;30" : "22;30;22"}
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values={isHovered ? "0.4;0.15;0.4" : "0.2;0.08;0.2"}
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Main marker */}
                  <circle
                    cx={office.coordinates.x}
                    cy={office.coordinates.y}
                    r={isHovered ? 12 : 10}
                    fill={markerColor}
                    stroke="white"
                    strokeWidth={isHovered ? 3 : 2.5}
                    filter="url(#shadow)"
                    className="transition-all duration-300"
                  />

                  {/* Inner highlight */}
                  <circle
                    cx={office.coordinates.x}
                    cy={office.coordinates.y}
                    r={isHovered ? 6 : 5}
                    fill="white"
                    opacity={0.7}
                    className="transition-all duration-300"
                  />

                  {/* Tooltip on hover */}
                  {isHovered && (
                    <g>
                      <rect
                        x={office.coordinates.x - 80}
                        y={office.coordinates.y - 70}
                        width="160"
                        height="50"
                        rx="10"
                        fill="#1F2937"
                        stroke="#374151"
                        strokeWidth="2"
                        opacity="0.95"
                        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
                      />
                      <text
                        x={office.coordinates.x}
                        y={office.coordinates.y - 40}
                        textAnchor="middle"
                        fill="white"
                        className="font-semibold"
                        style={{ fontSize: '18px' }}
                      >
                        {office.name}
                      </text>
                      <text
                        x={office.coordinates.x}
                        y={office.coordinates.y - 20}
                        textAnchor="middle"
                        fill="#D1D5DB"
                        style={{ fontSize: '14px' }}
                      >
                        {office.country}
                      </text>
                    </g>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Hovered Office Info Card - Mobile */}
        {hoveredOffice && (
          <div className="md:hidden mt-6 p-5 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <span 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getMarkerColor(hoveredOffice.region) }}
              ></span>
              <div className="font-semibold text-lg text-white">{hoveredOffice.name}</div>
            </div>
            <div className="text-sm text-gray-300 ml-6">{hoveredOffice.country}</div>
            <div className="text-xs text-gray-400 mt-1 ml-6">{hoveredOffice.region}</div>
          </div>
        )}
      </div>

      {/* Office List - Interactive */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 shadow-lg shadow-blue-500/30"></div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">North America</h4>
          </div>
          <ul className="space-y-3">
            {offices.filter(o => o.region === 'North America').map(office => (
              <li 
                key={office.id}
                className="text-gray-600 dark:text-gray-300 pl-7 hover:text-blue-400 transition-colors cursor-pointer"
                onMouseEnter={() => handleOfficeHover(office)}
                onMouseLeave={handleOfficeLeave}
              >
                {office.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded-full bg-green-600 dark:bg-green-400 shadow-lg shadow-green-500/30"></div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Europe</h4>
          </div>
          <ul className="space-y-3">
            {offices.filter(o => o.region === 'Europe').map(office => (
              <li 
                key={office.id}
                className="text-gray-600 dark:text-gray-300 pl-7 hover:text-emerald-400 transition-colors cursor-pointer"
                onMouseEnter={() => handleOfficeHover(office)}
                onMouseLeave={handleOfficeLeave}
              >
                {office.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400 shadow-lg shadow-purple-500/30"></div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Middle East</h4>
          </div>
          <ul className="space-y-3">
            {offices.filter(o => o.region === 'Middle East').map(office => (
              <li 
                key={office.id}
                className="text-gray-600 dark:text-gray-300 pl-7 hover:text-violet-400 transition-colors cursor-pointer"
                onMouseEnter={() => handleOfficeHover(office)}
                onMouseLeave={handleOfficeLeave}
              >
                {office.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sovereign Support Banner */}
      <div className="mt-10 text-center">
        <div className="sovereign-banner">
          <span className="sovereign-banner-text">
            Sovereign models supported:
          </span>
          <span className="sovereign-banner-countries">EU · US · KSA</span>
        </div>
      </div>
    </div>
  )
}