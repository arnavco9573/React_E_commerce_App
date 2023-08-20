import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'

const Product = ({ post }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to card");
    }
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Removed from Cart");
    }


    return (
        <div className='flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 hover:shadow-[0px_20px_20px_10px_#00000024] '>
            <div >
                <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{post.title}</p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 12).join(" ") + "..."}</p>
            </div>
            <div className='h-[180px]'>
                <img src={post.image} alt="" className='h-full w-full' />
            </div>
            <div className='flex justify-between gap-14 items-center w-full mt-5'>
                <div>
                    <p className=' text-violet-600'>${post.price}</p>
                </div>
                {
                    cart.some((p) => p.id === post.id) ? (<button className='text-gray-700 border-2 border-gray-800 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>Remove Item</button>) : (<button className='text-gray-700 border-2 border-gray-800 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add to Cart</button>)
                }

            </div>


        </div>
    )
}

export default Product
