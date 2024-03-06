'use client';

import React, { useState } from "react";
import Stepper from "./Stepper";
import { payment } from "@/app/context";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CiCamera } from "react-icons/ci";
import Visa from "./Visa";
import { Paymentmodel } from "../Model/Paymentmodel";

export const Paymentform = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="rounded-lg  bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
        <div className="Templates">
          <Stepper />
        </div>

        {/* <button onClick={openModal}>Open Modal</button> */}
      <Paymentmodel isOpen={isOpen} onClose={closeModal} />

        {/*  */}

        <div className="  sm:px-4 ">
          <div className="font-semibold py-2 text-[#777777] text-[.7rem] sm:text-sm px-2 sm:px-4 mb-4">
            Payment Method
          </div>
          <div className="grid grid-cols-4 px-2 sm:px-4 gap-4">
            {payment.length > 0 &&
              payment.map((el, index) => (
                <div key={index}>
                  <div className="flex items-center">
                    <div className="border-2 h-5 w-5 sm:h-7 sm:w-7 flex items-center justify-center rounded-full gap-2 ">
                      <div
                        className={`h-4 w-4 sm:h-6 sm:w-6 flex items-center justify-center ${
                          index == 0 ? "bg-black" : ""
                        }  rounded-full`}
                      >
                        <input
                          type="radio"
                          id={`creditDebit${index}`}
                          name="paymentMethod"
                          className="hidden"
                        />
                      </div>
                    </div>

                    <label
                      htmlFor={`creditDebit${index}`}
                      className="ml-2 text-[.5rem] sm:text-sm"
                    >
                      {el}
                    </label>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/*  */}

        <div className="Adddetails py-4  sm:px-4">
          <div className="font-semibold py-2 text-[#777777] text-[.7rem] sm:text-sm px-2 sm:px-4 mb-4">Add Payment Details</div>

          <div className="flex py-2  w-[50%] lg:w-[100%] flex-col lg:flex-row gap-5 items-center justify-center">
            <div className="w-full px-2 sm:px-4 lg:px-0 lg:w-1/2 sm:mx-4">
              <label
                htmlFor="left-select"
                className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2"
              >
                Enter Name on Card
              </label>
              <div className="relative">
                <input
                  id="custom-input"
                  type="text"
                  className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
                />
                <CiCamera className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="w-full px-2 sm:px-4 lg:px-0 lg:w-1/2 mx-4">
              <label
                htmlFor="right-select"
                className="text-start text-[.6rem] px-2 lg:px-0 sm:text-sm text-[#777777] block mb-2"
              >
                Card Number
              </label>
              <div className="relative">
                <input
                  id="custom-input"
                  type="text"
                  className="w-full  px-2 sm:px-4  py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
                />
                <CiCamera className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex py-2 ml-[.7rem] sm:ml-0 w-[100%] flex-row  lg:gap-5  items-center justify-center">
            <div className="w-full  lg:px-0 lg:w-1/2 sm:mx-4">
              <label
                htmlFor="left-select"
                className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2"
              >
               Expiry (MM/YY)
              </label>
              <div className="relative">
                <input
                  id="custom-input"
                  type="text"
                  className="w-[100%] m-auto   md:px-8 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
                />
                <CiCamera className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="w-full  lg:px-0 lg:w-1/2 mx-4">
              <label
                htmlFor="right-select"
                className="text-start text-[.6rem] px-2 lg:px-0 sm:text-sm text-[#777777] block mb-2"
              >
                CVV Code
              </label>
              <div className="relative">
                <input
                  id="custom-input"
                  type="text"
                  className="w-full  px-2 sm:px-4  py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
                />
                {/* <CiCamera className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" /> */}
              </div>
            </div>
          </div>
      
     </div>



        {/* <div className="VIsacard py-4  sm:px-4">
          <div className="font-semibold py-2 text-[#777777] text-[.7rem] sm:text-sm px-2 sm:px-4 mb-4">
            Saved Cards
          </div>
          <Visa />
        </div> */}

        {/* Singnature */}

        <div className="lg:hidden  px-2 sm:px-8 lg:px-8 w-[50%]  py-2">
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
              className="w-full  px-2 sm:px-4 py-8 text-[.4rem] text-[#777777] border
                         sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
            />
            <div className="border-2 relative top-[-1rem] w-[90%] m-auto " />
          </div>
        </div>

        {/* <div className="py-4  px-2 sm:px-4 flex item-center justify-center">
          <button
            className="border-2  border-[#4C4D4F] px-12 sm:px-20 lg:px-12 rounded-full text-[.6rem] sm:text-sm 
          text-[#777777] py-2  sm:py-4 lg:py-4 text-center font-normal m-auto"
          >
            ADD New Card
          </button>
        </div> */}

        {/*  */}

        <p className=" text-[.6rem] py-2 sm:text-sm px-2 sm:px-8">
          {" "}
          By Clicking on ‘Confirm Payment’ I agree with the Terms and conditions
          of the Company.{" "}
        </p>

        <div className=" px-2 sm:px-6 flex justify-between">
          <div
            className=" py-4 flex
         gap-5  flex-row items-center "
          >
            <button
              className="border-2 border-[#777777] bg-[#FFFFFF] px-12 sm:px-20 lg:px-14 rounded-full text-[.6rem] sm:text-[.8rem] 
          text-[#777777] py-2 sm:py-3 lg:py-2 text-center font-normal m-auto"
            >
              Save
            </button>
            <button
              className=" bg-black   px-7 sm:px-12  lg:px-7 rounded-full text-[.5rem] sm:text-[.7rem] 
          text-[#ffffff] py-3 sm:py-4 lg:py-3 text-center font-normal m-auto"
            >
              Confirm Payment
            </button>
          </div>
          <div> </div>
        </div>

        <div className="lg:mt-10" />
      </div>
    </>
  );
};
