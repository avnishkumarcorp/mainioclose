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
        data={`Have a project in mind? We’ll help you find out how Zoho Creator can automate your business processes. Our one-on-one demo will be tailored to your Our one-on-one demo will be tailored to your specific needs.`}
      />
      <button className="tell-us-btn">Tell Us Your Need</button>
    </div>
  </SectionSaprater>
)

export default SubmitQuery
