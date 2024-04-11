import React from "react"
import "./DashBoard.scss"
import { Outlet } from "react-router-dom"
import TableOutlet from "../../components/design/TableOutlet"

const DashBoard = () => {
  return (
    <TableOutlet>
      <Outlet />
    </TableOutlet>
  )
}

export default DashBoard
