import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import TableListcard from "./TableListcard";

const DashboardList = () => {
  return (
    <div className="rounded-lg lg:bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
      <div className=" px-2 lg:px-4 py-2 flex justify-between">
        <div className="flex items-center">
          <div className="bg-[#F8F8F8] p-2 px-4 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by patient name"
              className="placeholder-gray-500 lg:pr-20 text-[.6rem] bg-transparent outline-none flex-1"
            />
            <div className="h-5 w-[.1rem] bg-gray-400 mx-2"></div>
            <CiSearch />
          </div>
        </div>
        <div className="flex  items-center">
          <button className="bg-[#F8F8F8] text-[#4C4D4F] text-[.6rem] px-2 lg:px-4 py-2 rounded-lg mr-2">
            Select Date
          </button>

          <div className="flex flex-row gap-2 text-[#4C4D4F] text-[.6rem] bg-[#F8F8F8] p-2 rounded-lg mr-2">
            <p>20 Aug </p>
            <IoIosArrowDown className="m-auto" />
          </div>
        </div>
      </div>

      <div className="border-t-2" />

      <div className="lg:px-4">
        <TableListcard />
       
      </div>
    </div>
  );
};

export default DashboardList;
