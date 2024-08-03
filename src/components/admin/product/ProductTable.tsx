// src/components/TopTransactionsTable.tsx

import React from "react";
import { Products, transactions } from "../../../Data";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const ProductTable: React.FC = () => {
  const params = useParams();
  return (
    <div className="w-full mt-7">
      <div className="w-full flex lg:items-center items-start justify-between lg:flex-row flex-col gap-4 ">
        <div className="w-full flex items-center  justify-between  gap-4">
          <h2 className="md:text-[20px] text-[17px] px-1 font-semibold  ">
            All Products : <span>03</span>
          </h2>
          <p className="bg-white md:text-[16px] text-[14px] text-gray-600 hover:text-black border hover:border-blue-200 shadow-sm md:py-[6.5px] py-[5px] md:px-4 px-2 flex items-center gap-2 cursor-pointer rounded-md font-medium ">
            <FaPlus size={16} className="text-blue-500" />
            Add Product
          </p>
        </div>

        <div className="w-full  bg-white py-[6px] px-2 border hover:border-blue-200 flex  items-center justify-center gap-2 cursor-pointer rounded-md shadow-sm border font-medium text-white">
          <select className="flex-grow outline-none md:text-[16px] text-[14px]  bg-transparent text-gray-600 hover:text-black md:px-2">
            <option className="py-[6px] px-4" value="Category">
              Category{" "}
            </option>
            <option className="py-[6px] px-4" value="All">
              All{" "}
            </option>
            <option className="py-[6px] px-4" value="Laptop">
              Laptop
            </option>
            <option className="py-[6px] px-4" value="Mobile">
              Mobile
            </option>
            <option className="py-[6px] px-4" value="Watch">
              Watch
            </option>
          </select>
          <select className="flex-grow outline-none bg-transparent md:text-[16px] text-[14px] text-gray-600 hover:text-black md:px-2 ">
            <option
              className="py-[6px] px-4"
              value="Sort by date (recent first)"
            >
              Sort by date (recent first)
            </option>
            <option
              className="py-[6px] px-4"
              value="Sort by date (earlier first)"
            >
              Sort by date (earlier first)
            </option>
            <option
              className="py-[6px] px-4"
              value="Sort by amount (high first)"
            >
              Sort by amount (high first)
            </option>
            <option
              className="py-[6px] px-4"
              value="Sort by amount (Low first)"
            >
              Sort by amount (Low first)
            </option>
          </select>
        </div>
      </div>
      <div className="w-full bg-white shadow-sm rounded-lg mt-6 md:overflow-hidden overflow-x-scroll border">
        <table className="w-full table-auto">
          <thead className="w-full bg-gray-50">
            <tr className="cursor-pointer w-full border-b">
              <th className="py-4 px-6 text-[17px] font-medium text-left">
                Photo
              </th>
              <th className="py-4 px-6 text-[17px] font-medium text-left">
                Name
              </th>
              <th className="py-4 px-6 text-[17px] font-medium text-left">
                Price
              </th>
              <th className="py-4 px-6 text-[17px] font-medium text-left">
                Stock
              </th>
              <th className="py-4 px-6 text-[17px] font-medium text-left">
                Category
              </th>
              <th className="py-4 px-6 text-[17px] font-medium text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {Products.map((item) => (
              <tr
                className="hover:bg-gray-50 cursor-default w-full border-b"
                key={item.id}
              >
                <td className="py-2 px-6 text-[15px]">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-[50px] h-[50px]"
                    />
                  ) : (
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      No Image
                    </div>
                  )}
                </td>
                <td className="py-2 px-6 text-[15px]">{item.name}</td>
                <td className="py-2 px-6 text-[15px]">${item.price}</td>
                <td className="py-2 px-6 text-[15px]">{item.stock}</td>
                <td className="py-2 px-6 text-[15px]">{item.category}</td>{" "}
                {/* Added Category column */}
                <td className="py-2 px-6 text-[15px]">
                  <Link to={`/admin/products/${item.id}`}>
                    <span className="text-blue-600 bg-blue-100 px-4 hover:bg-blue-200 hover:text-blue-800 cursor-pointer py-1 rounded-md">
                      {item.action}
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full flex md:flex-row flex-col  items-center md:justify-between justify-center mt-2">
        <p className="md:text-[16px] text-[14px] text-gray-500 font-normal">Showing <span className="font-medium text-black">1</span > to <span className="font-medium text-black">4</span> of <span className="font-medium text-black">24</span> results</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 md:text-[16px] text-[14px] font-semibold text-gray-500 hover:text-black  hover:border-blue-200 px-4 py-[5px]
          cursor-pointer "> <RiArrowLeftSFill  className="md:text-[18px] text-[16px]" /> Prev</button>
          <button className="flex items-center gap-2 md:text-[16px] text-[14px] font-semibold text-gray-500 hover:text-black  hover:border-blue-100 px-4 py-[5px]
          cursor-pointer ">Next <RiArrowRightSFill   className="md:text-[18px] text-[16px]" /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
