import React from "react"

const SideBox = ({ children, className='' }) => {
  return <div className={`layout-padding ${className}` }>{children}</div>
}

export default SideBox
