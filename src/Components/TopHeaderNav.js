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

function TopHeaderNav() {
  return (
    <>
      <div className="d-flex w-100 px-0" style={{'backgroundColor':'#25476A'}}>
       <div className="flex-1"> <LogoText /></div>
      </div>
    </>
  )
}

export default TopHeaderNav
/**
 * Exported to :
 * 1. Header Component
 */