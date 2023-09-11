import React from "react"
import "./CommonData.scss"

const ForgetPassword = () => {
  return (
    <div className="cm-box container">
      <h2 className="cm-heading">Forget Password</h2>
      <div className="cm-input-box">
      <i class="fa-regular cm-icon fa-envelope"></i>
        <input
          className="cm-input"
          type="text"
          placeholder="Enter Your Email"
        />
      </div>
      <button className="login-button">Continue</button>
    </div>
  )
}

export default ForgetPassword
