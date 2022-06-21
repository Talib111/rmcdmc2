import React from 'react'

function GlobalFilter({ filter, setFilter}) {
  return (
    <>
    Search : {' '}
    <input className='border-2 border-gray-600 bg-gray-200' type="text" value={filter || ''} onChange={e => setFilter(e.target.value)} />
    </>
  )
}

export default GlobalFilter