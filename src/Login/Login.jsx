import React, { useRef, useState } from "react"
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LongButton from "../components/button/LongButton"
import InputErrorComponent from "../components/InputErrorComponent"
import { getCurrentUser } from "../Toolkit/Slices/AuthSlice"
toast.configure()

const Login = () => {
  // let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
  // if (regex.test(emailRef.current.value) !== true) {
  //   emailRef.current.style.border = "1px solid red"
  //   setEmailProperErr(true)
  //   setEmailErr(false)
  // }

  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  })

  const [emailErr, setEmailErr] = useState(false)
  const [emailProperErr, setEmailProperErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [loginDataError, setLoginDataError] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userInfo = (e) => {
    setUserLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const currentUserID = useSelector((state) => state?.auth?.currentUser?.id)
  const CurrentuserData = useSelector((prev) => prev.AuthReducer)

  const userSignIn = (e) => {
    e.preventDefault()

    if (loadingBtn === true) {
      return
    }

    setUserLoginData((data) => ({ ...data, password: data.password.trim() }))

    if (emailRef.current.value === "") {
      emailRef.current.style.border = "1px solid red"
      setEmailErr(true)
      return
    }
    if (passwordRef.current.value === "") {
      passwordRef.current.style.border = "1px solid red"
      setPasswordErr(true)
      return
    }
    setLoadingBtn(true)

    const loginMyUser = async () => {
      try {
        const loginUser = await dispatch(getCurrentUser(userLoginData))
        console.log("i am login user", loginUser)
        if (loginUser.type === "currentUser/fulfilled") {
          navigate(`/erp/${loginUser?.payload?.id}/sales/leads`)
        } else {
          navigate(`/erp/login`)
        }
      } catch (err) {
        console.log(err)
        setLoginDataError(true)
      } finally {
        setEmailErr(false)
        setPasswordErr(false)
      }
    }

    loginMyUser()

  }

  return (
    <div className="cm-box container">
      <h2 className="cm-heading">Login</h2>
      <div>
        <div className="cm-input-box">
          <i className="cm-icon fa-solid fa-user"></i>
          <input
            className="cm-input"
            type="text"
            ref={emailRef}
            name="email"
            onChange={(e) => userInfo(e)}
            placeholder="Enter Your Email"
          />
        </div>
        {emailErr ? <p className="errors-new">Email ID can't be Blank</p> : ""}
        {emailProperErr ? (
          <InputErrorComponent value="Email not in Proper Format" />
        ) : (
          ""
        )}
      </div>
      <div>
        <div className="cm-input-box">
          {showPassword ? (
            <i
              onClick={() => setShowPassword((prev) => !prev)}
              className="fa-solid cm-icon fa-eye"
            ></i>
          ) : (
            <i
              onClick={() => setShowPassword((prev) => !prev)}
              className="fa-regular cm-icon fa-eye-slash"
            ></i>
          )}
          <input
            className="cm-input"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your password"
            ref={passwordRef}
            name="password"
            onChange={(e) => userInfo(e)}
          />
        </div>
        {passwordErr ? (
          <InputErrorComponent value="Password can't be Blank" />
        ) : (
          ""
        )}
        <div className="mt-2">
          {loginDataError ? (
            <InputErrorComponent value="Enter correct Username or Password" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="remember">
        <div className="agree-text">
          <input className="box-input" type="checkbox" id="terms" />
          <label className="box-label m-0" htmlFor="terms">
            Remember me
          </label>
        </div>
        <div>
          <Link to="/erp/forgetpassword">Forget Password ?</Link>
        </div>
      </div>
      <LongButton
        data={loadingBtn ? "Loading..." : "Login"}
        onClick={(e) => userSignIn(e)}
        className={`my-3`}
      />
      {/* <p className="note-user">
        Not a User{" "}
        <Link className="ml-1 out-none" to="/erp/signup">
          Signup
        </Link>
      </p> */}
    </div>
  )
}

export default Login
