import React from "react"
import "./SubmitQuery.scss"
import SectionSaprater from "../components/design/SectionSaprater"
import SecondHeading from "../components/small/SecondHeading"
import SecondPara from "../components/small/SecondPara"

const SubmitQuery = () => (
  <SectionSaprater>
    {" "}
    <div className="container all-dir-center w-75">
      <SecondHeading data={`Submit Your Requirements`} />
      <SecondPara
        data={`Discover how Corpseed Creator can automate your business processes with a personalized one-on-one demo. Tailored to your specific needs, our demo will showcase the power of automation for your project.`}
      />
      <button className="tell-us-btn">Tell Us Your Need</button>
    </div>
  </SectionSaprater>
)

export default SubmitQuery
