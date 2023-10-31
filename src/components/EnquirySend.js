import React from "react"
import "./EnquirySend.scss"
import { useState } from "react"

const EnquirySend = () => {
  const [openTab, setOpenTab] = useState(false)

  return (
    <div>
      <div className="enquiry">
        <p className="m-0" onClick={() => setOpenTab((prev) => !prev)}>
          <i class="fa-regular fa-circle-question"></i>
        </p>
        {openTab ? (
          <div className="enq-tab">
            <p className="my-2 lead-heading">Get in touch by filling out the form below</p>
            <input className="enq-subject hide-design-box my-2" type="text" placeholder="subject" />
            <textarea className="enq-message hide-design-box my-2" placeholder="message">
            </textarea>
            <button className="enq-btn">send</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default EnquirySend
