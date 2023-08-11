import React from "react"
import "./Login.scss"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="left-login"></div>
        <div className="right-login">
          <form className="w-100">
            <h3 className="heading-text">Sign Up</h3>
            <div className="py-2">
              <label className="inp-label">Enter Your First Name</label>
              <input
                className="input-design"
                type="text"
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="py-2">
              <label className="inp-label">Enter Your Last Name</label>
              <input
                className="input-design"
                type="text"
                placeholder="Enter Your Last Name"
              />
            </div>
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
              <button className="login-button">Sign up</button>
            </div>
            <p className="dont-account">
              Already have an Account{" "}
              <Link className="ml-1" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
