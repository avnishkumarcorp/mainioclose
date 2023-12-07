import React, { useRef, useState } from "react"
import { postQuery } from "../API/PostQuery"
import { useCustomRoute } from "../Routes/GetCustomRoutes"
import { useEffect } from "react"
import { getQuery } from "../API/GetQuery"
import InputErrorComponent from "../components/InputErrorComponent"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const CreateuserDashboard = () => {
  // /securityService/api/auth/createNewUserByEmail
  const [roleGetRole, setRoleGetRole] = useState([]);
  const [userRowData, setUserRowData] = useState({
    userName: "",
    email: "",
    role: [],
    designation: "",
  })
  const [btnLoading, setBtnLoading] = useState(false);
  const [allRoles, setAllRoles] = useState([]);
  
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const designationRef = useRef();

  
  const GetRoleFun = (e) => {
    setUserRowData((prev) => ({...prev, role: [e.target.value] }));
  }


  console.log("row datta", userRowData);

  const userRowDataFetch = (e) => {
    setUserRowData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

 useEffect(()=>{
  getAllRole();
 }, [])


 const roleUrl = `/securityService/api/v1/roles/getRole`;
 const roleData  = [];


 const {productData: allDataRole} = useCustomRoute(roleUrl, roleData);

//  console.warn("data by hook");
//  console.log("role data", allDataRole);

  const getAllRole = async () => {
    try {
      const allRoleResponse = await getQuery(
        `/securityService/api/v1/roles/getRole`
      )
      // console.log("all roles", allRoleResponse.data);
      setAllRoles(allRoleResponse.data)
    } catch (err) {
      console.log("err", err)
    }
  }

  // console.log("i am role response", userRowData)

  const createuserData = (e) => {
    e.preventDefault()
    if(nameRef.current.value === ""){
      setNameError(true)
    }
    if(emailRef.current.value === ""){
      setEmailError(true)
    }
    if(roleRef.current.value.length === 0){
      setRoleError(true)
      
    }
    if(roleRef.current.value === "" || emailRef.current.value === "" || nameRef.current.value === ""){
      return;   
    }



    setBtnLoading(true)
    const userCreateFun = async () => {
      try {
        const createNewUserData = await postQuery(
          `/securityService/api/auth/createNewUserByEmail`,
          userRowData
        )
        console.warn("user crate data");
        console.log("user data user is created ", createNewUserData)
        console.log(
          createNewUserData.data.data.name,
          createNewUserData.data.data.email,
          createNewUserData.data.data.role,
          createNewUserData.data.data.userId
        )

        let roleData = createNewUserData.data.data.role.map((role)=> (role.name));

        console.log("all role name", roleData);


        const newLeadObject = {
          id: createNewUserData.data.data.userId,
          email: createNewUserData.data.data.email,
          role: roleData,
          designation: createNewUserData.data.data.designation,
          userName: createNewUserData.data.data.name,
        }

        console.log("New Lead ", newLeadObject)

        const createLeadUserByEmail = await postQuery(`/leadService/api/v1/users/createUserByEmail`, newLeadObject);
        console.log("user created done", createLeadUserByEmail);
        setBtnLoading(false);
        roleRef.current.value = "" 
        emailRef.current.value = "" 
        nameRef.current.value = ""
        designationRef.current.value = ""

        toast.success("user craeted Sucessfully")
        window.location.reload()
      } catch (err) {
        console.log(err)
        setBtnLoading(false)
      }
    }
    userCreateFun()
  }

  return (
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
                            ref={nameRef}
                            placeholder="Enter Username"
                            name="userName"
                            onChange={(e) => userRowDataFetch(e)}
                          />
                        </div>
                        {nameError ? (
                          <InputErrorComponent value={"Name can't be Blank!"} />
                        ) : (
                          ""
                        )}
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
                            ref={emailRef}
                            onChange={(e) => userRowDataFetch(e)}
                          />
                        </div>
                        {emailError ? (
                          <InputErrorComponent value={"Email can't be Blank!"} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label
                            className="label-heading mb-1"
                            htmlFor="mobileNo"
                          >
                            Role*
                          </label>

                          <select
                            className="form-control input-focus"
                            name="role"
                            id="select-product"
                            ref={roleRef}
                            onChange={(e) => GetRoleFun(e)}
                          >
                            <option>Select Role</option>
                            {allRoles.map((role, index) => (
                              <option key={index} value={role?.name}>
                                {role?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        {roleError ? (
                          <InputErrorComponent value={"Role can't be Blank!"} />
                        ) : (
                          ""
                        )}
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
                            ref={designationRef}
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
                            onClick={(e) => createuserData(e)}
                            className="first-button form-prev-btn"
                          >
                          { btnLoading ? "Loading" :  "Submit" }
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

export default CreateuserDashboard
