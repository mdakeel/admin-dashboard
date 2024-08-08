import React, { useMemo, useState } from "react";
import { useTable, useSortBy, Column, usePagination } from "react-table";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { useDeleteCustomer, useGetCustomers } from "../../../react-query/QueriesAndMutations";
import { Customer } from "../../../types/types";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const columns: Column<Customer>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const CustomerTable: React.FC = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const { data } = useGetCustomers()
  const {mutateAsync : deleteCustomer} = useDeleteCustomer()
  const navigate = useNavigate()

  const filterCustomer = useMemo(() => {
    if(!data) return []
  
    return data.filter(
      (item) =>
        selectCategory === "All" ||
        item.role === selectCategory ||
        item.gender === selectCategory
    );
  
  }, [selectCategory, data]);

  const handleCategoryClick = (role: string) => {
    if (role !== selectCategory) {
      setSelectCategory(role);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCustomer(id);
      toast.success("User deleted Successfully!", {
        position: "top-center"
      });
      console.log("Customer deleted successfully");
      navigate("/admin/customers")
    } catch (error) {
      toast.error("Failed to Delete User!", {
        position: "top-center"
      });
      console.error('Error deleting customer:', error);
      alert('An error occurred while deleting the customer. Please try again.');
    }
  };
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
    state: { pageIndex, pageSize },
    nextPage,
    previousPage,
    page,
  } = useTable<Customer>(
    {
      columns,
      data: filterCustomer,
      initialState: { pageIndex: 0, pageSize: 4 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="w-full ">
      <div className="w-full mt-7">
        <div className="w-full flex lg:items-center items-start justify-between lg:flex-row flex-col gap-4 ">
          <div className="w-full flex items-center justify-between gap-4">
            <h2 className="md:text-[20px] text-[17px] px-1 font-semibold">
              All Customers : <span>{filterCustomer.length}</span>
            </h2>
          </div>

          <div className="w-full bg-white py-[4px] px-2 border hover:border-blue-200 flex items-center justify-center gap-2 cursor-pointer rounded-md shadow-sm border font-medium text-white">
            <select
              value={selectCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="flex-grow outline-none md:text-[16px] text-[12px] bg-transparent text-gray-600 hover:text-black py-[5px]"
            >
              <option value="All">ALL</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <select
              value={selectCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="flex-grow outline-none bg-transparent border-l px-2 border-gray-300 md:text-[16px] text-[12px] text-gray-600 hover:text-black py-[5px]"
            >
              {" "}
              <option value="All">Sort by gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="w-full bg-white shadow-sm rounded-lg mt-6 md:overflow-hidden overflow-x-scroll border">
          <table {...getTableProps()} className="w-full table-auto">
            <thead className="w-full bg-gray-50">
              {headerGroups.map((hg) => (
                <tr
                  {...hg.getHeaderGroupProps()}
                  className="cursor-pointer w-full border-b"
                >
                  {hg.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="py-4 px-6 text-[17px] font-medium text-left"
                      key={column.id}
                    >
                      <div className="flex items-center gap-1">
                        {column.render("Header")}
                        {column.isSorted && (
                          <span>
                            {column.isSortedDesc ? (
                              <AiOutlineSortAscending />
                            ) : (
                              <AiOutlineSortDescending />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="w-full">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="hover:bg-gray-50 cursor-default w-full border-b"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="py-2 px-6 text-[15px]"
                        key={cell.column.id}
                      >
                        {cell.column.id === "avatar" ? (
                          <img
                            src={cell.value}
                            alt="avatar"
                            className="w-[50px] h-[50px] p-1 rounded-full "
                          />
                        ) : cell.column.id === "action" ? (
                          <MdDeleteForever onClick={() => handleDelete(row.original.id)} className="text-[20px] text-red-500 hover:text-red-600 cursor-pointer"/>
                        ) : (
                          cell.render("Cell")
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filterCustomer.length === 0 && (
            <p className="w-full px-6 text-center lg:text-[16px] text-[14px] text-gray-500 lg:py-4 py-2 ">
              No Data Found
            </p>
          )}
        </div>

        <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center mt-3">
          <p className="md:text-[16px] text-[14px] text-gray-500 font-normal">
            Showing{" "}
            <span className="font-medium text-black">
              {pageIndex * pageSize + 1}{" "}
            </span>{" "}
            to{" "}
            <span className="font-medium text-black">
              {Math.min((pageIndex + 1) * pageSize, filterCustomer.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-black">{filterCustomer.length}</span>{" "}
            results
          </p>
          <div className="flex items-center gap-2 mt-[8px]">
            <p
              className="md:text-[15px] text-[12px] md:mt-0  font-normal text-gray-500 py-[3px] bg-white shadow-sm cursor-pointer border hover:border-blue-200 px-3 rounded-md"
              onClick={() => gotoPage(0)}
            >
              First Page
            </p>
            <p
              className="md:text-[15px] text-[12px] md:mt-0  font-normal text-gray-500 py-[3px] bg-white shadow-sm cursor-pointer border hover:border-blue-200 px-3 rounded-md"
              onClick={() => gotoPage(pageCount - 1)}
            >
              Last Page
            </p>
          </div>
          <div className="flex items-center gap-6 mt-[4px]">
            <button
              disabled={!canPreviousPage}
              onClick={previousPage}
              className={`flex items-center group gap-1 md:text-[16px] text-[14px] font-semibold text-gray-500 hover:text-black hover:border-blue-200  py-[5px] ${
                canPreviousPage
                  ? "cursor-pointer"
                  : "cursor-not-allowed  hover:text-gray-400"
              } `}
            >
              <RiArrowLeftSFill
                className={`md:text-[18px] text-[16px] ${
                  canPreviousPage
                    ? "group-hover:-translate-x-1"
                    : "group-hover:-translate-x-none"
                }  transition-transform`}
              />{" "}
              Prev
            </button>
            <button
              disabled={!canNextPage}
              onClick={nextPage}
              className={`flex items-center group gap-1 md:text-[16px] text-[14px] font-semibold text-gray-500 hover:text-black hover:border-blue-200  py-[5px] ${
                canNextPage
                  ? "cursor-pointer"
                  : "cursor-not-allowed  hover:text-gray-400"
              } `}
            >
              Next{" "}
              <RiArrowRightSFill
                className={`md:text-[18px] text-[16px] ${
                  canNextPage
                    ? "group-hover:translate-x-1"
                    : "group-hover:-translate-x-none"
                }  transition-transform`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
