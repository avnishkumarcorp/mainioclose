import React from "react";
import SideNavTabs from "../components/SideNavTabs";
import "./SideBar.scss"
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideTab">
       <div className="side-tabs">
        <NavLink to="/dashboard" className={`nav-heading ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
        data-toggle="collapse" data-target={`#collapseOne`} aria-expanded="true" aria-controls="collapseOne"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i> <i class="fa-solid mr-2 fa-gear"></i> DashBoard
        </NavLink>
        <div id={`collapseOne`} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="link-child">
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
      </div>
    </div>
       </div>
       <div className="side-tabs">
        <NavLink to="/" className={`nav-heading ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
        data-toggle="collapse" data-target={`#collapseTwo`} aria-expanded="true" aria-controls="collapseOne"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i> <i class="fa-solid mr-2 fa-gear"></i> DashBoard 2
        </NavLink>
        <div id={`collapseTwo`} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="link-child">
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
        <NavLink className="link-itemss" to="/go">first</NavLink>
      </div>
    </div>
       </div>
       
    </div>
  )
};

export default SideBar;
