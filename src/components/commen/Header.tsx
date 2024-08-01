import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import profile from '../../assets/avatar.png'
import { MdOutlineLightMode } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='fixed top-0 xl:left-[254px] xl:w-5/6 left-[50px] w-[100%] bg-white md:px-4 px-8'>
      <div className='flex md:justify-between justify-end items-center px-8 py-4'>
      
        <div className='flex items-center gap-2 w-[63%] md:flex hidden'>
          <div className='flex items-center w-full border border-gray-200 rounded-full'>
            <input 
              type="search" 
              className='rounded-l-full w-full py-2 px-4 outline-none bg-transparent' 
              placeholder='Search data, user'
            />
            <button className='bg-[#F9FAFB] py-2 px-4 rounded-r-full border hover:bg-gray-200'>
              Search
            </button>
          </div>
          <div className='bg-[#F9FAFB] rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
            <FaRegBell size={22} />
          </div>
        </div>

        <div className='flex gap-6 items-center'>
          <div className='bg-[#F9FAFB] rounded-full md:p-2 p-1 hover:bg-gray-100 cursor-pointer'>
            <MdOutlineLightMode size={24} />
          </div>
          <div className='flex items-center gap-2'>
            <img src={profile} alt="profile img" className='md:w-9 md:h-9 w-8 h-8 rounded-full cursor-pointer' />
            <p className='md:text-[19px] text-[17px] text-gray-600'>Aakil Tayyab</p>
          </div>
          <TbLogout size={24} className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Header
