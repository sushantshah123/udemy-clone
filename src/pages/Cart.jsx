import React from 'react'
import Navbar from '../components/Navbar'
import { IoTrashOutline } from "react-icons/io5";
import { GiShoppingCart, GiTrashCan } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart, resetCart, subTotal } from '../redux/cartSlice'

const Cart = () => {
  const {carts, quantity, totalAmount} = useSelector((state)=>state.allCart)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>

     <div className='cart py-10'>
      {
        carts.length === 0 ? (
          <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='text-black text-3xl'>Your Cart is Empty!</div>
        <span className='font-medium text-[100px] opacity-50'><GiShoppingCart /></span>
        <Link to="/">
        <div className='border-[1px] border-gray-600 rounder-sm p-2'>Let's go for Shopping</div>
        </Link>
          </div>
        ) : 

        (
           <div className='flex flex-col gap-4 px-20 xs:px-4'>
             {
                  carts.map((item) => {
                  return(
                    <div className='flex items-center gap-1 justify-between' key={item.id}>
                      <div className='w-2/5 px-6'>
                      <img src={item.image} alt="" className='h-8 w-8'/>
                      <div className='line-clamp-1'>{item.course}</div>
                      </div>
                      <div className='w-1/5'>${item.price}</div>
                      <div className='flex w-1/5'>
                        <div className='border-[1px] border-black rounded-sm px-1 flex gap-3'>
                          <p className='cursor-pointer' onClick={()=>{
                            dispatch(increaseQuantity(item))
                            dispatch(subTotal()); 
                            }}>+</p>
                          <span>{item.quantity}</span>
                          <p className='cursor-pointer'onClick={()=>{
                            dispatch(decreaseQuantity(item))
                            dispatch(subTotal()); 
                            }}>-</p>
                        </div>
                      </div>
                      <div className='w-1/5'>
                        Total: $ {(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className='cursor-pointer' onClick={()=>{
                        dispatch(removeFromCart(item));
                        dispatch(subTotal())
                      }
                        }>
                        <IoTrashOutline/>
                      </div>
                    </div>
                      )
                })
              }
              <hr  className='w-[80%] border-[1px]  border-gray-300 mx-auto my-2'/>
              <div className='flex justify-between items-start'>

              <div className='border-[1px] border-gray-600 rounder-sm p-2 cursor-pointer' onClick={()=>dispatch(resetCart())}>Clear Cart</div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-2xl font-medium'>Subtotal</p>
                  <span>$ {totalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
              <div className='border-[1px] border-gray-600 rounder-sm p-2'>Check out</div>
                <div className='border-[1px] border-gray-600 rounder-sm p-2'>Shop More</div>
              </div>
              </div>
           </div>
        )

      }
    </div>
    </>
  )
}

export default Cart