import React, { useEffect, useState } from "react"
import SideBox from "../../components/SideBox"
import { useDispatch, useSelector } from "react-redux"
import UserListComponent from "../../Tables/UserListComponent"
import CreateuserDashboard from "../../Model/CreateuserDashboard"
import { getAllUsers } from "../../Toolkit/Slices/UsersSlice"
import TableScalaton from "../../components/TableScalaton"
import CreateHrDashBoard from "../../Model/CreateHrDashBoard"
import ColComp from "../../components/small/ColComp"
import MainHeading from "../../components/design/MainHeading"
import SomethingWrong from "../../components/usefulThings/SomethingWrong"
import { hrUserData } from "../../data/HrData"

const HrUserList = () => {
  const dispatch = useDispatch()
  const {
    allUsers: allMainUser,
    userLoading,
    userError,
  } = useSelector((prev) => prev.user)

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

  console.log("all User data", allMainUser)

  const columns = [
    ...hrUserData,
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
        <MainHeading data={`User List (${userCount})`} />
        <div className="all-center">
          <CreateHrDashBoard data={getId} type={editType} />
        </div>
      </div>
      {userLoading && <TableScalaton />}
      {userError && <SomethingWrong />}
      {allMainUser && !userLoading && !userError && (
        <UserListComponent tableName={""} columns={columns} row={allMainUser} />
      )}
    </SideBox>
  )
}

export default HrUserList
