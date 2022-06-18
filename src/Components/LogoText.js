//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - LogoText
//    DESCRIPTION - LogoText Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import logo from './logo1.png'

function LogoText() {
  return (
   <>
  

   <div className="grid grid-cols-12 place-items-center h-full">
      <div className='col-span-2 col-start-2'><img style={{'width':'40px'}} src={logo} alt="hello" /></div>
      <div className='col-span-9'><h4 className='text-blue-400 font-bold text-lg'>JHARKHAND</h4></div>
  </div>
   </>
  )
}

export default LogoText
/**
 * Exported to :
 * 1. TopHeaderNav Component
 */