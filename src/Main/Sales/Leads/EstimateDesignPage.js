import React from "react"
import "./EstimateDesignPage.scss"

const EstimateDesignPage = ({setEstimateOpenBtn}) => {

    const closeEstimate = () => {
        setEstimateOpenBtn((prev) => !(prev)); 
    }

  return (
  <div className="estimate-ui-design">
    <div onClick={()=> closeEstimate()} className="estimate-close">
        {/* <p >close</p> */}
    <div className="cross-two-icon"><i class="fa-solid fa-xmark"></i></div>
    </div>
    <h1>heelo</h1>
    <h2>i am Estimate</h2>
  </div>
  )
}

export default EstimateDesignPage
