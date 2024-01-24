import React from "react"
import "./ArrowComponent.scss"

const ArrowComponent = () => {

    const RightSlide = () => {
        window.body.scrollX("40px");
    }

  return (
    <>
      <div onClick={()=> RightSlide()}  className="cm-arrow left-arrow"><i class="fa-solid fa-chevron-left"></i></div>
      <div onClick={()=> RightSlide()} className="cm-arrow right-arrow"><i class="fa-solid fa-chevron-right"></i></div>
    </>
  )
}

export default ArrowComponent
