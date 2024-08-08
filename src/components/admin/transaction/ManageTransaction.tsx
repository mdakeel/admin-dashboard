
import { useParams } from 'react-router-dom';
import { useGetTransactions } from '../../../react-query/QueriesAndMutations';


const img4 = "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/hero-static/charge5-black-device-3qtr.png"

const ManageTransaction = () => {

  const { id } = useParams<{ id: string }>();
  const { data } = useGetTransactions()


  const productId = id ? parseInt(id ) : null;
  const product = data && productId !== null ? data.find((item) => item.id === productId) : null;
  
  if (!product) {
    return <div>No Data found</div>;
  }
   
  const total = Number(product.amount) * Number(product.quantity);
 
  return (
      <div className="w-full mt-7 z-0">
      <div className="w-full flex lg:items-center lg:p-0 p-2 bg-white  rounded-lg items-start justify-between lg:flex-row flex-col gap-4 ">
      
      <div className="md:w-[43%] w-full flex items-center lg:border-r border-gray-200 justify-center ">
        <div className='w-full flex flex-col gap-4 lg:px-10 px-4'>
          <img src={img4} alt="product-img" className="md:w-[310px] md:h-[310px] w-full drop-shadow-lg" />
          <div className='w-full'>
            <table className="w-full  ">
              <thead className='w-full'>
                <tr className='md:text-[16px] text-[13px] w-full text-left text-gray-500 md:font-medium font-normal'>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className='w-full'>
                <tr className='md:text-[14px] text-[12px] w-full text-left text-gray-500 font-normal'>
                  <td>{product.user}</td>
                  <td>{product.amount}</td>
                  <td>{product.quantity}</td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="md:w-[57%] w-full lg:p-8  ">
        <div className="w-full   rounded-lg border lg:p-8 p-4 ">
          <table className="w-full table-auto">
            <tbody className=''>
              {/* user info */}
              <tr className="flex md:flex-row flex-col items-start justify-start gap-7">
                <th className="px-4 text-[17px] font-semibold text-left">User Info</th>
                <td className=" px-4 text-[15px]">
                  <tr className='flex items-start justify-start'>
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>Name : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>Aakil Tayyab</td>
 
                    </tr>
                    <tr className='flex items-start justify-start'> 
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>City : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>Loni Ghaziabd</td>
                    </tr>
                    <tr className='flex items-start justify-start'> 
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>State : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>Uttar Pradesh</td>
                    </tr>
                    <tr className='flex items-start justify-start'> 
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>Pincode : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>201102</td>
                    </tr>
                    
                </td>
              </tr>

              {/* Amount info */}
              <tr className="flex md:flex-row flex-col items-start justify-start md:mt-2 ">
                <th className="py-2 px-4 text-[17px] font-semibold text-left">Amount Info</th>
                <td className="py-2 px-4 text-[15px]">
                  <tr className='flex items-start justify-start'>
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>Subtotal : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>{total}</td>
                     </tr>
                    <tr className='flex items-start justify-start'> 
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>Shipping Charge : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>50</td>
                    </tr>
                    <tr className='flex items-start justify-start'> 
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>Total : </th>
                    <td className='md:text-[14px] text-[12px] font-normal text-gray-500'>{total + 50}</td>
                    </tr>
                    
                </td>
              </tr>

              {/* Status Info */}
              <tr className="flex md:flex-row flex-col items-start justify-start gap-4 md:mt-2">
                <th className="py-2 px-4 text-[17px] font-semibold text-left">Status Info</th>
                <td className="py-2 px-4 text-[15px]">
                  <tr className='flex items-start justify-start'>
                    <th className='md:text-[14px] text-[12px] font-medium text-gray-500'>Status : </th>
                    <td className='md:text-[14px] text-[12px] font-normal  text-yellow-500'>{product.status}</td>
                    </tr>
                </td>
              </tr>
                    
                        
            </tbody>
           
          </table>
          <div className='w-full flex items-end justify-end gap-4 mt-8'>
                    <button type='submit' className='lg:text-[16px] text-[14px] text-center text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 lg:py-[10px] lg:px-4 px-2 py-[6px]'>Process Status</button>
              </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ManageTransaction;
