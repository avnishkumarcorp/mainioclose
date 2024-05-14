import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getAllUrlAction = createAsyncThunk(
  "showLeadUrlData",
  async () => {
    const showLeadUrl = await getQuery(`/leadService/api/v1/urls/getUrls`)
    return showLeadUrl?.data
  }
)

export const LeadUrlSlice = createSlice({
  name: "leadurls",
  initialState: {
    allLeadUrl: [],
    allLeadUrlLoading: false,
    allLeadUrlError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUrlAction.pending, (state, action) => {
      state.allLeadUrlLoading = true
      state.allLeadUrlError = false
    })
    builder.addCase(getAllUrlAction.fulfilled, (state, action) => {
      state.allLeadUrl = action.payload
      state.allLeadUrlLoading = false
      state.allLeadUrlError = false
    })
    builder.addCase(getAllUrlAction.rejected, (state, action) => {
      state.allLeadUrlError = true
      state.allLeadUrlLoading = false
    })
  },
})

export default LeadUrlSlice.reducer

