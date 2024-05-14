import React from "react"

const SmOneBtn = ({ name, className = "", ...props }) => {
  return (
    <button className={`action-btn my-2 ${className}`} {...props}>
      {name}
    </button>
  )
}

export default SmOneBtn
