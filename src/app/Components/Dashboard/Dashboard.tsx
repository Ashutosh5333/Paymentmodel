import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import DashboardCard from './DashboardCard'

const Dashboard = () => {

  return (
    <div className='w-[100%] flex flex-col lg:flex-row '>
    <div className='w-[16%]  hidden px-2 lg:block  '>
      <Sidebar />
    </div>
    <div className='py-6 px-1 lg:px-1 border-red-600 w-[100%] lg:w-[84%] m-auto bg-[#FFF9F1]'>
       <DashboardCard/>
    </div>
  </div>
  )
}

export default Dashboard
