import React from 'react'
import logo from './logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {cart} = useSelector((state)=>state);
    return (
        <div className="">
            <nav className='flex justify-between items-center text-[#fff] max-w-6xl h-20 mx-auto'>
                <NavLink to="/">
                    <div className='ml-5 flex items-center'><img className=" w-20" src={logo} alt="" />
                    <h1 className='text-[30px]'>Shoppy</h1></div>
                </NavLink>

                <div className='flex items-center font-medium mr-5 space-x-6 '>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className='relative'>
                            <FaShoppingCart  className='text-2xl'/>
                            {
                                cart.length > 0 && <span className='absolute -top-1 -right-2 bg-cyan-400 text-xs w-5 h-g flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
                            }
                            
                        </div>
                    </NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;
