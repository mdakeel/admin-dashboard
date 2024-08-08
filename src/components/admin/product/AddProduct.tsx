import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useCreateProduct } from '../../../react-query/QueriesAndMutations';
import { FormType } from '../../../types/types';

import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface AddProductProps {
  modal: {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
}



const AddProduct: React.FC<AddProductProps> = ({ modal }) => {
  const [formData, setFormData] = useState<FormType>({
    id: 0,
    name: "",
    price: "",
    stock: "",
    category: "",
    photo: "",
    action: "Manage"
  });

  const { showModal, setShowModal } = modal;
  const { mutateAsync : createProduct} = useCreateProduct()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      await createProduct(formData);
      // Optionally, reset the form or show a success message
      setFormData({
        id: Date.now(),
        name: "",
        price: "",
        stock: "",
        category: "",
        photo: "",
        action: "Manage"
      });
      toast.success("Product Created Successfully!", {
        position: "top-center"
      });
      navigate("/admin/product")
      setShowModal(false); // Close the modal after submission
    } catch (error) {
      toast.error("Failed to Create product!", {
        position: "top-center"
      });
      console.error('Error creating product:', error);
    }
  };
  

  return (
    <div>
      {showModal && (
        <div className='fixed w-full top-0 lg:left-0 left-8 h-full bg-[rgba(0,0,0,.5)] flex items-center justify-center'>
          <div className='bg-white lg:w-[50%] w-[80%] lg:p-6 p-4 rounded-md gap-y-4 flex flex-col'>
            <div className='flex items-center justify-between'>
              <p className='text-[16px] font-medium text-gray-500'>Add New Product</p>
              <IoClose size={24} className='text-gray-400 hover:bg-gray-100 hover:text-black hover:shadow-sm cursor-pointer' onClick={() => setShowModal(false)} />
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                  <div className='flex lg:flex-row flex-col gap-4'>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter Product Name' className='lg:text-[16px] text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent border-2 rounded-md w-full' />
                    <input type="text" name='price' value={formData.price} onChange={handleChange} placeholder='Enter Price: $34' className='lg:text-[16px] text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent border-2 rounded-md w-full' />
                  </div>
                  <div className='flex lg:flex-row flex-col gap-4'>
                    <input type="text" name='stock' value={formData.stock} onChange={handleChange} placeholder='Enter Stock Quantity: 03' className='text-[17px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent border-2 rounded-md w-full' />
                    <select name="category" value={formData.category} onChange={handleChange} className='lg:text-[16px] text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent border-2 text-gray-400 rounded-md w-full'>
                    <option value="" disabled className='text-gray-500'>Select Category</option>
                      <option value="Electronics"  className='text-gray-500'>Electronics</option>
                      <option value="Laptop" className='text-gray-500'>Laptop</option>
                      <option value="Watch" className='text-gray-500'>Watch</option>
                      <option value="Mobile" className='text-gray-500'>Mobile</option>
                    </select>
                  </div>
                  <div>
                    <input type="text" name="photo" placeholder="Enter image url" value={formData.photo} onChange={handleChange} className='lg:text-[16px] text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent border-2 text-gray-400 rounded-md w-full' />
                  </div>
                  <div className='flex items-end justify-end gap-4'>
                    <button type="button" onClick={() => setShowModal(false)} className='lg:text-[16px] text-[14px] text-center font-medium border rounded-md text-gray-500 border-gray-200 hover:bg-gray-50 lg:py-2 lg:px-4 px-2 py-[6px]'>Cancel</button>
                    <button type='submit' className='lg:text-[16px] text-[14px] text-center text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 lg:py-2 lg:px-4 px-2 py-[6px]'>Create new product</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;


