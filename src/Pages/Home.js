//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - Home
//    DESCRIPTION - This is Home Component which has a Home.
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'                       // Importing React library
import Login from '../Components/Login'         // Importing Login Component
// import 'bootstrap/dist/css/bootstrap.min.css'   // Importing bootstrap css file
import Sidebar from '../Components/Sidebar'     // Importing Sidebar component
import Header from '../Components/Header'
import HomeCard from '../Components/HomeCard'

// HOME FUNCTION
function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-4 mt-12 h-full relative -top-52">
        <div className="col-span-2 pr-2"><Sidebar /></div>
        <div className="col-span-10 pr-6 pl-2"><HomeCard /></div>
      </div>
    </>
  )
}

export default Home // EXPORTING HOME COMPONENT
/**
 * Exported to :
 * 1. App 
 */