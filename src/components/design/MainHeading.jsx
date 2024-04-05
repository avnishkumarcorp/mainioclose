import React from "react"

const MainHeading = ({ count, data }) => {
  return (
    <h2 className="table-heading">
      {data} {count && { count }}
    </h2>
  )
}

export default MainHeading
