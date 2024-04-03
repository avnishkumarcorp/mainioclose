import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"
import { putQueryNoData } from "../../API/PutQueryWithoutData"

export const getNotificationFun = createAsyncThunk(
  "allNotificatons",
  async (userid) => {
    const allNotification = await getQuery(
      `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/notification/getAllNotification?userId=${userid}`
    )
    return allNotification.data.reverse()
  }
)


export const updateNotification = createAsyncThunk("updateNotifications", async (userid) => {
  const markNotification = await putQueryNoData(
    `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/notification/viewNotification?userId=${userid}`
  )
  return markNotification
})



export const NotificationSlice = createSlice({
  name: "notify",
  initialState: {
    allNotifications: [],
    NotificationLoading: false,
    updateNotification: false,
  },
  extraReducers: (builder) => {
    builder.addCase(updateNotification.pending, (state, action) => {
      state.updateNotification = false;
    })
    builder.addCase(updateNotification.fulfilled, (state, action) => {
      state.updateNotification = true;
    })

    builder.addCase(updateNotification.rejected, (state, action) => {
      state.updateNotification = false;
    })


    builder.addCase(getNotificationFun.pending, (state, action) => {
      state.NotificationLoading = true
    })
    builder.addCase(getNotificationFun.fulfilled, (state, action) => {
      state.allNotifications = action.payload
    })
    builder.addCase(getNotificationFun.rejected, (state, action) => {
      state.NotificationLoading = true
    })
  },
})

export default NotificationSlice.reducer
