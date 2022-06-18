import React from 'react'

function WardChip(props) {
    return (
        <>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-700 bg-sky-200 uppercase last:mr-0 mr-1">
                {props.ward}
            </span>
        </>
    )
}

export default WardChip