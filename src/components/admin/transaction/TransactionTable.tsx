import React, { useMemo, useState } from "react";
import { useTable, useSortBy, Column, usePagination } from "react-table";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { Transactions } from "../../../Data";
import { MdDeleteForever } from "react-icons/md";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Customer {
  id: number;
  user: string;
  amount: number;
  quantity:string;
  status: string;
  action: string;
}

const columns: Column<Customer>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const getStatusClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Delivered":
        return "text-green-500";
      case "Shipped":
        return "text-blue-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "";
    }
  }

const TransactionTable: React.FC = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");
  const [role, setRole] = useState("User")

  const filterProduct = useMemo(() => {
    let sortedData = [...Transactions];

    const data = sortedData.filter(
      (item) =>
        selectCategory === "All" ||
        item.quantity === selectCategory ||
        item.status === selectCategory
    );
    console.log(data);
    console.log(Transactions);
    return data;
  }, [selectCategory]);

  const handleCategoryClick = (role: string) => {
    if (role !== selectCategory) {
      setSelectCategory(role);
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
      data: filterProduct,
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
              All Products : <span>{filterProduct.length}</span>
            </h2>
          </div>

          <div className="w-full bg-white py-[4px] px-2 border hover:border-blue-200 flex items-center justify-center gap-2 cursor-pointer rounded-md shadow-sm border font-medium text-white">
            <select
              value={selectCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="flex-grow outline-none md:text-[16px] text-[12px] bg-transparent text-gray-600 hover:text-black py-[5px]"
            >
              <option value="All">ALL</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select
              value={selectCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="flex-grow outline-none bg-transparent border-l px-2 border-gray-300 md:text-[16px] text-[12px] text-gray-600 hover:text-black py-[5px]"
            >
              {" "}
              <option value="All">Sort by Status</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
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
                        className="py-3 px-6 text-[15px]"
                        key={cell.column.id}
                      >
                        {cell.column.id === "avatar" ? (
                          <img
                            src={cell.value}
                            alt="avatar"
                            className="w-[50px] h-[50px] p-1 rounded-full "
                          />
                        ) : cell.column.id === "status" ? (
                            <span className={getStatusClass(cell.value)}>
                              {cell.render("Cell")}
                            </span>
                          ) : cell.column.id === "action" ? (
                            <Link to={`/admin/Transaction/${row.original.id}`}>
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

          {filterProduct.length === 0 && (
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
              {Math.min((pageIndex + 1) * pageSize, Transactions.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-black">{Transactions.length}</span>{" "}
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

export default TransactionTable;
