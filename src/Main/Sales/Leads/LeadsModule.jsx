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
import { putQuery } from "../../../API/PutQuery"
import ArrowComponent from "../../../components/ArrowComponent"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

const LeadsModule = () => {
  const [activeTab, setActiveTab] = useState(false)
  const [allLeadData, setAllLeadData] = useState([])
  const [leadUserNew, setLeadUserNew] = useState([])
  const [updateActive, setUpdateActive] = useState(false)
  const [leadScalatonCall, setLeadScalatonCall] = useState(true)
  const [getAllStatus, setGetAllStatus] = useState([])
  const [statusDataId, setStatusDataId] = useState([])
  const [leadStatusD, setLeadStatusD] = useState(false)
  const [toDate, setToDate] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [dateFilter, setDateFilter] = useState(false)

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const currentUserId = Number(splitPath[2])
  const currentLeadId = Number(splitPath[4])

  const [selectedRows, setSelectedRows] = useState([])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelectedRows(allLeadData.map((row) => row.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleCheckboxClick = (event, id) => {
    if (event.target.checked) {
      setSelectedRows((prevSelected) => [...prevSelected, id])
    } else {
      setSelectedRows((prevSelected) =>
        prevSelected.filter((rowId) => rowId !== id)
      )
    }
  }

  const [multiLeadData, setMultiLeadData] = useState({
    leadIds: selectedRows,
    statusId: null,
    assigneId: 0,
    updatedById: currentUserId,
  })

  useEffect(() => {
    setMultiLeadData((prev) => ({ ...prev, leadIds: selectedRows }))
  }, [handleSelectAllClick])

  console.log("i amdjdjkk", multiLeadData)

  console.log("selected Rowscvcfvfv", selectedRows)

  useEffect(() => {
    getAllLead()
  }, [updateActive, statusDataId, leadStatusD, dateFilter])

  useEffect(() => {
    getAllLeadUser()
  }, [])

  useEffect(() => {
    getAllStatusData()
  }, [])

  const viewHistory = async (leadId) => {
    try {
      const singlePage = await putQuery(
        `/leadService/api/v1/lead/viewHistoryCreate?userId=${currentUserId}&leadId=${leadId}`
      )
      console.log(singlePage)
    } catch (err) {
      console.log(err)
    }
  }

  const currentUserRoles = useSelector(
    (prev) => prev.AuthReducer.currentUser.roles
  )
  const adminRole = currentUserRoles.includes("ADMIN")
  const newRole = currentUserRoles.includes("NEW")

  const getDataId = () => {
    console.log("i am click")
  }

  const columns = [
    {
      field: "select",
      headerName: "Select",
      width: 100,
      renderCell: (params) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedRows.includes(params.row.id)}
              onChange={(event) => handleCheckboxClick(event, params.row.id)}
            />
          }
        />
      ),
    },
    {
      field: "id",
      headerName: "S.No",
      width: 150,
      filterable: false,
      renderCell: (props) => {
        return (
          <p>{props.api.getRowIndexRelativeToVisibleRows(props.row.id) + 1}</p>
        )
      },
    },
    {
      field: "leadName",
      headerName: "Name",
      width: 150,
      renderCell: (props) => {
        return (
          <Link
            to={`/erp/${currentUserId}/sales/leads/${props.row.id}`}
            onClick={() => viewHistory(props.row.id)}
          >
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
    {
      field: "createdBy",
      headerName: "Created By",
      width: 150,
      renderCell: (props) => {
        return (
          <p className="mb-0">
            {props?.row?.createdBy?.fullName
              ? props?.row?.createdBy?.fullName
              : "NA"}
          </p>
        )
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
        return (
          <p className={leadStatus === "New" ? "lead-new" : ""}>
            {leadStatus ? leadStatus : "NA"}
          </p>
        )
      },
    },
    { field: "source", headerName: "Source", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => {
        return adminRole ? (
          <p className="m-0" onClick={() => leadDeleteResponse(props.row.id)}>
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
        `/leadService/api/v1/lead/updateAssignee?leadId=${leadId}&userId=${id}&updatedById=${currentUserId}`,
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
        `/leadService/api/v1/users/getAllUserByHierarchy?userId=${currentUserId}`
      )
      setLeadUserNew(allLeadUser.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllLead = async () => {
    try {
      const allLead = await axios.get(
        `/leadService/api/v1/lead/getAllLead?userId=${currentUserId}&statusId=${statusDataId}&toDate=${toDate}&fromDate=${fromDate}`,
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

  const multiAssignee = async () => {
    try {
      const multiAssigneeCol = await putQuery(
        "/leadService/api/v1/lead/updateMultiLeadAssigne",
        multiLeadData
      )
      console.log("multidata", multiAssigneeCol)
    } catch (err) {
      console.log(err)
    }
  }

  // MuiDataGrid-main css-204u17-MuiDataGrid-main

  return (
    <div className="lead-module small-box-padding">
      <div className="create-user-box">
        <h1 className="table-heading">Leads</h1>
        {adminRole ? <LeadCreateModel /> : ""}
      </div>

      <div className="all-between">
        <div className="one-line">
          <p className="my-2">
            <select
              className="p-1 status-select"
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

          <button
            className="common-btn-one"
            onClick={() => window.location.reload()}
          >
            Remove Filter
          </button>
        </div>
        <div>
          <input
            className="mr-2"
            onChange={(e) => setToDate(e.target.value)}
            type="date"
          />
          <input
            className="mr-2"
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
          />
          <button
            className="common-btn-one"
            onClick={() => setDateFilter((prev) => !prev)}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="table-arrow">
        {/* <ArrowComponent /> */}
        {leadScalatonCall ? (
          <TableScalaton />
        ) : (
          <UserLeadComponent
            tableName={""}
            columns={columns}
            row={allLeadData}
            getRowId={(row) => row.id}
            onSelectionModelChange={(newSelection) =>
              setSelectedRows(newSelection)
            }
            selectionModel={selectedRows}
            components={{
              Toolbar: () => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        indeterminate={
                          selectedRows.length > 0 &&
                          selectedRows.length < allLeadData.length
                        }
                        checked={selectedRows.length === allLeadData.length}
                        onChange={handleSelectAllClick}
                      />
                    }
                    label="Select All"
                  />
                </>
              ),
            }}
          />
        )}

        <div className="bottom-line">
          <div>
            <select
              className="p-1 status-select"
              name="status"
              onChange={(e) =>
                setMultiLeadData((prev) => ({
                  ...prev,
                  statusId: e.target.value,
                }))
              }
              id="status"
              form="statusChange"
            >
              <option>Select Status</option>
              {getAllStatus.map((status, index) => (
                <option value={status.id} key={index}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="p-1 status-select"
              onChange={(e) =>
                setMultiLeadData((prev) => ({
                  ...prev,
                  assigneId: e.target.value,
                }))
              }
              // onSelect={(e)=> }
              name="lead"
              id="lead"
            >
              <option>Select User</option>
              {leadUserNew.map((user, index) => (
                <option key={index} value={user.id}>
                  {user?.fullName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={() => multiAssignee()} className="common-btn-one">
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadsModule
