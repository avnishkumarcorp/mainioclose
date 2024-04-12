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
            para="Embrace the latest visual trends and provide a better user experience in growing form factors like tablets, foldable phones, smart TVs, and more!"
          />
        </div>
        <div className="col-md-6 ">
          <HomeImageComp
            imageurl={`https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            imgalt={`about image`}
            className={``}
          />
        </div>
      </div>
    </div>
  </SectionSaprater>
)

export default SideNewSection
