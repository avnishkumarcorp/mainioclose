import React, { useEffect, useState } from "react"
import "./LeadsModule.scss"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import AllLeadsDisplay from "./AllLeadsDisplay"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import DataTableFirst from "../../../components/DataTableFirst"
import { DataGrid } from "@mui/x-data-grid"
import DataGridNewTable from "../../../components/DataGridNewTable"
import UserLeadComponent from "../../../Tables/UserLeadComponent"
import LeadCreateModel from "../../../Model/LeadCreateModel"
import { useSelector } from "react-redux"

const LeadsModule = () => {
  const [activeTab, setActiveTab] = useState(false)
  const [allLeadData, setAllLeadData] = useState([])
  const [leadUserNew, setLeadUserNew] = useState([])

  useEffect(() => {
    getAllLead()
    getAllLeadUser()
  }, [])

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const currentUserId = Number(splitPath[2])

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (props) => {
        return (
          <Link to={`/erp/${currentUserId}/sales/${props.row.id}`}>
            {props.row.name}
          </Link>
        )
      },
    },
    { field: "mobileNo", headerName: "Mobile No", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "createDate", headerName: "Date", width: 150 },
    {
      field: "assignee",
      headerName: "Assignee",
      width: 150,
      renderCell: (props) => {
        return (
          <select
            className="assignee-button"
            onChange={(id) => changeLeadAssignee(props.row.id)}
            name="lead"
            id="lead"
          >
            {leadUserNew.map((user, index) => (
              <option key={index} value={user.fullName}>
                {user.fullName}
              </option>
            ))}
          </select>
        )
      },
    },
    { field: "leadDescription", headerName: "lead Description", width: 150 },
    { field: "source", headerName: "Source", width: 150 },
  ]

  const changeUserAssignee = (user) => {
    console.log("user is selectd", user)
  }

  const changeLeadAssignee = async (id) => {
    console.log("id is call", id)

    try {
      await axios.put(
        `/leadService/api/v1/lead/updateAssignee?leadId=${id}&userId=${currentUserId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      console.log(`updateLeadAssignee is`)
    } catch (err) {
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
        `/leadService/api/v1/lead/getAllLead?userId=${currentUserId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )

      setAllLeadData(allLead.data)
    } catch (err) {
      console.log(err)
    }
  }

  console.log("i am all lead data", allLeadData)

  return (
    <div className="lead-module small-box-padding">
      <div className="create-user-box">
        <LeadCreateModel />
      </div>

      <UserLeadComponent
        tableName={"leads"}
        columns={columns}
        row={allLeadData}
      />
    </div>
  )
}

export default LeadsModule
