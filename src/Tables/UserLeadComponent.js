import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import React from "react"
import { useSelector } from "react-redux"

const UserLeadComponent = ({ row, columns, tableName, getRowId }) => {
  
  const currentUserRoles = useSelector(
    (prev) => prev.AuthReducer.currentUser.roles
  )
  const adminRole = currentUserRoles.includes("ADMIN")
  
  return (
    <div>
      <h1 className="table-main-heading">{tableName}</h1>
      <DataGrid
        checkboxSelection
        rows={row}
        getRowId={getRowId}
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            overflow: "scroll"
          }
        }}
        columns={columns}
        slots={ adminRole ? { toolbar: GridToolbar } : ""}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}  
      />
    </div>
  )
}

export default UserLeadComponent
