import React from 'react'
import {  Link} from 'react-router-dom';
import { app, charts, dashboard } from '../../Data';
import logo from '../../assets/logo.png'

const DextopSidebar = () => {
  return (
    <div className=' bg-white fixed top-0 left-0  w-1/6 h-full  flex flex-col gap-6'>
         <Link to={'/admin/dashboard'} className='flex items-center justify-center gap-2 mt-4  pb-4 cursor-pointer '>
                <img src={logo} className='w-7 object-cover' alt="logo" />
                <p className=' text-[29px] tracking-widest font-semibold'>DukaaN</p>
            </Link>
        {/* dashboard */}
        <div className='px-4 '>
        <h3 className='text-[14px] text-gray-500 '>DASHBOARD</h3>
            <ul className='mt-2 flex flex-col gap-1'>
            {dashboard.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center  gap-4 text-[18px] text-gray-600 hover:bg-[#F9FAFB] rounded-md hover:text-black w-auto py-2 px-4'
                            key={item.id}
                        ><item.icon />{item.text}</li>
                        </Link>
                    ))}
            </ul>
        </div>

       {/* chart */}
        <div className='px-4 '>
            <h3 className='text-[14px] text-gray-500 '>CHARTS</h3>
            <ul className='mt-2 flex flex-col gap-1'>
            {charts.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[18px] text-gray-600 hover:bg-[#F9FAFB] rounded-md hover:text-black w-auto py-2 px-4'
                            key={item.id}
                        ><item.icon />{item.text}</li>
                        </Link>
                    ))}
            </ul>
        </div>

        {/* app */}
        <div className='px-4 '>
            <h3 className='text-[14px] text-gray-500 '>APP</h3>
            <ul className='mt-2 flex flex-col gap-1'>
            {app.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[18px] text-gray-600 hover:bg-[#F9FAFB] rounded-md hover:text-black w-auto py-2 px-4'
                            key={item.id}
                        ><item.icon />{item.text}</li>
                        </Link>
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default DextopSidebar