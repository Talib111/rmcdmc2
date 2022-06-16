import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import RawLink from './Components/RawLink'
import { IoIosArrowForward } from 'react-icons/io';
function CollapseItem2(props) {
    const expand = ()=>{
        
    }
    return (
        <>
            <li className='flex items-center pl-2 mt-4 bg-red-600' onClick={expand} style={{ 'width': '250px' }}>
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
            <div className="collapse">
                <li className='flex items-center pl-2 mt-4' style={{ 'width': '250px' }}>
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
            </div>
        </>
    )
}

export default CollapseItem2