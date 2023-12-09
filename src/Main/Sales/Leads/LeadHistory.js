import React, { useEffect, useState } from "react"
import "./LeadHistory.scss"
import UserLeadComponent from "../../../Tables/UserLeadComponent"
import { getQuery } from "../../../API/GetQuery"
import { useLocation } from "react-router-dom"
import TableScalaton from "../../../components/TableScalaton"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const LeadHistory = () => {
  const [leadHistoryData, setLeadHistoryData] = useState([])
  const [historyScalaton, setHistoryScalaton] = useState(true);

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const leadId = Number(splitPath[5])

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
      setLeadHistoryData(leadHistory.data)
      setHistoryScalaton(false);
    } catch (err) {
        if(err.response.status === 500){
            toast.error("Something Went Wrong")
        }
        if(err.response.status === 401){
            toast.error("Something Went Wrong")
        }
      console.log("Err", err)
    }
  }

  return (
    <div className="p-3">
      <h3 className="big-heading">Lead History</h3>
      {historyScalaton ? <TableScalaton /> : <UserLeadComponent row={leadHistoryData} columns={columns} />}
      
    </div>
  )
}

export default LeadHistory
