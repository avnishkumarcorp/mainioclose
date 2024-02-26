import React from "react"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { useParams } from "react-router-dom"

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


return (



  <div className="lead-module small-box-padding">
    <h1 className="table-heading">All Tasks</h1>
  </div>
)
}

export default GetAllTaskList
