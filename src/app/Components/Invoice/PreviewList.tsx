
import React from 'react'
import { INVOICE_HEAD, INVOICE_ROWS } from '../../context'

const PreviewList = () => {


  return (
    <div>
          <div className="border-2 rounded-lg mt-6 lg:mt-2   overflow-x-auto">
            <table className="table-auto w-full  ">
              <thead>
                <tr className="rounded-t-lg bg-[#000000] ">
                  {INVOICE_HEAD.map((header, index) => (
                    <th
                      key={index}
                      className=" px-2 sm:px-4 font-normal text-[#FFFFFF] text-[.65rem] sm:text-[.8rem] lg:text-[.65rem] text-start py-4 lg:py-2"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="  text-left text-sm  text-[#000000] w-[90%] m-auto">
                {INVOICE_ROWS.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="font-semibold   text-[.7rem] sm:text[.5rem]  lg:text-[.45rem] bg-[#F8F8F8] px-8 py-4 sm:py-8 lg:py-4 "
                  >
                    <td className=" px-1 sm:px-3 py-1 sm:py-2 lg:py-1">{row.name}</td>
                    <td className=" px-1 sm:px-3 py-1 sm:py-2 lg:py-1">{row.Rate}</td>
                    <td className=" px-1 sm:px-3 py-1 sm:py-2 lg:py-1">{row.qty}</td>
                    <td className=" px-1 sm:px-3 py-1 sm:py-2 lg:py-1">{row.Total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    </div>
  )
}

export default PreviewList