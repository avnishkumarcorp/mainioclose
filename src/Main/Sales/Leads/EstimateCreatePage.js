import React from "react"
import "./EstimateCreatePage.scss"

const EstimateCreatePage = () => {
  return (
    <div className="estimate-box">
      <div className="center-box">
        <h1 className="estimate-heading">Create Estimate</h1>
        <form>
          <div className="form-group">
            <label className="label-heading mb-1" htmlFor="companyName">
              Select data
            </label>
            <select
              className="form-control input-focus"
              name="select-product"
              id="select-product"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <div className="form-group">
            <div className="pr-ten">
              <label className="label-heading mb-1" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                className="form-control input-focus"
                id="companyName"
                placeholder="Enter Company Name"
                name="mobileNo"
              />
            </div>
            {/* {mobileNoError ? (
            <InputErrorComponent value={"Mobile can't be Blank!"} />
          ) : (
            ""
          )} */}
          </div>

          <div className="form-group">
            <div className="pr-ten">
              <label className="label-heading mb-1" htmlFor="mobileNo">
                Contact
              </label>
              <input
                type="text"
                className="form-control input-focus"
                id="Contact"
                placeholder="Contact"
                name="mobileNo"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="pr-ten">
              <label className="label-heading mb-1" htmlFor="orderNo">
                Order Number
              </label>
              <input
                type="text"
                className="form-control input-focus"
                id="orderNo"
                placeholder="Order Number"
                name="orderNo"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="pr-ten">
              <label className="label-heading mb-1" htmlFor="purchaseDate">
                Purchase Date
              </label>
              <input
                type="date"
                className="form-control input-focus"
                id="purchaseDate"
                placeholder="Date"
                name="date"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="pr-ten">
              <label className="label-heading mb-1" htmlFor="invoiceNotes">
                Invoice Notes
              </label>
              <textarea
                type="text"
                className="form-control input-focus min-height-one"
                id="invoiceNotes"
                placeholder="invoice Notes"
                name="mobileNo"
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="pr-ten">
              <label className="label-heading mb-1" htmlFor="remarksOperation">
                Remarks Operation
              </label>
              <textarea
                type="text"
                className="form-control input-focus min-height-one"
                id="remarksOperation"
                placeholder="remarks Operation"
                name="mobileNo"
              ></textarea>
            </div>
          </div>

          <input type="reset" className="filter-btn-design mr-3" />
          <input type="submit" className="filter-btn-design estimate-btn" />
        </form>
      </div>
    </div>
  )
}

export default EstimateCreatePage
