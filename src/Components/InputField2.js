import React from 'react'

function InputField2(props) {
    return (
        <>
            <div class=" relative ">
                <label for="required-email" class="text-gray-700">
                    {props.inputTitle}
                    <span class="text-red-500 required-dot">
                        *
                    </span>
                </label>
                <input onChange={(event)=> props.fun(event.target.value)} type="text" id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" name="email" placeholder={props.placeholder} />
            </div>

        </>
    )
}

export default InputField2