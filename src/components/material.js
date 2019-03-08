import React from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
class Material extends React.Component {

   state = {
        userdata: [],
        columns: [{
            field: 'id',
            title: 'Id',
            defaultSort: 'asc'
        },{
            field: 'first_name',
            title: 'First Name',
            defaultSort: 'asc',
            search:true
        },{
            field: 'last_name',
            title: 'Last Name',
            defaultSort: 'asc'
        },{
            field: 'company_name',
            title: 'Company Name',
            defaultSort: 'asc'
        },{
            field: 'city',
            title: 'City',
            defaultSort: 'asc'
        },{
            field: 'state',
            title: 'State',
            defaultSort: 'asc'
        },{
            field: 'zip',
            title: 'Zip',
            defaultSort: 'asc'
        },{
            field: 'email',
            title: 'Email',
            defaultSort: 'asc'
        },{
            field: 'web',
            title: 'Web',
            defaultSort: 'asc'
        },{
            field: 'age',
            title: 'Age',

        }
        ]
    };

    componentDidMount() {
        axios.get('http://demo9197058.mockable.io/users')
            .then(response => {
                this.setState({
                    userdata: response.data
                });
            });
    }
    render() {
        return (
            <MaterialTable
                columns={this.state.columns}
                data={this.state.userdata}
                title="Demo Title"
                sorting={true}
                toolbarButtonAlignment="left"
                detailPanel={[
                            {
                                tooltip: 'Show Details',
                                render: rowData => {
                                    return (
                                        <div
                                            style={{
                                                fontSize: 14,
                                                textAlign: 'center',
                                                color: 'black',
                                                backgroundColor: '#f5f9f5',
                                            }}
                                        >
                                            <div className="container">
                                            <h3> {rowData.first_name+" "+rowData.last_name}</h3>
                                            <br/>
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Company
                                                    <span className=" ">{rowData.company_name}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    City
                                                    <span>{rowData.city}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    State
                                                    <span>{rowData.state}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Zip
                                                    <span>{rowData.zip}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Email
                                                    <span >{rowData.email}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Web
                                                    <span >{rowData.web}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Age
                                                    <span>{rowData.age}</span>
                                                </li>
                                            </ul></div>
                                        </div>
                                    )
                                }
                            }
                        ]}
                options={{
                    pageSize:"5",
                    initialPage:"5",
                    detailPanelType:"single",
                    paging: true,
                }}
            />
        );
    }
}
export default Material;