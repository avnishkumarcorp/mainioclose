import React, { useEffect, useState } from "react"
import "./LeadHistory.scss"
import UserLeadComponent from "../../../Tables/UserLeadComponent"
import { getQuery } from "../../../API/GetQuery"
import { useLocation } from "react-router-dom"

const LeadHistory = () => {
  const [leadHistoryData, setLeadHistoryData] = useState([])

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const leadId = Number(splitPath[5])
  console.log("jdj", splitPath)

  useEffect(() => {
    leadHistoryFun()
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "createdDate",
      headerName: "Date",
      width: 150,
      renderCell: (props) => {
        let date = new Date(props.row.createdDate)
        let dateNew = date.toLocaleDateString()
        console.log("date new is", date)
        return <p className="mb-0">{dateNew.toString()}</p>
      },
    },

    { field: "createdBy", headerName: "Created By", width: 150 },
    { field: "event", headerName: "Event Type", width: 300 },
    { field: "description", headerName: "Description", width: 450 },
  ]

  const leadHistoryFun = async () => {
    try {
      const leadHistory = await getQuery(
        `/leadService/api/v1/leadHistory/getAllLeadHistory?leadId=${leadId}`
      )
      console.log("history data", leadHistory.data)
      setLeadHistoryData(leadHistory.data)
    } catch (err) {
      console.log("Err", err)
    }
  }

  return (
    <div className="p-3">
      <h3 className="big-heading">Lead History</h3>
      <UserLeadComponent row={leadHistoryData} columns={columns} />
    </div>
  )
}

export default LeadHistory
