import React from 'react'
import WidgetItem from '../components/admin/dashboard/WidgetItem';  
import ProductTable from '../components/admin/product/ProductTable';
const Products = () => {
  return (
    <div className='w-full bg-[#F9FAFB] md:mt-8 mt-6 mb-6 md:pl-[0px] pl-[60px]'>
      <h1 className='md:text-xl text-md font-semibold '>Dashboard <span className=' font-medium text-gray-500'> / Product</span></h1>
      <div className=' w-full'>
      <WidgetItem />
      <ProductTable />
      </div>
    </div>
  )
}

export default Products