//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - LogoText
//    DESCRIPTION - LogoText Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function LogoText() {
  return (
   <>
  

   <div className="grid grid-cols-12 place-items-center h-full">
      <div className='pl-20'><img className='rounded-circle' style={{'width':'36px'}} src="http://smartulb.co.in/RMCDMC/public/assets/img/logo1.png" alt="image" /></div>
      <div className='col-span-10'><h4 className='text-blue-400 font-bold text-lg'>JHARKHAND</h4></div>
  </div>
   </>
  )
}

export default LogoText
/**
 * Exported to :
 * 1. TopHeaderNav Component
 */