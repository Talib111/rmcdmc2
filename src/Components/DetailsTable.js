//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 20 june 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - DetailsTable
//    DESCRIPTION - DetailsTable Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import Td from './Td'
import Th from './Th'

function DetailsTable() {
    const props = {
        dataSet: [{ id: 1, owner_name: 'mark', Guardian_name: 'markFather', relation: 'S/O', aadhar: 123456789456, pan: 'AVSPH14277', gender: 'male', dob: '20 june 1999' },
        { id: 2, owner_name: 'mark', Guardian_name: 'markFather', relation: 'S/O', aadhar: 123456789456, pan: 'AVSPH14277', gender: 'male', dob: '20 june 1999' },
        { id: 3, owner_name: 'mark', Guardian_name: 'markFather', relation: 'S/O', aadhar: 123456789456, pan: 'AVSPH14277', gender: 'male', dob: '20 june 1999' }]
    }
    return (
        <>
            <div className="container mx-auto max-w-full ml-0">
                <div className="py-0">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead className='font-bold'>
                                    <tr>
                                        {
                                            Object.keys(props.dataSet[0]).map((key, index) => (
                                                <Th value={key} />
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.dataSet.map((data) => (
                                            <tr>
                                                {
                                                    Object.keys(data).map((key, index) => (
                                                        <Td value={data[key]} />
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailsTable
/**
 * Exported to :
 * 1. DetailsTab component
 */