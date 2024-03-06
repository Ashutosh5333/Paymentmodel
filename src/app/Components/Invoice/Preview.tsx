// import { INVOICE_HEAD, INVOICE_ROWS } from "@/app/context";
import Image from "next/image";
import React from "react";
import { BsPrinter } from "react-icons/bs";
import PreviewList from "./PreviewList";
import { FiEdit3 } from "react-icons/fi";
const Preview = () => {
  return (
    <>
      <div className="rounded-lg  bg-[#FFFFFF] 
      shadow-xl px-1 sm:px-8 lg:px-2 py-4 ">
        
        <div className="flex  pb-6 justify-between">
          <div className="flex items-center">
            <div className="p-1 px-2  rounded-lg flex items-center">
              Preview Invoice
            </div>
          </div>
          <div className="flex  items-center">
          <div className="flex flex-row gap-2 text-[#4C4D4F] text-[.6rem] bg-[#F8F8F8] p-3 rounded-lg mr-2">
              
              <FiEdit3 className="m-auto text-lg sm:text-2xl"/>
            </div>
            <div className="flex flex-row gap-2 text-[#4C4D4F] text-[.6rem] bg-[#F8F8F8] p-3 rounded-lg mr-2">
              <BsPrinter className="m-auto text-lg sm:text-2xl" />
            </div>

          </div>
        </div>

        <div className="border-2 py-8 px-1 pt-4 border-gray-300 rounded-xl">
          <div className="py-4 lg:py-2 px-2">
            <Image
              src={"/assets/Skinclub.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
         
          <div className="divider  py-2 flex justify-center items-center">
            <p className="mx-2 text-[.8rem] lg:text-[.6rem] text-[#4C4D4F] text-start">SUMMERY</p>
            <hr className="w-[1000px] border" />
          </div>

          <div className="px-2 pt-4 flex justify-between ">
            <p className=" text-[.9rem] lg:text-[.7rem]"> Dr. Vihang </p>
            <p className=" pr-20 text-[.9rem] lg:text-[.7rem]"> Jane Doe </p>
            <p> </p>
          </div>

          {/*  */}

          <div className="TableList">
            <PreviewList />
          </div>

          <div className=" border-black py-2 px-4 flex  justify-between">
            <div></div>

            <div className="grid  grid-cols-2 gap-4">
              <div className="text-[.8rem] lg:text-[.6rem]">
                <p className="text-end py-1 ">Subtotal:</p>
                <p className="text-end  text-[#777777] py-1">Tax (5%):</p>
                <p className="text-end  text-[#777777] py-1">Discount (10%):</p>
              </div>
              <div className="text-[.8rem] lg:text-[.6rem] text-end">
                <p className="py-1 ">$540.00</p>
                <p className="py-1  text-[#777777]">$00.00</p>
                <p className="py-1  text-[#777777]">$00.00</p>
              </div>
            </div>
          </div>

          <div className="border-t-2  py-2 lg:py-1" />

          <div className="pb-2 lg:pb-0 border-black px-4 flex  justify-between">
            <div></div>
            <div className="grid  grid-cols-2 gap-10">
              <div className="text-start text-[.8rem] lg:text-[.6rem]">
                <p className="py-1 ">total</p>
              </div>
              <div className="text-[.8rem] lg:text-[.6rem] text-end">
                <p className="py-1 ">$540.00</p>
              </div>
            </div>
          </div>

          <div className="px-2 lg:px-4 py-4 lg:py-2 mb-5 bg-[#F8F8F8]">
            <h2 className="text-[.8rem] lg:text-[.6rem] "> Notes/Terms </h2>
            <p className="text-[.7rem] lg:text-[.4rem] text-[#777777]">
              Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
            </p>
          </div>
        </div>
        
        <div className="lg:mt-[60%]"/>

        {/* <div className=" py-10  lg:mt-[53%] flex
         gap-5  flex-col lg:flex-row items-center ">
          <button className="border-2 bg-[#FFFFFF] px-20 lg:px-12 rounded-full text-sm 
          text-[#000000] py-4 lg:py-2 text-center font-normal m-auto">
            Save 
          </button>
          <button className=" bg-black px-14  lg:px-6 rounded-full text-sm 
          text-[#ffffff] py-4 lg:py-2 text-center font-normal m-auto">
          Save & Send
          </button>
        </div> */}
        
      </div>
    </>
  );
};

export default Preview;
