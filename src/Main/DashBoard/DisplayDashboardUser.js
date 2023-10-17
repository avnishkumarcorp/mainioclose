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

  const handleEdit = (id) => {
    console.log("Selected row id is ", id)
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
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 150, hideable: false },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    {
      field: "Edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <button
            className="table-edit-btn"
            onClick={(id) => handleEdit(params.row.id)}
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
        )
      },
    },
  ]

  return (
    <div className="small-box-padding">
      <div className="create-user-box">
        <CreateuserDashboard />
      </div>

      <UserListComponent
        tableName={"All User List"}
        columns={columns}
        row={displayAlluser}
      />
    </div>
  )
}

export default DisplayDashboardUser
