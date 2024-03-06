import React, { useState } from "react";
import { CiGift } from "react-icons/ci";
import { RiMailSendFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export const Paymentmodel = ({ isOpen, onClose }: any) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="  bg-white w-[92%] sm:w-[60%] md:w-[50%] lg:w-[40%] sm:p-4 md:p-6 rounded-lg shadow-lg">
          <div className="max-w-md mx-auto p-6">
            <div className="text-center mb-8">
              <div className="rounded-full w-16 h-16 bg-[#36C490] flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl py-2 text-[#36C490] ">
                Payment Successful
              </h2>
              <p className="font-normal">Order ID #7864</p>
            </div>
            <div className="mb-2">
              <div className="flex py-1 justify-between">
                <div className="text-[.8rem] text-[#777777]">Payment Type:</div>
                <div className="text-[.8rem] text-[#777777]">NetBanking</div>
              </div>
              <div className="flex py-1 justify-between">
                <div className="text-[.8rem] text-[#777777]">Bank:</div>
                <div className="text-[.8rem] text-[#777777]">HDFC</div>
              </div>
              <div className="flex py-1 justify-between">
                <div className="text-[.8rem] text-[#777777]">Mobile:</div>
                <div className="text-[.8rem] text-[#777777]">+91 12345982</div>
              </div>

              <div className="flex py-1 justify-between">
                <div className="text-[.8rem] text-[#777777]">Email:</div>
                <div className="text-[.8rem] text-[#777777]">Acd@gmail.com</div>
              </div>

              <div className="py-2 ">
                <div className="flex text-[.8rem] py-2 justify-between">
                  <div className="font-normal">Amount Paid:</div>
                  <div>$180.00</div>
                </div>

                <div className="flex  text-[.8rem] justify-between">
                  <div className="font-normal">Transaction ID:</div>
                  <div>#154841845188787</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-between">
                <div></div>
                <div className="border-2 border-[#000000] rounded px-2 py-2 flex gap-2 items-center">
                  <CiGift className="text-yellow-400" />
                  <p className="text-[.8rem]">480 Points</p>
                </div>
              </div>
            </div>

            <div className=" px-0 sm:px-10 flex justify-between gap-2 mt-8">
              
              <div className="bg-black text-[.6rem] lg:text-[.8rem] flex justify-between gap-2 sm:gap-2 text-white py-2 px-4 rounded-lg">
                <RiMailSendFill className="m-auto " />
                <p>Send to Email</p>
              </div>
              
              <div className="hidden lg:block bg-black text-[.6rem] lg:text-[.8rem] text-white py-2 px-4 rounded-lg">
                Claim Reward Points
              </div>

               <div className=" lg:hidden">
               <div className=" bg-black text-[.6rem] lg:text-[.8rem] flex justify-between gap-2 text-white py-2 px-4 rounded-lg">
                <p>Close</p>
                <RxCross2  className="m-auto text-[.7rem]" />
              </div>
           </div>
              


            </div>
          </div>
        </div>
      </div>
    </>
  );
};
