import React from "react";
import "./MainPage.scss"
import SideBar from "./SideBar";
import { Outlet } from "react-router";


const MainPage = () => {
  return (
    <div className="main-page">
        <div className="side-nav">
            <SideBar /> 
        </div>
        <div className="right-data">
            <h1>main</h1>
            <h1>main</h1>
            <Outlet />
        </div>
    </div>
  )
};

export default MainPage;
