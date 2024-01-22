import React from "react"
import "./MyProfile.scss"
import { Outlet } from "react-router-dom"

const MyProfile = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MyProfile
