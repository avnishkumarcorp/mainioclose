import React, { useEffect, useState } from "react"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { useParams } from "react-router-dom"
import UserLeadComponent from "../../../Tables/UserLeadComponent"
import { getQuery } from "../../../API/GetQuery"
import { putQueryNoData } from "../../../API/PutQueryWithoutData"

const AllNotificationPage = () => {
  const [allNotificationData, setAllNotificationData] = useState([])
  const { userid } = useParams()

  useEffect(() => {
    getNotiFun()
  }, [])

  const getNotiFun = async () => {
    try {
      const getAllNoty = await getQuery(
        `/leadService/api/v1/notification/getAllNotification?userId=${userid}`
      )
      //    getAllNoty.data.reverse()
      setAllNotificationData(getAllNoty.data.reverse())
      const updateNoty = await putQueryNoData(
        `/leadService/api/v1/notification/viewNotification?userId=${userid}`
      )
    } catch (err) {
      console.log(err)
    }
  }

  //   console.log("notification Data", NotificationData)

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "message",
      headerName: "Message",
      width: 700,
      renderCell: (props) => {
        const notify = props?.row?.view
        return (
          <p className={`mb-0 ${!notify ? "noti-view" : ""}`}>
            {props?.row?.message}
          </p>
        )
      },
    },
    {
      field: "view",
      headerName: "View",
      width: 60,
    },
  ]

  return (
    <div className="small-box-padding">
      <>
        <h1 className="table-heading">All Notification</h1>
        <div>
          <UserLeadComponent row={allNotificationData} columns={columns} />
        </div>
      </>
    </div>
  )
}

export default AllNotificationPage
