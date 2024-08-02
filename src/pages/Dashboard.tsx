// Dashboard.tsx
import React from 'react';
import WidgetItem from '../components/admin/dashboard/WidgetItem';
import GraphContainer from '../components/admin/dashboard/GraphContainer';

const Dashboard = () => {
  return (
    <div className='w-full bg-[#F9FAFB] md:mt-8 mt-6 mb-6 md:pl-[0px] pl-[60px]'>
      <h1 className='md:text-xl text-md font-semibold '>Dashboard <span className=' font-medium text-gray-500'> / Dashboard</span></h1>
      <div className=' w-full'>
        <WidgetItem />
        <GraphContainer />
      </div>
    </div>
  );
}

export default Dashboard;
