import React,{useState} from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'

function ButtonLoader() {
    const [bounce, setbounce] = useState('hidden')
    return (
           <button className='bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-sky-600 text-center relative' onMouseEnter={()=> setbounce('')} onMouseLeave={()=> setbounce('hidden')}>Click Me <div className={bounce+' absolute h-full w-full top-2 left-0 text-center animate-bounce'}><AiOutlineArrowDown/></div></button>
    )
}

export default ButtonLoader