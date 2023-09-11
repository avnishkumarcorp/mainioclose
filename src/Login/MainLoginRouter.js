import React from "react"
import { Outlet } from "react-router-dom"

const MainLoginRouter = () => {
  return (
    <div>
      <h1>main file</h1>
      <Outlet />
    </div>
  )
}

export default MainLoginRouter
