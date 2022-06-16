//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 8 june 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - ImageCard
//    DESCRIPTION - ImageCard Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function ImageCard(props) {
  return (
   <>
   <div className="text-center px-1" >
       <img className='rounded-full m-auto mt-4' style={{'width':'58px'}} src="http://smartulb.co.in/RMCDMC/public/assets/img/avatar/default_avatar.png" alt="image" />
       <p className='text-sm font-medium' style={props.sideBarStatus==true?{'display':'none'}:{'display':'block'}}>Super Admin</p>
       <p className='text-xs' style={props.sideBarStatus==true?{'display':'none'}:{'display':'block'}}>rahul@aadrikaenterprises.com</p>
   </div>
   </>
  )
}

export default ImageCard
/**
 * Exported to :
 * 1. Sidebar Component
 */