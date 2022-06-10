//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - Sidebar
//    DESCRIPTION - This is toggle sidebar component.
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import ImageCard from './ImageCard';
import SidebarLink from './SidebarLink';


function Sidebar() {

    return (
        <>
            <div className="shadow-lg px-0 bg-white h-full pb-12 overflow-hidden">
                <div className='py-4'>
                    <ImageCard />
                </div>
                <ul className="px-3 list-none">
                   <SidebarLink title="Dashboard" />
                   <SidebarLink title="Inbox" />
                   <SidebarLink title="Menu Permission" />
                   <SidebarLink title="User" />
                   <SidebarLink title="Master" />
                   <SidebarLink title="Property" />
                   <SidebarLink title="Water" />
                   <SidebarLink title="Trade" />
                   <SidebarLink title="Accounts" />
                   <SidebarLink title="All Module Report" />



                </ul>
            </div>
        </>
    )
}

export default Sidebar
/**
 * Exported to :
 * 1. Home Page
 * 
 */