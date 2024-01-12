import React, { useEffect, useState } from "react"
import "./LeadsModule.scss"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import AllLeadsDisplay from "./AllLeadsDisplay"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import DataTableFirst from "../../../components/DataTableFirst"
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DataGrid } from "@mui/x-data-grid"
import DataGridNewTable from "../../../components/DataGridNewTable"
import UserLeadComponent from "../../../Tables/UserLeadComponent"
import LeadCreateModel from "../../../Model/LeadCreateModel"
import { useSelector } from "react-redux"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import TableScalaton from "../../../components/TableScalaton"
import { getQuery } from "../../../API/GetQuery"

const LeadsModule = () => {
  const [activeTab, setActiveTab] = useState(false)
  const [allLeadData, setAllLeadData] = useState([])
  const [leadUserNew, setLeadUserNew] = useState([])
  const [updateActive, setUpdateActive] = useState(false)
  const [leadScalatonCall, setLeadScalatonCall] = useState(true)
  const [getAllStatus, setGetAllStatus] = useState([])
  const [statusDataId, setStatusDataId] = useState([])

  const [leadStatusD, setLeadStatusD] = useState(false)

  useEffect(() => {
    getAllLead()
  }, [updateActive, statusDataId, leadStatusD])

  useEffect(() => {
    getAllLeadUser()
  }, [])

  useEffect(() => {
    getAllStatusData()
  }, [])

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const currentUserId = Number(splitPath[2])
  const currentLeadId = Number(splitPath[4])


  const currentUserRoles = useSelector(
    (prev) => prev.AuthReducer.currentUser.roles
  )
  const adminRole = currentUserRoles.includes("ADMIN")

  const columns = [
    {
      field: "leadName",
      headerName: "Name",
      width: 150,
      renderCell: (props) => {
        return (
          <Link to={`/erp/${currentUserId}/sales/leads/${props.row.id}`}>
            {props?.row?.leadName}
          </Link>
        )
      },
    },
    {
      field: "assigneeName",
      headerName: "Assignee Person",
      width: 150,
      renderCell: (props) => {
        return <p className="mb-0">{props?.row?.assignee?.fullName}</p>
      },
    },
    { field: "mobileNo", headerName: "Mobile No", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "createDate",
      headerName: "Date",
      width: 150,
      renderCell: (props) => {
        let date = new Date(props.row.createDate)
        let dateNew = date.toLocaleDateString()
        return <p className="mb-0">{dateNew}</p>
      },
    },
    {
      field: "assignee",
      headerName: "Change Assignee",
      width: 170,
      renderCell: (props) => {
        return (
          <select
            className="assignee-button"
            onChange={(e) => changeLeadAssignee(e.target.value, props.row.id)}
            // onSelect={(e)=> }
            name="lead"
            id="lead"
          >
            <option>Select Assignee</option>
            {leadUserNew.map((user, index) => (
              <option key={index} value={user.id}>
                {user?.fullName}
              </option>
            ))}
          </select>
        )
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (props) => {
        const leadStatus = props.row.status?.name
        return <p className={leadStatus === "New" ? "lead-new": ""}>{leadStatus ? leadStatus : "NA"}</p>
      },
    },
    { field: "source", headerName: "Source", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => {
        return adminRole ? (
          <p onClick={() => leadDeleteResponse(props.row.id)}>
            <i className="fa-solid fa-trash"></i>
          </p>
        ) : (
          ""
        )
      },
    },
  ]

  const leadDeleteResponse = async (id) => {
    if (window.confirm("Are you sure to delete this record?") == true) {
      try {
        const leadResponse = await axios.delete(
          `/leadService/api/v1/lead/deleteLead?leadId=${id}&userId=${currentUserId}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        setLeadStatusD((prev) => !prev)
      } catch (err) {
        console.log("err", err)
      }
    } else {
      console.log("You cancel")
    }
  }

  const changeLeadAssignee = async (id, leadId) => {
    try {
      const updatePerson = await axios.put(
        `/leadService/api/v1/lead/updateAssignee?leadId=${leadId}&userId=${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      setUpdateActive((prev) => !prev)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something Went Wrong")
      }

      console.log(err)
    }
  }

  const getAllLeadUser = async () => {
    try {
      const allLeadUser = await axios.get(
        `/leadService/api/v1/users/getAllUser`
      )
      setLeadUserNew(allLeadUser.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllLead = async () => {
    try {
      const allLead = await axios.get(
        // /leadService/api/v1/lead/getAllLead?userId=1&statusId=2
        `/leadService/api/v1/lead/getAllLead?userId=${currentUserId}&statusId=${statusDataId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      const leadData = allLead.data.reverse()
      setAllLeadData(leadData)
      setLeadScalatonCall(false)
    } catch (err) {
      console.log(err)
      setLeadScalatonCall(true)
    }
  }

  const getAllStatusData = async () => {
    try {
      const allStatus = await getQuery(
        `/leadService/api/v1/status/getAllStatus`
      )
      setGetAllStatus(allStatus.data)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something Went Wrong")
      }
    }
  }

 
  return (
    <div className="lead-module small-box-padding">
      <div className="create-user-box">
        <h1 className="table-heading">Leads</h1>
        {adminRole ? <LeadCreateModel /> : ""}
      </div>

      <p className="my-2">
        <select
          className="status-select"
          name="status"
          onChange={(e) => setStatusDataId(e.target.value)}
          id="status"
          form="statusChange"
        >
          <option>Filter Status</option>
          {getAllStatus.map((status, index) => (
            <option value={status.id} key={index}>
              {status.name}
            </option>
          ))}
        </select>
      </p>

      {leadScalatonCall ? (
        <TableScalaton />
      ) : (
        <UserLeadComponent tableName={""} columns={columns} row={allLeadData} />
      )}
    </div>
  )
}

export default LeadsModule
