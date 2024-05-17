import React, { useEffect, useState } from "react"
import "./Model.css"
import ModelInput from "../components/Inputs/ModelInput"
import { MultiSelect } from "primereact/multiselect"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Toolkit/Slices/UsersSlice"

const CreateRatingModel = () => {
  const [multiUser, setMultiUser] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const { allUsers, userLoading, userError } = useSelector((prev) => prev?.user)

  console.log("all users data", allUsers)

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
            <div className="modal-content all-center-2">
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
                            Lead Name *
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="leadName"
                            // ref={leadNameRef}
                            placeholder="Enter Team Name"
                            name="leadName"
                            // onChange={(e) => leadRowData(e)}
                          />
                        </div>
                      </div>

                      <ModelInput
                        type="text"
                        label="Enter Rating"
                        placeholder="Enter Rating"
                      />

                      {/* <ModelDropDown
                        labelData={`Select Role`}
                        // onChange={setUserDataFun}
                        name="roleNames"
                        value={userRoles.roleName}
                        val={userRoles?.map((role) => ({
                          value: role.id,
                          label: role.roleName,
                        }))}
                      /> */}

                      <div className="col-md-6">
                        <MultiSelect
                          style={{ dropdown: { backgroundColor: "#000" } }}
                          value={multiUser}
                          onChange={(e) => setMultiUser(e.value)}
                          options={allUsers}
                          optionLabel="fullName"
                          placeholder="Select Urls"
                          optionValue="id"
                          maxSelectedLabels={6}
                          className="multi-select-boxx w-100 py-1 my-3"
                        />
                      </div>

                      <div className="all-between-items">
                        <div className="all-center-2"></div>
                        <div>
                          <button
                            // onClick={(e) => newLeadCreate(e)}
                            className="first-button form-prev-btn"
                          >
                            Submit
                            {/* {leadLoading ? "Loading..." : "Submit"} */}
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

export default CreateRatingModel
