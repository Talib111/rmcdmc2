//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 20 june 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - cardRow
//    DESCRIPTION - cardRow Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function cardRow(props) {
    return (
        <>
            <div className='font-semibold text-gray-600 text-sm'>{props.title} :</div>
            <div className='text-sm'>{props.value}</div>
        </>
    )
}

export default cardRow
/**
 * Exported to :
 * 1. DetailCard component
 */