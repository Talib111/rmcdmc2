import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import GlobalFilter from './GlobalFilter'

function BasicTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    // const tableInstance = useTable({
    //     columns,
    //     data
    // }, useSortBy)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,//since used pagination
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex } = state
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto bg-white">
                <div className="inline-block min-w-full rounded-lg overflow-hidden bg-white">
                    <table {...getTableBodyProps} className="min-w-full leading-normal">
                        <thead className='font-bold text-left text-sm'>
                            {
                                headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase">{column.render('Header')}
                                                    <span>{column.isSorted ? (column.isSortedDesc ? '⬆️' : '⬇️') : ''}</span></th>

                                            ))
                                        }
                                    </tr>
                                ))
                            }

                        </thead>
                        <tbody {...getTableBodyProps()} className="text-sm">
                            {/* {rows.map((row) => { */} {/**since used pagination */}
                            {page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()} className="px-5 py-3 border-b border-gray-200 bg-white text-sm">{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <span>
                            | Go to page : {''}
                            <input className='border-2 border-black rounded-lg' type="text" defaultValue={pageIndex + 1} onChange={(e)=>{
                                const pageNumber = e.target.value ? Number(e.target.value) - 1:0
                                gotoPage(pageNumber)
                            }} />
                        </span>
                        <span className='ml-20 mr-8'>
                            page{''}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{''}
                        </span>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'} </button>
                        <button className={!canPreviousPage ? 'opacity-50' : 'opacity-100' + ' text-xl'} onClick={() => previousPage()} disabled={!canPreviousPage}>⬅️</button>
                        <button className={!canNextPage ? 'opacity-50' : 'opacity-100' + ' text-xl'} onClick={() => nextPage()} disabled={!canNextPage}>➡️</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> {'>>'}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicTable