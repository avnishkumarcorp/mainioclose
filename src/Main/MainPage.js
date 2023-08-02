import React from "react"
import "./MainPage.scss"
import SideBar from "./SideBar"
import { Outlet } from "react-router"
import TopNav from "../components/TopNav"

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="side-nav">
        <SideBar />
      </div>
      <div className="right-data">
        <TopNav />
        <Outlet />
      </div>
    </div>
  )
}

export default MainPage
