import { createSlice } from "@reduxjs/toolkit"


export const SignUpSlice = createSlice({
  name: "signup",
  initialState: {
    userSignup: null,
  },
  reducers: {
    signUpData : (state, action) => {
      state.userSignup = action.payload
    }
  },
})

export const { signUpData } = SignUpSlice.actions
export default SignUpSlice.reducer
