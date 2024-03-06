import { INVOICE_HEAD, INVOICE_ROWS } from '@/app/context'
import React from 'react'

const TempalteList = () => {



  return (
    <div>
    <div className="border-2 rounded-lg mt-3  overflow-x-auto">
      <table className="table-auto w-full px-2 ">
        <thead>
          <tr className="rounded-t-lg bg-[#000000] px-2 ">
            {INVOICE_HEAD.map((header, index) => (
              <th
                key={index}
                className="font-normal px-1 text-[#FFFFFF] text-[.4rem] text-start py-4"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="  text-left text-[.4rem]  text-[#000000] w-[90%] m-auto">
          {INVOICE_ROWS.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="font-semibold  text-[.4rem] bg-[#F8F8F8] px-4 py-8 "
            >
              <td className="  px-1 py-2">{row.name}</td>
              <td className="  px-1 py-2">{row.Rate}</td>
              <td className="  px-1 py-2">{row.qty}</td>
              <td className="  px-1 py-2">{row.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

</div>
  )
}

export default TempalteList