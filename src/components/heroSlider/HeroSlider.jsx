import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from './SliderCard';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const NextArrow = (props) => {
    const {onClick} = props
    return(
      <div
  onClick={onClick}
  className='absolute left-5 rounded-full bg-red-500 text-white top-1/2 cursor-pointer p-1 z-50'
  >
      <AiOutlineArrowLeft/>
    </div>

    )
}

const PrevArrow = (props) => {
  const {onClick} = props
  return(
  <div
  onClick={onClick}
  className='absolute right-5 rounded-full bg-red-500 text-white top-1/2 cursor-pointer p-1 z-50'
  >
    <AiOutlineArrowRight/>
  </div>
  )
  }

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
  return (
    <>
     <Slider {...settings} className="px-8">
          <SliderCard title=""/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
    </Slider>
    </>
  )
}

export default HeroSlider