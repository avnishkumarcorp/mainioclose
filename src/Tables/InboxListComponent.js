import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const InboxListComponent = ({row, columns, tableName}) => {
  return (
    <div>
    <h1 className="table-main-heading">{tableName}</h1>
    <DataGrid
    checkboxSelection
    rows={row}
    columns={columns}
  />
</div>
  )
};

export default InboxListComponent;
