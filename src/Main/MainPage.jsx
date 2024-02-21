import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import SideBar from "./SideBar"
import { Outlet, useNavigate, useParams } from "react-router"
import { useLocation } from "react-router-dom"
import TopNav from "../components/TopNav"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useId } from "react"
import { customLocation } from "../Hooks/LocationCustomHook"
import { getNotificationFun } from "../Toolkit/Slices/NotificationSlice"
toast.configure()

const MainPage = () => {
  const [toasterData, setToasterData] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const paramId = customLocation(2, location)
  const { userid } = useParams()

  const currentUser = useSelector((state) => state)
  console.log("current data", currentUser)

  const dispatch = useDispatch()

  useEffect(() => {
    setInterval(() => {
      dispatch(getNotificationFun(userid))
      setToasterData((prev) => !prev)
    }, 600000)
  }, [])

  const allNotifications = useSelector((state) => state.notify.allNotifications)
  console.warn("before")
  console.log("all Noti", allNotifications)
  console.log("all Noti", allNotifications[0])

  useEffect(() => {
    const SingleNotification = allNotifications[0]
    const start = Date.now()
    let startPoint = Date.now() + 120000
    let anotherDate = start - 10000
    let bool = true
    let apiDate = new Date(SingleNotification.notifyDate).getTime()
      setTimeout(() => {
        if (start >= apiDate) {
          console.log("function Calling hhdhdhfhhf")
          toast.success(SingleNotification.message)
        }
      }, 1000)
  }, [toasterData])

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
