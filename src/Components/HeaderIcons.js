//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - HeaderIcons
//    DESCRIPTION - HeaderIcons Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'


function HeaderIcons() {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center h-full pr-8">
        <div className='cursor-pointer col-start-10' ><BsBell color='white' size={16} /></div>
        <div className='cursor-pointer' ><AiOutlineUser color='white' size={16} /></div>
        <div className='cursor-pointer' ><BsThreeDotsVertical color='white' size={16} /></div>
       
      </div>
    </>
  )
}

export default HeaderIcons
/**
 * Exported to :
 * 
 */