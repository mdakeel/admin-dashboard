import React from 'react';
import { categories } from '../../../Data';

interface CategoryItemProps {
    color: string;
    value: number;
    heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
    <div className='w-full flex items-center justify-between py-2 px-1'>
        <h5 className='text-[16px] font-medium'>{heading}</h5>
        <div className='flex items-center gap-6 '>
        <div className='h-[0.5rem] w-[6rem] bg-gray-100 rounded-full'>
            <div
                className='rounded-full h-full'
                style={{ width: `${value}%`, backgroundColor: color }}
            />
        </div>
        <span className='text-[0.8rem] font-medium w-[30px]'>{value}%</span>
        </div>
    </div>
);

const ProductCategories = () => {
    return (
        <div className='w-full'>

            <div className='w-full bg-white shadow-sm rounded-lg p-6'>
                <h2 className='text-[18px] font-semibold  pb-2 '>INVENTORY</h2>
                {categories.map((item) => (
                    
                    <CategoryItem
                        key={item.id}
                        heading={item.heading}
                        value={item.value}
                        color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
                    />
                
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;
