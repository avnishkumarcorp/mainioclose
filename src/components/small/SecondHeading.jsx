import React from "react"
import "./SmallData.scss"

const SecondHeading = ({ data, className = "" }) => (
  <h2 className={`h-heading ${className}`}>{data}</h2>
)

export default SecondHeading
