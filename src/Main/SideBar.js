import React from "react"
import SideNavTabs from "../components/SideNavTabs"
import "./SideBar.scss"
import { NavLink } from "react-router-dom"
import corpseedLogo from "../Images/corpseed-logo.png"

const SideBar = () => {
  return (
    <div className="sideTab">
      {/* Dashboard links start */}
      <div className="corpseed-logo">
        <div className="logo-image">
          <img src={corpseedLogo} alt="corpseed-logo" />
        </div>
      </div>

      <div className="side-tabs">
        <NavLink
          to="/erp"
          className={`nav-heading ml-3`}
          data-toggle="collapse"
          data-target={`#collapseOne`}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i className="fa-solid mr-2 fa-gear"></i> DashBoard
        </NavLink>
      </div>
      {/* end */}

      {/* hr links start */}
      <div className="side-tabs">
        <NavLink
          to="/erp/hr"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseHrModule`}
          aria-expanded="true"
          aria-controls="collapseHrModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-gear"></i> HR
        </NavLink>
        <div
          id={`collapseHrModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
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
          to="/erp/sales"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseSalesModule`}
          aria-expanded="true"
          aria-controls="collapseSalesModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-gear"></i> Sales
        </NavLink>
        <div
          id={`collapseSalesModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
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
          to="/erp/account"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseAccountModule`}
          aria-expanded="true"
          aria-controls="collapseAccountModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-gear"></i> Accounts
        </NavLink>
        <div
          id={`collapseAccountModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
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

      {/* operations links start */}
      <div className="side-tabs">
        <NavLink
          to="/erp/operation"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseOperationModule`}
          aria-expanded="true"
          aria-controls="collapseOperationModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-gear"></i> Operations
        </NavLink>
        <div
          id={`collapseOperationModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
            <NavLink className="link-itemss" to="operation">
              Operation Link 1
            </NavLink>
            <NavLink className="link-itemss" to="operation/operationtwo">
              Operation Link 2
            </NavLink>
            <NavLink className="link-itemss" to="operation/operationthree">
              Operation Link 3
            </NavLink>
            <NavLink className="link-itemss" to="operation/operationfour">
              Operation Link 4
            </NavLink>
            <NavLink className="link-itemss" to="operation/operationfive">
              Operation Link 5
            </NavLink>
            <NavLink className="link-itemss" to="operation/operationsix">
              Operation Link 6
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}

      {/* Manage Clinets links start */}
      <div className="side-tabs">
        <NavLink
          to="/erp/manageclient"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseManageClientModule`}
          aria-expanded="true"
          aria-controls="collapseManageClientModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-gear"></i> Manage Clients
        </NavLink>
        <div
          id={`collapseManageClientModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
            <NavLink className="link-itemss" to="manageclient">
              {" "}
              Manage Client 1
            </NavLink>
            <NavLink className="link-itemss" to="manageclient/clienttwo">
              Manage Client 2
            </NavLink>
            <NavLink className="link-itemss" to="manageclient/clientthree">
              Manage Client 3
            </NavLink>
            <NavLink className="link-itemss" to="manageclient/clientfour">
              Manage Client 4
            </NavLink>
            <NavLink className="link-itemss" to="manageclient/clientfive">
              Manage Client 5
            </NavLink>
            <NavLink className="link-itemss" to="manageclient/clientsix">
              Manage Client 6
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}

      {/* activity Master links start */}
      <div className="side-tabs">
        <NavLink
          to="/erp/activity"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseActivityMasterModule`}
          aria-expanded="true"
          aria-controls="collapseActivityMasterModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-user-group"></i> Activity Master
        </NavLink>
        <div
          id={`collapseActivityMasterModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
            <NavLink className="link-itemss" to="activity">
              Activity Link 1
            </NavLink>
            <NavLink className="link-itemss" to="activity/activitytwo">
              Activity Link 2
            </NavLink>
            <NavLink className="link-itemss" to="activity/activitythree">
              Activity Link 3
            </NavLink>
            <NavLink className="link-itemss" to="activity/activityfour">
              Activity Link 4
            </NavLink>
            <NavLink className="link-itemss" to="activity/activityfive">
              Activity Link 5
            </NavLink>
            <NavLink className="link-itemss" to="activity/activitysix">
              Activity Link 6
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}

      {/* Quality links start */}
      <div className="side-tabs">
        <NavLink
          to="/erp/quality"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseQualityModule`}
          aria-expanded="true"
          aria-controls="collapseQualityModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-solid mr-2 fa-gear"></i> Quality
        </NavLink>
        <div
          id={`collapseQualityModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
            <NavLink className="link-itemss" to="quality">
              {" "}
              Quality Link 1
            </NavLink>
            <NavLink className="link-itemss" to="quality/qualitytwo">
              Quality Link 2
            </NavLink>
            <NavLink className="link-itemss" to="quality/qualitythree">
              Quality Link 3
            </NavLink>
            <NavLink className="link-itemss" to="quality/qualityfour">
              Quality Link 4
            </NavLink>
            <NavLink className="link-itemss" to="quality/qualityfive">
              Quality Link 5
            </NavLink>
            <NavLink className="link-itemss" to="quality/qualitysix">
              Account Link 6
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}

      {/* Profile links start */}
      <div className="side-tabs">
        <NavLink
          to="/erp/profile"
          className={`nav-heading ${({ isActive }) =>
            isActive ? "linkactive" : ""}`}
          data-toggle="collapse"
          data-target={`#collapseProfileModule`}
          aria-expanded="true"
          aria-controls="collapseProfileModule"
        >
          <i className="fa-solid mr-1 fa-angle-right"></i>{" "}
          <i className="fa-regular mr-2 fa-user"></i> Profile
        </NavLink>
        <div
          id={`collapseProfileModule`}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="link-child">
            <NavLink className="link-itemss" to="profile">
              Profile Link 1
            </NavLink>
            <NavLink className="link-itemss" to="profile/profiletwo">
              Profile Link 2
            </NavLink>
            <NavLink className="link-itemss" to="profile/profilethree">
              Profile Link 3
            </NavLink>
            <NavLink className="link-itemss" to="profile/profilefour">
              Profile Link 4
            </NavLink>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  )
}

export default SideBar
