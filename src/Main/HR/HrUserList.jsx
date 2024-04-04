import React, { useEffect, useState } from "react"
import SideBox from "../../components/SideBox"
import { useDispatch, useSelector } from "react-redux"
import UserListComponent from "../../Tables/UserListComponent"
import CreateuserDashboard from "../../Model/CreateuserDashboard"
import { getAllUsers } from "../../Toolkit/Slices/UsersSlice"
import TableScalaton from "../../components/TableScalaton"
import CreateHrDashBoard from "../../Model/CreateHrDashBoard"

const HrUserList = () => {
  const dispatch = useDispatch()
  const allMainUser = useSelector((prev) => prev.user.allUsers)
  const allUserLoading = useSelector((prev) => prev.user.userLoading)

  const [getId, setGetId] = useState("")
  const [editType, setEditType] = useState(false)

  const userCount = allMainUser.length

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

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
            <button
              className="common-btn-one mr-2"
              data-toggle="modal"
              data-target="#createhrdashboard"
              onClick={() => myNewId(props?.row)}
            >
              Edit
            </button>
          </>
        )
      },
    },
  ]

  return (
    <SideBox>
      <div className="create-user-box">
        <h1 className="table-heading">User List ({userCount})</h1>
        <div className="all-center">
          <CreateHrDashBoard data={getId} type={editType} />
        </div>
      </div>
      {allUserLoading ? (
        <TableScalaton />
      ) : (
        <UserListComponent tableName={""} columns={columns} row={allMainUser} />
      )}
    </SideBox>
  )
}

export default HrUserList
