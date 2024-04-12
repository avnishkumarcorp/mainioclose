import React from "react"
import "./JumpStart.scss"
import SectionSaprater from "../components/design/SectionSaprater"
import HomeTextComp from "../components/HomeTextComp"
import SecondHeading from "../components/small/SecondHeading"
import SecondPara from "../components/small/SecondPara"
import ContentBox from "../components/boxes/ContentBox"

const JumpStart = () => {
  return (
    <div className="jump-section">
      <div className="container">
        <SectionSaprater>
          <div className="jump-text">
            <SecondHeading data={`Need a jumpstart?`} />
            <SecondPara
              data={`Choose from our suite of prebuilt sample apps for custom ERP systems`}
            />
          </div>
          <div className="jump-boxes">
            <ContentBox
              icon={<i class="fa-solid fa-briefcase"></i>}
              data={`Sales and Marketing`}
            />
            <ContentBox
              icon={<i class="fa-solid fa-gears"></i>}
              data={`Operation`}
            />
            <ContentBox
              icon={<i class="fa-solid fa-desktop"></i>}
              data={`Human Resources`}
            />
            <ContentBox
              icon={<i class="fa-solid fa-handshake"></i>}
              data={`IT and Administrtion`}
            />
            <ContentBox
              icon={<i class="fa-solid fa-money-bill-1"></i>}
              data={`Finance`}
            />
            <ContentBox
              icon={<i class="fa-solid fa-phone-volume"></i>}
              data={`Support`}
            />
          </div>
        </SectionSaprater>
      </div>
    </div>
  )
}

export default JumpStart
