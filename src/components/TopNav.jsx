import React from "react"
import "./TopNav.scss"
import { useNavigate } from "react-router-dom"
import EnquirySend from "./EnquirySend"

const TopNav = () => {
  const navigate = useNavigate()
  const logoutUser = () => {
    const token = localStorage.removeItem("Access Token")
    navigate("/erp/login")
  }

  return (
    <div className="top-navbar">
      <div className="top-search-box"></div>
      <div>
        <div className="notes-box">
          <EnquirySend />
        </div>
      </div>
    </div>
  )
}

export default TopNav
