import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"
import { putQueryNoData } from "../../API/PutQueryWithoutData"

export const getNotificationFun = createAsyncThunk(
  "allNotificatons",
  async (userid) => {
    const allNotification = await getQuery(
      `/leadService/api/v1/notification/getAllNotification?userId=${userid}`
    )
    const markNotification = await putQueryNoData(
      `/leadService/api/v1/notification/viewNotification?userId=${userid}`
    )
    return allNotification.data.reverse()
  }
)

export const NotificationSlice = createSlice({
  name: "notify",
  initialState: {
    allNotifications: [],
    NotificationLoading: false,
  },
  extraReducers: (builder) => {
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
