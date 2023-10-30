import React, { useEffect, useState } from "react"
import "./LeadDetailsPage.scss"
import FilterButton from "../../../components/FilterButton"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { getQuery } from "../../../API/GetQuery"
import { postQuery } from "../../../API/PostQuery"
import { useRef } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

// data-toggle="tooltip" data-placement="top" title="Tooltip on top"

const LeadDetailsPage = () => {
  const [notes, setNotes] = useState(false)
  const [email, setEmail] = useState(true)
  const [sms, setSms] = useState(true)
  const [notes1, setNotes1] = useState(false)
  const [notesApiData, setNotesApiData] = useState([])
  const [messageData, setMessageData] = useState("")
  const [singleLeadResponseData, setSingleLeadResponseData] = useState({})
  const [categoryData, setCategoryData] = useState([])
  const [getAllStatus, setGetAllStatus] = useState([])
  const [singleStatus, setSingleStatus] = useState("")
  const [notesUpdateToggle, setNotesUpdateToggle] = useState(false)
  const [changeStatusToggle, setChangeStatusToggle] = useState(false)
  const [updateLeadNameToggle, setUpdateLeadNameToggle] = useState(true)

  const [updateLeadName, setUpdateLeadName] = useState('');

  const [leadNameReload, setLeadNameReload] = useState(false);

  const [allProductData, setAllProductData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState("")
  // const statusFakeApi = [
  //   "Potential",
  //   "Active",
  //   "Inactive",
  //   "Interested",
  //   "Not Interested",
  //   "onHold",
  // ]

  // console.log("single status id ", singleStatus)
  useEffect(() => {
    editViewData()

    getAllProductWithCattegory()
    getAllStatusData()
  }, [])

  useEffect(() => {
    getSingleLeadData()
  }, [changeStatusToggle, leadNameReload])

  useEffect(() => {
    leadNotesData()
  }, [notesUpdateToggle])

  useEffect(() => {
    getAllProductData()
  }, [])

  const NotesRef = useRef()

  const getAllProductData = async () => {
    try {
      const allProductResponse = await getQuery(
        `/leadService/api/v1/product/getAllProducts`
      )
      // console.warn("all here")
      // console.log("all products here", allProductResponse)
      setAllProductData(allProductResponse.data)
    } catch (err) {
      console.log(err)
    }
  }
  // console.log("all data hhhh", allProductData)

  // useEffect(()=>{

  // },[changeLeadStatusFun])

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")

  const leadPathId = Number(splitPath[4])
  const currentUserId = Number(splitPath[2])

  const categorySelectRef = useRef()

  const [remarkMessage, setRemarkMessage] = useState({
    leadId: leadPathId,
    userId: currentUserId,
    message: messageData,
  })

  // console.log("category added", categoryData)
  // console.log("selected Product is ", selectedProduct)

  const remarkMessageFunction = (e) => {
    setRemarkMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const getCatgegoryInputData = (valueIs) => {
    // console.warn("product")
    // console.log(valueIs)
  }
  // const getCatgegoryInputData = (valueIs) => {
  //   console.warn("product")
  //   console.log(valueIs)
  // }

  const leadNotesData = async (id) => {
    try {
      const getAllLeadNotes = await getQuery(
        `/leadService/api/v1/getAllRemarks?leadId=${leadPathId}`
      )
      const newData = getAllLeadNotes.data.reverse()
      setNotesApiData(newData)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something Went Wrong")
      }
    }
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
    } catch (err) {
      console.log(err)
    }
  }

  // Get Single Lead Data
  const getSingleLeadData = async () => {
    try {
      const singleLeadApiData = await getQuery(
        `/leadService/api/v1/lead/getSingleLeadData?leadId=${leadPathId}`
      )
      setSingleLeadResponseData(singleLeadApiData.data)
      setUpdateLeadName(singleLeadApiData.data.leadName)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something Went Wrong")
      }
    }
  }

  // change lead status

  const changeLeadStatusFun = (catId) => {
    // e.preventDefault();
    const statusChange = async () => {
      try {
        const statusData = await axios.put(
          `/leadService/api/v1/status/updateLeadStatus?leadId=${leadPathId}&statusId=${catId}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        // console.log("status data", statusData)
        setChangeStatusToggle((prev) => !prev)
        // window.location.reload();
      } catch (err) {
        console.log(err)
      }
    }
    statusChange()
  }

  const createRemarkfun = (e) => {
    e.preventDefault()
    const createNewRemark = async () => {
      try {
        const remarkData = await postQuery(
          `/leadService/api/v1/createRemarks`,
          remarkMessage
        )
        setNotesUpdateToggle((prev) => !prev)
        NotesRef.current.value = ""
        // window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }
    createNewRemark()
  }

  const getAllProductWithCattegory = async () => {
    try {
      const getCategory = await getQuery(
        "/leadService/api/v1/category/getAllCategories"
      )
      // console.log("get category", getCategory.data)
      setCategoryData(getCategory.data)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something Went Wrong")
      }
    }
  }

  // console.log("all data hhhh", allProductData)

  const getAllStatusData = async () => {
    try {
      const allStatus = await getQuery(
        `/leadService/api/v1/status/getAllStatus`
      )
      // console.log("all status", allStatus)
      setGetAllStatus(allStatus.data)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something Went Wrong")
      }
      console.log("500 err", err.response.status)
    }
  }

  const createProductInLeadFun = () => {
    const productInLead = async () =>{
      const updateLeadProducts = await axios.put(`/leadService/api/v1/lead/createProductInLead`,{

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      //   {
    //     "productId": 2,
    //     "leadId": 14,
    //     "serviceName": "fssai"
    //   }
    // const /leadService/api/v1/lead/createProductInLead
    }
  }


  // console.log("update lead Nameeee", updateLeadName);

  const updateLeadNameSinglePage = async (e) =>{
    // e.preventDefault();
    // console.log("lead id", leadPathId);
    // console.log("update lead", updateLeadName);
    // const updateLeadName = async () =>{
      try{   
      const leadNameUpdate = await axios.put(`/leadService/api/v1/lead/updateLeadName?leadName=${updateLeadName}&leadId=${leadPathId}`,{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
        // console.log("lead Name Update", leadNameUpdate);
        setUpdateLeadNameToggle(true)
        setLeadNameReload((prev)=> !(prev))
    }catch(err){
        console.log(err)
      }
    // }
    // updateLeadName();
  }





  // console.log("i am state data", singleLeadResponseData)

  // setCategoryData(singleLeadResponseData)

  return (
    <div className="lead-details cm-padding-one">
      <div className="row">
        <div className="col-md-4">
          <div className="left-lead-section">
            {/* {setUpdateLeadNameToggle ? <div>true</div>: <p>false</p>} */}
            {updateLeadNameToggle ? (
              <>
              <h3 className="company-name d-inline">
                {singleLeadResponseData.leadName}
              </h3>
                <i onClick={()=> setUpdateLeadNameToggle(false)} className="fa-solid ml-3 fa-pencil"></i>
                </>
            ) : (
              <>
                <input value={updateLeadName}  onChange={(e)=> setUpdateLeadName(e.target.value)} className="hide-design-box" type="text" />
                <button className="small-cm-btn" onClick={(e)=> updateLeadNameSinglePage(e)}>Save</button>
              </>
            )}
            <p className="lead-location">
              <i className="fa-solid mr-1 fa-location-dot"></i>
              {singleLeadResponseData.name}
            </p>
            <p className="lead-blue-head">
              {singleLeadResponseData?.status?.name}
            </p>

            <p className="my-2">
              <select
                className="status-select"
                name="status"
                onChange={(e) => changeLeadStatusFun(e.target.value)}
                id="status"
                form="statusChange"
              >
                {getAllStatus.map((status, index) => (
                  <option value={status.id} key={index}>
                    {status.name}
                  </option>
                ))}
              </select>
            </p>
            <div>
              {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} lead="Status" />
                )}
              /> */}
            </div>
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
                    <h3 className="lead-heading lead-bold">Product</h3>
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
                          // name="select-product-category"
                          id="select-product-category"
                          ref={categorySelectRef}
                          value={categoryData.categoryName || ""}
                          // name="categoryName"
                          onChange={(e) =>
                            getCatgegoryInputData(e.target.value)
                          }
                        >
                          {categoryData.map((cat, index) => (
                            <option key={index} value={cat.categoryName}>
                              {cat.categoryName}
                            </option>
                          ))}
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
                          onChange={(e) => setSelectedProduct(e.target.value)}
                        >
                          {allProductData.map((product, index) => (
                            <option key={index} value={product?.productName}>
                              {product?.productName}
                            </option>
                          ))}
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
                      <i
                        className="fa-solid fa-trash"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Product Delete"
                      ></i>
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
                    <h3 className="lead-heading lead-bold">Estimate</h3>
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
                    <h3 className="lead-heading lead-bold">Tasks</h3>
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
                    <h3 className="lead-heading lead-bold">Opportunities</h3>
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
                    <h3 className="lead-heading lead-bold">Contacts</h3>
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
            <div className="filter-box">
              <FilterButton
                name={"Note"}
                icon={<i className="fa-regular  fa-note-sticky"></i>}
                data={notes}
                setData={setNotes}
              />
              <FilterButton
                name={"SMS"}
                icon={<i className="fa-regular fa-message"></i>}
                data={sms}
                setData={setSms}
              />
              <FilterButton
                name={"Email"}
                icon={<i className="fa-regular fa-envelope"></i>}
                data={email}
                setData={setEmail}
              />
            </div>

            <div></div>
            {/* <FilterButton name={"note"} icon={<i className="fa-solid fa-note-sticky"></i>} data={notes1} setData={setNotes1}/> */}

            <div className={`notes-box mt-4 ${notes === true ? "d-none" : ""}`}>
              <div className="comment-icon">
                <div className="icon-box notes-cl">
                  <i className="fa-regular fa-note-sticky"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="side-notes">
                {/* <div className="comment-above">
                  <h2 className="write-heading">Write a Notes</h2>
                </div> */}
                <textarea
                  className="text-area-box"
                  id="notes"
                  placeholder="write a notes ......"
                  name="message"
                  rows="4"
                  cols="50"
                  ref={NotesRef}
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
            <div className={`notes-box mt-4 ${email === true ? "d-none" : ""}`}>
              <div className="comment-icon">
                <div className="icon-box email-cl">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="side-notes">
                <div className="comment-above">
                  <h2 className="write-heading">Write a Email</h2>
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
            <div className={`notes-box mt-4 ${sms === true ? "d-none" : ""}`}>
              <div className="comment-icon">
                <div className="icon-box sms-cl">
                  <i className="fa-regular cm-icon fa-comment"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="side-notes">
                <div className="comment-above">
                  <h2 className="write-heading">Write a SMS</h2>
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
                  <div className="icon-box">
                    <i className="fa-regular cm-icon fa-comment"></i>
                  </div>
                  <div className="line"></div>
                </div>

                <div className="side-notes">
                  <div className="comment-above">
                    <h2 className="write-heading">Notes</h2>
                  </div>
                  <div className="text-display-box">
                    <pre>{note.message}</pre>
                  </div>
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
