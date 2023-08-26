import React, { useEffect } from "react"
import "./MainPage.scss"
import SideBar from "./SideBar"
import { Outlet, useNavigate } from "react-router"
import TopNav from "../components/TopNav"

const MainPage = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    let UserToken = localStorage.getItem("Access Token");
  },[])

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
