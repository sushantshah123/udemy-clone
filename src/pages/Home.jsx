import React from 'react'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import SliderBanner from '../components/SliderBanner'
import HeroSlider from '../components/heroSlider/HeroSlider'

const Home = () => {
  return (
    <>
    <Navbar/>
    <SliderBanner/>
    <Tabs/>
    <HeroSlider/>
    </>
  )
}

export default Home