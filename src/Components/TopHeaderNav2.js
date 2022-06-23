//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - TopHeaderNav
//    DESCRIPTION - TopHeaderNav Component of header 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import HeaderIcons from './HeaderIcons'
import LogoText from './LogoText'
import NavigationButton from './NavigationButton'

function TopHeaderNav() {
  return (
    <>
      {/* <div className="grid grid-cols-12 w-100 px-0 h-16" style={{'backgroundColor':'#25476A'}}> */}
      <div className="grid grid-cols-12 w-100 px-0 h-16 bg-sky-100 shadow-xl  z-50 relative" >
        {/* <div className="col-span-12 absolute w-10/12 h-full bg-sky-100"></div> */}
       <div className="hidden sm:block col-span-0 sm:col-span-2"> <LogoText /></div>
       <div className='col-span-9 sm:col-span-3 place-items-center'><NavigationButton/></div>
       <div className='col-span-3 place-items-center col-start-10'><HeaderIcons/></div>
      
      </div>
    </>
  )
}

export default TopHeaderNav
/**
 * Exported to :
 * 1. Header Component
 */