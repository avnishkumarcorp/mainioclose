import React from "react"
import "./OtpPage.scss"

const OtpPage = () => {
  return (
    <div className="container otp-page">
      <h2 className="otp-heading">Enter confirmation code</h2>
      <p className="otp-number">A 4-digit code was sent to</p>
      <p className="otp-number">+91 99* * * * * * 18</p>
      <div className="input-boxes">
        <input className="single-input" type="text" />
        <input className="single-input" type="text" />
        <input className="single-input" type="text" />
        <input className="single-input" type="text" />
      </div>
      <button className="resend-text">Resend Code</button>
      <button className="login-button">Continue</button>
    </div>
  )
}

export default OtpPage
