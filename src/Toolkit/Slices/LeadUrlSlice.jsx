import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"
import { postQuery } from "../../API/PostQuery"

export const getAllUrlAction = createAsyncThunk("showLeadUrlData", async () => {
  const showLeadUrl = await getQuery(`/leadService/api/v1/urls/getUrls`)
  return showLeadUrl?.data
})

export const createAllUrlAction = createAsyncThunk(
  "createLeadUrlData",
  async (data) => {
    const createLeadUrl = await postQuery(
      `/leadService/api/v1/urls/createUrls`,
      data
    )
    return createLeadUrl?.data
  }
)

export const LeadUrlSlice = createSlice({
  name: "leadurls",
  initialState: {
    createLeadUrl: [],
    createLeadUrlLoading: false,
    createLeadUrlError: false,
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

    builder.addCase(createAllUrlAction.pending, (state, action) => {
      state.createLeadUrlLoading = true
      state.createLeadUrlError = false
    })
    builder.addCase(createAllUrlAction.fulfilled, (state, action) => {
      state.createLeadUrl = action.payload
      state.createLeadUrlLoading = false
      state.createLeadUrlError = false
    })
    builder.addCase(createAllUrlAction.rejected, (state, action) => {
      state.createLeadUrlError = true
      state.createLeadUrlLoading = false
    })
  },
})

export default LeadUrlSlice.reducer
