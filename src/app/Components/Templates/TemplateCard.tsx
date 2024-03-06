"use client";

import React, { useState } from "react";
import Image from "next/image";
import TempalteList from "./TempalteList";

const TemplateCard = () => {
  const [data, setData] = useState(
    Array.from({ length: 8 }, (_, index) => index + 1)
  );

  
  return (
    <>
      <div className=" min-h-screen mt-5 rounded-lg ">
        <div className="text-[#777777] px-1 cursor-pointer  py-2  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4   gap-2">
          {data.length > 0 &&
            data.map((el, i) => {
              return (
                <div key={i}>
                  <div className="border-2 px-1 hover:border-black  border-gray-300 rounded-xl">
                    <div className="py-2 mt-2 px-2">
                      <Image
                        src={"/assets/Skinclub.svg"}
                        alt="logo"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="divider  py-2 flex justify-center items-center">
                      <p className="mx-2 text-[.6rem] text-[#4C4D4F] text-start">
                        SUMMERY
                      </p>
                      <hr className="w-[1000px] border" />
                    </div>

                    <div className="px-2 text-[#000000] font-semibold  flex justify-between ">
                      <p className=" text-[.6rem]"> Dr. Vihang </p>
                      <p className=" pr-10 text-[.6rem]"> Jane Doe </p>
                      <p> </p>
                    </div>

                    {/*  */}

                    <div className="TemplateList">
                      <TempalteList/>
                    </div>

                    {/*  */}

                    <div className="border-black py-1 px-4 flex  justify-between">
                      <div></div>

                      <div className="grid  grid-cols-2 gap-4">
                        <div className=" text-[.5rem]">
                          <p className="text-end py-1 font-semibold text-[#000000] ">Subtotal:</p>
                          <p className="text-end  text-[#777777] py-1">
                            Tax (5%):
                          </p>
                          <p className="text-end  text-[#777777] py-1">
                            Discount (10%):
                          </p>
                        </div>
                        <div className="text-[.5rem] text-end">
                          <p className="py-1 font-semibold text-[#000000]">$540.00</p>
                          <p className="py-1  text-[#777777]">$00.00</p>
                          <p className="py-1  text-[#777777]">$00.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t-2  py-1 " />

                    <div className="pb-1 border-black px-4 flex  justify-between">
                      <div></div>
                      <div className="grid  grid-cols-2 gap-10">
                        <div className="text-start text-[.5rem]">
                          <p className="py-1 font-semibold text-[#000000] ">total</p>
                        </div>
                        <div className="text-[.5rem] text-end">
                          <p className="py-1 font-semibold text-[#000000] ">$540.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-2 mb-2 bg-[#F8F8F8]">
                      <h2 className="text-[.5rem] font-semibold text-[#000000] "> Notes/Terms </h2>
                      <p className="text-[.35rem] text-[#777777]">
                        Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TemplateCard;
