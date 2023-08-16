import React from "react"
import "./LeadDetailsPage.scss"

const LeadDetailsPage = () => {
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
                    <h3 className="lead-heading">PRODUCT</h3>
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
                    <div className="product-box">
                      <label className="lead-heading" for="select-product-category">
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
                        <button className="lead-cm-btn lead-cancel-btn">Cancel</button>
                        <button className="lead-cm-btn lead-save-btn">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">9</div>
      </div>
    </div>
  )
}

export default LeadDetailsPage
