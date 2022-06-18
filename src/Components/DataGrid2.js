import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';



function DataGrid2() {
    const columns = [
        { field: 'maths', headerName: 'Maths', width: 130 },
        { field: 'science', headerName: 'Science', width: 130 },
        // {
        //     field: 'Total',
        //     headerName: 'Total marks',
        //     width: 160,
        //     valueGetter: 2000,
        // },
    ];
    const rows = [
        { id: 1, maths: 75, science: 60 },
        { id: 2, maths: 80, science: 70 },
        { id: 3, maths: 50, science: 80 },
        { id: 4, maths: 80, science: 60 },
        { id: 5, maths: 100, science: 90 },
    ];

    return (
        <>
            <div style={{ height: 400, width: '70%', 'marginLeft': '200px', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                    <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataGrid2