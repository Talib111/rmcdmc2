import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';



function DataGrid2() {
  
    const columns = [
      
        { field: 'employee_code', headerName: 'Employee Code', width: 130},
        { field: 'user_name', headerName: 'User Name', width: 130 },
        { field: 'employee_name', headerName: 'Employee Name', width: 130 },
        { field: 'guardian_name', headerName: 'Guardian Name', width: 130 },
        { field: 'phone', headerName: 'Phone No.', width: 130 },
        { field: 'email_id', headerName: 'Email', width: 130 }
        
        // {
        //     field: 'Total',
        //     headerName: 'Total marks',
        //     width: 160,
        //     valueGetter: 2000,
        // },
    ];
    const rows = [
        { id: 1, employee_code: 75, user_name: 60,employee_name: 60,guardian_name: 60,phone: 60,email_id: 60},  
        { id: 2, employee_code: 75, user_name: 60,employee_name: 60,guardian_name: 60,phone: 60,email_id: 60},  
        { id: 3, employee_code: 75, user_name: 60,employee_name: 60,guardian_name: 60,phone: 60,email_id: 60},  
        { id: 4, employee_code: 75, user_name: 60,employee_name: 60,guardian_name: 60,phone: 60,email_id: 60},  
        { id: 5, employee_code: 75, user_name: 60,employee_name: 60,guardian_name: 60,phone: 60,email_id: 60},  
       
    ];

    return (
        <>
            <div style={{ height: 400, backgroundColor: 'white' }}>
                <div  style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                    <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataGrid2