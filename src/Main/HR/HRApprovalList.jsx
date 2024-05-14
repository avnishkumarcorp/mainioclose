import React, { useEffect, useState } from "react"
import TableOutlet from "../../components/design/TableOutlet"
import MainHeading from "../../components/design/MainHeading"
import UserListComponent from "../../Tables/UserListComponent"
import { useDispatch, useSelector } from "react-redux"
import { headHrUser } from "../../Toolkit/Slices/UsersSlice"
import ColComp from "../../components/small/ColComp"
import TableScalaton from "../../components/TableScalaton"
import SomethingWrong from "../../components/usefulThings/SomethingWrong"
import { ApproveduserByHr } from "../../Toolkit/Slices/ApprovedStatus"

const HRApprovalList = () => {
  const dispatch = useDispatch()
  const currentUserId = useSelector((state) => state?.auth?.currentUser?.id)
  const [flagDataT, setFlagDataT] = useState(true)
  const [approvedUserDep, setApprovedUserDep] = useState(true)

  const {
    allHRUsers: hrApprovalUser,
    userHRLoading,
    userHRError,
  } = useSelector((state) => state?.user)

  const { Hrflag, hrLoading, hrError } = useSelector((data) => data?.approved)

  useEffect(() => {
    dispatch(headHrUser(currentUserId))
  }, [dispatch, approvedUserDep, currentUserId])

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
      width: 100,
      renderCell: (props) => {
        return (
          <>
            <button
              className="common-btn-one mr-2"
              data-toggle="modal"
              data-target="#createhrdashboard"
              onClick={() => approvedUserFun("data")}
            >
              Edit
            </button>
          </>
        )
      },
    },

    {
      field: "Approved",
      headerName: "Appproved",
      width: 150,
      renderCell: (props) => {
        return (
          <button
            className="common-btn-one mr-2"
            onClick={() => approvedUserFun(props.row.id)}
          >
            {hrLoading ? "Please Wait..." : "Approved"}{" "}
            <i className="fa-solid mr-2 fa-check"></i>
          </button>
        )
      },
    },
  ]

  const approvedUserFun = (id) => {
    const userId = { ids: id }
    console.log("function call", currentUserId, flagDataT)
    const getApproval = dispatch(
      ApproveduserByHr({ currid: currentUserId, userid: userId.ids })
    )
    setApprovedUserDep((prev) => !prev)
    console.log(getApproval)
  }

  // const disapprovedUserFun = (id) => {
  //   const userId = { ids: id }
  //   console.log("function call", currentUserId, flagDataT)
  //   const getApproval = dispatch(
  //     ApproveduserByHr({ currid: currentUserId, userid: userId.ids })
  //   )
  //   setApprovedUserDep((prev) => !prev)
  //   console.log(getApproval)
  // }

  return (
    <TableOutlet>
      <MainHeading data={"Approval List"} />
      <div className="mt-3">
        {userHRLoading && <TableScalaton />}
        {userHRError && <SomethingWrong />}
        {hrApprovalUser && !userHRLoading && !userHRError && (
          <UserListComponent
            tableName={""}
            columns={columns}
            row={hrApprovalUser}
          />
        )}
      </div>
    </TableOutlet>
  )
}

export default HRApprovalList
