import React from 'react'

export default function Sidebar2() {
    return (
        <>
            <div class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">layout</p>
                <button aria-label="show/hide sub category" class="focus:outline-none"><svg class="text-gray-800 dark:text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg></button></div>
                <div class="hidden"><div class="flex flex-col"><div class="h-6"></div><a class="flex items-center justify-between" href="/components/webapp/calendar/calendar"><button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">calendar</button><p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">14</p></a></div></div>
        </>
    )
}
