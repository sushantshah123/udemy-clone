import React from 'react'
import hero_img from "../assets/images/hero_img.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import SliderInfo from './SliderInfo';

const NextArrow = (props) => {
  const {onClick} = props
  return(
  <div
  onClick={onClick}
  className='absolute left-5 rounded-full bg-orange-500 text-white top-1/2 cursor-pointer p-1 z-50'
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
className='absolute right-5 rounded-full bg-orange-500 text-white top-1/2 cursor-pointer p-1 z-50'
>
  <AiOutlineArrowRight/>
</div>
)
}

const SliderBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
    <div className='relative'>
    <Slider {...settings} className="px-8">
         <div className='w-full sm:px-0 h-[30vh] md:h-[50vh]'>
          <img className='h-full bg-cover bg-center relative' src={hero_img} alt="" />
          <SliderInfo
          title="SAVE BIG. LEARN BIG"
          desc="Join our plat form to learn the 20,000 courses with 5000+ professional trainers at an affordable price."
          />
         </div>
         <div className='w-full px-8 h-[50vh]'>
          <img className='h-full bg-cover bg-center' src={hero_img} alt="" />
          <SliderInfo
          title="SAVE BIG. LEARN BIG"
          desc="Join our plat form to learn the 20,000 courses with 5000+ professional trainers at an affordable price."
          />
         </div>
         <div className='w-full px-8 h-[50vh]'>
          <img className='h-full bg-cover bg-center' src={hero_img} alt="" />
          <SliderInfo
          title="SAVE BIG. LEARN BIG"
          desc="Join our plat form to learn the 20,000 courses with 5000+ professional trainers at an affordable price."
          />
         </div>
         <div className='w-full px-8 h-[50vh]'>
          <img className='h-full bg-cover bg-center' src={hero_img} alt="" />
          <SliderInfo
          title="SAVE BIG. LEARN BIG"
          desc="Join our plat form to learn the 20,000 courses with 5000+ professional trainers at an affordable price."
          />
         </div>
    </Slider>
    </div>
    </>
  )
}

export default SliderBanner