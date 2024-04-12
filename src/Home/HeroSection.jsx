import React from "react"
import "./HeroSection.scss"
import sideImage from "../Images/homePic.png"
import SectionSaprater from "../components/design/SectionSaprater"
import HomeImageComp from "../components/HomeImageComp"
import HomeTextComp from "../components/HomeTextComp"

const HeroSection = () => (
  <div className="container hero-section home-section-padding">
    <div className="right-section">
      <div className="hero-text">
        <h3 className="small-head">Your Trusted ERP Partner</h3>
        <h2 className="big-head">
          Transforming <br /> CA & CS <br /> Management
        </h2>
      </div>
      <div className="hero-button">
        <button className="left-btn">Start Now - It's Free</button>
        <button className="right-btn">
          Talk to Expert <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <p className="forever-text">
        <span className="text-blue">Free,</span> forever, with one users. No
        card required.
      </p>
    </div>
    <div>
      <div className="left-image-box">
        <img src={sideImage} />
      </div>
    </div>
  </div>

  // <SectionSaprater>
  //   <div className="d-flex home-hero container"></div>
  // </SectionSaprater>
)

export default HeroSection
