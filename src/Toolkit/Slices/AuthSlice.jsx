import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQuery } from "../../API/PostQuery"

export const getCurrentUser = createAsyncThunk("currentUser", async (data) => {
  const userData = await postQuery(`/securityService/api/auth/signin`, data)
//   console.log("i am user Data", userData);
  return userData.data
})




export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    loginLoading: false,
    currentUser: {},
    jwt: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state, action) => {
        state.loginLoading = true
      })
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload 
      state.jwt = action.payload.jwt
      state.loginLoading = false
    })
    builder.addCase(getCurrentUser.rejected, (state, action) => {
        console.log("Err", action.payload, state);
      })
  },
})

export default AuthSlice.reducer;
