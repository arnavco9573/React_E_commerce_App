import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useState } from 'react';

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));


  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ?
          (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                }
                )
              }
            </div>

            <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
              <div className="flex flex-col gap-5 my-14  h-[100%] justify-between">
                <div className="flex flex-col gap-5 ">
                  <div className="font-semibold text-xl text-violet-800 ">Your Cart</div>
                  <div className="font-semibold text-5xl text-violet-600  -mt-5">Summary</div>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> {totalAmount.toFixed(2)}</p>
                <button className="bg-violet-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-violet-600 font-bold hover:text-violet-600 p-3 text-xl mb-5">CheckOut Now</button>
              </div>
            </div>
          </div>) :

          (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <h1 className="text-gray-700 font-semibold text-xl mb-2">
                Your cart is empty!
              </h1>
              <Link to={"/"}>
                <button className="uppercase bg-violet-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-violet-600 font-semibold hover:text-violet-600 p-3 px-10 tracking-wider">
                  Shop Now
                </button>
              </Link>
            </div>
          )}
    </div >
  )
}

export default Cart
