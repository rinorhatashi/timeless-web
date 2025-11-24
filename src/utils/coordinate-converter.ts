// Geographic Coordinate to SVG Converter
// For world-map.svg with viewBox="0 0 2000 857"

interface CityCoordinates {
  name: string
  lat: number  // Latitude
  lng: number  // Longitude
  svgX: number // Calculated SVG X coordinate
  svgY: number // Calculated SVG Y coordinate
}

const convertGeoToSVG = (lat: number, lng: number) => {
  // SVG viewBox dimensions
  const svgWidth = 2000
  const svgHeight = 857
  
  // Convert longitude (-180 to 180) to SVG X (0 to 2000)
  const svgX = ((lng + 180) / 360) * svgWidth
  
  // Convert latitude (-90 to 90) to SVG Y (0 to 857)
  const svgY = ((90 - lat) / 180) * svgHeight
  
  return { x: Math.round(svgX), y: Math.round(svgY) }
}

// Accurate coordinates for your cities
const cityData: CityCoordinates[] = [
  // North America
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, svgX: 0, svgY: 0 },
  { name: 'New York', lat: 40.7128, lng: -74.0060, svgX: 0, svgY: 0 },
  { name: 'Washington DC', lat: 38.9072, lng: -77.0369, svgX: 0, svgY: 0 },
  { name: 'Toronto', lat: 43.6532, lng: -79.3832, svgX: 0, svgY: 0 },
  
  // Europe
  { name: 'London', lat: 51.5074, lng: -0.1278, svgX: 0, svgY: 0 },
  { name: 'Vienna', lat: 48.2082, lng: 16.3738, svgX: 0, svgY: 0 },
  { name: 'Zurich', lat: 47.3769, lng: 8.5417, svgX: 0, svgY: 0 },
  { name: 'Pristina', lat: 42.6629, lng: 21.1655, svgX: 0, svgY: 0 },
  
  // Middle East
  { name: 'Tel Aviv', lat: 32.0853, lng: 34.7818, svgX: 0, svgY: 0 },
  { name: 'Riyadh', lat: 24.7136, lng: 46.6753, svgX: 0, svgY: 0 },
  { name: 'Abu Dhabi', lat: 24.4539, lng: 54.3773, svgX: 0, svgY: 0 },
]

// Calculate SVG coordinates
cityData.forEach(city => {
  const coords = convertGeoToSVG(city.lat, city.lng)
  city.svgX = coords.x
  city.svgY = coords.y
})

// Output the results
console.log('Calculated SVG Coordinates:')
cityData.forEach(city => {
  console.log(`${city.name}: { x: ${city.svgX}, y: ${city.svgY} }`)
})

export { convertGeoToSVG, cityData }
