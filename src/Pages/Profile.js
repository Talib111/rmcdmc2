import React from 'react'
import WardChip from '../WardChip'

function Profile() {
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto"
                                        // src="https://avatars.githubusercontent.com/u/62421178?v=4"
                                        src="data:image/png;base64,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"
                                        alt="" />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Super Admin</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-4"></div>

                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Employee Name</div>
                                            <div className="px-4 py-2">Super Admin</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Guardian Name</div>
                                            <div className="px-4 py-2">Doe</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Phone Number</div>
                                            <div className="px-4 py-2">+91 998001001</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email Id</div>
                                            <div className="px-4 py-2">abc@gmail.com</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">User Type</div>
                                            <div className="px-4 py-2">Super Admin</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Assigned Ulb</div>
                                            <div className="px-4 py-2">Ranchi Municipal Corporation</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold"></div>
                                            <div className="px-4 py-2">
                                                <a className="text-blue-800" href="mailto:jane@example.com"></a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold"></div>
                                            <div className="px-4 py-2"></div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                                    Full Information</button>
                            </div>

                            <div className="my-4"></div>

                            <div className="bg-white p-3 shadow-sm rounded-sm pb-28">

                                <div className="grid grid-cols-2">
                                    <div className='col-span-2'>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Assigned Ward</span>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <div className="flex-initial"><WardChip ward="1" /></div>
                                            <div className="flex-initial"><WardChip ward="1A" /></div>
                                            <div className="flex-initial"><WardChip ward="2" /></div>
                                            <div className="flex-initial"><WardChip ward="2A" /></div>
                                            <div className="flex-initial"><WardChip ward="3" /></div>
                                            <div className="flex-initial"><WardChip ward="3A" /></div>
                                            <div className="flex-initial"><WardChip ward="4" /></div>
                                            <div className="flex-initial"><WardChip ward="4A" /></div>
                                            <div className="flex-initial"><WardChip ward="1" /></div>
                                            <div className="flex-initial"><WardChip ward="1A" /></div>
                                            <div className="flex-initial"><WardChip ward="2" /></div>
                                            <div className="flex-initial"><WardChip ward="2A" /></div>
                                            <div className="flex-initial"><WardChip ward="3" /></div>
                                            <div className="flex-initial"><WardChip ward="3A" /></div>
                                            <div className="flex-initial"><WardChip ward="4" /></div>
                                            <div className="flex-initial"><WardChip ward="4A" /></div>
                                            <div className="flex-initial"><WardChip ward="1" /></div>
                                            <div className="flex-initial"><WardChip ward="1A" /></div>
                                            <div className="flex-initial"><WardChip ward="2" /></div>
                                            <div className="flex-initial"><WardChip ward="2A" /></div>
                                            <div className="flex-initial"><WardChip ward="3" /></div>
                                            <div className="flex-initial"><WardChip ward="3A" /></div>
                                            <div className="flex-initial"><WardChip ward="4" /></div>
                                            <div className="flex-initial"><WardChip ward="4A" /></div>
                                            <div className="flex-initial"><WardChip ward="1" /></div>
                                            <div className="flex-initial"><WardChip ward="1A" /></div>
                                            <div className="flex-initial"><WardChip ward="2" /></div>
                                            <div className="flex-initial"><WardChip ward="2A" /></div>
                                            <div className="flex-initial"><WardChip ward="3" /></div>
                                            <div className="flex-initial"><WardChip ward="3A" /></div>
                                            <div className="flex-initial"><WardChip ward="4" /></div>
                                            <div className="flex-initial"><WardChip ward="4A" /></div>
                                            <div className="flex-initial"><WardChip ward="1" /></div>
                                            <div className="flex-initial"><WardChip ward="1A" /></div>
                                            <div className="flex-initial"><WardChip ward="2" /></div>
                                            <div className="flex-initial"><WardChip ward="2A" /></div>
                                            <div className="flex-initial"><WardChip ward="3" /></div>
                                            <div className="flex-initial"><WardChip ward="3A" /></div>
                                            <div className="flex-initial"><WardChip ward="4" /></div>
                                            <div className="flex-initial"><WardChip ward="4A" /></div>
                                            <div className="flex-initial"><WardChip ward="1" /></div>
                                            <div className="flex-initial"><WardChip ward="1A" /></div>
                                            <div className="flex-initial"><WardChip ward="2" /></div>
                                            <div className="flex-initial"><WardChip ward="2A" /></div>
                                            <div className="flex-initial"><WardChip ward="3" /></div>
                                            <div className="flex-initial"><WardChip ward="3A" /></div>
                                            <div className="flex-initial"><WardChip ward="4" /></div>
                                            <div className="flex-initial"><WardChip ward="4A" /></div>
                                          
                                           
                                        </div>
                                        {/* <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul> */}
                                    </div>
                                    {/* <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Education</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-teal-600">Masters Degree in Oxford</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile