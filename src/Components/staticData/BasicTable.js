import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'

function BasicTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance
    return (
        <>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto bg-white">
                        <div className="inline-block min-w-full rounded-lg overflow-hidden bg-white">
                            <table {...getTableBodyProps} className="min-w-full leading-normal">
                                <thead className='font-bold text-left text-sm'>
                                    {
                                        headerGroups.map((headerGroup) => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map((column) => (
                                                        <th {...column.getHeaderProps()} className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase">{column.render('Header')}</th>

                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }

                                </thead>
                                <tbody {...getTableBodyProps()} className="text-sm">
                                    {rows.map((row) => {
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
                        </div>
                    </div>
        </>
    )
}

export default BasicTable