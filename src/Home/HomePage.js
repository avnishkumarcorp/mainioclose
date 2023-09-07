import React from "react"
import HomeNavbar from "./HomeNavbar"
import HomeFooter from "./HomeFooter"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </div>
  )
}

export default HomePage
