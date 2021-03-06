import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import CarouselSection from '../components/CarouselSection'
import FormSection from '../components/FormSection'
import FooterSection from '../components/FooterSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <BannerSection />
      <CarouselSection />
      <FormSection />
      <FooterSection />
    </>
  )
}

export default Home
