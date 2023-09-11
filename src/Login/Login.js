import React, { useRef, useState } from "react"
import "./Login.scss"
import { image1 } from "../Images/imageFile"
import corpseedlogo from "../Images/corpseed-logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userInformation, userToken } from "../Redux/Action/AuthAction"

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const [wrongInput, setWrongInput] = useState(false)

  const currentUser = useSelector((state) => state.AuthReducer)
  const dispatch = useDispatch()

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const userEmailRef = useRef()
  const userPasswordRef = useRef()

  const UserInfo = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const userLogin = (e) => {
    e.preventDefault()

    if (userEmailRef.current.value === "") {
      userEmailRef.current.style.border = "1px solid red"
      setError(true)
      return
    }
    if (userPasswordRef.current.value === "") {
      userPasswordRef.current.style.border = "1px solid red"
      setError(true)
      return
    }

    const userLogin = async () => {
      setLoading(true)
      try {
        const loginData = await axios.post(
          "http://localhost:9990/apis/auth/signin",
          {
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
          }
        )
        dispatch(userInformation(loginData.data))
        dispatch(userToken(loginData.data.jwt))

        let token = loginData?.data?.jwt
        localStorage.setItem("Access Token", token)
        navigate("/")
      } catch (err) {
        console.log(err)
        setWrongInput(true)

        setLoading(false)
      }
    }
    userLogin()
  }

  return (
    <div className="cm-box container">
      <h2 className="cm-heading">Login</h2>
      <div className="cm-input-box">
        <i className="cm-icon fa-solid fa-user"></i>
        <input
          className="cm-input"
          type="text"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="cm-input-box">
      <i className="fa-regular cm-icon fa-eye-slash"></i>
        <input
          className="cm-input"
          type="password"
          placeholder="Enter Your password"
        />
      </div>
      <div className="remember">
        <div className="agree-text">
          <input className="box-input" type="checkbox" id="terms" />
          <label className="box-label m-0" for="terms">
            Remember me
          </label>
        </div>
        <div>
          <Link to="/erp/forget">Forget Passowrd</Link>
        </div>
      </div>
      <button className="login-button my-3">Login</button>
      <p className="note-user">Not a User <Link className="ml-1 out-none" to="/erp/signup">Signup</Link></p>
    </div>
  )
}

export default Login
