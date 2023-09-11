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
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const userNameRef = useRef()
  const userEmailRef = useRef()
  const userPasswordRef = useRef()

  const UserInfo = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

 
  const userSignUp = (e) => {
    e.preventDefault()
    setLoading(true)
    if (userNameRef.current.value === "") {
      console.log("name can not blank")
      userNameRef.current.style.border = "1px solid red"
      setError(true)
      return
    }
    if (userEmailRef.current.value === "") {
      console.log("Email can not blank")
      userEmailRef.current.style.border = "1px solid red"
      setError(true)
      return
    }
    if (userPasswordRef.current.value === "") {
      console.log("password can not blank")
      userPasswordRef.current.style.border = "1px solid red"
      setError(true)
      return
    }

    const createUser = async () => {
      try {
        const userData = await axios.post(
          `http://localhost:9990/api/auth/createNewUser`,
          {
            username: userNameRef.current.value,
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
          }
        )
        navigate("/login")
      } catch (err) {
        setError(err)
      }
    }
    createUser()
  }


  return (
    <div className="login-page">
      <div className="login-form">
        <div className="right-login">
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
                <label className="inp-label">Full Name<span className="text-danger">*</span></label>
                <input
                  className="input-design"
                  type="text"
                  name="username"
                  ref={userNameRef}
                  onChange={(e) => UserInfo(e)}
                />
              </div>
              <div className="">
                <label className="inp-label">Mobile Number<span className="text-danger">*</span></label>
                <input
                  className="input-design"
                  type="text"
                  name="mobile"
                  placeholder="+91"
                  onChange={(e) => UserInfo(e)}
                />
              </div>
              <div className="">
                <label className="inp-label">Email ID<span className="text-danger">*</span></label>
                <input
                  className="input-design"
                  type="email"
                  name="email"
                  ref={userEmailRef}
                  onChange={(e) => UserInfo(e)}
                  required
                />
              </div>
              <div className="">
                <label className="inp-label">Company name<span className="text-danger">*</span></label>
                <input
                  className="input-design"
                  type="text"
                  onChange={(e) => UserInfo(e)}
                  required
                />
              </div>
              <div className="">
                <label className="inp-label">Password<span className="text-danger">*</span></label>
                <input
                  className="input-design"  
                  type="password"
                  onChange={(e) => UserInfo(e)}
                  required
                />
              </div>
              <div className="">
                <label className="inp-label">Confirm Password<span className="text-danger">*</span></label>
                <input
                  className="input-design"
                  type="password"
                  onChange={(e) => UserInfo(e)}
                  required
                />
              </div>
            </div>
            
            {error ? (
              <div>
                <span className="text-danger">
                  Please fill All Mandatory Fields
                </span>
              </div>
            ) : (
              " "
            )}
            <div className="check-boxes">
              <div className="item-center">
                <input className="box-input" type="checkbox" id="terms" />
                <label className="box-label" for="terms">
                  I agree to all the <span className="text-blue"> Terms </span>{" "}
                  and <span className="text-blue">Privacy policy </span>
                </label>
              </div>
            </div>

            <div className="center-btn">
              <Link    className="login-button sign-up">
                {loading ? "loading" : "Create Account"}
              </Link>
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
