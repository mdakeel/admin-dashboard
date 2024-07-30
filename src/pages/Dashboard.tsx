import React from 'react'
import Sidebar from '../components/commen/Sidebar'
import Header from '../components/commen/Header'

const Dashboard = () => {
  return (
    <div className=''>
        <div className='w-full flex '>
        {/* side bar */}
        <div className='w-1/6'>
        <Sidebar />
        </div>

        {/* main container */}
        <div className='w-5/6 '>
        <Header />
        <main className='p-10'>
            hellow world
        </main>
        </div>
        </div>
    </div>
  )
}

export default Dashboard