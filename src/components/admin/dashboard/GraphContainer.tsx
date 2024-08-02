import React from 'react'
import RevenueChart from './RevenueChart'
import ProductCategories from './ProductCategories'
import GenderPieChart from './GenderPieChart'
import TopTransactions from './TopTransaction'

const GraphContainer = () => {
  return (
      <div className='flex flex-col  lg:flex-row gap-6 mt-10'>
        {/* Revenue chart and Top Transactions */}
        <div className='flex flex-col  gap-6 w-full lg:w-2/3'>
          <RevenueChart />
          <TopTransactions/>
        </div>

        {/* Product Categories and Gender Pie Chart */}
        <div className='flex flex-col  gap-6 w-full lg:w-1/3'>
          <ProductCategories />
          <GenderPieChart />
        </div>
      </div>
 
  )
}

export default GraphContainer
