export function FlowerBloom({ className = "" }) {
    return (
      <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C50 20 65 35 85 35C65 35 50 50 50 70C50 50 35 35 15 35C35 35 50 20 50 0Z" />
        <path d="M50 10C50 25 62 37 77 37C62 37 50 49 50 64C50 49 38 37 23 37C38 37 50 25 50 10Z" opacity="0.7" />
        <path d="M50 20C50 30 58 38 68 38C58 38 50 46 50 56C50 46 42 38 32 38C42 38 50 30 50 20Z" opacity="0.5" />
        <circle cx="50" cy="40" r="8" opacity="0.8" />
      </svg>
    )
  }
  
  export function FlowerOrnament({ className = "" }) {
    return (
      <svg viewBox="0 0 200 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50C20 40 25 35 35 35C25 35 20 30 20 20C20 30 15 35 5 35C15 35 20 40 20 50Z" />
        <path d="M180 50C180 40 175 35 165 35C175 35 180 30 180 20C180 30 185 35 195 35C185 35 180 40 180 50Z" />
        <path d="M0 50H200" strokeWidth="1" stroke="currentColor" strokeDasharray="5,5" />
        <circle cx="100" cy="50" r="10" />
        <path d="M60 50C60 35 70 25 85 25C70 25 60 15 60 0" strokeWidth="2" stroke="currentColor" fill="none" />
        <path d="M140 50C140 35 130 25 115 25C130 25 140 15 140 0" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    )
  }
  
  export function RingsSvg({ className = "" }) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="50" r="20" />
        <circle cx="65" cy="50" r="20" />
      </svg>
    )
  }
  
  export function HeartDecoration({ className = "" }) {
    return (
      <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 90C50 90 85 65 85 35C85 25 75 15 65 15C55 15 50 25 50 25C50 25 45 15 35 15C25 15 15 25 15 35C15 65 50 90 50 90Z" />
      </svg>
    )
  }
  
  export function FlowerCorner({ className = "" }) {
    return (
      <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0C0 30 30 30 30 30C30 30 30 0 0 0Z" opacity="0.3" />
        <path d="M0 0C0 20 20 20 20 20C20 20 20 0 0 0Z" opacity="0.5" />
        <path d="M0 0C0 10 10 10 10 10C10 10 10 0 0 0Z" opacity="0.7" />
        <path d="M40 0C40 15 25 15 25 15C25 15 25 0 40 0Z" opacity="0.2" />
        <path d="M0 40C15 40 15 25 15 25C15 25 0 25 0 40Z" opacity="0.2" />
      </svg>
    )
  }
  
  