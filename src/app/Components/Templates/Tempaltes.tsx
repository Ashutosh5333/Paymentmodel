import React from "react";

import TemplateCard from "./TemplateCard";

const Tempaltes = () => {

  return (
    <>
      <div className="rounded-lg  lg:bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
       
        <div className="Temple-heading px-2 lg:px-4  text-sm flex flex-row gap-5">
          <div>
            <p> Templates </p>
            <div className="border-t-2 border-black" />
          </div>
          <div>
            <p className=""> Create Invoice </p>
          </div>
        </div>
        {/* ================ */}
        <div className="border-t-2" />

        <div className="Templates">
             <TemplateCard/>
        </div>
         
         <div  className=" lg:mt-[19.5%]"/>
        {/*  */}
        
      </div>
    </>
  );
};

export default Tempaltes;
