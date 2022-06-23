import React from 'react'

function RippleAnimation() {
    return (
        <>
            <div className="absolute -top-2 -right-1">
                <div className="bg-red-300 w-4 h-4 rounded-full  animate-ping">
                </div>
                <div className='bg-red-400 w-3 h-3 rounded-full absolute top-1 left-1'></div>
            </div>

        </>
    )
}

export default RippleAnimation