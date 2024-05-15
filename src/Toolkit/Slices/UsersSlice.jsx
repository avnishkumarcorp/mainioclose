import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getAllUsers = createAsyncThunk("allUsers", async () => {
  const allUser = await getQuery(`/leadService/api/v1/users/getAllUser`)
  return allUser?.data
})

export const headHrUser = createAsyncThunk(
  "allhrUserApprovalList",
  async (id) => {
    const allDataUser = await getQuery(
      `/leadService/api/v1/hrManagment/getUserApprovalHr?userId=${id}`
    )
    return allDataUser?.data
  }
)

export const allManagerUser = createAsyncThunk(
  "allManagerUserApprovalList",
  async (id) => {
    const managerUserData = await getQuery(
      `/leadService/api/v1/users/getUserForManager?id=${id}`
    )
    return managerUserData?.data
  }
)

export const allDeactivateUserFun = createAsyncThunk(
  "allDeactivateUserApprovalList",
  async () => {
    const deactivateUserData = await getQuery(
      `/leadService/api/v1/users/getAllDeactivateUser`
    )
    return deactivateUserData?.data
  }
)

export const UsersSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    userLoading: false,
    userError: false,
    allHRUsers: [],
    userHRLoading: false,
    userHRError: false,
    allManagerUsers: [],
    userManagerLoading: false,
    userManagerError: false,
    allDeactivateUsers: [],
    userDeactivateLoading: false,
    userDeactivateError: false,
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

    builder.addCase(allManagerUser.pending, (state, action) => {
      state.userManagerLoading = true
    })
    builder.addCase(allManagerUser.fulfilled, (state, action) => {
      state.allManagerUsers = action.payload
      state.userManagerLoading = false
    })
    builder.addCase(allManagerUser.rejected, (state, action) => {
      state.userManagerError = true
      state.userManagerLoading = false
    })

    builder.addCase(allDeactivateUserFun.pending, (state, action) => {
      state.userDeactivateLoading = true
    })
    builder.addCase(allDeactivateUserFun.fulfilled, (state, action) => {
      state.allDeactivateUsers = action.payload
      state.userDeactivateLoading = false
    })
    builder.addCase(allDeactivateUserFun.rejected, (state, action) => {
      state.userDeactivateError = true
      state.userDeactivateLoading = false
    })
  },
})

export default UsersSlice.reducer
