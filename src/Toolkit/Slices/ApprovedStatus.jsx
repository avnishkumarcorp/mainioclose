import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { putQueryNoData } from "../../API/PutQueryWithoutData"

export const ApproveduserByHr = createAsyncThunk(
  "approvedUserByHrHead",
  async ({ currid, userid }) => {
    console.log("api call before", currid, userid)
    const approvedUser = await putQueryNoData(
      `/leadService/api/v1/hrManagment/approvedUserByHr?currentUserId=${currid}&userId=${
        userid
      }&flag=${true}`
    )
    console.log("approved User", approvedUser)
    return approvedUser.data
  }
)

export const ApprovedStatusSlice = createSlice({
  name: "approved",
  initialState: {
    Hrflag: "false",
    hrLoading: false,
    hrError: false,
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
  },
})

export default ApprovedStatusSlice.reducer
