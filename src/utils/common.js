import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

import { useRef, useState } from 'react'
export const useDraggable = () => {
  const [isDown, setIsDown] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const elementRef = useRef(null)
  const [active, setActive] = useState(false)
  const mouseDownHandler = (e) => {
    setIsDown(true)
    setActive(true)
    startX.current = e.pageX - elementRef.current.offsetLeft
    scrollLeft.current = elementRef.current.scrollLeft
  }
  const mouseLeaveHandler = () => {
    setIsDown(false)
    setActive(false)
  }
  const mouseUpHandler = () => {
    setIsDown(false)
    setActive(false)
  }
  const mouseMoveHandler = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - elementRef.current.offsetLeft
    const walk = x - startX.current
    elementRef.current.scrollLeft = scrollLeft.current - walk
  }
  return {
    elementRef,
    mouseDownHandler,
    mouseLeaveHandler,
    mouseUpHandler,
    mouseMoveHandler,
    active,
  }
}
