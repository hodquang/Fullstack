import React, { useState } from 'react';
// import UserService from '../services/UserService';
import { AgGridReact } from 'ag-grid-react';  
import 'ag-grid-community/dist/styles/ag-grid.css';  
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; 
import { AgGridColumn } from 'ag-grid-react/lib/shared/agGridColumn';

export function UserComponent() {

    const [rowData, setRowData] = useState();

    React.useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then(res => res.json())
            .then(rowData => setRowData(rowData))
    })


    return (
        <div
            className="ag-theme-alpine"
            style={{
                width: 800,
                height: 600
            }}
        >
            <AgGridReact
                defaultColDef = {{sortable: true, filter: true}}
                rowData = {rowData}
            >
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="firstName"></AgGridColumn>
                <AgGridColumn field="lastName"></AgGridColumn>
                <AgGridColumn field="email"></AgGridColumn>

            </AgGridReact>
        </div>
    )
}