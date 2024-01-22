import React from "react"
import ButtonTwo from "../../../components/button/ButtonTwo"
import { cityData } from "../../../API/GetAllData"
import { stateData } from "../../../API/GetAllData"
import { countryData } from "../../../API/GetAllData"

const AddNewCompany = () => {
  return (
    <div className="d-left-new">
      <button
        type="button"
        className="estimate-btn"
        data-toggle="modal"
        data-target="#newComapanyModel"
      >
        <i className="fa-solid fa-plus"></i> Add New Company
      </button>

      <div
        className="modal fade"
        id="newComapanyModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addCompnayData"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCompnayData">
                Add new Compnay
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <div className="pr-ten">
                  <label className="label-heading mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control input-focus"
                    id="Name"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="pr-ten">
                  <label className="label-heading mb-1" htmlFor="gstNumber">
                    GST Number
                  </label>
                  <input
                    type="text"
                    className="form-control input-focus"
                    id="gstNumber"
                    placeholder="Enter GST Number"
                    name="name"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="pr-ten">
                  <label className="label-heading mb-1" htmlFor="panNumber">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    className="form-control input-focus"
                    id="panNumber"
                    placeholder="Enter PAN Number"
                    name="name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label-heading mb-1" htmlFor="country">
                  Country
                </label>
                <select
                  className="form-control input-focus"
                  name="select-product"
                  id="select-product"
                >
                  <option>Select Country</option>
                  {countryData.map((client, index) => (
                    <option key={index} value={client}>
                      {client}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="label-heading mb-1" htmlFor="name">
                  State
                </label>
                <select
                  className="form-control input-focus"
                  name="select-product"
                  id="select-product"
                >
                  <option>Select State</option>
                  {stateData.map((client, index) => (
                    <option key={index} value={client}>
                      {client}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="label-heading mb-1" htmlFor="name">
                  City
                </label>
                <select
                  className="form-control input-focus"
                  name="select-product"
                  id="select-product"
                >
                  <option>Select City</option>
                  {cityData.map((client, index) => (
                    <option key={index} value={client}>
                      {client}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <div className="pr-ten">
                  <label className="label-heading mb-1" htmlFor="panNumber">
                    Address
                  </label>
                  <textarea className="form-control input-focus min-height-one"></textarea>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <ButtonTwo
                type="button"
                // onClick={(e) => submitClientFun(e)}
                className="action-btn"
                data="Save Company"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewCompany
