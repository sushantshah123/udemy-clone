import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { GiPhone } from 'react-icons/gi'

const Navbar = () => {
  const {carts} = useSelector((state)=>state.allCart)
  // console.log(carts)
  return (
    <>
    <div className='flex justify-between items-center h-[60px] w-full px-[10%] bg-slate-300'>
      <NavLink to="/">
        <div className='font-bold text-2xl font-mono tracking-[2px]'><span className='text-orange-400 text-3xl font-urbanist'>C</span >ODEMY</div>
      </NavLink>
        <div className='flex items-center gap-4'>
            <div><GiPhone /></div>
            <NavLink to="/cart">
            <div className='flex items-center relative'>
              <p> <AiOutlineShoppingCart /></p>
              <span className='absolute bg-red-600 rounded-full h-4 w-4 text-[10px] flex justify-center items-center -top-2 -right-3 text-white'>{carts.length}</span>
            </div>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar