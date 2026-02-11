'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function TopBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-[#1a1a1a] text-white h-10 flex items-center justify-center relative">
      <p className="text-sm font-medium text-center">
        Get 25% OFF on your first order | Free shipping above $50
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded transition-colors"
        aria-label="Close promotional banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
