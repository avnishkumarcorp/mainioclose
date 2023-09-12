import React from "react"
import "./OtpPage.scss"
import OtpTimer from 'otp-timer'




const OtpPage = () => {

  const sendTimer = () =>{
      return(
        <>
        <button className="resend-text">Resend Code</button>
        </>
      )
  }

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
      {/* <button className="resend-text">Resend Code</button> */}
      <div className="resend-timer">
        <OtpTimer seconds= {30} minutes={1} resend={sendTimer} />
      </div>
      <button className="login-button">Continue</button>
    </div>
  )
}

export default OtpPage
