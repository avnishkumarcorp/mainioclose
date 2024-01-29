import React, { useEffect } from "react"
import "./MainPage.scss"
import SideBar from "./SideBar"
import { Outlet, useNavigate } from "react-router"
import { useLocation } from "react-router-dom"
import TopNav from "../components/TopNav"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useId } from "react"
import { customLocation } from "../Hooks/LocationCustomHook"
toast.configure()

const MainPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const paramId = customLocation(2, location)

  // const currentUserId = useSelector((state) => state?.auth?.currentUser?.id)
  // const currentUserToken = useSelector((state) => state?.auth?.jwt)

  // const currentUserId = useSelector((state) => state?.auth?.currentUser?.id)
  // const currentUserToken = useSelector((state) => state?.auth?.jwt)

  // console.log("i am token", currentUserToken);


  // const currentUserToken = useSelector((state) => state.AuthReducer.token)
  // const currentUserId = useSelector((state) => state.AuthReducer.currentUser.id)
  // useEffect(() => {
  //   let UserToken = localStorage.getItem("Access-token")
  //   if (
  //     !UserToken ||
  //     currentUserToken !== UserToken ||
  //     currentUserId !== paramId
  //   ) {
  //     localStorage.removeItem("Access-token")
  //     navigate("/erp/login")
  //     toast.error("your Session has Expired Please Login again")
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
