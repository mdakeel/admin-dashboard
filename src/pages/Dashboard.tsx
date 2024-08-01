// Dashboard.tsx
import React from 'react';
import WidgetItem from '../components/admin/dashboard/WidgetItem';

const Dashboard = () => {
  return (
    <div className='w-full bg-[#F9FAFB] md:mt-8 mt-6'>
      <h1 className='text-2xl font-semibold '>Dashboard</h1>
      <div className=' w-full'>
        <WidgetItem />
      </div>
    </div>
  );
}

export default Dashboard;
