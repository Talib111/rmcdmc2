//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - HomeCard
//    DESCRIPTION - HomeCard Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import UserCard from './UserCard'
import UserDetails from './UserDetails'

function HomeCard() {
  return (
   <>
   
   <div className="w-full h-full bg-white rounded-sm pt-2 pb-16 px-12">
   <div><p className='text-sm font-semibold text-gray-600 pb-8'>Welcome To Profile Page</p></div>
     <div className="grid grid-cols-3 w-full h-full shadow-lg">
       <div><UserCard/></div>
       <div className='col-span-2 pl-2'><UserDetails/></div>
     </div>
   </div>
   </>
  )
}

export default HomeCard
/**
 * Exported to :
 * 1. Home Page
 */