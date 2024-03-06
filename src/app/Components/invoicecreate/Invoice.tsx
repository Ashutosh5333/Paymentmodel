import React from "react";

import InvoicecreateCard from "./InvoicecreateCard";
import { FaMicrophoneAlt } from "react-icons/fa";

const Invoice = () => {
  return (
    <>
      <div className="rounded-lg  lg:bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
      
        <div className="Temple-heading px-2 lg:px-4  text-sm flex flex-row gap-5">
          <div>
            <p> Templates </p>
          </div>
          <div>
            <p className=""> Create Invoice </p>
            <div className="border-t-2 border-black" />
          </div>
        </div>
        {/* ================ */}
        <div className="border-t-2" />

        <div className="Invioce">
          <InvoicecreateCard />
        </div>

        {/*  */}

        <div className="px-2 sm:px-4 border-red-700 py-2 w-[100%] ">
          <div className=" flex justify-between gap-1 sm:gap-4">
            <div className="AddNotes w-1/2 py-2 mx-2">
              <div>
                <label
                  htmlFor="left-select"
                  className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2"
                >
                  Add Notes/Terms
                </label>
                <div className="relative">
                  <input
                    id="custom-input"
                    type="text"
                    className="w-full  px-4 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
                  />
                  <FaMicrophoneAlt className="absolute top-1/2 left-1 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="lg:hidden  py-2">
                  <label
                    htmlFor="left-select"
                    className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2"
                  >
                    Signature
                  </label>
                  <div className="relative">
                    <input
                      id="custom-input"
                      type="text"
                      className="w-full  px-4 sm:px-4 py-8 text-[.4rem] text-[#777777] border
                         sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
                    />
                    <div className="border-2 relative top-[-1rem] w-[90%] m-auto " />
                  </div>
                </div>
              </div>
            </div>

            {/* -------------- */}

            <div className="SubTotal sm:px-2 py-6  w-1/2">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="text-[.5rem] md:text-[.8rem]">
                  <p className="text-end font-semibold py-2">Subtotal:</p>
                  <p className="text-end  text-[#777777] py-2">
                    Transaction Fee 5%:
                  </p>
                  <p className="text-end text-[#777777] py-2">Discount 10%</p>
                  <p className="text-end py-6 font-semibold">Total</p>
                </div>
                <div className="text-[.5rem] px-2 md:text-[.8rem] gap-2 text-end">
                  <p className="py-2">$540.00</p>
                  <p className="py-2 px-1 mt-1 shadow-md bg-[#FFFFFF] border border-[#4C4D4F] rounded text-[#000000]">
                    $00.00
                  </p>
                  <p className="py-2 px-1 mt-1 shadow-md bg-[#FFFFFF] border border-[#4C4D4F] rounded text-[#000000]">
                    $00.00
                  </p>
                  <p className="py-2 px-1 mt-1 font-semibold rounded text-[#000000]">
                    $540.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  last */}

      </div>
    </>
  );
};

export default Invoice;
