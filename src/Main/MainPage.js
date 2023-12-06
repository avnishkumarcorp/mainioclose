import React, { useEffect } from "react"
import "./MainPage.scss"
import SideBar from "./SideBar"
import { Outlet, useNavigate } from "react-router"
import TopNav from "../components/TopNav"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()


const MainPage = () => {
  const navigate = useNavigate()
  const currentUserToken = useSelector((state) => state.AuthReducer.token)
  useEffect(() => {
    let UserToken = localStorage.getItem("Access-token")
    console.log("user token ", UserToken)
    console.log("current user token", currentUserToken)
    console.log(UserToken === currentUserToken);
    if (!UserToken || currentUserToken !== UserToken) {
      navigate("/erp/login")
      toast.error("your Session has Expired Please Login again")
    }
  })

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
