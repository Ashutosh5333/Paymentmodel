import React from "react";

const Stepper = () => {
  return (
    <div className=" sm:px-4 border-red-600">
    
   
      <div className=" border-red-600 p-2 sm:p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-green-500 rounded-full">
              <span className="text-white p-2  text-[.8rem] sm:text-sm font-bold">✓</span>
            </div>
            <p className="ml-2 text-[.6rem] sm:text-sm">Shipping</p>
          </div>

          <hr className="border-t border-gray-500 flex-grow mx-2 " />

          <div className="flex items-center">
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center
             bg-[#4C4D4F] border text-[#ffffff] border-gray-500 rounded-full">
              <span className="p-2  text-[.8rem] sm:text-sm">2</span>
            </div>
            <p className="ml-2 text-[.6rem] sm:text-sm mr-1">Billing</p>
          </div>

          <hr className="border-t border-gray-500  flex-grow sm:mx-2 " />

          <div className="flex items-center">
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center ml-1 justify-center bg-white border border-gray-500 rounded-full">
              <span className="text-[.8rem] sm:text-sm">3</span>
            </div>
            <p className="ml-2 text-[.6rem] sm:text-sm">Confirmed</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Stepper;
