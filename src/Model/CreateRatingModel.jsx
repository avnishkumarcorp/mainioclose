import React, { useEffect, useState } from "react"
import "./Model.css"
import ModelInput from "../components/Inputs/ModelInput"
import { MultiSelect } from "primereact/multiselect"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Toolkit/Slices/UsersSlice"
import DropDownComp from "../components/Inputs/DropDownComp"

const CreateRatingModel = ({ hidebox }) => {
  const [multiUser, setMultiUser] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const { allUsers, userLoading, userError } = useSelector((prev) => prev?.user)

  console.log("all users data", allUsers)

  const allStars = [
    { id: 1, number: "1" },
    { id: 2, number: "2" },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
  ]

  return (
    <>
      <div className="team-model">
        {/* MODAL */}
        <div
          className={`personal-info slide-data-ui  container ${
            hidebox ? "d-none" : ""
          }`}
        >
          <h4 className="info-text model-heading">Add Rating User</h4>
          <form>
            <div className="first-form form-row">
              <div className="form-group col-md-6">
                <div className="pr-ten">
                  <label className="label-heading mb-1" htmlFor="teamName">
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
                <label className="label-heading mb-1" htmlFor="teamName">
                  Select users *
                </label>
                <MultiSelect
                  style={{ dropdown: { backgroundColor: "#000" } }}
                  value={multiUser}
                  onChange={(e) => setMultiUser(e.target.value)}
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
                    className="first-button form-prev-btn border-1"
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
    </>
  )
}

export default CreateRatingModel
