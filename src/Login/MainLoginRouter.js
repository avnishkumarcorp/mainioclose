import React from "react"
import { Outlet } from "react-router-dom"
import "./Login.scss"

const MainLoginRouter = () => {
  return (
    <div>
      <div className="container logo-header">
        <h1 className="logo-icon">Logo</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default MainLoginRouter
