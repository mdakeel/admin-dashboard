import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import ManageTransaction from "../components/admin/transaction/ManageTransaction";

const ManageTransactions = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="w-full bg-[#F9FAFB] md:mt-8 mt-6 mb-6 md:px-10 px-4 pl-[20px]">
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full">
        <h1 className="md:text-xl text-sm md:font-semibold font-medium">
          Dashboard{" "}
          <span className=" md:font-medium font-normal text-gray-500"> / Transaction</span>
          <span className=" md:font-medium font-normal text-gray-500"> / Manage</span>
        </h1>
        <div className="flex ml-auto"> {/* Changed md:ml-auto to ml-auto */}
          <p
            onClick={() => navigate(-1)} // Navigate to the previous page on click
            className="flex items-center gap-2 md:text-[18px] text-[16px] px-3 cursor-pointer py-[3px] rounded-md text-blue-500 group-hover:text-blue-700 transition-colors"
          >
            <HiArrowNarrowLeft
              className="md:text-[20px] text-[18px] group-hover:-translate-x-2 transition-transform"
            />
            Back
          </p>
        </div>
      </div>
      <div className="w-full z-0">
        <ManageTransaction />
      </div>
    </div>
  );
};

export default ManageTransactions;
