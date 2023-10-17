import React, { useEffect, useState } from "react"
import "./LeadDetailsPage.scss"
import FilterButton from "../../../components/FilterButton"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { getQuery } from "../../../API/GetQuery"
import { postQuery } from "../../../API/PostQuery"

const LeadDetailsPage = () => {
  const [notes, setNotes] = useState(false)
  const [notes1, setNotes1] = useState(false)
  const [notesApiData, setNotesApiData] = useState([])
  const [messageData, setMessageData] = useState("")

  useEffect(() => {
    editViewData()
    leadNotesData()
    getSingleLeadData()
  }, [])

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  console.log("i am sl=plit path", splitPath)
  const leadPathId = Number(splitPath[4])
  const currentUserId = Number(splitPath[2])

  const [remarkMessage, setRemarkMessage] = useState({
    leadId: leadPathId,
    userId: currentUserId,
    message: messageData,
  })

  console.log("message data", messageData)

  const remarkMessageFunction = (e) => {
    setRemarkMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("remark message", remarkMessage)

  const leadNotesData = async (id) => {
    const getAllLeadNotes = await getQuery(
      `/leadService/api/v1/getAllRemarks?leadId=${leadPathId}`
    )

    console.log("notes is here", getAllLeadNotes)
    setNotesApiData(getAllLeadNotes.data)
  }

  const editViewData = async () => {
    try {
      const viewData = await axios.get(
        `/leadService/api/v1/inbox/editView?leadId=${leadPathId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )

      console.log("view data")
    } catch (err) {
      console.log(err)
    }
  }

  const getSingleLeadData = async () => {
    const singleLeadApiData = await getQuery(
      `/leadService/api/v1/lead/getSingleLeadData?leadId=${leadPathId}`
    )
    console.log("single lead data", singleLeadApiData)
  }

  const createRemarkfun = (e) => {
    e.preventDefault()
    const createNewRemark = async () => {
      try {
        const remarkData = await postQuery(
          `/leadService/api/v1/createRemarks`,
          remarkMessage
        )
        console.log("this is remark response", remarkData)
        window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }
    createNewRemark()
  }

  console.log("lead path ", leadPathId)

  return (
    <div className="lead-details cm-padding-one">
      <div className="row">
        <div className="col-md-4">
          <div className="left-lead-section">
            <h3 className="company-name">No Compnay</h3>
            <p className="lead-blue-head">Abhishek Kumar</p>
            <p className="lead-blue-head mt-4">Gurugram, india</p>
            <div className="lead-product">
              <div className="card mt-2">
                <div className="" id="headingThree">
                  <div
                    className="card-btn"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h3 className="lead-heading">Product</h3>
                    <p className="lead-heading">
                      <i className="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="collapse show"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="my-card-content">
                    <form>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product-category"
                        >
                          Select Product Category
                        </label>

                        <select
                          className="lead-cm-input"
                          name="select-product-category"
                          id="select-product-category"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Select Product
                        </label>

                        <select
                          className="lead-cm-input"
                          name="select-product"
                          id="select-product"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="lead-btn-box">
                        <button className="lead-cm-btn lead-cancel-btn">
                          Cancel
                        </button>
                        <button className="lead-cm-btn lead-save-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* all leads save */}
                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  {/* all leads save */}
                </div>
              </div>

              {/* Estimate*/}
              <div className="card mt-2">
                <div className="" id="headingThree">
                  <div
                    className="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#estimateCollapse"
                    aria-expanded="false"
                    aria-controls="estimateCollapse"
                  >
                    <h3 className="lead-heading">Estimate</h3>
                    <p className="lead-heading">
                      <i className="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="estimateCollapse"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="my-card-content">
                    <form>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Select Product
                        </label>

                        <select
                          className="lead-cm-input"
                          name="select-product"
                          id="select-product"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="lead-btn-box">
                        <button className="lead-cm-btn lead-cancel-btn">
                          Cancel
                        </button>
                        <button className="lead-cm-btn lead-save-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* all leads save */}
                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>
              {/* end estimate */}

              {/* tasks */}
              <div className="card mt-2">
                <div className="" id="headingThree">
                  <div
                    className="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#TasksCollapse"
                    aria-expanded="false"
                    aria-controls="TasksCollapse"
                  >
                    <h3 className="lead-heading">Tasks</h3>
                    <p className="lead-heading">
                      <i className="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="TasksCollapse"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="my-card-content">
                    <form>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Task Description
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          date
                        </label>

                        <input className="lead-cm-input" type="date" />
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Assign user
                        </label>

                        <select
                          className="lead-cm-input"
                          name="select-product"
                          id="select-product"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="lead-btn-box">
                        <button className="lead-cm-btn lead-cancel-btn">
                          Cancel
                        </button>
                        <button className="lead-cm-btn lead-save-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* all leads save */}
                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>

              {/* end  tasks */}

              {/* opportunities */}
              <div className="card mt-2">
                <div className="" id="headingThree">
                  <div
                    className="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#opportunitiesCollapse"
                    aria-expanded="false"
                    aria-controls="opportunitiesCollapse"
                  >
                    <h3 className="lead-heading">Opportunities</h3>
                    <p className="lead-heading">
                      <i className="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="opportunitiesCollapse"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="my-card-content">
                    <form>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Status
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Contact
                        </label>
                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          user
                        </label>

                        <select
                          className="lead-cm-input"
                          name="select-product"
                          id="select-product"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Notes
                        </label>
                        <textarea className="lead-cm-input" type="text" />
                      </div>

                      <div className="lead-btn-box">
                        <button className="lead-cm-btn lead-cancel-btn">
                          Cancel
                        </button>
                        <button className="lead-cm-btn lead-save-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* all leads save */}
                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>

              {/* end  opportunities */}

              {/* contact */}
              <div className="card mt-2">
                <div className="" id="headingThree">
                  <div
                    className="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#contactCollapse"
                    aria-expanded="false"
                    aria-controls="contactCollapse"
                  >
                    <h3 className="lead-heading">Contacts</h3>
                    <p className="lead-heading">
                      <i className="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="contactCollapse"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="my-card-content">
                    <form>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Name
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Title
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Contact Detail
                        </label>
                        <div className="my-details">
                          <i className="fa-solid fa-envelope"></i>
                          <input className="lead-cm-input" type="email" />
                        </div>
                        <div className="my-details">
                          <i className="fa-solid fa-phone"></i>
                          <input className="lead-cm-input" type="text" />
                        </div>
                      </div>

                      <div className="product-box">
                        <label
                          className="lead-heading"
                          htmlFor="select-product"
                        >
                          Contact Role
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="lead-btn-box">
                        <button className="lead-cm-btn lead-cancel-btn">
                          Cancel
                        </button>
                        <button className="lead-cm-btn lead-save-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* all leads save */}
                  <div className="save-lead-data">
                    <div>
                      <p className="lead-heading">BIS Registration</p>
                      <h6 className="lead-sm-heading">
                        Business certifications
                      </h6>
                    </div>

                    <div className="lead-heading">
                      <i className="fa-solid fa-pen mr-3"></i>
                      <i className="fa-solid fa-ellipsis mr-3"></i>
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>

              {/* end  contact */}

              {/* nbew */}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          {/* notes ui */}
          <div className="lead-filter-above">
            <FilterButton
              name={"notes"}
              icon={<i className="fa-regular  fa-note-sticky"></i>}
              data={notes}
              setData={setNotes}
            />
            {/* <FilterButton name={"note"} icon={<i className="fa-solid fa-note-sticky"></i>} data={notes1} setData={setNotes1}/> */}
            <div className={`notes-box mt-4 ${notes === true ? "d-none" : ""}`}>
              <div className="comment-icon">
                <i className="fa-regular cm-icon fa-comment"></i>
                <div className="line"></div>
              </div>

              <div className="side-notes">
                <div className="comment-above">
                  <h2 className="write-heading">Write a Notes</h2>
                </div>
                <textarea
                  className="text-area-box"
                  id="notes"
                  placeholder="write a notes ......"
                  name="message"
                  rows="4"
                  cols="50"
                  onChange={(e) => remarkMessageFunction(e)}
                ></textarea>
                <div className="comment-below">
                  <button
                    className="comment-btn"
                    onClick={(e) => createRemarkfun(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* notes ui end */}

          {/* all notes data ui */}

          {notesApiData.map((note, index) => (
            <div className="lead-filter-above" key={index}>
              {/* <FilterButton name={"note"} icon={<i className="fa-solid fa-note-sticky"></i>} data={notes1} setData={setNotes1}/> */}
              <div className={`notes-box mt-2`}>
                <div className="comment-icon">
                  <i className="fa-regular cm-icon fa-comment"></i>
                  <div className="line"></div>
                </div>

                <div className="side-notes">
                  <div className="comment-above">
                    <h2 className="write-heading">Notes</h2>
                  </div>
                  <div className="text-display-box">{note.message}</div>
                </div>
              </div>
            </div>
          ))}
          {/* all notes data ui ends */}
        </div>
      </div>
    </div>
  )
}

export default LeadDetailsPage
