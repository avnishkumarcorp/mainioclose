import React from "react"
import SideNavTabs from "../components/SideNavTabs"
import "./SideBar.scss"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="sideTab">
      <div className="side-tabs">
        <NavLink
          to="/"
          className={`nav-heading ml-3`}
          data-toggle="collapse"
          data-target={`#collapseOne`}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="fa-solid mr-2 fa-gear"></i> DashBoard
        </NavLink>
      </div>

      <div className="side-tabs">
        <NavLink
          to="/hr"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseTwo`}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i class="fa-solid mr-2 fa-gear"></i> HR
        </NavLink>
        <div
          id={`collapseTwo`}
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="link-child">
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
          </div>
        </div>
      </div>


      <div className="side-tabs">
        <NavLink
          to="/sales"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseThree`}
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i class="fa-solid mr-2 fa-gear"></i> Sales
        </NavLink>
        <div
          id={`collapseThree`}
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="link-child">
            <NavLink className="link-itemss" to="sales/inbox">
              Inbox
            </NavLink>
            <NavLink className="link-itemss" to="sales/oppurtities">
            Oppurtities
            </NavLink>
            <NavLink className="link-itemss" to="sales/estimate">
            Estimate
            </NavLink>
            <NavLink className="link-itemss" to="sales/orders">
            Orders
            </NavLink>
            <NavLink className="link-itemss" to="sales/contacts">
            Contacts
            </NavLink>
            <NavLink className="link-itemss" to="sales/leads">
            Leads
            </NavLink>
          </div>
        </div>
      </div>

      <div className="side-tabs">
        <NavLink
          to="/"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseFour`}
          aria-expanded="true"
          aria-controls="collapseFour"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i class="fa-solid mr-2 fa-gear"></i> Accounts
        </NavLink>
        <div
          id={`collapseFour`}
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="link-child">
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
            <NavLink className="link-itemss" to="/go">
              first
            </NavLink>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default SideBar
