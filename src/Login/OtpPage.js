import React from "react"
import "./OtpPage.scss"
import OtpTimer from "otp-timer"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const OtpPage = () => {
  const [otpData, setOtpData] = useState({})
  const [createApiId, setCreateApiId] = useState({})
  const signUpRedux = useSelector((state) => state.SignUpDataReducer.data)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  console.log("redux data", signUpRedux)
  let one = Object.values(otpData)
    const finalOtp = one.join("")
    // console.log(finalOtp)
    const finalApiData = { ...signUpRedux, otp: finalOtp }
    // console.log("i mam final data", finalApiData)

  const userRegistration = (e) => {
    e.preventDefault()
    

    console.log("before api call")
    const createUserApi = async () => {
      try {
        console.log("final data for api", finalApiData)
        const signupResponse = await axios.post(`/securityService/api/auth/createNewUser`, {
          ...finalApiData,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })

        console.log("")
        console.log("signup aryan response data", signupResponse)
        console.log("signup aryan response data", signupResponse?.data?.data?.id)
        let dataId = signupResponse?.data?.data?.id;
        // console.log(dataId);
        setCreateApiId(signupResponse.data);
        navigate('/erp/login')
        toast.success("User SignUp Sucessfully")
      } catch (err) {
        console.log(err)
      }
    }

    createUserApi()
  }

  console.log("create id data", createApiId);
  // console.log("final api data", finalApiData);
  // console.log();

  const sendTimer = () => {
    return (
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
        <input
          className="single-input"
          name="otp"
          maxLength="1"
          onChange={(e) =>
            setOtpData((prev) => ({ ...prev, one: e.target.value }))
          }
          type="text"
        />
        <input
          className="single-input"
          name="otp"
          maxLength="1"
          onChange={(e) =>
            setOtpData((prev) => ({ ...prev, two: e.target.value }))
          }
          type="text"
        />
        <input
          className="single-input"
          name="otp"
          maxLength="1"
          onChange={(e) =>
            setOtpData((prev) => ({ ...prev, three: e.target.value }))
          }
          type="text"
        />
        <input
          className="single-input"
          name="otp"
          maxLength="1"
          onChange={(e) =>
            setOtpData((prev) => ({ ...prev, four: e.target.value }))
          }
          type="text"
        />
        <input
          className="single-input"
          name="otp"
          maxLength="1"
          onChange={(e) =>
            setOtpData((prev) => ({ ...prev, five: e.target.value }))
          }
          type="text"
        />
        <input
          className="single-input"
          name="otp"
          maxLength="1"
          onChange={(e) =>
            setOtpData((prev) => ({ ...prev, six: e.target.value }))
          }
          type="text"
        />
      </div>
      {/* <button className="resend-text">Resend Code</button> */}
      <div className="resend-timer">
        <OtpTimer seconds={30} minutes={1} resend={sendTimer} />
      </div>
      <button onClick={(e) => userRegistration(e)} className="login-button">
        Continue
      </button>
      {/* <button onClick={userRegistration} className="login-button">otp data convertor</button> */}
    </div>
  )
}

export default OtpPage
