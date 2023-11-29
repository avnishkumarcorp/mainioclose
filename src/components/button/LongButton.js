import React from "react"

const LongButton = ({ data, className = "", ...props }) => {
  return (
    <button className={`login-button ${className}`} {...props}>
      {data}
    </button>
  )
}

export default LongButton
