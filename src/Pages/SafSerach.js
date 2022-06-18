import React from 'react'
import Buttons from '../Components/Buttons'
import DetailsTable from '../Components/DetailsTable'
import InputField2 from '../Components/InputField2'

function SafSerach() {
  return (
   <>
   <div className="grid grid-cols-3 gap-4 mt-8">
       <div><InputField2 inputTitle="Ward" placeholder="Select"/></div>
       <div><InputField2 inputTitle="Saf No." placeholder="Enter keyword"/></div>
       <div><Buttons title="Search" variant="contained" size="small" color="primary" /></div>
   </div>
   <DetailsTable/>
   </>
  )
}

export default SafSerach