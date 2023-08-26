import React, { useRef, useState } from "react"
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userNameRef = useRef()
  const userEmailRef = useRef()
  const userPasswordRef = useRef()

  console.log(userNameRef.current)

  const UserInfo = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const userSignUp = (e) => {
    e.preventDefault()
    setLoading(true);
    if (userNameRef.current.value === "") {
      console.log("name can not blank")
      userNameRef.current.style.border = "1px solid red"
      setError(true);
      return
    }
    if (userEmailRef.current.value === "") {
      console.log("Email can not blank")
      userEmailRef.current.style.border = "1px solid red"
      setError(true);
      return
    }
    if (userPasswordRef.current.value === "") {
      console.log("password can not blank")
      userPasswordRef.current.style.border = "1px solid red"
      setError(true);
      return
    }

    const createUser = async () => {
      try {
        const userData = await axios.post(`http://localhost:9990/api/auth/createNewUser`, {
          username: userNameRef.current.value,
          email: userEmailRef.current.value,
          password: userPasswordRef.current.value,
        })

        console.log("i am userdata", userData.data);
        navigate("/login")
               // userDetails();
      } catch (err) {
        setError(err)
      }
    }
    createUser()
  }
  
  console.log("userdata", userData)

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="left-login"></div>
        <div className="right-login">
          <form className="w-100">
            <h3 className="heading-text">Sign Up</h3>
            <div className="py-2">
              <label className="inp-label">Enter Your UserName*</label>
              <input
                className="input-design"
                type="text"
                placeholder="Enter Your UserName"
                name="username"
                ref={userNameRef}
                onChange={(e) => UserInfo(e)}
              />
            </div>
            <div className="py-2">
              <label className="inp-label">Enter Your Email*</label>
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
              <label className="inp-label">Enter Your Password*</label>
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
            {error ? <div><span className="text-danger">Please fill All Mandatory Fields</span></div> : " "}
            <div className="center-btn">
              <Link onClick={(e) => userSignUp(e)} className="login-button">
                {loading ?  "loading" :  "Sign up"   }
              </Link>
            </div>
            <p className="dont-account">
              Already have an Account{" "}
              <Link className="ml-1" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
