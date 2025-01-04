'use client'

import React from 'react'

const AnimatedDoodles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="doodle-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
              <animate attributeName="r" from="5" to="10" dur="5s" repeatCount="indefinite" />
            </circle>
            <path d="M30 30 Q40 20, 50 30 T70 30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
              <animate attributeName="d" 
                values="M30 30 Q40 20, 50 30 T70 30;
                        M30 30 Q40 40, 50 30 T70 30;
                        M30 30 Q40 20, 50 30 T70 30" 
                dur="10s" repeatCount="indefinite" />
            </path>
            <rect x="70" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="15s" repeatCount="indefinite" />
            </rect>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>
    </div>
  )
}

export default AnimatedDoodles

