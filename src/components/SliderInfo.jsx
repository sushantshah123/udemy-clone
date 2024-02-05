import React from 'react'

const SliderInfo = ({title, desc}) => {
  return (
    <div className='flex flex-col justify-center bg-red absolute top-8 bg-slate-300 xs:hidden md:w-[400px] w-[250px] h-[12vh] md:h-[20vh] p-5 gap-2 rounded-sm shadow-md'>
            <h1 className='sm:text-base text-2xl font-bold'>{title}</h1>
            <p className='sm:text-xs text-sm'>{desc}</p>
    </div>
  )
}

export default SliderInfo