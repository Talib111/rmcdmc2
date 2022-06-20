//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 20 june 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - Th
//    DESCRIPTION - Th Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function Th(props) {
    return (
        <>
            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                {props.value}
            </th>
        </>
    )
}

export default Th
/**
 * Exported to :
 * 1. DetailsTable component
 */