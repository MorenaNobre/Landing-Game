import React, { useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import '../../App.css'

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FaArrowAltCircleUp className="scrollTop" onClick={scrollTop} style={{height: 86, display: showScroll ? 'flex' : 'none'}} />
  )
}

export default ScrollArrow
