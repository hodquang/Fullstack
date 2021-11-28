import React, {Component} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';  
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnHead: [
                { headerName: "Id", field: "Id", sortable: true, filter: true },
                { headerName: "Name", field: "Name", sortable: true, filter: true },
                { headerName: "Class", field: "Class", sortable: true, filter: true }
            ],
            rowData: [
                {
                    Id: "12345678",
                    Name: "John Smith",
                    Class: "Sophomore",
                },
                {
                    Id: "23456789",
                    Name: "John Smith 2",
                    Class: "Junior",
                },
                {
                    Id: "34567890",
                    Name: "John Smith 3",
                    Class: "Senior",
                },
            ]
        }
    }

    render() {
        return (
            <><div class="row" style={{ marginTop: "10px" }}>
                <div class="col-sm-12 btn btn-info">
                    Add ag-Grid to ReactJS App
                </div>
            </div><div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body position-relative">
                                <div className='ag-theme-alpine' style={{ height: "550px" }}>
                                    <AgGridReact
                                        columnDefs={this.state.columnHead}
                                        rowData={this.state.rowData}>
                                        
                                    </AgGridReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>
        );
    }
}

export default Example