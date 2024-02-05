import React from 'react'
import {useParams} from 'react-router-dom'
import courses from '../utils/data'

const SingleCourse = () => {
  const { id } = useParams();
  const course = courses.find((item)=>item.id === parseInt(id, 10));
  const {image, creator, rating_star, rating_count, discounted_price, actual_price,} = course
  return (
    <>
    <div>
              <div className='w-[50%] bg-black h-auto'>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
        <h3 className='font-bold'>Learn Python: The Complete Python Programming Course</h3>
    <h2 className='text-sm font-semibold'>{creator}</h2>
    <h2>{category}</h2>
    <div className='flex gap-3 text-xs font-semibold'>
      <p>{rating_star}</p>
      <p>({rating_count})</p>
    </div>
    <div className='flex gap-2'>
      <p className='text-sm font-bold'>${discounted_price}</p>
      <p className='text-sm font-normal line-through'>${actual_price}</p>
    </div>
    <div className='w-full flex gap-2'>
      <button className='border-2 border-gray-800 text-black py-1 px-3 w-1/2 hover:text-white hover:bg-black duration-500'>See Details</button>
      <button className='bg-black text-white py-1 px-3 w-1/2 hover:text-black hover:bg-white hover:border-2 hover:border-gray-800 duration-500'>Add to Cart</button>
    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleCourse