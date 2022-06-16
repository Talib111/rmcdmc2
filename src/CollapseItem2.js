import React,{useState} from 'react'
import { FaEnvelope } from 'react-icons/fa';
import RawLink from './Components/RawLink'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
function CollapseItem2(props) {

    const [collapseLink, setcollapseLink] = useState('h-0')
    const expand = ()=>{
        if(collapseLink=='h-0'){
            setcollapseLink('h-auto')
        }else{
            setcollapseLink('h-0')
        }
    }
    return (
        <>
            <li className='flex items-center pl-2 mt-4 cursor-pointer' onClick={expand} style={{ 'width': '250px' }}>
                <div className="flex-none ">
                    <FaEnvelope size={13} color="white" />
                </div>
                <div className="flex-initial w-40">
                    <RawLink path="#" title={props.title} />
                </div>
                <div className="flex-1">
                    {
                       collapseLink=='h-0'?<IoIosArrowForward size={13} color="white" />:<IoIosArrowDown size={13} color="white" />
                    }
                </div>
            </li>
            <div className={"collapse overflow-hidden bg-gray-700 "+collapseLink}>
                <li className='flex items-center mt-2 pl-6' style={{ 'width': '250px' }}>
                    <div className="flex-none ">
                        <FaEnvelope size={13} color="white" />
                    </div>
                    <div className="flex-initial w-40">
                        <RawLink path="/home" title={props.title} />
                    </div>
                   
                </li>
                <li className='flex items-center mt-2 pl-6' style={{ 'width': '250px' }}>
                    <div className="flex-none ">
                        <FaEnvelope size={13} color="white" />
                    </div>
                    <div className="flex-initial w-40">
                        <RawLink path="/home" title={props.title} />
                    </div>
                   
                </li>
            </div>
        </>
    )
}

export default CollapseItem2