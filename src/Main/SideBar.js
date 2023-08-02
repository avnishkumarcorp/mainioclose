import React from "react"
import SideNavTabs from "../components/SideNavTabs"
import "./SideBar.scss"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="sideTab">
      {/* Dashboard links start */}
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
      {/* end */}

      {/* hr links start */}
      <div className="side-tabs">
        <NavLink
          to="/hr"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseHrModule`}
          aria-expanded="true"
          aria-controls="collapseHrModule"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i class="fa-solid mr-2 fa-gear"></i> HR
        </NavLink>
        <div
          id={`collapseHrModule`}
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="link-child">
            <NavLink className="link-itemss" to="hr">
              HR First
            </NavLink>
            <NavLink className="link-itemss" to="hr/hrlinktwo">
            HR Second
            </NavLink>
            <NavLink className="link-itemss" to="hr/hrlinkthree">
            HR Third
            </NavLink>
            <NavLink className="link-itemss" to="hr/hrlinkfour">
            HR Forth
            </NavLink>
            <NavLink className="link-itemss" to="hr/hrlinkfive">
            HR Fifth
            </NavLink>
            <NavLink className="link-itemss" to="hr/hrlinksix">
            HR Six
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}


      {/* sales links start */}
      <div className="side-tabs">
        <NavLink
          to="/sales"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseSalesModule`}
          aria-expanded="true"
          aria-controls="collapseSalesModule"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i class="fa-solid mr-2 fa-gear"></i> Sales
        </NavLink>
        <div
          id={`collapseSalesModule`}
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="link-child">
            <NavLink className="link-itemss" to="sales">
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
      {/* end */}


      {/* accounts links start */}
      <div className="side-tabs">
        <NavLink
          to="/account"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseAccountModule`}
          aria-expanded="true"
          aria-controls="collapseAccountModule"
        >
          <i class="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i class="fa-solid mr-2 fa-gear"></i> Accounts
        </NavLink>
        <div
          id={`collapseAccountModule`}
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="link-child">
            <NavLink className="link-itemss" to="account">
              Account Link 1
            </NavLink>
            <NavLink className="link-itemss" to="account/accounttwo">
            Account Link 2
            </NavLink>
            <NavLink className="link-itemss" to="account/accountthird">
            Account Link 3
            </NavLink>
            <NavLink className="link-itemss" to="account/accountforth">
            Account Link 4
            </NavLink>
            <NavLink className="link-itemss" to="account/accountfive">
            Account Link 5
            </NavLink>
            <NavLink className="link-itemss" to="account/accountsix">
            Account Link 6
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}










    </div>
  )
}

export default SideBar
