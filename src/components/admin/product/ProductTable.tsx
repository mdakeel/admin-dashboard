import React from "react";
import { useTable, useSortBy, Column, usePagination } from 'react-table';
import { AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai'
import { Products } from "../../../Data";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

interface Product {
  id: number;
  photo: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  action: string;
}

const columns: Column<Product>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];


const ProductTable: React.FC = () => {
   const show : boolean = true

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
    state: {pageIndex, pageSize},
    nextPage,
    previousPage,
    page
  } = useTable<Product>(
    { columns, data: Products, initialState : {pageIndex : 0, pageSize : 4} },
    useSortBy, usePagination
  );

  return (
    <div className="w-full mt-7">
      <div className="w-full flex lg:items-center items-start justify-between lg:flex-row flex-col gap-4 ">
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="md:text-[20px] text-[17px] px-1 font-semibold">
            All Products : <span>03</span>
          </h2>
          <p className="bg-white md:text-[16px] text-[13px] text-gray-600 hover:text-black border hover:border-blue-200 shadow-sm md:py-[8px] py-[5px] md:px-4 px-2 flex items-center gap-2 cursor-pointer rounded-md font-medium">
            <FaPlus size={14} className="text-blue-500" />
            Add Product
          </p>
        </div>

        <div className="w-full bg-white py-[4px] px-2 border hover:border-blue-200 flex items-center justify-center gap-2 cursor-pointer rounded-md shadow-sm border font-medium text-white">
          <select className="flex-grow outline-none md:text-[16px] text-[12px] bg-transparent text-gray-600 hover:text-black py-[5px]">
            <option className="py-[6px] px-4" value="Category">
              Category
            </option>
            <option className="py-[6px] px-4" value="All">
              All
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
          <select className="flex-grow outline-none bg-transparent border-l px-2 border-gray-300 md:text-[16px] text-[12px] text-gray-600 hover:text-black py-[5px]">
            <option className="py-[6px] px-4" value="Sort by date (recent first)">
              Sort by date (recent first)
            </option>
            <option className="py-[6px] px-4" value="Sort by date (earlier first)">
              Sort by date (earlier first)
            </option>
            <option className="py-[6px] px-4" value="Sort by amount (high first)">
              Sort by amount (high first)
            </option>
            <option className="py-[6px] px-4" value="Sort by amount (low first)">
              Sort by amount (low first)
            </option>
          </select>
        </div>
      </div>
      <div className="w-full bg-white shadow-sm rounded-lg mt-6 md:overflow-hidden overflow-x-scroll border">
        <table {...getTableProps()} className="w-full table-auto">
          <thead className="w-full bg-gray-50">
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()} className="cursor-pointer w-full border-b">
                {hg.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())} 
                    className="py-4 px-6 text-[17px] font-medium text-left"
                    key={column.id}
                  >
                    <div className="flex items-center gap-1">
                    {column.render("Header")}
                    {
                      column.isSorted && (
                        <span>
                          {column.isSortedDesc ? (<AiOutlineSortAscending />) : (<AiOutlineSortDescending />)}
                        </span>
                      )
                    }
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
                <tr {...row.getRowProps()} className="hover:bg-gray-50 cursor-default w-full border-b">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="py-2 px-6 text-[15px]" key={cell.column.id}>
                      {cell.column.id === "photo" ? (
                        <img src={cell.value} alt="Product" className="w-[50px] h-[50px]" />
                      ) : cell.column.id === "action" ? (
                        <Link to={`/admin/products/${row.original.id}`}>
                          <span className="text-blue-600 bg-blue-100 px-4 hover:bg-blue-200 hover:text-blue-800 cursor-pointer py-1 rounded-md">
                            {cell.value}
                          </span>
                        </Link>
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
      </div>
     
      <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center mt-3">
        {show && (
            <>
            <p className="md:text-[16px] text-[14px] text-gray-500 font-normal">
              Showing <span className="font-medium text-black">{pageIndex + 1} </span> to{" "}
              <span className="font-medium text-black">{Math.min((pageIndex + 1) * pageSize, Products.length)}</span> of{" "}
              <span className="font-medium text-black">{Products.length}</span> results
            </p>
            <div className="flex items-center gap-2 mt-[8px]">
            <p className="md:text-[15px] text-[12px] md:mt-0  font-normal text-gray-500 py-[3px] bg-white shadow-sm cursor-pointer border hover:border-blue-200 px-3 rounded-md" onClick={() => gotoPage(0)}>First Page</p>
            <p className="md:text-[15px] text-[12px] md:mt-0  font-normal text-gray-500 py-[3px] bg-white shadow-sm cursor-pointer border hover:border-blue-200 px-3 rounded-md" onClick={() => gotoPage(pageCount - 1)}>Last Page</p>
            </div>
            <div className="flex items-center gap-6 mt-[4px]">
              <button disabled={!canPreviousPage} onClick={previousPage} className={`flex items-center group gap-1 md:text-[16px] text-[14px] font-semibold text-gray-500 hover:text-black hover:border-blue-200  py-[5px] ${canPreviousPage ? "cursor-pointer" : "cursor-not-allowed  hover:text-gray-400"} `}>
                <RiArrowLeftSFill className={`md:text-[18px] text-[16px] ${canPreviousPage ? "group-hover:-translate-x-1" : "group-hover:-translate-x-none"}  transition-transform`} />{" "}
                Prev
              </button>
              <button disabled={!canNextPage} onClick={nextPage} className={`flex items-center group gap-1 md:text-[16px] text-[14px] font-semibold text-gray-500 hover:text-black hover:border-blue-200  py-[5px] ${canNextPage ? "cursor-pointer" : "cursor-not-allowed  hover:text-gray-400"} `}>
                Next{" "}
                <RiArrowRightSFill className={`md:text-[18px] text-[16px] ${canNextPage ? "group-hover:translate-x-1" : "group-hover:-translate-x-none"}  transition-transform`}/>
              </button>
            </div>
            </>
        )}
        
      </div>
    </div>
  );
};

export default ProductTable;
