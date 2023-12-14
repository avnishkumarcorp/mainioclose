import React from "react"
import "./ComingSoonPage.scss"

const ComingSoonPage = () => {
  return (
    <div className="coming-soon">
      <div className="soon-icon">
        <i className="fa-regular fa-face-smile"></i>
      </div>
      <h4 className="small-text"><b>Corpseed IT Warrior</b> are still</h4>
      <h3 className="cookies-text">Cooking Our Delicious Website</h3>
      <h4 className="small-text">
        We are going to launch our Website very soon
      </h4>
      <h4 className="small-text">Stay Tuned!</h4>
      <div className="stay-btn">
        <div className="inbox">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <button>
          Notify Me<i className="fa-solid ml-2 fa-angle-right"></i>
        </button>
      </div>
      <div className="two-icon-between">
        <i className="fa-solid fa-award"></i>
        <i className="fa-solid fa-handshake-simple"></i>
      </div>
    </div>
  )
}

export default ComingSoonPage
