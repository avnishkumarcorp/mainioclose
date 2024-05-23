import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { postQuery } from "../../API/PostQuery"

export const addNewRating = createAsyncThunk(
  "add-new-rating-star",
  async (data) => {
    const createRating = await postQuery(
      `/leadService/api/v1/rating/addUserAndRating`,
      data
    )
    return createRating?.data
  }
)

const RatingSlice = createSlice({
  name: "rating",
  initialState: {
    addRating: {},
    addRatingLoading: false,
    addratingError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addNewRating.pending, (state, action) => {
      state.addRatingLoading = true
      state.addratingError = false
    })
    builder.addCase(addNewRating.fulfilled, (state, action) => {
      state.addRating = action.payload
      state.addRatingLoading = false
      state.addratingError = false
    })
    builder.addCase(addNewRating.rejected, (state, action) => {
      state.addratingError = true
      state.addRatingLoading = false
    })
  },
})

export default RatingSlice.reducer
