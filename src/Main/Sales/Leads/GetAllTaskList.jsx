import React from "react"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { useParams } from "react-router-dom"
import UserLeadComponent from "../../../Tables/UserLeadComponent";

const GetAllTaskList = () => {
    const {userid} = useParams();

    const allTasksByUser = `/leadService/api/v1/task/getAllTaskByAssignee?assigneeId=${userid}`
    const allTaskDep = []
  
    const {
      productData: taskData,
      loading: taskLoading,
      error,
    } = useCustomRoute(allTasksByUser, allTaskDep)


    console.log("task data ", taskData);

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
      },
      {
        field: "description",
        headerName: "Description",
        width: 500,  
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
      }
    ]






return (



  <div className="lead-module small-box-padding">
    <h1 className="table-heading">All Tasks</h1>
    <div className="mt-3">
      <UserLeadComponent row={taskData} columns={columns} />
    </div>
  </div>
)
}

export default GetAllTaskList
