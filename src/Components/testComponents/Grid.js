import React from 'react'

function Grid() {
  return (
    <>
    <div className="grid grid-cols-12 w-full bg-white shadow-lg gap-4 h-20">
      <div className='bg-indigo-100 hidden sm:block  sm:col-span-1 grid text-center items-center'>First</div>
      <div className='bg-indigo-100 col-span-6 sm:col-span-1 grid text-center items-center'>Second</div>
      <div className='bg-indigo-100 col-span-6 sm:col-span-1 grid text-center items-center'>Third</div>
    </div>
    </>
  )
}

export default Grid