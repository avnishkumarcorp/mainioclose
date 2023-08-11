import React from "react"
import "./Login.scss"
import { image1 } from "../Images/imageFile"
import corpseedlogo from "../Images/corpseed-logo.png"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="left-login"></div>
        <div className="right-login">
          <form className="w-100">
            <h3 className="heading-text">Login</h3>
            <div className="py-2">
              <label className="inp-label">Enter Your Email</label>
              <input
                className="input-design"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="py-2">
              <label className="inp-label">Enter Your Password</label>
              <input
                className="input-design"
                type="password"
                placeholder="Enter Your password"
                required
              />
            </div>
            <div className="center-btn">
              <button className="login-button">Login</button>
            </div>
            <p className="dont-account">
              Don't have an Account{" "}
              <Link className="ml-1" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
