import React, { useState } from "react"
import "./LeadsModule.scss"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import AllLeadsDisplay from "./AllLeadsDisplay"

let ValuePiece = Date | null

let Value = ValuePiece | [ValuePiece, ValuePiece]

const LeadsModule = () => {
  const [value, onChange] = useState(new Date())
  return (
    <div className="lead-module small-box-padding">
      <h2 className="main-heading">Sales Pipeline</h2>
      <div className="filter-fields">
        <div className="single-fields">
          <button>
            <i class="fa-solid fa-user mr-2"></i>
            <span>Expected All Time</span>
          </button>
        </div>
        <div className="single-fields">
          <button>
            <i class="fa-solid fa-user mr-2"></i>
            <span>All users</span>
          </button>
        </div>
        <div className="single-fields">
          <button>
            <i class="fa-solid fa-user mr-2"></i>
            <span>All Leads</span>
          </button>
        </div>
      </div>

      <AllLeadsDisplay />
    </div>
  )
}

export default LeadsModule
