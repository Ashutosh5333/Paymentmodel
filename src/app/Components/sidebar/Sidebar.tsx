import React from "react";

const Sidebar = () => {

  return (
    <>
      <div className="relative font-[Cabin]  border-red-600 flex min-h-screen w-full  flex-col  bg-[#FFFFFF] bg-clip-border p-2 ">

        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          
          <h5 className="block  text-md font-normal  text-[#4C4D4F]">
             Overview
          </h5>
        </div>
        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          
          <h5 className="block  text-md font-normal text-[#4C4D4F]">
             Profile
          </h5>
        </div>
        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          <h5 className="block  text-md font-normal  text-[#4C4D4F]">
           Appointments
          </h5>
        </div>

        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block text-md font-normal   text-[#4C4D4F]">
            History
          </h5>
        </div>

        <nav className="flex min-w-[240px] flex-col gap-1 p-2  text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
           
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2  "
              >
                <p className="block mr-auto  text-sm  font-normal  text-[#4C4D4F]">
                 Videos
                </p>
              </button>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2  "
              >
                <p className="block mr-auto  text-sm  font-normal  text-[#4C4D4F]">
                Videos Library
                </p>
              </button>

            </div>

          </div>
        </nav>

        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          <h5 className="block  text-md font-normal  text-[#4C4D4F]">
           Messages
          </h5>
        </div>
        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          <h5 className="block   text-md font-normal   text-[#4C4D4F]">
          Support
          </h5>
        </div>

        <nav className="flex min-w-[240px] flex-col gap-1 p-2  text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
           
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2  "
              >
                <p className="block mr-auto  text-sm  font-normal  text-[#4C4D4F]">
                  FAQ's
                </p>
              </button>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2  "
              >
                <p className="block mr-auto  text-sm  font-normal  text-[#4C4D4F]">
                Procedure Information
                </p>
              </button>

            </div>

          </div>
        </nav>





        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          <h5 className="block  text-md font-normal  text-[#4C4D4F]">
          Aftercare
          </h5>
        </div>
    
        <nav className="flex min-w-[240px] flex-col gap-1 p-2  text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
           
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2  "
              >
                <p className="block mr-auto  text-sm  font-normal  text-[#4C4D4F]">
                  Quizzes
                </p>
              </button>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2  "
              >
                <p className="block mr-auto  text-sm  font-normal  text-[#4C4D4F]">
               Health & Skin Assesment
                </p>
              </button>

            </div>

          </div>
        </nav>




        
        <div className="flex items-center gap-4 px-2 py-2 mb-2">
          <h5 className="block  text-md font-normal  text-[#4C4D4F]">
           Finances
          </h5>
        </div>
        <div className="flex bg-[#FFF9F1] rounded-md items-center gap-4 px-2 py-2 mb-2">
          <h5 className="block  text-md font-normal  text-[#4C4D4F]">
          virtual Consulation
          </h5>
        </div>

     
      </div>
    </>
  );
};

export default Sidebar;
