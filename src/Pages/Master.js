import React,{useState} from 'react'
import DataGrid2 from '../Components/DataGrid2'
import InputField2 from '../Components/InputField2'

function Master() {
    const [inputValue, setinputValue] = useState('')

    const handleChange = (value)=>{
        setinputValue(value)
    }
  return (
   <>
   <div className="grid grid-cols-4 h-8 mb-16 mt-4">
       {/* <p>{inputValue}</p> */}
       <InputField2 fun={handleChange}/>
   </div>
   <DataGrid2/>
   </>
  )
}

export default Master