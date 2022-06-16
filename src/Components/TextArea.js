import React from 'react'

function TextArea(props) {
    return (
        <>
            <div className="relative mb-4 h-full">
                <textarea onChange={(event)=>props.fun(event.target.value)} id="notes" name="notes" className="shadow-lg w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-full text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out bg-orange-200 focus:bg-white">{props.value}</textarea>
            </div>
        </>
    )
}

export default TextArea