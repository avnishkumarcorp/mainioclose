import React from "react"
import SecondHeading from "./small/SecondHeading"
import SecondPara from "./small/SecondPara"

const HomeTextComp = ({heading, para}) => (
  <div>
    <SecondHeading data={heading} />
    <SecondPara data={para} />
  </div>
)

export default HomeTextComp
