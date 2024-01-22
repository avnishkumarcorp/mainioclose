import React from "react"
import { useState } from "react"
import "./PopUpButton.scss"
import { FALSE } from "sass"

const PopUpButton = ({ name = "", icon, className = "", ...props }) => {
  const [activePop, setActivePop] = useState(false)
  const [activeBtn, setActiveBtn] = useState(false);

  const activePopup = () => {
    setActivePop((prev) => !(prev))
    setActiveBtn((prev) => !(prev))
  }

  return (
    <div className="parent-pop">
      <button
        className={`${className} ${activePop ? "change-btn": ""}`}
        onClick={() => activePopup()}
        {...props}
      >
       {icon && icon} {name}
      </button>
      {activePop ? <div className="child-pop">
        <p className="m-0">Wait Wait Wait ...</p>
        <p className="m-0">This Feature is Still in Progess...</p>
        <p>Just Wait for Some Time</p>
      </div>: ""}
    </div>
  )
}

export default PopUpButton
