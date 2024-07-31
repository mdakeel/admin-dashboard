// Dashboard.tsx
import React from 'react';
import WidgetItem from '../components/admin/dashboard/WidgetItem';

const Dashboard = () => {
  return (
    <div className='px-10 pt-8'>
      <h1 className='text-2xl font-semibold '>Dashboard</h1>
      <div className='pt-4'>
        <WidgetItem />
      </div>
    </div>
  );
}

export default Dashboard;
