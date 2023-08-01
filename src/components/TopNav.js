import React from "react"
import "./TopNav.scss"

const TopNav = () => {
  return (
    <div className="top-navbar">
      <div>
        <input className="search-box" type="search" placeholder="Serach..." />
      </div>
      <div className="user-profile">
        <div className="profile-image">
            <img src={`https://images.pexels.com/photos/17739178/pexels-photo-17739178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} />
        </div>
        <div className="profile-info">
            <h4>Rahul jain</h4>
            <h5>Corpseed</h5>
        </div>
      </div>
    </div>
  )
}

export default TopNav
