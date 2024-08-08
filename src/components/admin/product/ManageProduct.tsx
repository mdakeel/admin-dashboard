import React, { useState, useEffect } from 'react';
import { Categories} from '../../../Data';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteProduct, useGetProducts, useUpdateProduct } from '../../../react-query/QueriesAndMutations';
import { FormType } from '../../../types/types';
import { MdDeleteForever } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';


const ManageProducts = () => {
  const { data } = useGetProducts()
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<FormType>({
    id:0,
    name: "",
    price: "",
    stock: "",
    category: "",
    photo: "",
    action: ""
  });

  const navigate = useNavigate()
   
  const { mutateAsync : updateProduct} = useUpdateProduct()
  const { mutateAsync : deleteProduct} = useDeleteProduct()
 
  const productId = id ? parseInt(id ) : null;
  const product = data && productId !== null ? data.find((item) => item.id === productId) : null;


  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id,
        name: product.name,
        price: product.price.toString(),
        stock: product.stock.toString(),
        category: product.category,
        photo: product.photo,
        action: product.action
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!formData.name || !formData.price || !formData.stock || !formData.category) {
      alert('Please fill in all required fields.');
      return;
    }
  
    try {
      await updateProduct({...formData, action:"Manage"});
      // Reset the form data
      setFormData({
        id: Date.now(),
        name: "",
        price: "",
        stock: "",
        category: "",
        photo: "",
        action: "Manage"
      });

      toast.success("Product Updated Successfully!", {
        position: "top-center"
      });
      navigate("/admin/product");
      console.log("Product Updated Successfully");
    } catch (error) {
      toast.error("Failed to Update product!", {
        position: "top-center"
      });
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (id:any) => {
    try {
      await deleteProduct(id); // Ensure `deleteProduct` expects a string
      console.log("Product deleted successfully");
      toast.success("Product Deleted Successfully !", {
        position: "top-center"
      });
      navigate("/admin/product"); // Optional: navigate after deletion
    } catch (error) {
      toast.error("Failed to delete product!", {
        position: "top-center"
      });
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product. Please try again.');
    }
  };
  
  

  if (!data) return <div>No data available</div>;


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
      <div className="w-full mt-7 z-0">
        <form onSubmit={handleSubmit}>
      <div className="w-full flex lg:items-center lg:p-0 p-2 bg-white  rounded-lg items-start justify-between lg:flex-row flex-col  ">
      
      <div className="md:w-[43%] w-full flex items-center lg:border-r border-gray-200 justify-center ">
        <div className='flex flex-col gap-4 lg:p-10 p-4'>
          <img src={formData.photo} alt={formData.photo} className="md:w-[310px] md:h-[310px] w-full px-6 py-6 drop-shadow-lg" />
          <div>
            <input type="text" name="photo" value={formData.photo} onChange={handleChange} className='lg:text-[16px] border-b text-gray-500 text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent  rounded-md w-full' />
          </div>
        </div>
      </div>
      
      <div className="md:w-[57%] w-full lg:p-10  ">
        <div className="w-full   rounded-lg border lg:p-10 p-2 ">
          <table className="w-full table-auto">
            <tbody className=''>
              <tr className="">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Photo</th>
                <td className="py-2 px-4 text-[15px]">
                  {formData.photo ? (
                    <img src={formData.photo} alt={formData.photo} className="w-[50px] h-[50px]" />
                  ) : (
                    <div className='text-[20px] text-gray-400 font-medium text-center mt-[30%]' >
                      No Image
                    </div>
                  )}
                </td>
              </tr>
              <tr className="">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Name</th>
                <td className="py-2 px-4 text-[15px]">
                  <input type="text" name='name' value={formData.name} onChange={handleChange} className='lg:text-[16px] border-b text-gray-500 text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent  rounded-md w-full' />
                </td>
              </tr>
              <tr className="">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Price</th>
                <td className="py-2 px-4 text-[15px]">
                  <input type="text" name='price' value={formData.price} onChange={handleChange} className='lg:text-[16px] border-b text-gray-500 text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent  rounded-md w-full' />
                </td>
              </tr>
              <tr className="">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Stock</th>
                <td className="py-2 px-4 text-[15px]">
                  <input type="text" name='stock' value={formData.stock} onChange={handleChange} className='lg:text-[16px] border-b text-gray-500 text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px] bg-transparent  rounded-md w-full' />
                </td>
              </tr>
              <tr className="">
                <th className="py-2 px-4 text-[17px] font-medium text-left">Category</th>
                <td className="py-2 px-4 text-[15px]">
                <select name="category" value={formData.category} onChange={handleChange} className='lg:text-[16px] border-b text-[14px] outline-none lg:py-2 lg:px-4 px-2 py-[6px]  text-gray-500 rounded-md w-full'>
                      {
                        Categories &&  Categories.map((item) => (
                          <option key={item.id} value={item.name} disabled className='text-gray-500 '>{item.name}</option>
                        ))
                      }
                    </select>
                    </td>
              </tr>              
            </tbody>
           
          </table>
          <div className='w-full flex items-end justify-end gap-4 mt-8'>
                    <div  onClick={() => handleDelete(product.id)} className='border  rounded-md hover:bg-red-50 lg:py-[10px] lg:px-4 px-2 py-[6px]'><MdDeleteForever size={24} className='text-red-600' /></div>
                    
                    <button type="button" onClick={() => navigate("/admin/product")} className='lg:text-[16px] text-[14px] text-center font-medium border rounded-md text-gray-500 border-gray-200 hover:bg-gray-50 lg:py-[10px] lg:px-4 px-2 py-[6px]'>Cancel</button>
                    <button type='submit' className='lg:text-[16px] text-[14px] text-center text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 lg:py-[10px] lg:px-4 px-2 py-[6px]'>Update product</button>
              </div>
        </div>
      </div>
     
    </div>
    </form>
    </div>
    
  );
};

export default ManageProducts;
