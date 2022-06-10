//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - UserCard
//    DESCRIPTION - UserCard Component 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import './welcome.css'

function UserCard() {
    return (
        <>
            <div className="w-full h-full welcome_c grid place-items-center">
                <div className='p-0 text-center'>
                    <img className='rounded-lg m-auto mt-4 bg-red-600 w-32'  src="http://192.168.0.16:822/RMCDMC/public/assets/img/avatar/default_avatar.png" alt="image" />
                    <p className='text-xs font-extrabold mt-3 text-gray-600'>SUPER ADMIN SUPER ADMIN</p>
                    <p className='text-xs font-bold mt-3 text-white'>SUPER ADMIN</p>
                </div>
               
               
            </div>
        </>
    )
}

export default UserCard
/**
 * Exported to :
 * 1. HomeCard Component
 */