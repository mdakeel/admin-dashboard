import React from 'react';
import { Products } from '../../../Data';
import { useParams } from 'react-router-dom';

const img1 = "https://pngimg.com/uploads/laptop/laptop_PNG101764.png";

const ManageProducts = () => {
  const { id } = useParams();

  const productId = id ? parseInt(id) : null;
  const product = Products.find((item) => item.id === productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }



  return (
    <div className="bg-white shadow-sm rounded-lg  w-full px- mt-6 flex">
      
      <div className="w-[40%] flex items-center justify-center border-gray-500">

                    <img src={product.photo} alt={product.name} className="w-[350px] h-[350px] p-8 drop-shadow-lg" />
  
      </div>
      <div className="w-[60%] p-8">
        <div className="w-full bg-white shadow-sm rounded-lg border p-4">
          <table className="w-full table-auto">
            <tbody>
              <tr className="border-b">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Photo</th>
                <td className="py-2 px-4 text-[15px]">
                  {product.photo ? (
                    <img src={product.photo} alt={product.name} className="w-[50px] h-[50px]" />
                  ) : (
                    <div className='text-[20px] text-gray-400 font-medium text-center mt-[30%]'  >
                      No Image
                    </div>
                  )}
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Name</th>
                <td className="py-2 px-4 text-[15px]">{product.name}</td>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Price</th>
                <td className="py-2 px-4 text-[15px]">${product.price}</td>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Stock</th>
                <td className="py-2 px-4 text-[15px]">{product.stock}</td>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Category</th>
                <td className="py-2 px-4 text-[15px]">{product.category}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 text-[17px] font-medium text-left">Action</th>
                <td className="py-2 px-4 text-[15px]">
                  <span className="text-blue-600 bg-blue-100 px-4 hover:bg-blue-200 hover:text-blue-800 cursor-pointer py-1 rounded-md">
                    {product.action}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
