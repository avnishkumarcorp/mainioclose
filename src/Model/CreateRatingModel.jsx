import React from "react"
import "./Model.css"

const CreateRatingModel = () => {
  return (
    <nav className="all-center">
      <div className="team-model">
        <button
          type="button"
          className="team-edit-button create-user-btn"
          data-toggle="modal"
          data-target="#createRatingdashboard"
        >
          <i className="fa-solid mr-1 fa-circle-plus"></i>
        </button>

        {/* MODAL */}
        <div
          className="modal fade"
          id="createRatingdashboard"
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
                  <h4 className="info-text model-heading">Create New Rating</h4>
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
                            Username*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="teamName"
                            //   value={
                            //     type ? userRowData.fullName : userRowData.fullName
                            //   }
                            //   ref={nameRef}
                            placeholder="Enter Username"
                            //   name={type ? "fullName" : "userName"}
                            //   onChange={userRowDataFetch}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="first-form form-row">
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="teamName"
                          >
                            Username*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="teamName"
                            //   value={
                            //     type ? userRowData.fullName : userRowData.fullName
                            //   }
                            //   ref={nameRef}
                            placeholder="Enter Username"
                            //   name={type ? "fullName" : "userName"}
                            //   onChange={userRowDataFetch}
                          />
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

export default CreateRatingModel
