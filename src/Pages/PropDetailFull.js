//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Date - 
//    Version - 1.0
//    Revison - 1
//    Project - rmcdmc
//    Component  - PropDetailFull
//    DESCRIPTION - This is toggle PropDetailFull component.
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import BasicDetailsCard from '../Components/BasicDetailsCard'
import DetailCard from '../Components/DetailCard'
import DetailsTab from '../Components/DetailsTab'

function PropDetailFull() {
  return (
    <>
      {/* <div className="grid grid-cols-12 md:gap-4 mt-12 h-full relative -top-52">
        <div className="xs:col-span-12 md:col-start-3 md:col-span-10 md:pr-6 md:pl-2 "><BasicDetailsCard cardTitle="Property Details" />
          <BasicDetailsCard cardTitle="Property Details" />
          <BasicDetailsCard cardTitle="Property Details" />
          <BasicDetailsCard cardTitle="Property Details" /></div>
      </div> */}
      <DetailsTab/>
      {/* <DetailCard title="Property details"/>
      <DetailCard title="Owner Details"/>
      <DetailCard title="Owner Details"/>
      <DetailCard title="Owner Details"/>
      <DetailCard title="Owner Details"/> */}

    </>
  )
}

export default PropDetailFull
/**
 * 
 * 
 */