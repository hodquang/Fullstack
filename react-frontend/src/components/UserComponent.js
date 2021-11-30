import React, { useEffect, useState } from 'react';
// import UserService from '../services/UserService';
import { AgGridReact } from 'ag-grid-react';  
import 'ag-grid-community/dist/styles/ag-grid.css';  
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; 
import { Link } from 'react-router-dom';
import userService from '../services/user.service';

export function UserComponent() {

    const [rowData, setRowData] = useState([]);

    const columnDefs = [
        { headerName: "ID", field:"id", cellClass: "grid-cell-centered" },
        { headerName: "First", field:"firstName", cellClass: "grid-cell-centered" },
        { headerName: "Last", field:"lastName", cellClass: "grid-cell-centered" },
        { headerName: "Email", field:"email", cellClass: "grid-cell-centered" },
        {
            headerName: "Actions", field: "actions", cellClass: "grid-cell-centered",
            cellRendererFramework: (params) =>
                <div>
                    <Link className="btn btn-info" to={`/users/edit/${params.data.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={() => handleDelete(params.data.id)}>Delete</button>
                </div>
        },
    ]

    useEffect(() => {
        init();
    }, [])
    
    const init = () => {
        userService.getAll()
        .then(response => {
          console.log('print users data', response.data);
          setRowData(response.data);
        }).catch(error => console.log('Something went wrong', error)) 
    }
    
    const handleDelete = id => {
        userService.remove(id)
            .then(res => {
                console.log("deleted successfully", res.data);
                init();
            }).catch(error => console.log('Something went wrong', error))
    }

    return (
        <div
            className="ag-theme-alpine"
            style={{
                width: 1000,
                height: 600
            }}
        >
            <Link to="/add" className="btn btn-primary mb-2">Add User</Link>
            <AgGridReact
                defaultColDef={{ sortable: true, filter: true }}
                columnDefs={columnDefs}
                rowData = {rowData}
            >
            </AgGridReact>
        </div>
    )
}