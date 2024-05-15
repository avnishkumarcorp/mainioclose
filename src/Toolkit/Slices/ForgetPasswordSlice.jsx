import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const forgetPasswordApi = createAsyncThunk(
  "forgetPassword",
  async (data) => {
    const passData = await axios.post(
      `/securityService/api/auth/forgetOtp?email=${data}`
    )
    return passData?.data
  }
)

export const ForgetPasswordSlice = createSlice({
  name: "password",
  initialState: {
    forgetData: {},
    passLoading: false,
    passError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(forgetPasswordApi.pending, (state, action) => {
      state.passLoading = true
    })
    builder.addCase(forgetPasswordApi.fulfilled, (state, action) => {
      state.forgetData = action.payload
      state.passLoading = false
    })
    builder.addCase(forgetPasswordApi.rejected, (state, action) => {
      state.passError = true
      state.passLoading = false
    })
  },
})

export default ForgetPasswordSlice.reducer
