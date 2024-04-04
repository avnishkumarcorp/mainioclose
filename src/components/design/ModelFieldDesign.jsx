import React from "react"

const ModelFieldDesign = ({ children, className = "" }) => {
  return (
    <div className="form-group col-md-6">
      <div className={`pr-ten ${className}`}>{children}</div>
    </div>
  )
}

export default ModelFieldDesign
