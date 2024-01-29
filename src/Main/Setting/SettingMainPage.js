import React from "react"
import "./SettingMainPage.scss"
import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const SettingMainPage = () => {
  // const currentUserId = useSelector((auth) => auth.AuthReducer.currentUser.id)
  const currentUserId = useSelector((state) => state?.auth?.currentUser?.id)
  

  return (
    <div className="setting">
      <div className="side-links">
        <div className="customization">
          <h3 className="heading-four">Customization</h3>
          <Link className="link-four" to={`/erp/${currentUserId}/setting`}>
            Lead Status
          </Link>
          
        </div>
      </div>
      <div className="side-data">
        <Outlet />
      </div>
    </div>
  )
}

export default SettingMainPage
