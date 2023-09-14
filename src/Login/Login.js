import React, { useRef, useState } from "react"
import "./Login.scss"
import { image1 } from "../Images/imageFile"
import corpseedlogo from "../Images/corpseed-logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {
  currentUserAction,
  userInformation,
  userToken,
  userTokenAction,
} from "../Redux/Action/AuthAction"

const Login = () => {
  // const [userData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // })
  // const [wrongInput, setWrongInput] = useState(false)

  // const currentUser = useSelector((state) => state.AuthReducer)
  // const dispatch = useDispatch()

  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const navigate = useNavigate()

  // const userEmailRef = useRef()
  // const userPasswordRef = useRef()

  // const UserInfo = (e) => {
  //   setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  // const userLogin = (e) => {
  //   e.preventDefault()

  //   if (userEmailRef.current.value === "") {
  //     userEmailRef.current.style.border = "1px solid red"
  //     setError(true)
  //     return
  //   }
  //   if (userPasswordRef.current.value === "") {
  //     userPasswordRef.current.style.border = "1px solid red"
  //     setError(true)
  //     return
  //   }

  //   const userLogin = async () => {
  //     setLoading(true)
  //     try {
  //       const loginData = await axios.post(
  //         "http://localhost:9990/apis/auth/signin",
  //         {
  //           email: userEmailRef.current.value,
  //           password: userPasswordRef.current.value,
  //         }
  //       )
  //       dispatch(userInformation(loginData.data))
  //       dispatch(userToken(loginData.data.jwt))

  //       let token = loginData?.data?.jwt
  //       localStorage.setItem("Access Token", token)
  //       navigate("/")
  //     } catch (err) {
  //       console.log(err)
  //       setWrongInput(true)

  //       setLoading(false)
  //     }
  //   }
  //   userLogin()
  // }

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

  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userInfo = (e) => {
    setUserLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const CurrentuserData = useSelector((prev) => prev.AuthReducer)

  console.log("current user", CurrentuserData)

  const userSignIn = (e) => {
    e.preventDefault()

    if (emailRef.current.value === "") {
      emailRef.current.style.border = "1px solid red"
      setEmailErr(true)
    }
    if (passwordRef.current.value === "") {
      passwordRef.current.style.border = "1px solid red"
      setPasswordErr(true)
    }

    const loginUser = async () => {
      try {
        const collectUserData = await axios.post(`/auth/signin`, {
          ...userLoginData,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        console.log("api data", collectUserData.data.jwt)
        console.log("api data", collectUserData.data)
        dispatch(currentUserAction(collectUserData.data))
        dispatch(userTokenAction(collectUserData.data.jwt))
        localStorage.setItem("Access-token", collectUserData.data.jwt)
        navigate("/erp/sales")
      } catch (err) {
        console.log(err)
      }
    }

    loginUser()
  }

  console.log("user data", userLoginData)

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
          <p className="errors-new">Email not in Proper Format</p>
        ) : (
          ""
        )}
      </div>
      {/* {emailErr ? <p></p>} */}
      {/* //  {emailFormatErr ?  <p className="errors-new">Email not in Proper Format</p> : "" } */}
      <div>
        <div className="cm-input-box">
          <i className="fa-regular cm-icon fa-eye-slash"></i>
          <input
            className="cm-input"
            type="password"
            placeholder="Enter Your password"
            ref={passwordRef}
            name="password"
            onChange={(e) => userInfo(e)}
          />
        </div>
        {passwordErr ? (
          <p className="errors-new">password can't be Blank</p>
        ) : (
          ""
        )}
      </div>
      <div className="remember">
        <div className="agree-text">
          <input className="box-input" type="checkbox" id="terms" />
          <label className="box-label m-0" htmlFor="terms">
            Remember me
          </label>
        </div>
        <div>
          <Link to="/erp/forgetpassword">Forget Passowrd</Link>
        </div>
      </div>
      <button onClick={(e) => userSignIn(e)} className="login-button my-3">
        Login
      </button>
      <p className="note-user">
        Not a User{" "}
        <Link className="ml-1 out-none" to="/erp/signup">
          Signup
        </Link>
      </p>
    </div>
  )
}

export default Login
