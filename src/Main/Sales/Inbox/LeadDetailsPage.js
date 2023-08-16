import React, { useState } from "react"
import "./LeadDetailsPage.scss"
import FilterButton from "../../../components/FilterButton"

const LeadDetailsPage = () => {
  const [notes, setNotes] = useState(false);
  const [notes1, setNotes1] = useState(false);

  
  return (
    <div className="lead-details cm-padding-one">
      <div className="row">
        <div className="col-md-4">
          <div className="left-lead-section">
            <h3 className="company-name">No Compnay</h3>
            <p className="lead-blue-head">Abhishek Kumar</p>
            <p className="lead-blue-head mt-4">Gurugram, india</p>
            <div className="lead-product">
              <div class="card mt-2">
                <div class="" id="headingThree">
                  <div
                    class="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h3 className="lead-heading">Product</h3>
                    <p className="lead-heading">
                      <i class="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="my-card-content">
                    <form>
                      <div className="product-box">
                        <label
                          className="lead-heading"
                          for="select-product-category"
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
                        <label className="lead-heading" for="select-product">
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
                      <i class="fa-solid fa-trash"></i>
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
                      <i class="fa-solid fa-trash"></i>
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
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  {/* all leads save */}
                </div>
              </div>

              {/* Estimate*/}
              <div class="card mt-2">
                <div class="" id="headingThree">
                  <div
                    class="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#estimateCollapse"
                    aria-expanded="false"
                    aria-controls="estimateCollapse"
                  >
                    <h3 className="lead-heading">Estimate</h3>
                    <p className="lead-heading">
                      <i class="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="estimateCollapse"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="my-card-content">
                    <form>
                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
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
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>
              {/* end estimate */}

              {/* tasks */}
              <div class="card mt-2">
                <div class="" id="headingThree">
                  <div
                    class="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#TasksCollapse"
                    aria-expanded="false"
                    aria-controls="TasksCollapse"
                  >
                    <h3 className="lead-heading">Tasks</h3>
                    <p className="lead-heading">
                      <i class="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="TasksCollapse"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="my-card-content">
                    <form>
                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          Task Description
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          date
                        </label>

                        <input className="lead-cm-input" type="date" />
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
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
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>

              {/* end  tasks */}

              {/* opportunities */}
              <div class="card mt-2">
                <div class="" id="headingThree">
                  <div
                    class="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#opportunitiesCollapse"
                    aria-expanded="false"
                    aria-controls="opportunitiesCollapse"
                  >
                    <h3 className="lead-heading">Opportunities</h3>
                    <p className="lead-heading">
                      <i class="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="opportunitiesCollapse"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="my-card-content">
                    <form>
                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          Status
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          Contact
                        </label>
                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
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
                        <label className="lead-heading" for="select-product">
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
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>

                  {/* all leads save */}
                </div>
              </div>

              {/* end  opportunities */}

              {/* contact */}
              <div class="card mt-2">
                <div class="" id="headingThree">
                  <div
                    class="card-btn collapsed"
                    data-toggle="collapse"
                    data-target="#contactCollapse"
                    aria-expanded="false"
                    aria-controls="contactCollapse"
                  >
                    <h3 className="lead-heading">Contacts</h3>
                    <p className="lead-heading">
                      <i class="fa-solid fa-plus"></i>
                    </p>
                  </div>
                </div>
                <div
                  id="contactCollapse"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="my-card-content">
                    <form>
                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          Name
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          Title
                        </label>

                        <input className="lead-cm-input" type="text" />
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
                          Contact Detail
                        </label>
                        <div className="my-details">
                          <i class="fa-solid fa-envelope"></i>
                          <input className="lead-cm-input" type="email" />
                        </div>
                        <div className="my-details">
                          <i class="fa-solid fa-phone"></i>
                          <input className="lead-cm-input" type="text" />
                        </div>
                      </div>

                      <div className="product-box">
                        <label className="lead-heading" for="select-product">
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
                      <i class="fa-solid fa-pen mr-3"></i>
                      <i class="fa-solid fa-ellipsis mr-3"></i>
                      <i class="fa-solid fa-envelope"></i>
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
          <div className="lead-filter-above">
            <FilterButton name={"note"} icon={<i class="fa-solid fa-note-sticky"></i>} data={notes} setData={setNotes}/>
            <FilterButton name={"note"} icon={<i class="fa-solid fa-note-sticky"></i>} data={notes1} setData={setNotes1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadDetailsPage
