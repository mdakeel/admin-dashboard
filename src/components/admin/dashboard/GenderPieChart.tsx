// src/components/GenderPieChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart: React.FC = () => {
  const data = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Gender Ratio',
        data: [50, 45, 5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(255, 206, 86)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
   
    },
  };

  return (
    <div className='w-full'>
      <div className='w-full bg-white shadow-sm rounded-lg p-6'>
        <h2 className='text-[18px] font-semibold  pb-2'>GENDER RATIO</h2>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default GenderPieChart;
