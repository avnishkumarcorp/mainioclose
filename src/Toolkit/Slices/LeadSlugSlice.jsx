import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQueryNoData } from "../../API/PostQueryNoDate"
import { getQuery } from "../../API/GetQuery"

export const leadSlugAction = createAsyncThunk(
  "createLeadSlugData",
  async (slugName) => {
    const allLeadSlug = await postQueryNoData(
      `/leadService/api/v1/slug/createSlug?name=${slugName}`
    )
    return allLeadSlug?.data
  }
)

export const getAllSlugAction = createAsyncThunk(
  "showLeadSlugData",
  async () => {
    const showLeadSlug = await getQuery(`/leadService/api/v1/slug/getSlug`)
    return showLeadSlug?.data
  }
)

export const LeadSlugSlice = createSlice({
  name: "leadslug",
  initialState: {
    leadSlug: {},
    leadSlugLoading: false,
    leadSlugError: false,
    allLeadSlug: [],
    allLeadSlugLoading: false,
    allLeadSlugError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(leadSlugAction.pending, (state, action) => {
      state.leadSlugLoading = true
      state.leadSlugError = false
    })
    builder.addCase(leadSlugAction.fulfilled, (state, action) => {
      state.allLeads = action.payload
      state.leadSlugLoading = false
      state.leadSlugError = false
    })
    builder.addCase(leadSlugAction.rejected, (state, action) => {
      state.leadSlugError = true
      state.leadSlugLoading = false
    })

    builder.addCase(getAllSlugAction.pending, (state, action) => {
      state.allLeadSlugLoading = true
      state.allLeadSlugError = false
    })
    builder.addCase(getAllSlugAction.fulfilled, (state, action) => {
      state.allLeadSlug = action.payload
      state.allLeadSlugLoading = false
      state.allLeadSlugError = false
    })
    builder.addCase(getAllSlugAction.rejected, (state, action) => {
      state.allLeadSlugError = true
      state.allLeadSlugLoading = false
    })
  },
})

export default LeadSlugSlice.reducer

