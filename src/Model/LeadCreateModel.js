import React, { useRef, useState } from "react"
import "./Model.css"
import { postQuery } from "../API/PostQuery"
import InputErrorComponent from "../components/InputErrorComponent"
// import InputComponent from "../components/InputComponent";

const LeadCreateModel = () => {
  const [leadData, setLeadData] = useState({
    uuid: "",
    name: "",
    leadName: "",
    email: "",
    leadDescription: "",
    mobileNo: "",
    urls: "",
    createDate: "",
    lastUpdated: "",
    latestStatusChangeDate: "",
    source: "",
    city: "",
    categoryId: "1",
    serviceId: "1",
    industryId: "1",
    ipAddress: "",
    displayStatus: "string",
    assigneeId: 1,
    whatsAppStatus: 0,
    deleted: false,
    primaryAddress: "",
  })

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [mobileNoError, setMobileNoError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [ipAddressError, setIpAddressError] = useState(false)
  const [sourceError, setSourceError] = useState(false)
  const [leadDescriptionError, setLeadDescriptionError] = useState(false)
  


  const nameRef = useRef()
  const emailRef = useRef()
  const leadDescriptionRef = useRef()
  const mobileNoRef = useRef()
  const urlsRef = useRef()
  const cityRef = useRef()
  const ipAddressRef = useRef()
  const assigneeIdRef = useRef()
  const primaryAddressRef = useRef()
  const sourceRef = useRef()

  const leadRowData = (e) => {
    setLeadData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    if (nameRef.current.value !== "") {
      setNameError(false)
      
    }

    if (emailRef.current.value !== "") {
      setEmailError(false)  
    }
    if (mobileNoRef.current.value !== "") {
      setMobileNoError(false)  
    }
    if (cityRef.current.value !== "") {
      setCityError(false)  
    }
    if (ipAddressRef.current.value !== "") {
      setIpAddressError(false)  
    }
    if (sourceRef.current.value !== "") {
      setSourceError(false)  
    }
    if (leadDescriptionRef.current.value !== "") {
      setLeadDescriptionError(false)  
    }
  }

  const newLeadCreate = (e) => {
    e.preventDefault()
    if (nameRef.current.value === "") {
      setNameError(true)
      
    }

    if (emailRef.current.value === "") {
      setEmailError(true)  
    }
    if (mobileNoRef.current.value === "") {
      setMobileNoError(true)  
    }
    if (cityRef.current.value === "") {
      setCityError(true)  
    }
    if (ipAddressRef.current.value === "") {
      setIpAddressError(true)  
    }
    if (sourceRef.current.value === "") {
      setSourceError(true)  
    }
    if (leadDescriptionRef.current.value === "") {
      setLeadDescriptionError(true)  
      return
    }

  
    














    const leadCreateFun = async () => {
      try {
        const createNewLeadData = await postQuery(
          `/leadService/api/v1/lead/createLead`,
          leadData
        )
        console.log("lead crteated ", createNewLeadData)
        window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }
    leadCreateFun()
  }
  console.log("row data is ", leadData)

  return (
    <nav>
      <div className="team-model">
        <button
          type="button"
          className="team-edit-button create-user-btn"
          data-toggle="modal"
          data-target="#createLead"
        >
          <i className="fa-solid mr-1 fa-circle-plus"></i>
        </button>

        {/* MODAL */}
        <div
          className="modal fade"
          id="createLead"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog mod-center modal-dialog-centered"
            role="document"
          >
            <div className="modal-content all-center">
              <div className="add-team-body">
                {/* START */}
                <div className="personal-info container">
                  <h4 className="info-text model-heading">Add New Lead</h4>
                  <div className="cross-icon">
                    <i
                      data-dismiss="modal"
                      className="fa-sharp fa-solid fa-circle-xmark"
                    ></i>
                  </div>
                  <form>
                    <div className="first-form form-row">
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="teamName"
                          >
                            Lead name *
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="teamName"
                            ref={nameRef}
                            placeholder="Enter Team Name"
                            name="name"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        {nameError ? (
                          <InputErrorComponent value={"Name can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pl-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="teamLeadName"
                          >
                            Lead email*
                          </label>
                          <input
                            type="email"
                            className="form-control input-focus"
                            id="teamLeadName"
                            placeholder="Enter Email"
                            name="email"
                            ref={emailRef}
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        {emailError ? (
                          <InputErrorComponent value={"Email can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Mobile Number*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                            ref={mobileNoRef}
                            placeholder="Enter Team Name"
                            name="mobileNo"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        {mobileNoError ? (
                          <InputErrorComponent value={"Mobile can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Url's
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                            ref={urlsRef}
                            placeholder="Enter Url's"
                            name="urls"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            city*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                            ref={cityRef}
                            placeholder="Enter city"
                            name="city"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        {cityError ? (
                          <InputErrorComponent value={"City can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            IP Address*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                             ref={ipAddressRef}
                            placeholder="IP Address"
                            name="ipAddress"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        {ipAddressError ? (
                          <InputErrorComponent value={"Ip Address can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            assignee Id
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                            ref={assigneeIdRef}
                            placeholder="Assignee ID"
                            name="assigneeId"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                       
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            source*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="Source"
                            ref={sourceRef}
                            placeholder="Assignee ID"
                            name="source"
                            onChange={(e) => leadRowData(e)}
                          />
                        </div>
                        {sourceError ? (
                          <InputErrorComponent value={"Source can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                    
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Lead Description*
                          </label>
                          <textarea
                            className="form-control input-focus"
                            id="opunit"
                            rows="4"
                            cols="50"
                            placeholder="Enter Description here..."
                            value={leadData.leadDescription || ""}
                            name="leadDescription"
                            ref={leadDescriptionRef}
                            onChange={(e) => leadRowData(e)}
                            required
                          ></textarea>
                        </div>
                        {leadDescriptionError ? (
                          <InputErrorComponent value={"lead Description can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Primary Address*
                          </label>
                          <textarea
                            className="form-control input-focus"
                            id="opunit"
                            rows="4"
                            cols="50"
                            placeholder="Enter Address here..."
                            value={leadData.primaryAddress || ""}
                            name="primaryAddress"
                            ref={primaryAddressRef}
                            onChange={(e) => leadRowData(e)}
                            required
                          ></textarea>
                        </div>
                       
                      </div>

                      {/* <textarea
                      className="form-group input-focus text-a-size w-100"
                      id="opunit"
                      rows="4"
                      cols="50"
                      placeholder="Enter Address here..."
                      value={companyData.operationUnitAddress || ""}
                      name="operationUnitAddress"
                      onChange={(e) => nameData(e)}
                      ref={operationUnitAddressRef}
                      required
                    ></textarea> */}

                      {/* <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="sel2">
                      City*
                    </label>
                    <select
                      value={companyData.companyCity || ""}
                      name="companyCity"
                      onChange={(e) => nameData(e)}
                      className="form-control input-focus"
                      ref={companyCityRef}
                      id="sel2"
                    >
                      {cityData.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {companyCityErr ? (
                      <p className="error-show">company City can't be Blank</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div> */}

                      <div className="all-between-items">
                        <div className="all-center"></div>
                        <div>
                          <button
                            onClick={(e) => newLeadCreate(e)}
                            className="first-button form-prev-btn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LeadCreateModel
