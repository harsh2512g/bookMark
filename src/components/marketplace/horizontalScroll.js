// components/HorizontalScroll.js
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'

export default function HorizontalScroll({ children }) {
  const containerRef = useRef(null)

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current
      let scrollAmount = 0
      const slideTimer = setInterval(function () {
        if (direction === 'left') {
          container.scrollLeft -= 10
        } else {
          container.scrollLeft += 10
        }
        scrollAmount += 10
        if (scrollAmount >= 100) {
          window.clearInterval(slideTimer)
        }
      }, 25)
    }
  }

  return (
    <div className="flex items-center">
      <div
        className="text-green-400  w-50 h-50 bg-green-200  right-0 hover:bg-green-400 cursor-pointer z-50"
        onClick={() => handleScroll('left')}
      >
        <ChevronLeft size={32} />
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll space-x-6 w-6xl max-w-6xl ml-4 mr-4"
      >
        {children}
      </div>
      <div
        className="text-green-400  w-50 h-50 bg-green-200  right-0 hover:bg-green-400 cursor-pointer z-50"
        onClick={() => handleScroll('right')}
      >
        <ChevronRight size={32} />
      </div>
    </div>
  )
}
