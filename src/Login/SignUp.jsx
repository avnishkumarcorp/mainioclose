import React, { useRef, useState } from "react"
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { postQuery } from "../API/PostQuery"
import InputErrorComponent from "../components/InputErrorComponent"
import LongButton from "../components/button/LongButton"
import { signUpData } from "../Toolkit/Slices/SignUpSlice"
toast.configure()

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
    email: "",
  })


  const selectData = useSelector((prev) => prev?.signup?.userSignUp);



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


  const UserInfoData = (e) => {
    setCreateUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setGenerateOtpData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const userSignUp = (e) => {
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

    const { username, password, mobile, email } = { ...createUserData }
    const otpNewData = { name: username, password: password, mobile: mobile, email: email }


    dispatch(signUpData(createUserData))
    setLoading(true)
    const generateNewOtpFun = async () => {
      try {
        const getNewOtp = await postQuery(
          "/securityService/api/auth/otp",
          generateOtpData
        )
        setLoading(false)
        navigate("/erp/otp")
      } catch (err) {
        if (err.response.status === 500) {
          toast.error("Something went wrong")
          setLoading(false)
        }
        setLoading(false)
      }
    }
    generateNewOtpFun()
  }


  return (
    <div className="login-page">
      <div className="login-form">
        <div className="container right-login">
          <form className={`w-100`}>
            <div className="signup-text">
              <h3 className="start-text">Start Now - It's Free</h3>
              <div className="text-points">
                <p>All features</p>
                <span>•</span>
                <p>Free support & training</p>
                <span>•</span>
                <p className="blue-cl">No credit card required</p>
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
                  autoComplete="on"
                />
                {fullNameErr ? (
                  <InputErrorComponent value="Name Can't be Blank!" />
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
                  autoComplete="on"
                />
                {mobileNumberErr ? (
                  <InputErrorComponent value="Mobile can't be Blank" />
                ) : (
                  ""
                )}
                {mobileFormatErr ? (
                  <InputErrorComponent value="Please Enter Digit Only" />
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
                  autoComplete="on"
                  required
                />
                {emailIdErr ? (
                  <InputErrorComponent value="Email ID can't be Blank" />
                ) : (
                  ""
                )}
                {emailFormatErr ? (
                  <InputErrorComponent value="Email not in Proper Format" />
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
                  autoComplete="on"
                  required
                />
                {companyNameErr ? (
                  <InputErrorComponent value="Company Name can't be Blank" />
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
                  autoComplete="on"
                  required
                />
                {passwordErr ? (
                  <InputErrorComponent value="Password can't be Blank" />
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
                  autoComplete="on"
                  required
                />
                {confirmPasswordErr ? (
                  <InputErrorComponent value="confirm password can't be Blank" />
                ) : (
                  ""
                )}
              </div>
            </div>

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
              <LongButton
                onClick={(e) => userSignUp(e)}
                className="sign-up"
                data={loading ? "Loading..." : "Create Account"}
              />
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
