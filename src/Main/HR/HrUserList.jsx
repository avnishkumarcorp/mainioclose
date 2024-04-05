import React, { useEffect, useState } from "react"
import SideBox from "../../components/SideBox"
import { useDispatch, useSelector } from "react-redux"
import UserListComponent from "../../Tables/UserListComponent"
import CreateuserDashboard from "../../Model/CreateuserDashboard"
import { getAllUsers } from "../../Toolkit/Slices/UsersSlice"
import TableScalaton from "../../components/TableScalaton"
import CreateHrDashBoard from "../../Model/CreateHrDashBoard"
import ColComp from "../../components/small/ColComp"

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

  console.log("all User data", allMainUser)

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
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (props) => <ColComp data={props?.row?.email} />,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.designation} />,
    },
    {
      field: "department",
      headerName: "Department",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.department} />,
    },


    {
      field: "role",
      headerName: "Role",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.role} />,
    },
    {
      field: "aadharCard",
      headerName: "Aadhar card",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.aadharCard} />,
    },
    {
      field: "dateOfJoining",
      headerName: "Joining Date",
      width: 150,
      renderCell: (props) => (
        <p className="m-0">
          {props?.row?.dateOfJoining
            ? new Date(props?.row?.dateOfJoining)?.toLocaleDateString()
            : "NA"}
        </p>
      ),
    },
    {
      field: "employeeId",
      headerName: "Employee ID",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.employeeId} />,
    },
    {
      field: "epfNo",
      headerName: "Employee ID",
      width: 150,

      renderCell: (props) => <ColComp data={props?.row?.epfNo} />,
    },
    {
      field: "experience",
      headerName: "Experience",
      width: 180,
      renderCell: (props) => (
        <p className="m-0">
          {props?.row?.expInYear ? props?.row?.expInYear + " years" : "NA"} and{" "}
          {props?.row?.expInMonth ? props?.row?.expInMonth + " months" : "NA"}
        </p>
      ),
    },
    {
      field: "managers",
      headerName: "Manager",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.managers?.fullName} />,
    },
    {
      field: "panNumber",
      headerName: "pan Number",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.panNumber} />,
    },
    {
      field: "nationality",
      headerName: "Nationality",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.nationality} />,
    },
    {
      field: "permanentAddress",
      headerName: "Permanent Address",
      width: 250,
      renderCell: (props) => <ColComp data={props?.row?.permanentAddress} />,
    },
    {
      field: "residentialAddress",
      headerName: "Residential Address",
      width: 250,
      renderCell: (props) => <ColComp data={props?.row?.residentialAddress} />,
    },
    {
      field: "fatherName",
      headerName: "Father Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.fatherName} />,
    },
    {
      field: "fatherContactNo",
      headerName: "Father Contact No",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.fatherContactNo} />,
    },
    {
      field: "fatherOccupation",
      headerName: "Father Occupation",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.fatherOccupation} />,
    },
    {
      field: "motherName",
      headerName: "Mother Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.motherName} />,
    },
    {
      field: "motherContactNo",
      headerName: "Mother Contact No",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.motherContactNo} />,
    },
    {
      field: "motherOccupation",
      headerName: "Mother Occupation",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.motherOccupation} />,
    },
    {
      field: "spouseName",
      headerName: "Spouse Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.spouseName} />,
    },
    {
      field: "spouseContactNo",
      headerName: "Spouse Contact No",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.spouseContactNo} />,
    },
    {
      field: "language",
      headerName: "Language",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.language} />,
    },
    {
      field: "emergencyNumber",
      headerName: "Emergency Number",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.emergencyNumber} />,
    },


    


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
