//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - SidebarLink
//    DESCRIPTION - This is toggle SidebarLink component.
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import RawLink from './RawLink'
import { IoIosArrowForward } from 'react-icons/io';


function SidebarLink(props) {
    return (
        <>
            <li className='flex items-center pl-2 mt-4' style={{'width':'250px'}}>
                <div className="flex-none ">
                    <FaEnvelope size={13} color="white" />
                </div>
                <div className="flex-initial w-40">
                    <RawLink path="/home" title={props.title} />
                </div>
                <div className="flex-1">
                    <IoIosArrowForward size={13} color="white" />
                </div>
            </li>
        </>
    )
}

export default SidebarLink
/**
 * Exported to :
 * 1. Sidebar Component
 * 
 */