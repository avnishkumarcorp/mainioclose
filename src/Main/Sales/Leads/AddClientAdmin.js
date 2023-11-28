import React, { useRef } from "react"
import { useState } from "react"
import { postQuery } from "../../../API/PostQuery";
import ButtonTwo from "../../../components/button/ButtonTwo";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const AddClientAdmin = () => {

    const [createClientData, setCreateClientData] = useState({
        leadId: 1,
        name: "",
        contactNo: "",
        email: ""
    });

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();


    const getClientData = (e) => {
        setCreateClientData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    console.log("create client", createClientData);

    const submitClientFun = (e) => {
        e.preventDefault();
        const submitData = async () =>{
            try{
            const clientResponseData = await postQuery(`/leadService/api/v1/client/createClient`,createClientData);
            console.log("data", clientResponseData);
            nameRef.current.value = ""
            emailRef.current.value = ""
            mobileRef.current.value = ""
            toast.success("Client Added Sucessfully")

            }catch(err){
                console.log(err)
            }
        }

        submitData();
    }

    // /leadService/api/v1/client/createClient




  return (
    <div className="d-left-new">
      <button
        type="button"
        className="estimate-btn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i className="fa-solid fa-plus"></i> Add Client Admin
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new Client
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
                    ref={nameRef}
                    name="name"
                    onChange={(e) => getClientData(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="pr-ten">
                  <label className="label-heading mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control input-focus"
                    id="email"
                    placeholder="Enter Email"
                    name="email"
                    ref={emailRef}
                    onChange={(e) => getClientData(e)}
                  />
                </div>
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
                    name="contactNo"
                    ref={mobileRef}
                    onChange={(e) => getClientData(e)}
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
              <ButtonTwo  type="button" onClick={(e)=> submitClientFun(e)} className="action-btn" data="Save Client" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClientAdmin
