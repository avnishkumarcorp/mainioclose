import React, { useState } from "react";
import { postQuery } from "../API/PostQuery";

const CreateuserDashboard = () => {
    // /securityService/api/auth/createNewUserByEmail
    const [userRowData, setUserRowData] = useState({
            userName: "rahul anand",
            email: "radrrddsdg@gmail.com",
            role: "ADMIN",
            designation: "Java Devloper"
    });





    const userRowDataFetch = (e) => {
        setUserRowData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const createuserData = (e) =>{
        e.preventDefault();
    const userCreateFun = async () => {
        try {
          const createNewUserData = await postQuery(
            `/securityService/api/auth/createNewUserByEmail`,
            userRowData
          )
          console.log("user data user is created ", createNewUserData)
          console.log(createNewUserData.data.data.name, createNewUserData.data.data.email, createNewUserData.data.data.role, createNewUserData.data.data.userId );
        const newLeadObject = 
            {
                id: createNewUserData.data.data.userId,
                email: createNewUserData.data.data.email,
                role: "string",
                designation: "string",
                userName: createNewUserData.data.data.name
              }

        console.log("New Lead ", newLeadObject);

            // const createLeadUserByEmail = await postQuery(`/leadService/api/v1/users/createUserByEmail`, ) 



        //   window.location.reload()
        } catch (err) {
          console.log(err)
        }
      }
      userCreateFun();
    }


  return(
    <nav>
      <div className="team-model">
        <button
          type="button"
          className="team-edit-button create-user-btn"
          data-toggle="modal"
          data-target="#createuserdashboard"
        >
          <i className="fa-solid mr-1 fa-circle-plus"></i>
        </button>

        {/* MODAL */}
        <div
          className="modal fade"
          id="createuserdashboard"
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
                  <h4 className="info-text model-heading">Create New user</h4>
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
                            // ref={nameRef}
                            placeholder="Enter Username"
                            name="userName"
                            onChange={(e) => userRowDataFetch(e)}
                          />
                        </div>
                        {/* {nameError ? (
                          <InputErrorComponent value={"Name can't be Blank!"} />
                        ) : (
                          ""
                        )} */}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pl-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="teamLeadName"
                          >
                            Email*
                          </label>
                          <input
                            type="email"
                            className="form-control input-focus"
                            id="teamLeadName"
                            placeholder="Enter Email"
                            name="email"
                            // ref={emailRef}
                            onChange={(e) => userRowDataFetch(e)}
                          />
                        </div>
                        {/* {emailError ? (
                          <InputErrorComponent value={"Email can't be Blank!"} />
                        ) : (
                          ""
                        )} */}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Role*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                            // ref={mobileNoRef}
                            placeholder="select role"
                            name="role"
                            onChange={(e) => userRowDataFetch(e)}
                          />
                        </div>
                        {/* {mobileNoError ? (
                          <InputErrorComponent value={"Mobile can't be Blank!"} />
                        ) : (
                          ""
                        )} */}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Designation
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="mobileNo"
                            // ref={urlsRef}
                            placeholder="Enter Designation"
                            name="designation"
                            onChange={(e) => userRowDataFetch(e)}
                          />
                        </div>
                        
                      </div>
                     

               

                      <div className="all-between-items">
                        <div className="all-center"></div>
                        <div>
                          <button
                            onClick={(e)=>createuserData(e)}
                            className="first-button form-prev-btn"
                          >
                            Submit
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
};

export default CreateuserDashboard;
