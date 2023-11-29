import React from "react"
import { Link } from "react-router-dom"

const SetNewPasswordPage = () => {
  return (
    <div className="cm-box container">
      <h2 className="cm-heading">Set Password</h2>
      <div>
        <div className="cm-input-box">
          <i className="fa-regular cm-icon fa-eye-slash"></i>
          <input
            className="cm-input"
            type="password"
            name="email"
            placeholder="Enter Your password"
          />
        </div>
      </div>

      <div>
        <div className="cm-input-box">
          <i className="fa-regular cm-icon fa-eye-slash"></i>
          <input
            className="cm-input"
            type="password"
            placeholder="Enter Your Confirm Password"
            name="password"
          />
        </div>
      </div>
      <button className="login-button my-3">Submit Password</button>
    </div>
  )
}

export default SetNewPasswordPage
