import React from "react"
import "./PaswordUpdateMessage.scss"
import { Link } from "react-router-dom"

const PaswordUpdateMessage = () => {
  return (
    <div className="main-boxes">
      <div className="circle-tik">
      <i class="fa-solid check-icon fa-check"></i>
      </div>
      <p class="update-message">Password Update Sucessfully</p>
      <p class="update-message">Please Login</p>
      <Link to="/erp/login" className="first-button ">Go to Login Page</Link>
    </div>
  )
}

export default PaswordUpdateMessage
