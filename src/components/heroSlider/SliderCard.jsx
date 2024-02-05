import React from 'react'
import hero_img from "../../assets/images/aws_1.jpg" 

const SliderCard = () => {
  return (
    <>
     <div className='w-full h-full'>
          <img className='h-full bg-cover bg-center' src={hero_img} alt="" />
     </div>
    </>
  )
}

export default SliderCard