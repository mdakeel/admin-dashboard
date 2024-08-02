import React from 'react'
import {  Link, useLocation } from 'react-router-dom';
import { app, charts, dashboard } from '../../Data';
import logo from '../../assets/logo.png'

const MobileSidebar = () => {
  return (
    <div className=' fixed top-0 left-0 h-full flex flex-col gap-6 md:mt-4  z-20 bg-white items-center '>
         <Link to={'/admin/dashboard'} className='flex items-center justify-center gap-2 md:mt-[2px] mt-5  pb-4 cursor-pointer '>
                <img src={logo} className='md:w-7 w-6 object-cover' alt="logo" />
            </Link>
        {/* dashboard */}
        <div className='px-2 '>
      
            <ul className='mt-1 flex flex-col gap-1'>
            {dashboard.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center  gap-4 text-[22px] text-gray-600 hover:bg-[#F9FAFB] rounded-md hover:text-black w-auto py-2 px-3'
                            key={item.id}
                        ><item.icon /></li>
                        </Link>
                    ))}
            </ul>
        </div>

       {/* chart */}
        <div className='px-2'>
            <ul className='mt-2 flex flex-col gap-1'>
            {charts.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[22px] text-gray-600 hover:bg-[#F9FAFB] rounded-md hover:text-black w-auto py-2 px-3'
                            key={item.id}
                        ><item.icon /></li>
                        </Link>
                    ))}
            </ul>
        </div>

        {/* app */}
        <div className='px-2'>
            <ul className='mt-2 flex flex-col gap-1'>
            {app.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[22px] text-gray-600 hover:bg-[#F9FAFB] rounded-md hover:text-black w-auto py-2 px-3'
                            key={item.id}
                        ><item.icon /></li>
                        </Link>
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default MobileSidebar