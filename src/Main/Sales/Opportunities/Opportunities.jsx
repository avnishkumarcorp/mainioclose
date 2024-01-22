import React from "react"
import "./Opportunities.scss"
import LeadsModule from "../Leads/LeadsModule"
import AllLeadsDisplay from "../Leads/AllLeadsDisplay"

const Opportunities = () => {
  return (
    <div className="lead-module small-box-padding">
      <h1 className="table-heading mb-2">Sales Pipeline</h1>
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
