import React from "react"
import "./ContentBox.scss"

const ContentBox = ({ icon, data }) => {
  return (
    <div className="mini-box">
      <p>{icon}</p>
      <h4 className="mini-text">{data}</h4>
    </div>
  )
}

export default ContentBox
