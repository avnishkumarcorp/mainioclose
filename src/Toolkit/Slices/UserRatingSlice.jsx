import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getAllRating = createAsyncThunk("alluser/rating", async () => {
  const allRatings = await getQuery(`/leadService/api/v1/rating/getAllUserRating`)
  return allRatings.data
})

export const UserRatingSlice = createSlice({
  name: "rating",
  initialState: {
    allUserRating: [],
    UserRatingLoading: false,
    UserRatingError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRating.pending, (state, action) => {
      state.UserRatingLoading = true
      state.UserRatingError = false
    })
    builder.addCase(getAllRating.fulfilled, (state, action) => {
      state.allUserRating = action.payload
      state.UserRatingLoading = false
      state.UserRatingError = false
    })
    builder.addCase(getAllRating.rejected, (state, action) => {
      state.UserRatingError = true
      state.UserRatingLoading = false
    })
  },
})

export default UserRatingSlice.reducer
