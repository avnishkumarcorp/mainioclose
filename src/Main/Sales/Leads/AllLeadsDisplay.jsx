import React from "react"
import "./AllLeadsDisplay.scss"
import LeadsCard from "../../../components/LeadsCard"

const AllLeadsDisplay = () => {
  return (
    <div className="display-lead">
      <div className="lead-main-box">
        <div className="lead-demo">
          <div className="demo-box">Demo Completed</div>
          <p className="ml-2 mt-1">3 opportunities</p>
        </div>
        <div className="analyze-value">
          <p className="value">Annualized Value</p>
          <p className="price">INR 4,000</p>
        </div>
        <div className="all-leads">
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
        </div>
      </div>

      <div className="lead-main-box">
        <div className="lead-demo">
          <div className="demo-box">Demo Completed</div>
          <p className="ml-2 mt-1">3 opportunities</p>
        </div>
        <div className="analyze-value">
          <p className="value">Annualized Value</p>
          <p className="price">INR 4,000</p>
        </div>
        <div className="all-leads">
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
        </div>
      </div>

      <div className="lead-main-box">
        <div className="lead-demo">
          <div className="demo-box">Demo Completed</div>
          <p className="ml-2 mt-1">3 opportunities</p>
        </div>
        <div className="analyze-value">
          <p className="value">Annualized Value</p>
          <p className="price">INR 4,000</p>
        </div>
        <div className="all-leads">
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
        </div>
      </div>

      <div className="lead-main-box">
        <div className="lead-demo">
          <div className="demo-box">Demo Completed</div>
          <p className="ml-2 mt-1">3 opportunities</p>
        </div>
        <div className="analyze-value">
          <p className="value">Annualized Value</p>
          <p className="price">INR 4,000</p>
        </div>
        <div className="all-leads">
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
          <LeadsCard />
        </div>
      </div>


   
    </div>
  )
}

export default AllLeadsDisplay
