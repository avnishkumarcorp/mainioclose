import React from "react"
import "./HeroSection.scss"
import SectionSaprater from "../components/design/SectionSaprater"
import HomeTextComp from "../components/HomeTextComp"
import HomeImageComp from "../components/HomeImageComp"

const sideSection = () => (
  <SectionSaprater>
    <div className="d-flex home-hero container">
      <div className="text-section">
        <HomeTextComp heading ="i am heading" para="i am para dklkjfle fe femf;emf;lemfl;efe" />
      </div>
      <div className="image-section">
        <HomeImageComp
          imageurl={`https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          imgalt={`about image`}
          className={`height-75`}
        />
      </div>
    </div>
  </SectionSaprater>
)

export default sideSection
