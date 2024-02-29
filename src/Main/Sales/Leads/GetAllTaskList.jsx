import React from "react"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { Link, useParams } from "react-router-dom"
import UserLeadComponent from "../../../Tables/UserLeadComponent"

const GetAllTaskList = () => {
  const { userid } = useParams()

  const allTasksByUser = `/leadService/api/v1/task/getAllTaskByAssignee?assigneeId=${userid}`
  const allTaskDep = []

  const {
    productData: taskData,
    setProductData,
    loading: taskLoading,
    error,
  } = useCustomRoute(allTasksByUser, allTaskDep)

  console.log("task data ", taskData)

  let beforeDate = Date.now()
  let endDate = Date.now() + 86400000

  const todayTaskData = () => {
    let taskData2 = taskData

    // const data = taskData.filter((task) => { return new Date(task.expectedDate).getTime()})
    const data = taskData.filter((task) => {
      let taskD = new Date(task.expectedDate).getTime()
      return taskD >= beforeDate
    })
    setProductData(data)
  }

  // const todayTaskData = () => {
  //   let taskData2 = taskData

  //   // const data = taskData.filter((task) => { return new Date(task.expectedDate).getTime()})
  //   const data = taskData2.filter((task) => {
  //     let beforeDate = Date.now()
  //     let endDate = Date.now() + 86400000
  //     let taskD = new Date(task.expectedDate).getTime()

  //     if (taskD >= beforeDate && taskD <= endDate) {
  //       return taskData2
  //     }

  //   })
  // }

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
        return <Link to={`/erp/4/sales/leads/${props.row.leadId}`}>{props?.row?.name}</Link>
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
        <p className={`task-pending mb-0 ${props?.row?.taskStatus === "Done" ?  "task-done":" " }`}>{props?.row?.statusName}</p>
      )
     }
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
          <button className="common-btn-one" onClick={todayTaskData}>
            today task
          </button>
          <button
            className="common-btn-one ml-2"
            onClick={() => {
              window.location.reload()
            }}
          >
            Remove filter
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
