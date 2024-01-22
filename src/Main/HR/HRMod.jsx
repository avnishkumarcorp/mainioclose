import React from "react"
import "./HRMod.scss"
import { Outlet } from "react-router-dom"

const HRMod = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default HRMod
