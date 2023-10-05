import React from "react"
import "./DashBoard.scss"
import { Outlet } from "react-router-dom"

const DashBoard = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default DashBoard
