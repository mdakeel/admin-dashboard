import React from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";

const WidgetItem = () => {
  return (
    <div className=" w-full bg-[#F9FAFB] gap-6 mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {/* total orders */}
      <div className=" bg-white w-full h-[90px] shadow-sm rounded-lg ">
        <div className="flex items-center  gap-6 px-4 py-3">
          <div className="text-[#0369A1] bg-[#E0F2FE] rounded-full p-4">
          <PiShoppingCartBold size={34} />
          </div>
          <div className="">
            <p className="text-[15px] text-gray-500 font-medium">Total Oders</p>
          <h2 className="text-[25px] font-semibold">340</h2>
          </div>
        </div>
      </div>

    {/* complete order */}
      <div className=" bg-white w-full h-[90px] shadow-sm rounded-lg ">
        <div className="flex items-center  gap-6 px-4 py-3">
          <div className="text-[#15803D] bg-[#DCFCE7] rounded-full p-4">
          <FiShoppingBag size={34} />
          </div>
          <div className="">
            <p className="text-[15px] text-gray-500 font-medium">Active Orders</p>
          <h2 className="text-[25px] font-semibold">60</h2>
          </div>
        </div>
      </div>

      {/* active order */}
      <div className=" bg-white w-full h-[90px] shadow-sm rounded-lg ">
        <div className="flex items-center  gap-6 px-4 py-3">
          <div className="text-[#4338CA] bg-[#E0E7FF] rounded-full p-4">
          <PiShoppingCartBold size={34} />
          </div>
          <div className="">
            <p className="text-[15px] text-gray-500 font-medium">Complete Orders</p>
          <h2 className="text-[25px] font-semibold">220</h2>
          </div>
        </div>
      </div>

      {/* return order */}
      <div className=" bg-white w-full h-[90px] shadow-sm rounded-lg ">
        <div className="flex items-center  gap-6 px-4 py-3">
          <div className="text-[#A16207] bg-[#FEF9C3] rounded-full p-4">
          <PiShoppingCartBold size={34} />
          </div>
          <div className="">
            <p className="text-[15px] text-gray-500 font-medium">Return Orders</p>
          <h2 className="text-[25px] font-semibold">18</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetItem;
