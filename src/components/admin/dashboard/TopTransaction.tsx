// src/components/TopTransactionsTable.tsx

import React from 'react';
import { transactions } from '../../../Data';


const TopTransactions: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-white shadow-sm rounded-lg   '>
        <h2 className='text-[18px] font-semibold  py-4 p-6 border-b'>TOP TRANSACTIONS</h2>
        <div className='md:overflow-hidden overflow-x-scroll '>
        <table className='w-full border-collapse '>
          <thead className='w-full bg-gray-50'>
            <tr className='cursor-pointer w-full mx-10'>
              <th className='border-b py-3 px-6  md:pe-0 pe-20  text-[16px]  font-medium text-left'>ID</th>
              <th className='border-b py-3 px-6  md:pe-0 pe-20 text-[16px]  font-medium text-left'>Name</th>
              <th className='border-b py-3 px-6  md:pe-0 pe-20 text-[16px]  font-medium text-left'>Date</th>
              <th className='border-b py-3 px-6  md:pe-0 pe-20 text-[16px]  font-medium text-left'>Quantity</th>
              <th className='border-b py-3 px-6  md:pe-0 pe-20 text-[16px]  font-medium text-left'>Amount</th>
              <th className='border-b py-3 px-6  md:pe-0 pe-20 text-[16px]  font-medium text-left'>Status</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {transactions.map((transaction) => (
              <tr className='hover:bg-gray-50 cursor-default w-full px-6' key={transaction.id}>
                <td className='border-b py-3 px-6  text-[15px]  '>{transaction.id}</td>
                <td className='border-b py-3 px-6  text-[15px]  '>{transaction.name}</td>
                <td className='border-b py-3 px-6  text-[15px]  '>{transaction.date}</td>
                <td className='border-b py-3 px-6  text-[15px]  '>{transaction.quantity}</td>
                <td className='border-b py-3 px-6  text-[15px]  '>${transaction.amount}</td>
                <td className='border-b py-3 px-6  text-[15px]  '>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default TopTransactions;
