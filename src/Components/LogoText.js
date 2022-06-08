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
     <div className="text-left p-2" style={{'width':'200px','display':'flex','alignItems':'center'}}>
      <span> <img className='rounded-circle' style={{'width':'36px'}} src="http://192.168.0.16:822/RMCDMC/public/assets/img/logo1.png" alt="image" /></span>
       
       <span><p style={{'fontSize':'17px','marginTop':'-20px','color':'white','fontWeight':'bold','position':'relative','top':'18px','left':'8px','fontFamily':'sans-serif'}}>JHARKHAND</p></span>
   </div>
   </>
  )
}

export default LogoText
/**
 * Exported to :
 * 1. TopHeaderNav Component
 */