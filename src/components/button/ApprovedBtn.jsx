import React from "react"

const ApprovedBtn = ({className="", props, data, icon}) => {
  return (
    <button className={`common-btn-one mr-2 ${className}`} {...props}>
      {icon} {data}
    </button>
  )
}

export default ApprovedBtn
