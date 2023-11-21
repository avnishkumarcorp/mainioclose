import React from "react"
import "./EstimateDesignPage.scss"

const EstimateDesignPage = ({ setEstimateOpenBtn }) => {
  const closeEstimate = () => {
    setEstimateOpenBtn((prev) => !prev)
  }

  return (
    <div className="estimate-ui-design">
      <div onClick={() => closeEstimate()} className="estimate-close">
        {/* <p >close</p> */}
        <div className="cross-two-icon">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="estimate-header">
        <div>
          <h2 className="estimate-text"><i className="fa-solid fa-calendar-days mr-2"></i>Estimate Details</h2>

        </div>
        <div>
          <button className="estimate-tabs">Notes</button>
          <button className="estimate-tabs">Edit</button>
          <button className="estimate-tabs">Convert to Invoice</button>
        </div>
      </div>
    </div>
  )
}

export default EstimateDesignPage
