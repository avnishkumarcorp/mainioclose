import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { putQueryNoData } from "../../API/PutQueryWithoutData"

export const ApproveduserByHr = createAsyncThunk(
  "approvedUserByHrHead",
  async ({ currid, userid }) => {
    console.log("api call before", currid, userid)
    const approvedUser = await putQueryNoData(
      `/leadService/api/v1/hrManagment/approvedUserByHr?currentUserId=${currid}&userId=${userid}&flag=${true}`
    )
    return approvedUser.data
  }
)

export const ApproveduserByManager = createAsyncThunk(
  "approvedUserByManager",
  async ({ currid, userid }) => {
    const approvedUser = await putQueryNoData(
      `/leadService/api/v1/users/approvedUserByManager?currentUserId=${currid}&userId=${userid}&status=${`Approved`}`
    )
    return approvedUser.data
  }
)

export const RejectuserByManager = createAsyncThunk(
  "RejectedUserByManager",
  async ({ currid, userid }) => {
    const rejectUser = await putQueryNoData(
      `/leadService/api/v1/users/approvedUserByManager?currentUserId=${currid}&userId=${userid}&status=${`Rejected`}`
    )
    return rejectUser.data
  }
)

export const ApprovedStatusSlice = createSlice({
  name: "approved",
  initialState: {
    Hrflag: "false",
    hrLoading: false,
    hrError: false,
    ApprovedByManager: "",
    AppManLoading: false,
    AppManError: false,
    RejectByManager: "",
    RejManLoading: false,
    RejManError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(ApproveduserByHr.pending, (state, action) => {
      state.hrLoading = true
      state.hrError = false
    })
    builder.addCase(ApproveduserByHr.fulfilled, (state, action) => {
      state.hrLoading = false
      state.hrError = false
      state.Hrflag = action.payload
    })
    builder.addCase(ApproveduserByHr.rejected, (state, action) => {
      state.hrError = true
      state.hrLoading = false
    })

    builder.addCase(RejectuserByManager.pending, (state, action) => {
      state.AppManLoading = true
      state.AppManError = false
    })
    builder.addCase(RejectuserByManager.fulfilled, (state, action) => {
      state.AppManLoading = false
      state.AppManError = false
      state.ApprovedByManager = action.payload
    })
    builder.addCase(RejectuserByManager.rejected, (state, action) => {
      state.AppManError = true
      state.AppManLoading = false
    })

    builder.addCase(ApproveduserByManager.pending, (state, action) => {
      state.RejManLoading = true
      state.RejManError = false
    })
    builder.addCase(ApproveduserByManager.fulfilled, (state, action) => {
      state.RejManLoading = false
      state.RejManError = false
      state.RejectByManager = action.payload
    })
    builder.addCase(ApproveduserByManager.rejected, (state, action) => {
      state.RejManError = true
      state.RejManLoading = false
    })
  },
})

export default ApprovedStatusSlice.reducer
