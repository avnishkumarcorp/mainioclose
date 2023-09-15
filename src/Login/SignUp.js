import React, { useEffect, useRef, useState } from "react"
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { SignupDataAction } from "../Redux/Action/SignUpDataAction"

const SignUp = () => {
  //states
  const [createUserData, setCreateUserData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    companyName: "",
    otp: "",
  })

  const [generateOtpData, setGenerateOtpData] = useState({
    mobile: "",
    name: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  // Errors
  const [fullNameErr, setFullNameErr] = useState(false)
  const [mobileNumberErr, setMobileNumberErr] = useState(false)
  const [emailIdErr, setEmailIdErr] = useState(false)
  const [companyNameErr, setCompanyNameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [confirmPasswordErr, setconfirmPasswordErr] = useState(false)
  const [emailFormatErr, setEmailFormatErr] = useState(false)
  const [mobileFormatErr, setMobileFormatErr] = useState(false)
  // refs
  const fullNameRef = useRef()
  const mobileNumberRef = useRef()
  const emailIdRef = useRef()
  const companyNameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // redux
  const signUpRedux = useSelector((state) => state.SignUpDataReducer.data)

  console.log("signup Redux dataa", signUpRedux)

  // signup function

  const UserInfoData = (e) => {
    setCreateUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const userSignUp = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (fullNameRef.current.value === "") {
      fullNameRef.current.style.border = "1px solid red"
      setFullNameErr(true)
    }
    if (mobileNumberRef.current.value === "") {
      mobileNumberRef.current.style.border = "1px solid red"
      setMobileNumberErr(true)
    }
    if (emailIdRef.current.value === "") {
      emailIdRef.current.style.border = "1px solid red"
      setEmailIdErr(true)
    }
    if (companyNameRef.current.value === "") {
      companyNameRef.current.style.border = "1px solid red"
      setCompanyNameErr(true)
    }
    if (passwordRef.current.value === "") {
      passwordRef.current.style.border = "1px solid red"
      setPasswordErr(true)
    }
    if (confirmPasswordRef.current.value === "") {
      confirmPasswordRef.current.style.border = "1px solid red"
      setconfirmPasswordErr(true)
      return
    }

    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
    if (regex.test(emailIdRef.current.value) !== true) {
      emailIdRef.current.style.border = "1px solid red"
      setEmailFormatErr(true)
      setEmailIdErr(false)
    }
    let numberRegex = new RegExp("^[0-9]{10}$")
    if (numberRegex.test(mobileNumberRef.current.value) !== true) {
      mobileNumberRef.current.style.border = "1px solid red"
      setMobileFormatErr(true)
      setMobileNumberErr(false)
    }

    const { username, password, mobile } = { ...createUserData }
    setGenerateOtpData((prev) => ({
      ...prev,
      name: username,
      password: password,
      mobile: mobile,
    }))

    dispatch(SignupDataAction(createUserData))

    const generateNewOtpFun = async () => {
      console.log(generateOtpData)
      try {
        const getNewOtp = await axios.post(`/auth/otp`, {
          ...generateOtpData,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        console.log("generate otp data", getNewOtp.data)
        navigate("/erp/otp")
      } catch (err) {
        console.log(err)
      }
    }

    generateNewOtpFun()
  }

  console.log("create data", createUserData)
  console.log("generate Otp Data", generateOtpData)

  // const navigate = useNavigate()

  // const userNameRef = useRef()
  // const userEmailRef = useRef()
  // const userPasswordRef = useRef()

  // const UserInfo = (e) => {
  //   setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  // const userSignUp = (e) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   if (userNameRef.current.value === "") {
  //     console.log("name can not blank")
  //     userNameRef.current.style.border = "1px solid red"
  //     setError(true)
  //     return
  //   }
  //   if (userEmailRef.current.value === "") {
  //     console.log("Email can not blank")
  //     userEmailRef.current.style.border = "1px solid red"
  //     setError(true)
  //     return
  //   }
  //   if (userPasswordRef.current.value === "") {
  //     console.log("password can not blank")
  //     userPasswordRef.current.style.border = "1px solid red"
  //     setError(true)
  //     return
  //   }

  //   const createUser = async () => {
  //     try {
  //       const userData = await axios.post(
  //         `http://localhost:9990/api/auth/createNewUser`,
  //         {
  //           username: userNameRef.current.value,
  //           email: userEmailRef.current.value,
  //           password: userPasswordRef.current.value,
  //         }
  //       )
  //       navigate("/login")
  //     } catch (err) {
  //       setError(err)
  //     }
  //   }
  //   createUser()
  // }

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="container right-login">
          <form className={`w-100`}>
            {/* <div>
              <Link to="/" className="main-logo link-cm">Logo</Link>
            </div> */}
            <div className="signup-text">
              <h3 className="start-text">Start Now - It's Free</h3>
              <div className="text-points">
                <p>All features</p>
                <span>•</span>
                <p>Free support & training</p>
                <span>•</span>
                <p className="text-primary">No credit card required</p>
              </div>
              <p></p>
            </div>
            <div className="input-element">
              <div className="">
                <label className="inp-label">
                  Full Name<span className="text-danger">*</span>
                </label>
                <input
                  className="input-design"
                  ref={fullNameRef}
                  type="text"
                  name="username"
                  onChange={(e) => UserInfoData(e)}
                />
                {fullNameErr ? (
                  <p className="errors-new">Name Can't be Blank!</p>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label className="inp-label">
                  Mobile Number<span className="text-danger">*</span>
                </label>
                <input
                  className="input-design"
                  ref={mobileNumberRef}
                  type="text"
                  name="mobile"
                  placeholder="+91"
                  onChange={(e) => UserInfoData(e)}
                  // onChange={(e) => UserInfo(e)}
                />
                {mobileNumberErr ? (
                  <p className="errors-new">Mobile can't be Blank</p>
                ) : (
                  ""
                )}
                {mobileFormatErr ? (
                  <p className="errors-new">Please Enter Digit Only</p>
                ) : (
                  ""
                )}
                {/* mobileFormatErr */}
              </div>
              <div className="">
                <label className="inp-label">
                  Email ID<span className="text-danger">*</span>
                </label>
                <input
                  className="input-design"
                  type="email"
                  name="email"
                  ref={emailIdRef}
                  onChange={(e) => UserInfoData(e)}
                  // onChange={(e) => UserInfo(e)}
                  required
                />
                {emailIdErr ? (
                  <p className="errors-new">Email ID can't be Blank</p>
                ) : (
                  ""
                )}
                {emailFormatErr ? (
                  <p className="errors-new">Email not in Proper Format</p>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label className="inp-label">
                  Company name<span className="text-danger">*</span>
                </label>
                <input
                  className="input-design"
                  type="text"
                  ref={companyNameRef}
                  name="companyName"
                  onChange={(e) => UserInfoData(e)}
                  // onChange={(e) => UserInfo(e)}
                  required
                />
                {companyNameErr ? (
                  <p className="errors-new">Company Name can't be Blank</p>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label className="inp-label">
                  Password<span className="text-danger">*</span>
                </label>
                <input
                  className="input-design"
                  type="password"
                  ref={passwordRef}
                  name="password"
                  onChange={(e) => UserInfoData(e)}
                  // onChange={(e) => UserInfo(e)}
                  required
                />
                {passwordErr ? (
                  <p className="errors-new">password can't be Blank</p>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label className="inp-label">
                  Confirm Password<span className="text-danger">*</span>
                </label>
                <input
                  className="input-design"
                  type="password"
                  ref={confirmPasswordRef}
                  // onChange={(e) => UserInfo(e)}
                  required
                />
                {confirmPasswordErr ? (
                  <p className="errors-new">confirm password can't be Blank</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* {error ? (
              <div>
                <span className="text-danger">
                  Please fill All Mandatory Fields
                </span>
              </div>
            ) : (
              " "
            )} */}
            <div className="check-boxes">
              <div className="item-center">
                <input className="box-input" type="checkbox" id="terms" />
                <label className="box-label" htmlFor="terms">
                  I agree to all the <span className="text-blue"> Terms </span>{" "}
                  and <span className="text-blue">Privacy policy </span>
                </label>
              </div>
            </div>

            <div className="center-btn">
              <button
                onClick={(e) => userSignUp(e)}
                className="login-button sign-up"
              >
                {loading ? "loading" : "Create Account"}
              </button>
            </div>
            <p className="dont-account">
              Already have an Account{" "}
              <Link className="ml-1" to="/erp/login">
                Login
              </Link>
            </p>
          </form>
          {/* password page */}

          {/* end password page */}
        </div>
      </div>
    </div>
  )
}

export default SignUp
