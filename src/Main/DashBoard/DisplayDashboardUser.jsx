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
import MainHeading from "../../components/design/MainHeading"
import SomethingWrong from "../../components/usefulThings/SomethingWrong"

const DisplayDashboardUser = () => {
  const [loading, setLoading] = useState(true)
  const [userSuspand, setUserSuspand] = useState(false)
  const dispatch = useDispatch()

  const {
    allUsers: allMainUser,
    userLoading,
    userError,
  } = useSelector((prev) => prev.user)
  // const allMainUser = useSelector((prev) => prev.user.allUsers)
  // const allUserLoading = useSelector((prev) => prev.user.userLoading)
  // const allUserError = useSelector((prev) => prev.user.userError)

  const [getId, setGetId] = useState('');
  const [editType, setEditType] = useState(false);

  const userCount = allMainUser.length


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
        setUserSuspand((prev) => !prev)
      } catch (err) {
        console.log(err)
      }
    }
  }

  console.log(allMainUser);

  const myNewId = (id) => {
    setGetId(id)
    setEditType(true)
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      renderCell: (props) => {
        return <p className="mb-0">CORP00{props?.row?.id}</p>
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
      width: 180,
      renderCell: (props) => {
        return (
          <>
          <button className="common-btn-one mr-2"
              data-toggle="modal"
              data-target="#createuserdashboard"
              onClick={() => myNewId(props?.row)}
          >
            Edit
          </button>
          <button
            className="common-btn-one"
            onClick={() => deleteUser(props?.row?.id)}
          >
            Suspand
          </button>
          </>
        )
      },
    },
  ]

  return (
    <>
      <div className="create-user-box">
        <MainHeading data={`User List (${userCount})`} />
        <div className="all-center">
        <Link to={`deactivateuser`} className="common-btn-one mr-2">Deactivate Users</Link>
        <CreateuserDashboard data={getId} type={editType} />
        </div>
      </div>
      {userLoading && <TableScalaton />}
      {userError && <SomethingWrong />}
      {allMainUser && !userLoading && !userError && (
        <UserListComponent tableName={""} columns={columns} row={allMainUser} />
      )}
    </>
  )
}

export default DisplayDashboardUser
