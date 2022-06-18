import React from 'react'
import DashboardCard from '../Components/DashboardCard'

function Dashboard() {
  return (
    <>
    <div className="grid grid-cols-4 gap-12 px-4">
        <div><DashboardCard title="Holding" value="25,300"/></div>
        <div><DashboardCard title="Demand" value="25,300"/></div>
        <div><DashboardCard title="Collection" value="25,300"/></div>
        <div><DashboardCard title="Deactivated" value="25,300"/></div>
    </div>
    </>
  )
}

export default Dashboard