import React from "react"
import "./ManageClientModule.scss"
import { Outlet } from "react-router-dom"

const ManageClientModule = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ManageClientModule
