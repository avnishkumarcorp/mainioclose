import React from "react"
import HomeNavbar from "./HomeNavbar"
import HomeFooter from "./HomeFooter"
import { Outlet } from "react-router-dom"

const HomePage = () => {

  const roles = ['ADMIN','USER','HR'] 

  const filterRole = roles.includes('ADMIN')

  return (
    <div>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </div>
  )
}

export default HomePage
