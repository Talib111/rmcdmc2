//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - Header
//    DESCRIPTION - Header Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import TopHeaderNav from './TopHeaderNav'

function Header() {
  return (
   <>
   <TopHeaderNav/>
   <div className="w-100" style={{'backgroundColor':'#25476A','height':'160px'}}>
   </div>
   </>
  )
}

export default Header
/**
 * Exported to :
 * 1. Home Page
 */