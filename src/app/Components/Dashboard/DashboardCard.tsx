import React from "react";
import DashboardList from "./DashboardList";
import Preview from "../Invoice/Preview";
import Invoice from "../invoicecreate/Invoice";
import Tempaltes from "../Templates/Tempaltes";
import { Paymentform } from "../Paymentform/Paymentform";

const DashboardCard = () => {
  return (
    <>
      <div className="px-4 border-black">
        <h1 className="text-3xl py-2"> Invoice </h1>
        <h2 className="text-lg py-2 text-[#4C4D4F]">Create a invoice for your patients  </h2>
      </div>

      <div className="Main-DetailContainer   border-black flex flex-col lg:flex-row">
       
        <div className="Invoice py-2 px-1 border-green-500 w-[100%] lg:w-[74%]  ">
            <Paymentform/>
        </div>

        {/* -----------------  invoice ----------- */}

        <div className="Invoiceprint mt-2 w-[100%]   lg:w-[26%]  border-yellow-700">
          <Preview />
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
