import { DataGrid } from "@mui/x-data-grid"
import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"

const DataGridExample = ({rows, columns}) => {



  return (
    <div>
      <DataGrid  rows={rows} columns={columns} />
    </div>
  )
}

export default DataGridExample
