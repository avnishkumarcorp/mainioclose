import React from "react"
import "./Opportunities.scss"
import LeadsModule from "../Leads/LeadsModule"
import AllLeadsDisplay from "../Leads/AllLeadsDisplay"

const Opportunities = () => {
  return(
    <div className="lead-module small-box-padding">
    <h2 className="main-heading">Sales Pipeline</h2>
    <div className="filter-fields">
      <div className="single-fields">
        <button>
          <i className="fa-solid fa-user mr-2"></i>
          <span>Expected All Time</span>
        </button>
      </div>
      <div className="single-fields">
        <button>
          <i className="fa-solid fa-user mr-2"></i>
          <span>All users</span>
        </button>
      </div>
      <div className="single-fields">
        <button>
          <i className="fa-solid fa-user mr-2"></i>
          <span>All Leads</span>
        </button>
      </div>
    </div>

    <AllLeadsDisplay />
  </div>
  )
}

export default Opportunities
