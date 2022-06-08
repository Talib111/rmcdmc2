//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - ImageCard
//    DESCRIPTION - ImageCard Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function ImageCard() {
  return (
   <>
   <div className="text-center" >
       <img className='rounded-full m-auto mt-4' style={{'width':'58px'}} src="http://smartulb.co.in/RMCDMC/public/assets/img/avatar/default_avatar.png" alt="image" />
       <p className='text-sm font-medium'>Super Admin</p>
       <p className='text-xs'>rahul@aadrikaenterprises.com</p>
   </div>
   </>
  )
}

export default ImageCard
/**
 * Exported to :
 * 1. Sidebar Component
 */