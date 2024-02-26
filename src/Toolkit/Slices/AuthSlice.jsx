import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQuery } from "../../API/PostQuery"

export const getCurrentUser = createAsyncThunk("currentUser", async (data) => {
  const userData = await postQuery(`/securityService/api/auth/signin`, data)
  return userData.data
})

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    loginLoading: false,
    currentUser: {},
    loginError: false,
    roles: [],
    jwt: "",
    isAuth: false,
  },
  reducers: {
    logoutFun : (state, action) => {
      state.isAuth = false
      state.currentUser = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state, action) => {
      state.loginLoading = true 
    })
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.jwt = action.payload.jwt
      state.roles = action.payload.roles
      state.loginLoading = false
      state.isAuth = true
    })
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      console.log("Err", action.payload, state)
      state.loginError = true
    })
  },
})

export const { logoutFun } = AuthSlice.actions
export default AuthSlice.reducer
