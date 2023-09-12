import React, { useRef, useState } from "react"
import "./CommonData.scss"

const ForgetPassword = () => {
  const [emailErr, setEmailErr] = useState(false)
  const [emailFormat, setEmailFormat] = useState(false)

  const emailRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailRef.current.value === "") {
      setEmailErr(true)
      setEmailFormat(false)
      return
    }
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
    if (regex.test(emailRef.current.value) !== true) {
      setEmailFormat(true)
      setEmailErr(false)
    }
  }

  return (
    <form>
      <div className="cm-box container">
        <h2 className="cm-heading">Forget Password</h2>
        <div className="cm-input-box">
          <i className="fa-regular cm-icon fa-envelope"></i>
          <input
            className="cm-input"
            ref={emailRef}
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        {emailErr ? <p className="errors-new">Email can't be blank</p> : ""}
        {emailFormat ? (
          <p className="errors-new">Email Not in Proper Format</p>
        ) : (
          ""
        )}
        <button onClick={(e) => handleSubmit(e)} className="login-button">
          Continue
        </button>
      </div>
    </form>
  )
}

export default ForgetPassword
