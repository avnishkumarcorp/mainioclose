import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import React from "react"

const DataGridExample = ({ rows, columns }) => {
  return (
    <div>
      <DataGrid
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </div>
  )
}

export default DataGridExample
