// import { TABLE_HEAD, TABLE_ROWS } from "@/app/context";
import React from "react";
import { TABLE_HEAD, TABLE_ROWS } from "../../context";


const TableListdiv = () => {



  return (
    <>
      <div className="lg:border-2 cursor-pointer rounded-lg mt-10  py-2 overflow-x-auto">
        <table className="table-auto w-full  ">
          <thead>
            <tr >
              {TABLE_HEAD.map((header, index) => (
                <th key={index} className="px-4 rounded-t-lg 
                 bg-[#FFFFFF] border-seprate text-[#4C4D4F]
                  text-[.6rem] sm:text-[.7rem] text-start py-4">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="  text-left text-sm  text-[#4C4D4F] w-[90%] m-auto">
            {TABLE_ROWS.map((row, rowIndex) => (
              <tr key={rowIndex} className={`  border-b-2 text-[.45rem] sm:text-[.7rem] hover:bg-[#ffffff]
               lg:bg-[#F8F8F8] px-8 py-8 `} >
                <td className=" px-4 py-6">{row.name}</td>
                <td className=" px-4 py-2">{row.Time}</td>
                <td className=" px-4 py-2">{row.date}</td>
                <td className=" px-4 py-2">{row.Total}</td>
                <td >

                  <button className={`${row.Status === "In Progress" ? "bg-[#F1B34A] text-white" : ""}
                    
                    ${row.Status === "Complete" ? "bg-[#36C490] text-white" : ""}
                    ${row.Status === "Canceled" ? "bg-[#FFF9F1]" : ""}
                    text-center  m-auto  rounded-2xl px-2 lg:px-4 lg:py-1`}> {row.Status} </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="flex m-auto text-[#4C4D4F] underline items-center justify-center">
              View more
        </button>
      </div>
       
    </>
  );
};

export default TableListdiv;
