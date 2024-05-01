import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import UserLeadComponent from "../../../Tables/UserLeadComponent"
import { useDispatch, useSelector } from "react-redux"
import { updateNotification } from "../../../Toolkit/Slices/NotificationSlice"

const AllNotificationPage = () => {
  // const [allNotificationData, setAllNotificationData] = useState([])
  const { userid } = useParams()

  const allNotifications = useSelector((state) => state.notify.allNotifications)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateNotification(userid))
  }, [])
  // const SingleNotification = allNotifications[0]

  // useEffect(() => {
  //   getNotiFun()
  // }, [])

  // useEffect(() => {
  //   dispatch(getNotificationFun(userid))
  // }, [])

  // const getNotiFun = async () => {
  //   try {
  //     const getAllNoty = await getQuery(
  //       `/leadService/api/v1/notification/getAllNotification?userId=${userid}`
  //     )
  //     //    getAllNoty.data.reverse()
  //     setAllNotificationData(getAllNoty.data.reverse())
  //     const updateNoty = await putQueryNoData(
  //       `/leadService/api/v1/notification/viewNotification?userId=${userid}`
  //     )
  //   } catch (err) {
  //     console.log(err)
  //   }
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
            {props.api.getRowIndexRelativeToVisibleRows(props?.row?.id) + 1}
          </p>
        )
      },
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
      field: "notifyDate",
      headerName: "Date",
      width: 200,
      renderCell: (props) => {
        const data = props?.row?.notifyDate
        return data === null || undefined ? (
          "NA"
        ) : (
          <p>
            {new Date(props.row.notifyDate).toLocaleDateString()} -{" "}
            {new Date(props.row.notifyDate).getHours()}:
            {new Date(props.row.notifyDate).getMinutes()}
          </p>
        )
      },
    },
  ]

  return (
    <div className="small-box-padding">
      <>
        <h1 className="table-heading">All Notification</h1>
        <div>
          <UserLeadComponent row={allNotifications} columns={columns} />
        </div>
      </>
    </div>
  )
}

export default AllNotificationPage
