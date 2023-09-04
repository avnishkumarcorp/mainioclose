import React, { useEffect } from "react"
import "./MainPage.scss"
import SideBar from "./SideBar"
import { Outlet, useNavigate } from "react-router"
import TopNav from "../components/TopNav"
import { useSelector } from "react-redux"

const MainPage = () => {

  // const navigate = useNavigate();
  // const currentUserToken = useSelector((state)=>  state.AuthReducer.token)
  // useEffect(()=>{
  //   let UserToken = localStorage.getItem("Access Token");
  //   if(!UserToken || currentUserToken !== UserToken){
  //     navigate("/login")
  //   }
  // })

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
