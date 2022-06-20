//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 20 june 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - DetailCard
//    DESCRIPTION - DetailCard Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import CardRow from './CardRow'

function DetailCard() {
    const props = {
        dataSet: { id: 1, ward: 'mark', new_ward: 'markFather', holding: 'S/O', new_holding: 123456789456 }
    }

    return (
        <>

            <div className="container mx-auto pr-4 pl-1  max-w-3xl ml-0">
                <div className="py-0">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden grid grid-cols-4 px-4 gap-4 py-4 bg-white dark:bg-slate-800 dark:text-gray-200">
                            {
                                Object.keys(props.dataSet).map((key, index) => (
                                    <CardRow title={key} value={props.dataSet[key]} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailCard
/**
 * Exported to :
 * 1. DetailsTab component
 */