import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getAllHistory = createAsyncThunk(
  "allLeadsDataHistorys",
  async ({id}) => {
    const allHistoryRes = await getQuery(
      `/leadService/api/v1/rating/getAllUserHistory?userId=${id}`
    )
    return allHistoryRes?.data
  }
)

export const HistorySlice = createSlice({
  name: "uhistory",
  initialState: {
    allHistory: [],
    historyLoading: false,
    historyError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHistory.pending, (state, action) => {
      state.historyLoading = true
      state.historyError = false
    })
    builder.addCase(getAllHistory.fulfilled, (state, action) => {
      state.allHistory = action.payload
      state.historyLoading = false
      state.historyError = false
    })
    builder.addCase(getAllHistory.rejected, (state, action) => {
      state.historyError = true
      state.historyLoading = false
    })
  },
})

export default HistorySlice.reducer
