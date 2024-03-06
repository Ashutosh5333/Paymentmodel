import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  skincaredata,
  skincarehead,
  tratmenthead,
  treatmentdata,
} from "../../context";
import { RiDeleteBin5Fill } from "react-icons/ri";
import InvoiceCard from "./InvoiceCard";

const InvoicecreateCard = () => {
  return (
    <div className="rounded-lg px-2     py-2  border-yellow-500 ">
      <div className="flex py-2 flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mx-4">
          <label
            htmlFor="left-select"
            className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2"
          >
            Select person
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="text"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
              placeholder="Select the person to whom you will send this"
            />
            <HiOutlineChevronDown className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-4">
          <label
            htmlFor="right-select"
            className="text-start text-[.6rem] sm:text-sm text-[#777777] block mb-2"
          >
            Invoice Number
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="text"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
            />
          </div>
        </div>
      </div>

      {/*  traetment */}

      <div className="flex py-2 flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mx-4">
          <label
            htmlFor="left-select"
            className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2"
          >
            Add a Treatment
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="text"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
              placeholder="Select a treatment"
            />
            <HiOutlineChevronDown className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-4">
          <label
            htmlFor="right-select"
            className="text-start text-[.6rem] sm:text-sm text-[#777777] block mb-2"
          >
            Select Date
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="date"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
              sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
            />
          </div>
        </div>
      </div>

      {/*  Card   */}

      <div className=" px-4">
        <div className="border-2 hidden lg:block rounded-lg px-2 bg-[#F8F8F8] ">
          <div className=" text-[#777777] px-2 lg:px-4 py-2 text-sm flex flex-row gap-5">
            <table className="table-auto w-full  ">
              <thead className="border-b-2 ">
                <tr className="rounded-t-lg">
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2">
                    Treatments
                  </th>
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2">
                    Amount
                  </th>
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2"></th>
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2"></th>
                </tr>
              </thead>

              <tbody className=" mt-5 text-left text-sm  text-[#000000] w-[90%] m-auto">
                <tr className="font-semibold text-[.5rem] mt-5 sm:text-[.7rem] px-8 py-4">
                  <td className="sm:px-4 py-2">Anti wrinkle treatment</td>
                  <td className="sm:px-4">$1480</td>
                  <td className="sm:px-4">
                    <div className="text-right">
                      <button
                        className={`text-center m-auto bg-black text-white rounded-2xl py-2 px-6 sm:px-10 lg:px-12 lg:py-2`}
                      >
                        Add
                      </button>
                    </div>
                  </td>
                  <td className="sm:px-4 py-2">
                    <div className="text-right">
                      <button
                        className={`text-center border-2 border-[#E11D48] m-auto text-[#E11D48] rounded-2xl py-2 px-4 sm:px-10 lg:px-12 lg:py-2`}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border-t-2" />
          </div>
        </div>

        {/* ----------------- Card two------------- */}

        <div className="border-2 hidden lg:block mt-5 rounded-lg px-2 bg-[#F8F8F8] ">
          <div className=" text-[#777777] px-2 lg:px-4 py-2 text-sm flex flex-row gap-5">
            <table className="table-auto w-full  ">
              <thead className="border-b-2 ">
                <tr className="rounded-t-lg">
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2">
                    Treatments
                  </th>
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2">
                    Rate/per section
                  </th>
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2">
                    no. of section
                  </th>
                  <th className="px-4  text-[#777777] text-[.8rem] text-start py-2">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody className=" mt-5 text-left text-sm  text-[#000000] w-[90%] m-auto">
                <tr className="font-semibold text-[.5rem] mt-5 sm:text-[.7rem]  px-8 py-4 ">
                  <td className="text-left px-4 py-2">
                    <button
                      className={`text-left bg-[#FFFFFF] text-black 
                    rounded py-2 px-8 lg:px-8 lg:py-2`}
                    >
                      Hair Care Session
                    </button>
                  </td>
                  <td className="text-left px-4 py-2">
                    <button
                      className={`text-left bg-[#FFFFFF] text-black 
                    rounded py-2 px-8 lg:px-8 lg:py-2`}
                    >
                      $145
                    </button>
                  </td>
                  <td className="text-left px-4 py-2">
                    <button
                      className={`text-left bg-[#FFFFFF] text-black 
                    rounded py-2 px-8 lg:px-8 lg:py-2`}
                    >
                      8
                    </button>
                  </td>
                  <td className="text-left px-4 py-2">
                    <button
                      className={`text-left bg-[#FFFFFF] text-black 
                    rounded py-2 px-8 lg:px-8 lg:py-2`}
                    >
                      $1164
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border-t-2" />
          </div>

          <div className="  py-2 gap-5 flex justify-between">
            <div></div>
            <div className="flex gap-4">
              <button
                className={`text-center  m-auto bg-black text-white 
                     rounded-2xl py-2 px-6 sm:px-10 lg:px-14 lg:py-2`}
              >
                Add
              </button>

              <button
                className={`text-center border-2 border-[#E11D48] m-auto text-[#E11D48] 
                     rounded-2xl py-2 px-4 sm:px-10 lg:px-12 lg:py-2`}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* card threee */}
        <div className="border-2 hidden lg:block mt-5 rounded-lg px-2 bg-[#F8F8F8]">
          <div className="text-[#777777] px-2 lg:px-4 py-2 text-sm flex flex-row gap-5">
            <table className="table-auto w-full">
              <thead className="border-b-2">
                <tr className="rounded-t-lg">
                  {skincarehead.map((header, index) => (
                    <th
                      key={index}
                      className="px-4 text-[#777777] text-[.8rem] text-start py-2"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="mt-5 text-left text-sm text-[#000000] w-[90%] m-auto">
                {skincaredata.map((item, index) => (
                  <tr
                    key={index}
                    className="font-semibold text-[.5rem] mt-5 sm:text-[.7rem] px-8 py-4"
                  >
                    <td className="text-left px-4 py-2">
                      <button
                        className={`text-left bg-[#FFFFFF] text-black rounded py-2 px-8 lg:px-8 lg:py-2`}
                      >
                        {item.title}
                      </button>
                    </td>
                    <td className="text-left px-4 py-2">
                      <button
                        className={`text-left bg-[#FFFFFF] text-black rounded py-2 px-8 lg:px-8 lg:py-2`}
                      >
                        {item.rate}
                      </button>
                    </td>
                    <td className="text-left px-4 py-2">
                      <button
                        className={`text-left bg-[#FFFFFF] text-black rounded py-2 px-8 lg:px-8 lg:py-2`}
                      >
                        {item.qty}
                      </button>
                    </td>
                    <td className="text-left px-4 py-2">
                      <button
                        className={`text-left bg-[#FFFFFF] text-black rounded py-2 px-8 lg:px-8 lg:py-2`}
                      >
                        {item.ammount}
                      </button>
                    </td>
                    <td className="text-left px-4 py-2">
                      <button
                        className={`text-left  text-[#8B8B8B]
                `}
                      >
                        <RiDeleteBin5Fill className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="border-t-2" />
          </div>

          <div className="py-2 gap-5 flex justify-between">
            <div></div>
            <div className="flex gap-4">
              <button
                className={`text-center m-auto bg-black text-white rounded-2xl py-2 px-6 sm:px-10 lg:px-14 lg:py-2`}
              >
                Add
              </button>

              <button
                className={`text-center border-2 border-[#E11D48] m-auto text-[#E11D48] rounded-2xl py-2 px-4 sm:px-10 lg:px-12 lg:py-2`}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Tablet view */}

      <div className="md:block lg:hidden">
        <InvoiceCard data={skincaredata} head={skincarehead} />
      </div>

      <div className="md:block lg:hidden">
        <InvoiceCard data={treatmentdata} head={tratmenthead} />
      </div>
    </div>
  );
};

export default InvoicecreateCard;
