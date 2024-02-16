import axios from "axios"
import React, { useEffect, useState } from "react"
import UserListComponent from "../../Tables/UserListComponent"
import { Link } from "react-router-dom"
import CreateuserDashboard from "../../Model/CreateuserDashboard"
import { deleteQuery } from "../../API/DeleteQuery"
import { getAllUsers } from "../../Toolkit/Slices/UsersSlice"
import { useSelect } from "@mui/base"
import { useDispatch, useSelector } from "react-redux"
import TableScalaton from "../../components/TableScalaton"

const DisplayDashboardUser = () => {
  const [loading, setLoading] = useState(true)
  const [userSuspand, setUserSuspand] = useState(false)
  const dispatch = useDispatch()
  const allMainUser = useSelector((prev) => prev.user.allUsers)
  const allUserLoading = useSelector((prev) => prev.user.userLoading)
  const allUserError = useSelector((prev) => prev.user.userError)

  // userError

  // useEffect(() => {
  //   displayUser()
  // }, [userSuspand])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [userSuspand])

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure to deActivate this User?") == true) {
      try {
        const suspandUser = await deleteQuery(
          `/securityService/api/auth/deleteUser?userId=${id}`
        )
        const deleteUser = await deleteQuery(
          `/leadService/api/v1/users/deleteUser?id=${id}`
        )
        console.log(suspandUser)
        console.log(deleteUser)
        setUserSuspand((prev) => !prev)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      renderCell: (props) => {
        return <p className="mb-0">CORP00{props.row.id}</p>
      },
    },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 240, hideable: false },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => {
        return (
          <button
            className="btn btn-info"
            onClick={() => deleteUser(props.row.id)}
          >
            Suspand
          </button>
        )
      },
    },
  ]

  return (
    <div className="small-box-padding">
      <div className="create-user-box">
        <h1 className="table-heading">User List</h1>
        <CreateuserDashboard />
        {/* <button className="create-user-btn"><i className="fa-solid mr-1 fa-circle-plus"></i></button> */}
      </div>
      {allUserLoading ? (
        <TableScalaton />
      ) : allUserError ? (
        <p>Something Went Wrong</p>
      ) : (
        <UserListComponent tableName={""} columns={columns} row={allMainUser} />
      )}
    </div>
  )
}

export default DisplayDashboardUser
