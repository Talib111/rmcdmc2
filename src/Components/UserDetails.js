//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - UserDetails
//    DESCRIPTION - UserDetails Component 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import './userdetails.css'

function UserDetails() {
    return (
        <>
            <div className="headTitle w-full">
                <p className='font-semibold text-sm'>Ranchi Municipal Corporation</p>
                <p className='font-semibold text-sm mt-2'>Information</p>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-sm font-bold text-gray-800">
                <div className="div">
                    <p>Email</p>
                </div>
                <div className="div">
                    <p>Phone</p>
                </div>
                <div className="div">
                    <p>User Id</p>
                </div>
            </div>
            <div className="grid grid-cols-3 text-sm font-semibold text-gray-500">
                <div className="div">
                    <p>rahul@aadrikaenterprises.com</p>
                </div>
                <div className="div">
                    <p>8002766899</p>
                </div>
                <div className="div">
                    <p>super</p>
                </div>
            </div>
            <div className="div mt-2">
                <p className='font-bold text-gray-800 font-bold text-sm '>Ward Permissions</p>
            </div>
            <div className="flex gap-1 font-bold text-white warlist flex-warp mt-2 h-28">
                <div className="flex-initial px-1 h-3">1</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">2</div>
                <div className="flex-initial px-1 h-3">2A</div>
                <div className="flex-initial px-1 h-3">1</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">2</div>
                <div className="flex-initial px-1 h-3">2A</div>
                <div className="flex-initial px-1 h-3">1</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">2</div>
                <div className="flex-initial px-1 h-3">2A</div>
                <div className="flex-initial px-1 h-3">1</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">2</div>
                <div className="flex-initial px-1 h-3">2A</div>
                <div className="flex-initial px-1 h-3">1</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">1A</div>
                <div className="flex-initial px-1 h-3">2</div>
                <div className="flex-initial px-1 h-3">2A</div>
                <div className="flex-initial px-1 h-3">1</div>
                <div className="flex-initial px-1 h-3">1A</div>

            </div>
            <div className="div mt-2">
                <p className='font-bold text-gray-800 font-bold text-sm'>Log In Details</p>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-sm font-semibold text-gray-800 mt-4 mb-2">
                <div className="div">
                    <p>IP Address</p>
                </div>
                <div className="div">
                    <p>	Login Date/Time</p>
                </div>
               
            </div>
            <hr />
            <div className="grid grid-cols-3 text-xs text-gray-900 mt-4">
                <div className="div">
                    <p>203.129.217.58</p>
                </div>
                <div className="div">
                    <p>2022-06-10 00:36:17</p>
                </div>
                
            </div>
        </>
    )
}

export default UserDetails
/**
 * Exported to :
 * 1. HomeCard Component
 */