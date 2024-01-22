import React from "react"
import "./LeadsCard.scss"
import { Link } from "react-router-dom"

const LeadsCard = () => {
  return (
    <div className="lead-card">
      <div className="card-heading">
        <Link className="lead-name" to="/">
          close(Example Lead)
        </Link>
      </div>
      <div className="card-body">
        <div className="left-item">
          <div className="image">ks</div>
          <div className="text">
            <h2 className="above-text">500</h2>
            <h3 className="date-per">75% on 4/30/2023</h3>
          </div>
        </div>
        <div className="right-item">
          <i className="fa-solid fa-pencil"></i>
          <i className="fa-solid fa-trash ml-3"></i>
        </div>
      </div>
    </div>
  )
}

export default LeadsCard
