import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const InvoiceCard = ({ head, data }:any) => {
  return (
    <div className="border-2 mt-5 rounded-lg px-2 bg-[#F8F8F8]">
      <div className="text-[#777777] px-2 lg:px-4 py-2 text-sm flex flex-col lg:flex-row gap-5">
        <table className="table-auto w-full lg:w-auto">
          <thead className="border-b-2">
            <tr className="rounded-t-lg">
              {head.map((header:any, index:any) => (
                <th
                  key={index}
                  className="px-2 sm:px-4 text-[#777777] text-[.6rem] sm:text-[.8rem] text-start py-2"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="mt-5 text-left text-sm text-[#000000] w-[90%] m-auto">
            {data.map((item:any, index:any) => (
              <tr
                key={index}
                className="font-semibold text-[.4rem] mt-5 sm:text-[.7rem] px-2 py-2 sm:px-8 sm:py-4"
              >
                <td className="text-left  sm:px-4 py-2">
                  <button
                    className={`text-left bg-[#FFFFFF] text-black rounded py-1 px-4 sm:py-2 sm:px-8 lg:px-8 lg:py-2`}
                  >
                    {item.title}
                  </button>
                </td>
                <td className="text-left  sm:px-4 py-2">
                  <button
                    className={`text-left bg-[#FFFFFF] text-black rounded py-1 px-4  sm:py-2 sm:px-8 lg:px-8 lg:py-2`}
                  >
                    {item.rate}
                  </button>
                </td>
                <td className="text-left sm:px-4 py-2">
                  <button
                    className={`text-left bg-[#FFFFFF] text-black rounded py-1 px-4  sm:py-2 sm:px-8 lg:px-8 lg:py-2`}
                  >
                    {item.qty}
                  </button>
                </td>
                <td className="text-left  sm:px-4 py-2">
                  <button
                    className={`text-left bg-[#FFFFFF] text-black rounded py-1 px-4  sm:py-2 sm:px-8 lg:px-8 lg:py-2`}
                  >
                    {item.ammount}
                  </button>
                </td>
                <td className="text-left  sm:px-4 py-2">
                  <button
                    className={`text-left  text-[#8B8B8B]
                `}
                  >
                    <RxCross1 className=" m-auto  text-lg sm:text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-t-2" />
      </div>

      <div className="py-4 gap-5 flex justify-between">
        <div className="flex gap-4">
          <button className="text-center m-auto bg-black text-[.9rem] text-white rounded-full py-2 px-6 sm:px-10 lg:px-14 lg:py-2">
            Add Item
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InvoiceCard;
