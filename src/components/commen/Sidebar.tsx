import React from 'react'
import { IconType } from 'react-icons';
import { Link, Location, useLocation } from 'react-router-dom';
import {RiDashboardFill} from 'react-icons/ri'
import { app, charts, dashboard } from '../../Data';
import logo from '../../assets/logo.png'


const Sidebar = () => {
    const location = useLocation()
  return (
    <div className=' min-h-screen pt-2 border-r border-gray-200 flex flex-col gap-6'>
          <Link to={'/admin/dashboard'} className='flex items-center justify-center gap-2 mt-2 cursor-pointer'>
                <img src={logo} className='w-7 object-cover' alt="logo" />
                <p className=' text-[30px] tracking-widest font-bold'>DukaaN</p>
            </Link>
        {/* dashboard */}
        <div className='px-4'>
            <h3 className='text-[16px] text-gray-400 font-medium'>Dashboard</h3>
            <ul className='mt-2 flex flex-col gap-1'>
            {dashboard.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[18px] text-gray-600 hover:bg-gray-50 rounded-md hover:text-black w-auto py-2 px-4'
                            key={item.id}
                        ><item.icon />{item.text}</li>
                        </Link>
                    ))}
            </ul>
        </div>

       {/* chart */}
        <div className='px-4'>
            <h3 className='text-[16px] text-gray-400 font-medium'>Charts</h3>
            <ul className='mt-2 flex flex-col gap-1'>
            {charts.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[18px] text-gray-600 hover:bg-gray-50 rounded-md hover:text-black w-auto py-2 px-4'
                            key={item.id}
                        ><item.icon />{item.text}</li>
                        </Link>
                    ))}
            </ul>
        </div>

        {/* app */}
        <div className='px-4'>
            <h3 className='text-[16px] text-gray-400 font-medium'>App</h3>
            <ul className='mt-2 flex flex-col gap-1'>
            {app.map((item) => (
                <Link to={item.url} >
                        <li className='flex items-center gap-4 text-[18px] text-gray-600 hover:bg-gray-50 rounded-md hover:text-black w-auto py-2 px-4'
                            key={item.id}
                        ><item.icon />{item.text}</li>
                        </Link>
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar