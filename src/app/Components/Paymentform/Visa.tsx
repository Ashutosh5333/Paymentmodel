import Image from "next/image";
import React from "react";

const Visa = () => {
  return (
    <>
      <div className="flex px-2 py-2 w-[100%] lg:w-[100%] flex-col  gap-5 items-center justify-center">
       
        <div className="border  rounded py-6 px-4 w-[100%] border-[#bdbdbd] flex  justify-between">
          
          <div className="flex items-center">
            <div className="border border-black h-5 w-5 sm:h-7 sm:w-7 flex items-center justify-center rounded-full gap-2 ">
              <div
                className={`h-4 w-4 sm:h-6 sm:w-6 flex items-center justify-center ${"bg-black"}  rounded-full`}
              >
                <input
                  type="radio"
                  id={`creditDebit`}
                  name="paymentMethod"
                  className="hidden"
                />
              </div>
            </div>
            <Image src="/assets/Visaimag.svg" alt="Visa"
               width={100}
               height={100}
            className="ml-2" />
          </div>

         
          <div className="flex flex-col ml-4">
            <h2 className="text-lg font-semibold">**** **** **** 1157</h2>
            <h2 className="text-sm sm:text-xl text-end text-[#4C4D4F]">VISA CARD</h2>
          </div>
        </div>

        {/*  */}

        <div className="border rounded py-4 px-4 w-[100%] border-[#bdbdbd] flex  justify-between">
        
          <div className="flex items-center">
            <div className="border border-black h-5 w-5 sm:h-7 sm:w-7 flex items-center justify-center rounded-full gap-2 ">
              <div
                className={`h-4 w-4 sm:h-6 sm:w-6 flex items-center justify-center   rounded-full`}
              >
                <input
                  type="radio"
                  id={`creditDebit`}
                  name="paymentMethod"
                  className="hidden"
                />
              </div>
            </div>
            <Image src="/assets/Visacard.svg" alt="Visa"
             width={100}
             height={100}
            className="ml-2" />
          </div>

         
          <div className="flex flex-col ml-4">
            <h2 className="text-lg font-semibold">**** **** **** 1157</h2>
            <h2 className="text-sm sm:text-xl text-end text-[#4C4D4F]">Master Card</h2>
          </div>
        </div>


      </div>
    </>
  );
};

export default Visa;
