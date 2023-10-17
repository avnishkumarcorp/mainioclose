import axios from "axios"
import React, { useEffect, useState } from "react"
import UserListComponent from "../../Tables/UserListComponent"
import { Link } from "react-router-dom"
import CreateuserDashboard from "../../Model/CreateuserDashboard"

const DisplayDashboardUser = () => {
  const [displayAlluser, setDisplayAllUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    displayUser()
  }, [])

  const handleEdit = (id) =>{
    console.log("Selected row id is ", id);
  }

  const displayUser = async () => {
    try {
      const userData = await axios.get(`/leadService/api/v1/users/getAllUser`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      console.log(userData)
      setDisplayAllUser(userData.data)
        setLoading(false);
      
    } catch (err) {
      console.log(err)
    }
  }


  const columns = [
    { field: "id", headerName: "ID", width: 150 }, 
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 150, hideable: false  },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "Edit", headerName: "Edit", width: 150, renderCell: (params)=>{
        return <button className="table-edit-btn" onClick={(id)=> handleEdit(params.row.id) }><i className="fa-solid fa-pencil"></i></button> 
    }}, 
  ]

  // /leadService/api/v1/users/getAllUser
  return (
    <div className="small-box-padding">
        <div className="create-user-box">
          <CreateuserDashboard />
        {/* <button className="create-user-btn"><i className="fa-solid mr-1 fa-circle-plus"></i></button> */}
        </div>


      <UserListComponent tableName={"All User List"} columns={columns} row = {displayAlluser} />

      {/* <div className="table-responsive mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">first Name</th>
              <th scope="col">last Name</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          {loading ? (
            <div>Loading</div>
          ) : (
            <tbody>
              {displayAlluser.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.fullName}</td>
                  <td>{user.designation}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div> */}
    </div>
  )
}

export default DisplayDashboardUser
