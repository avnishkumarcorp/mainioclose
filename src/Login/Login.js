import React, { useRef, useState } from "react"
import "./Login.scss"
import { image1 } from "../Images/imageFile"
import corpseedlogo from "../Images/corpseed-logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userEmailRef = useRef()
  const userPasswordRef = useRef()

  const UserInfo = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const userLogin = (e) =>{
    e.preventDefault()
    setLoading(true);
    if (userEmailRef.current.value === "") {
      userEmailRef.current.style.border = "1px solid red"
      setError(true);
      return
    }
    if (userPasswordRef.current.value === "") {
      userPasswordRef.current.style.border = "1px solid red"
      setError(true);
      return
    }
    navigate("/")

    const userLogin = async  () =>{
      const loginData = await axios.post("")
    }


  }



  return (
    <div className="login-page">
      <div className="login-form">
        <div className="left-login"></div>
        <div className="right-login">
          <form className="w-100">
            <h3 className="heading-text">Login</h3>
            <div className="py-2">
              <label className="inp-label">Enter Your Email</label>
              <input
                className="input-design"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                ref={userEmailRef}
                onChange={(e) => UserInfo(e)}
                required
              />
            </div>
            <div className="py-2">
              <label className="inp-label">Enter Your Password</label>
              <input
                className="input-design"
                type="password"
                placeholder="Enter Your password"
                name="password"
                ref={userPasswordRef}
                onChange={(e) => UserInfo(e)}
                required
              />
            </div>
            {error ? <div><span className="text-danger">Email or Password can't be Blank</span></div> : " "}
            <div className="center-btn">
              <button onClick={(e) => userLogin(e)}  className="login-button">  {loading ?  "loading" :  "Login"   }</button>
            </div>
            <p className="dont-account">
              Don't have an Account{" "}
              <Link className="ml-1" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
