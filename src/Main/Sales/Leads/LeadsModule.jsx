import React, { useEffect, useRef, useState } from "react"
import "./LeadsModule.scss"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import AllLeadsDisplay from "./AllLeadsDisplay"
import { Link, useLocation, useParams } from "react-router-dom"
import axios from "axios"
import DataTableFirst from "../../../components/DataTableFirst"
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
import InputErrorComponent from "../../../components/InputErrorComponent"
import { getRowEl } from "@mui/x-data-grid/utils/domUtils"
import { deleteQuery } from "../../../API/DeleteQuery"
import { MultiSelect } from "primereact/multiselect"
import { postQuery } from "../../../API/PostQuery"

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
  const [multibtn, setMultibtn] = useState(false)
  const [leadMultiDep, setLeadMultiDep] = useState(false)
  const [leadDeleteErr, setLeadDeleteErr] = useState(false)
  const [leadDelLoading, setLeadDelLoading] = useState(false)
  const [rerefreshLead, setRerefreshLead] = useState(false)
  const [hideMUltiFilter, setHideMUltiFilter] = useState(false)

  const [allStatusMulti, setAllStatusMulti] = useState([])
  const [allUserMulti, setAllUserMulti] = useState([])

  const [filterBtnNew, setFilterBtnNew] = useState(false)

  const [multiLeadError, setMultiLeadError] = useState(false)
  const [selectLeadError, setSelectLeadError] = useState(false)

  const { userid, leadid } = useParams()
  const location = useLocation()

  const [allMultiFilterData, setAllMultiFilterData] = useState({
    userId: userid,
    userIdFilter: allUserMulti,
    statusId: allStatusMulti,
    toDate: toDate,
    fromDate: fromDate,
  })

  useEffect(() => {
    setAllMultiFilterData((prev) => ({
      ...prev,
      userId: userid,
      userIdFilter: allUserMulti,
      statusId: allStatusMulti,
      toDate: toDate,
      fromDate: fromDate,
    }))
  }, [allUserMulti, allStatusMulti, toDate, fromDate])

  // const multiFilterFun = () => {

  // }

  const multiStatusRef = useRef()
  const multiAssigneeRef = useRef()

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
    assigneId: null,
    updatedById: userid,
  })

  const [deleteMultiLead, setDeleteMultiLead] = useState({
    leadId: selectedRows,
    updatedById: userid,
  })

  useEffect(() => {
    setMultiLeadData((prev) => ({ ...prev, leadIds: selectedRows }))
  }, [multiLeadData])

  useEffect(() => {
    setDeleteMultiLead((prev) => ({ ...prev, leadId: selectedRows }))
  }, [deleteMultiLead])

  useEffect(() => {
    getAllLead()
  }, [
    updateActive,
    statusDataId,
    rerefreshLead,
    leadStatusD,
    dateFilter,
    leadMultiDep,
    filterBtnNew,
  ])

  useEffect(() => {
    getAllLeadUser()
  }, [])

  useEffect(() => {
    getAllStatusData()
  }, [])

  const viewHistory = async (leadId) => {
    try {
      const singlePage = await putQuery(
        `/leadService/api/v1/lead/viewHistoryCreate?userId=${userid}&leadId=${leadId}`
      )
      console.log(singlePage)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteMultiLeadFun = async () => {
    if (deleteMultiLead.leadId.length === 0) {
      setLeadDeleteErr(true)
      return
    }
    setLeadDelLoading(true)
    if (window.confirm("Are you sure to delete this record?") == true) {
      try {
        const delMulLead = await axios.delete(
          `/leadService/api/v1/lead/deleteMultiLead`,
          {
            data: deleteMultiLead,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        setRerefreshLead((prev) => !prev)
        setLeadDelLoading(false)
      } catch (err) {
        console.log(err)
        setLeadDelLoading(false)
      }
    }
  }

  const currentUserRoles = useSelector(
    (prev) => prev.AuthReducer.currentUser.roles
  )
  const adminRole = currentUserRoles.includes("ADMIN")
  const newRole = currentUserRoles.includes("NEW")

  const columns = [
    {
      field: "select",
      headerName: "Select",
      width: 60,
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
      width: 60,
      filterable: false,
      renderCell: (props) => {
        return (
          <p className="mb-0">
            {props.api.getRowIndexRelativeToVisibleRows(props.row.id) + 1}
          </p>
        )
      },
    },
    {
      field: "leadName",
      headerName: "Lead Name",
      width: 200,
      renderCell: (props) => {
        return (
          <Link
            to={`/erp/${userid}/sales/leads/${props.row.id}`}
            onClick={() => viewHistory(props.row.id)}
          >
            {props?.row?.leadName}
          </Link>
        )
      },
    },
    {
      field: "missedTask",
      headerName: "Missed Task",
      width: 220,
      renderCell: (props) => {
        const taskmissed = props?.row
        const taskStatus = props?.row?.missedTaskStatus
        const taskName = props?.row?.missedTaskName
        const taskDate = new Date(
          props?.row?.missedTaskDate
        ).toLocaleDateString()
        const taskCreated = props?.row?.missedTaskCretedBy
        return taskName !== null ? (
          <p className={`mb-0 ${taskName !== null ? "text-danger" : ""}`}>
            {taskCreated} - {taskName}
            <br />
            {taskStatus} - {taskDate}
          </p>
        ) : (
          <p>NA</p>
        )
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (props) => {
        let leadStatus = props.row.status?.name
        return (
          <p className={`mb-0 ${leadStatus === "New" ? "lead-new" : ""}`}>
            {leadStatus ? leadStatus : "NA"}
          </p>
        )
      },
    },
    {
      field: "client",
      headerName: "Client Name",
      width: 150,
      renderCell: (props) => {
        // console.log("client name", clients[0]?.name)
        return (
          <p className="mb-0">
            {props.row.clients[0]?.name ? props.row.clients[0]?.name : "NA"}
          </p>
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
    { field: "mobileNo", headerName: "Mobile No", width: 150 },
    { field: "email", headerName: "Email", width: 150 },

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
      field: "source",
      headerName: "Source",
      width: 150,
      renderCell: (props) => {
        return (
          <p className="mb-0">
            {props?.row?.source ? props?.row?.source : "NA"}
          </p>
        )
      },
    },
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
          `/leadService/api/v1/lead/deleteLead?leadId=${id}&userId=${userid}`,
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
        `/leadService/api/v1/lead/updateAssignee?leadId=${leadId}&userId=${id}&updatedById=${userid}`,
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
        `/leadService/api/v1/users/getAllUserByHierarchy?userId=${userid}`
      )
      setLeadUserNew(allLeadUser.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllLead = async () => {
    try {
      const allLead = await postQuery(
        `/leadService/api/v1/lead/getAllLead`,
        allMultiFilterData
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
    setMultibtn(true)
    if (multiLeadData.statusId === null && multiLeadData.assigneId === null) {
      console.log("Error Generate")

      setMultiLeadError(true)
      return
    }
    if (multiLeadData.leadIds.length === 0) {
      setSelectLeadError(true)
      return
    }

    try {
      const multiAssigneeCol = await putQuery(
        "/leadService/api/v1/lead/updateMultiLeadAssigne",
        multiLeadData
      )
      setMultibtn(false)
      setLeadMultiDep((prev) => !prev)
      window.location.reload()
      console.log("multidata", multiAssigneeCol)
    } catch (err) {
      console.log(err)
      setMultibtn(false)
    }
  }

  // MuiDataGrid-main css-204u17-MuiDataGrid-main

  return (
    <div className="lead-module small-box-padding">
      <div className="create-user-box">
        <h1 className="table-heading">Leads</h1>
        <div className="all-center">
          <button
            onClick={() => setHideMUltiFilter((prev) => !prev)}
            className="common-btn-one mr-2"
          >
            Filter Data
          </button>
          {adminRole ? <LeadCreateModel /> : ""}
        </div>
      </div>

      <div className={`${hideMUltiFilter ? "" : "d-none"} all-between py-2`}>
        <div className="one">
          <MultiSelect
            style={{ dropdown: { backgroundColor: "#000" } }}
            value={allUserMulti}
            onChange={(e) => setAllUserMulti(e.value)}
            options={leadUserNew}
            optionLabel="fullName"
            placeholder="Select Users"
            optionValue="id"
            maxSelectedLabels={3}
            className="multi-select-boxx"
          />
        </div>
        <div className="two">
          <MultiSelect
            style={{ dropdown: { backgroundColor: "#000" } }}
            value={allStatusMulti}
            onChange={(e) => setAllStatusMulti(e.value)}
            options={getAllStatus}
            optionLabel="name"
            optionValue="id"
            placeholder="Select Status"
            maxSelectedLabels={3}
            className="multi-select-boxx"
          />
        </div>
        <div className="three">
          <input
            className="mr-2 date-input"
            onChange={(e) => setToDate(e.target.value)}
            type="date"
          />
          <input
            className="mr-2 date-input"
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
          />
          <button
            className="common-btn-one mr-2"
            onClick={() => setFilterBtnNew((prev) => !prev)}
          >
            Apply
          </button>
          <button
            className="common-btn-one"
            onClick={() => window.location.reload()}
          >
            Remove
          </button>
        </div>
      </div>

      {/* <div className="all-between">
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
      </div> */}

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

        <div
          className={`bottom-line ${
            multiLeadData.leadIds.length > 0 ? "pos-fix" : ""
          }`}
        >
          <div>
            <button
              className="common-btn-one mr-2"
              onClick={() => deleteMultiLeadFun()}
            >
              {leadDelLoading ? "Please Wait..." : "Delete"}
            </button>
            <select
              className="p-1 date-input"
              name="status"
              ref={multiStatusRef}
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
              className="p-1 date-input"
              ref={multiAssigneeRef}
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
              {multibtn ? "Loading" : "Send"}
            </button>
          </div>
        </div>
        {multiLeadError ? (
          <InputErrorComponent value="Please Select At Least One Status ya Assignee column" />
        ) : (
          ""
        )}
        {selectLeadError ? (
          <InputErrorComponent value="Please Select At Least 2 Leads" />
        ) : (
          ""
        )}
        {leadDeleteErr ? (
          <InputErrorComponent value="Please Select At Least one Lead " />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default LeadsModule
