// src/components/TopTransactionsTable.tsx

import React from 'react';
import { Products, transactions } from '../../../Data';


const ProductTable: React.FC = () => {
  return (
    <div className='w-full mt-6'>
      <div className='w-full bg-white shadow-sm rounded-lg p-6 '>
        <h2 className='text-[18px] font-semibold  pb-2'>Products : <span>03</span></h2>
        <div className='md:overflow-hidden overflow-x-scroll '>
        <table className='w-full border-collapse '>
          <thead className='w-full'>
            <tr className='cursor-pointer w-full'>
              <th className='border-b p-2 md:px-1  pe-16 text-[16px]  font-medium text-left'>Photo</th>
              <th className='border-b p-2 md:px-1  pe-16 text-[16px]  font-medium text-left'>Name</th>
              <th className='border-b p-2 md:px-1  pe-16 text-[16px]  font-medium text-left'>Price</th>
              <th className='border-b p-2 md:px-1  pe-16 text-[16px]  font-medium text-left'>Stock</th>
              <th className='border-b p-2 md:px-1  pe-16 text-[16px]  font-medium text-left '><span className='px-4'>Action</span></th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {Products.map((item) => (
              <tr className='hover:bg-gray-50 cursor-default w-full' key={item.id}>
                <td className='border-b p-2  text-[15px] '> 
            {item.photo ? (
              <img src={item.photo} alt={item.name} className='w-[50px] h-[50px]' />
            ) : (
              <div style={{ width: '100px', height: '100px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                No Image
              </div>
            )}
        </td>
                <td className='border-b p-2  text-[15px] '>{item.name}</td>
                <td className='border-b p-2  text-[15px] '>${item.price}</td>
                <td className='border-b p-2  text-[15px] '>{item.stock}</td>
                <td className='border-b  text-[15px]  '><span className='text-blue-600 bg-blue-100 px-4 hover:bg-blue-200 hover:text-blue-800 cursor-pointer py-1 rounded-md'>{item.action}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
