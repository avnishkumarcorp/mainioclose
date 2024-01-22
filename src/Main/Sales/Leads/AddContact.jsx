import React from "react"
import ButtonTwo from "../../../components/button/ButtonTwo"

const AddContact = () => {
  return (
    <div className="d-left-new">
      <ButtonTwo
        type="button"
        className="estimate-btn"
        data-toggle="modal"
        data-target="#addContactEstimate"
        data="Add Contact"
        icon={<i className="fa-solid mr-1 fa-plus"></i>}
      />

      <div
        className="modal fade"
        id="addContactEstimate"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addCompnayData"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCompnayData">
                Add Contact
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
                  <label className="label-heading mb-1" htmlFor="Email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control input-focus"
                    id="Email"
                    placeholder="Enter Email"
                    // ref={nameRef}
                    name="name"
                    // onChange={(e) => getClientData(e)}
                  />
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
                data="Save Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContact
