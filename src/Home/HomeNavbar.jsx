import React from "react"
import "./HomeNavbar.scss"
import { Link } from "react-router-dom"
import logoImage from "../Images/main-logo.png"
import logo from "../Images/CORPSEED.webp"

const HomeNavbar = () => {
  return (
    <div className="container main-web-logo logo-container">
      <div className="logo">
        <div className="erp-image">
          <img className="main-logo-image" src={logo} />
        </div>
      </div>
      <div>
        <ul className="main-nav-items">
          <li>
            <Link className="single-link" to="/erp/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeNavbar
