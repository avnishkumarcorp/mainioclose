import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getAllUsers = createAsyncThunk("allUsers", async () => {
  const allUser = await getQuery(`/leadService/api/v1/users/getAllUser`)
  return allUser.data
})

export const headHrUser = createAsyncThunk('allhrUserApprovalList', async (id) => {
  const allDataUser = await getQuery(`/leadService/api/v1/hrManagment/getUserApprovalHr?userId=${id}`)
  return allDataUser.data
})

export const UsersSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    userLoading: false,
    userError: false,
    allHRUsers: [],
    userHRLoading: false,
    userHRError: false,
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.userLoading = true
    })
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload
      state.userLoading = false
    })
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.userError = true
      state.userLoading = false
    })

    builder.addCase(headHrUser.pending, (state, action) => {
      state.userHRLoading = true
    })
    builder.addCase(headHrUser.fulfilled, (state, action) => {
      state.allHRUsers = action.payload
      state.userHRLoading = false
    })
    builder.addCase(headHrUser.rejected, (state, action) => {
      state.userHRError = true
      state.userHRLoading = false
    })
  },
})

export default UsersSlice.reducer
