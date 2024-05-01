import React from "react"
import { Outlet } from "react-router-dom"
import "./Login.scss"
import "./MainLoginRoute.scss"

const MainLoginRouter = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MainLoginRouter
