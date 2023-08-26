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

  const currentUser =  useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  console.log("i am current user", currentUser);
  
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
    setLoading(true)
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
      try {
        const loginData = await axios.post(
          "http://localhost:9990/apis/auth/signin",
          {
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
          }
        )
        console.log("my login", loginData.data)
        console.log("my JWT", loginData.data.jwt)
        dispatch(userInformation(loginData.data))
        dispatch(userToken(loginData.data.jwt))

        let token = loginData?.data?.jwt;
        localStorage.setItem("Access Token", token);
        navigate("/")
      } catch (err) {
        console.log(err)
      }
    }
    userLogin();
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
            {error ? (
              <div>
                <span className="text-danger">
                  Email or Password can't be Blank
                </span>
              </div>
            ) : (
              " "
            )}
            <div className="center-btn">
              <button onClick={(e) => userLogin(e)} className="login-button">
                {" "}
                {loading ? "loading" : "Login"}
              </button>
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
