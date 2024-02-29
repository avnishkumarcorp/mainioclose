import React from "react"
import "./TopNav.scss"
import { useNavigate } from "react-router-dom"
import EnquirySend from "./EnquirySend";

const TopNav = () => {
  const navigate = useNavigate();
  const logoutUser = () =>{
    const token = localStorage.removeItem("Access Token");
    navigate("/erp/login")
  } 

  return (
    <div className="top-navbar">
      <div className="top-search-box">
        <i className="fa-solid search-icon fa-magnifying-glass"></i>
        <input className="search-box" type="search" placeholder="Serach..." />
      </div>
      {/* <div className="user-profile">
        <button className="btn btn-primary" onClick={logoutUser}>Logout</button>
        <div className="profile-image">
          <img
            src={`https://images.pexels.com/photos/17739178/pexels-photo-17739178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          />
        </div>
        <div className="profile-info">
          <h4>Rahul jain</h4>
          <h5>Corpseed</h5>
        </div>
      </div> */}
      <div>
        <div className="notes-box">
          <EnquirySend />
        </div>
      </div>
    </div>
  )
}

export default TopNav
