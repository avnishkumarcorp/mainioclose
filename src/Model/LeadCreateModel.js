import React, { useRef, useState } from "react";
import "./Model.css"
import { postQuery } from "../API/PostQuery";
import InputErrorComponent from "../components/InputErrorComponent";
// import InputComponent from "../components/InputComponent";

const LeadCreateModel = () => {
   const [leadData, setLeadData] = useState({
        "uuid": "string",
        "name": "",
        "leadName": "string",
        "email": "rahul199jain@gmail.com",
        "leadDescription": "string",
        "mobileNo": "808898798",
        "urls": "fdfd",
        "createDate": "2023-10-11T08:50:25.515Z",
        "lastUpdated": "2023-10-11T08:50:25.515Z",
        "latestStatusChangeDate": "2023-10-11T08:50:25.515Z",
        "source": "string",
        "city": "string",
        "categoryId": "1",
        "serviceId": "1",
        "industryId": "1",
        "ipAddress": "378.34.2.234",
        "displayStatus": "string",
        "assigneeId": 1,
        "whatsAppStatus": 0,
        "deleted": false,
        "primaryAddress": "string"
      });

      const [nameError, setNameError] = useState(false);

      const nameRef = useRef();


      const leadRowData = (e) => {
        setLeadData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      }

      const newLeadCreate = (e) =>{
        e.preventDefault();
        if(nameRef.current.value === ""){
            setNameError(true)
            return
        }
        const leadCreateFun = async () => {
            try{
            const createNewLeadData = await postQuery(`/leadService/api/v1/lead/createLead`,leadData);
            console.log("lead crteated ", createNewLeadData);
            window.location.reload();
            }catch(err){
                console.log(err);
            }
        }
        leadCreateFun();
      }
      console.log("row data is ", leadData);

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
          <div className="modal-content all-center">
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
                          Team Name *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamName"
                          ref={nameRef}
                          placeholder="Enter Team Name"
                          name="name"
                          onChange={(e)=> leadRowData(e)}
                        />
                      </div>
                        {nameError ? <InputErrorComponent value={"Name can't be Blank!"} /> : ""}
                    </div>    
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamLeadName"
                        >
                          Team Lead Name*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamLeadName"
                          placeholder="Enter Team Lead Name"
                          name="teamLeadName"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamDesignation"
                        >
                          Team Designation *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamDesignation"
                          name="leadDesignation"
                          placeholder="Enter Team Designation"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamType"
                        >
                          Team Type*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamType"
                          name="teamType"
                          placeholder="Enter Team Type"
                        />
                      </div>
                    </div>

                    <div className="all-between-items">
                      <div className="all-center">
                      </div>
                      <div>
                        <button onClick={(e)=> newLeadCreate(e)} className="first-button form-prev-btn">
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

export default LeadCreateModel;
