import React, { useState } from "react"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { Link, useParams } from "react-router-dom"
import UserLeadComponent from "../../../Tables/UserLeadComponent"

const GetAllTaskList = () => {
  const { userid } = useParams()
  const [dateInput, setDateInput] = useState("")

  console.log("date input", dateInput)

  const allTasksByUser = `/leadService/api/v1/task/getAllTaskByAssignee?assigneeId=${userid}`
  const allTaskDep = [dateInput]

  const {
    productData: taskData,
    setProductData,
    loading: taskLoading,
    error,
  } = useCustomRoute(allTasksByUser, allTaskDep)

  console.log("task data ", taskData)

  let beforeDate = new Date().getTime()
  let endDate = beforeDate + 86400000

  const todayTaskData2 = () => {
    let taskData2 = taskData
    const data = taskData.filter((task) => {
      let taskD = new Date(task.expectedDate).getTime()
      return taskD >= beforeDate && taskD <= endDate
    })
    const newData = data.sort(
      (a, b) =>
        new Date(b.expectedDate).getTime() - new Date(a.expectedDate).getTime()
    )
    console.log("new data", newData)
    setProductData(newData.reverse())
  }

  const todayTaskData = () => {
    let taskData2 = taskData
    let inputDataBefore = new Date(dateInput).getTime()
    const data = taskData.filter((task) => {
      let taskD = new Date(task.expectedDate).getTime()
      return taskD >= inputDataBefore
    })
    const newData = data.sort(
      (a, b) =>
        new Date(b.expectedDate).getTime() - new Date(a.expectedDate).getTime()
    )
    setProductData(newData.reverse())
  }

  const columns = [
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
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (props) => {
        return (
          <Link to={`/erp/4/sales/leads/${props.row.leadId}`}>
            {props?.row?.name}
          </Link>
        )
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 350,
    },
    {
      field: "statusName",
      headerName: "Status",
      width: 150,
      renderCell: (props) => {
        return (
          <p
            className={`task-pending mb-0 ${
              props?.row?.taskStatus === "Done" ? "task-done" : " "
            }`}
          >
            {props?.row?.statusName}
          </p>
        )
      },
    },
    {
      field: "expectedDate",
      headerName: "Date",
      width: 200,
      renderCell: (props) => {
        const data = props?.row?.expectedDate
        // console.log(data)
        return data === null || undefined ? (
          "NA"
        ) : (
          <p>
            {new Date(props.row.expectedDate).toLocaleDateString()} -{" "}
            {new Date(props.row.expectedDate).getHours()}:
            {new Date(props.row.expectedDate).getMinutes()}
          </p>
        )
      },
    },
  ]

  return (
    <div className="lead-module small-box-padding">
      <div className="create-user-box">
        <h1 className="table-heading">All Tasks</h1>
        <div>
          <input
            type="date"
            className="mr-2 date-input"
            onChange={(e) => setDateInput(e.target.value)}
          />
          <button className="common-btn-one mr-2" onClick={todayTaskData}>
            Filter Task
          </button>
          <button className="common-btn-one" onClick={todayTaskData2}>
            Today Task
          </button>
        </div>
      </div>
      <div className="mt-3">
        <UserLeadComponent row={taskData} columns={columns} />
      </div>
    </div>
  )
}

export default GetAllTaskList
