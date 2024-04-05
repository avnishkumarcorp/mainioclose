import React from "react"
import TableOutlet from "../../components/design/TableOutlet"
import UserListComponent from "../../Tables/UserListComponent"

const AllManagerApprovals = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
       
        {
            field: 'approval',
            headerName: 'Approvals',
            width: 200,
            editable: true,
            renderCell: () => (
                <button className="btn btn-success">Approved</button>
            )
          },
          {
            field: 'rejected',
            headerName: 'Rejected',
            width: 200,
            editable: true,
            renderCell: () => (
                <button className="btn btn-danger">Rejected</button>
            )
          },
      
      ];

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      


  return (
    <TableOutlet>
      <h1 className="table-heading">All Users For Approvals</h1>
      <div className="py-2">
        <UserListComponent tableName={""} columns={columns} row={rows} />
      </div>
    </TableOutlet>
  )
}

export default AllManagerApprovals
