import React,{useState} from 'react'
import { FaEnvelope } from 'react-icons/fa';
import RawLink from './Components/RawLink'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import SidebarLink from './Components/SidebarLink';
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
            <li className='flex items-center pl-2 py-2 mt-2 cursor-pointer  hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500' onClick={expand} style={{ 'width': '250px' }}>
                <div className="flex-none ">
                    <FaEnvelope size={14} color="black" />
                </div>
                <div className="flex-initial w-40">
                    <div className='text-sm pl-2'>{props.title}</div>
                </div>
                <div className="flex-1">
                    {
                       collapseLink=='h-0'?<IoIosArrowForward size={13} color="black" />:<IoIosArrowDown size={13} color="black" />
                    }
                </div>
            </li>
            <div className={"collapse overflow-hidden bg-white bg-sky-100 "+collapseLink}>
                {/* <li className='flex items-center mt-2 pl-6' style={{ 'width': '250px' }}>
                    <div className="flex-none ">
                        <FaEnvelope size={14} color="black" />
                    </div>
                    <div className="flex-initial w-40">
                        <RawLink path="/home" title={props.title} />
                    </div>
                   
                </li>
                <li className='flex items-center mt-2 pl-6' style={{ 'width': '250px' }}>
                    <div className="flex-none ">
                        <FaEnvelope size={14} color="black" />
                    </div>
                    <div className="flex-initial w-40">
                        <RawLink path="/home" title={props.title} />
                    </div>
                   
                </li> */}
                <SidebarLink title="Hhhh" path="/hhhh"/>
            </div>
        </>
    )
}

export default CollapseItem2