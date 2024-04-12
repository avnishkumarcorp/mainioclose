import React from "react"
import "./HeroSection.scss"
import SectionSaprater from "../components/design/SectionSaprater"
import HomeTextComp from "../components/HomeTextComp"
import HomeImageComp from "../components/HomeImageComp"

const SideNewSection = () => (
  <SectionSaprater>
    <div className="container">
      <div className="row">
        <div className=" col-md-6 all-center text-section">
          <HomeTextComp
            heading="No dated user trends here"
            para="Stay ahead with the latest visual trends for a superior user experience across tablets, foldable phones, smart TVs, and more!"
          />
        </div>
        <div className="col-md-6 ">
          <HomeImageComp
            imageurl={`https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            imgalt={`about image`}
            className={``}
          />
        </div>
      </div>
    </div>
  </SectionSaprater>
)

export default SideNewSection
