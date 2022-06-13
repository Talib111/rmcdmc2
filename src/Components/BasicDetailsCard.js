//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date -  10 june 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - BasicDetailsCard
//    DESCRIPTION - BasicDetailsCard Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import DetailsRow from './DetailsRow'

function BasicDetailsCard(props) {
  return (
    <>
      <div className="bg-white text-xs pb-8 border-2" style={{'border':'1px solid #3A444E'}}>
        <div className='h-8 text-sm text-white px-4 grid' style={{ 'backgroundColor': '#3A444E' }}>{props.cardTitle}</div>
       <DetailsRow title="Holding No." value="12" />
       <DetailsRow title="Holding No." value="12" />
       <DetailsRow title="Holding No." value="12" />
       <DetailsRow title="Holding No." value="12" />
       <DetailsRow title="Holding No." value="12" />
       <DetailsRow title="Holding No." value="12" />
      
      </div>
    </>
  )
}

export default BasicDetailsCard
/**
 * Exported to :
 * 1. PropDetailFull component
 */