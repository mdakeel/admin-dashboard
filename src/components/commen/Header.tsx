import React from 'react'
import { FaRegBell,  } from 'react-icons/fa'
import profile from '../../assets/avatar.png'
import { MdOutlineLightMode } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center px-8 pt-4 border-b border-gray-200 pb-4'>
        
            <div className='flex items-center gap-2 w-[62%] '>
            <div className='flex items-center w-full border border-gray-200 rounded-full'>
            <input type="search" className=' rounded-l-full w-full py-2 px-4 outline-none bg-transparent ' placeholder='Search data, user'/>
            <button className='bg-gray-50 py-2 px-4 rounded-r-full border '>Search</button>
            </div>
            <div className='bg-gray-50 rounded-full p-2'>
            <FaRegBell size={22} />
            </div>
            </div>

            <div className='flex gap-6 items-center'>
            <div className='bg-gray-50 rounded-full p-2'>
         <MdOutlineLightMode size={24} />
         </div>
                <div className='flex items-center gap-2'>
                <img src={profile} alt="proflie img" className='w-8 h-8 rounded-full ' />
                <p className='text-[18px] text-gray-600 '>Aakil Tayyab</p>
                </div>
                <TbLogout size={24} />
            </div>
        </div>
    </div>
  )
}

export default Header