import React, { useRef } from "react"
import "./EnquirySend.scss"
import { useState } from "react"
import { postQuery } from "../API/PostQuery"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FirstInput from "./Inputs/FirstInput"
import SecondInput from "./Inputs/SecondInput"
import InputErrorComponent from "./InputErrorComponent"
import { useSelector } from "react-redux"
toast.configure()

const EnquirySend = () => {
  const [openTab, setOpenTab] = useState(false)
  const [loading, setLoading] = useState(false)

  
  const currentUserId = useSelector((state) => state?.AuthReducer?.currentUser?.id)
  
  const [EnquiryTicketData, setEnquiryTicketData] = useState({
    userId: currentUserId,
    description: "",
    subject: "",
  })

  const [subError, setSubError] = useState(false);

  const subjectRef = useRef()
  const descriptionRef = useRef()

  const ticketInfo = (e) => {
    setEnquiryTicketData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // window.addEventListener('click', () =>{
  //   if(openTab === true){
  //     setOpenTab(false);
  //   }
  // })


  const submitTicketFun = (e) => {
    e.preventDefault()
    if(subjectRef.current.value === ""){
      setSubError(true);
      return
    }

    const submitTicketData = async () => {
      
     

      setLoading(true)


      try {
        const ticket = await postQuery(
          `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/createTicket`,
          EnquiryTicketData
        )
        toast.success("Message Submit Sucessfully...")
        subjectRef.current.value = ""
        descriptionRef.current.value = ""

        setLoading(false)
      } catch (err) {
        if (err.response.status === 500) {
          toast.error("Something Went Wrong...")
        }
        setLoading(false)
      }
    }
    submitTicketData()
  }


  return (
    <div>
      <div className="enquiry">
        <p className="m-0" onClick={() => setOpenTab((prev) => !prev)}>
          <i className="fa-regular fa-circle-question"></i>
        </p>
        {openTab ? (
          <form>
            <div className="enq-tab">
              <p className="my-2 lead-heading enq-title">
                Get in touch by filling out the form below
              </p>
              <FirstInput
                className="enq-subject hide-design-box font-changer my-2"
                type="text"
                placeholder="Write subject Here..."
                name="subject"
                ref={subjectRef}
                onChange={(e) => ticketInfo(e)}
              />
              <textarea
                className="enq-message  hide-design-box font-changer "
                placeholder="Write Message here..."
                name="description"
                ref={descriptionRef}
                onChange={(e) => ticketInfo(e)}
              ></textarea>
             {subError ? <InputErrorComponent value="Subject Can't be Blank" /> : "" } 
              <button
                className="action-btn"
                onClick={(e) => submitTicketFun(e)}
              >
                {loading ? "Loading" : "Send"}
              </button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default EnquirySend
