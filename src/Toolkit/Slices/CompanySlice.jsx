import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getCompanyAction = createAsyncThunk(
  "getallCompanyData",
  async ({ id }) => {
    const getCompanyData = await getQuery(
      `/leadService/api/v1/company/getAllCompany?userId=${id}`
    )
    return getCompanyData?.data
  }
)

export const getCompanyProjectAction = createAsyncThunk(
  "get-company-project-action",
  async ({ id }) => {
    const getCompanyProjectData = await getQuery(
      `/leadService/api/v1/company/getAllProjectByCompany?companyId=${id}`
    )
    return getCompanyProjectData?.data
  }
)

export const getCompanyLeadsAction = createAsyncThunk(
  "get-company-leads-action",
  async ({ id }) => {
    const getCompanyLeadsData = await getQuery(
      `/leadService/api/v1/company/getAllLeadByCompany?companyId=${id}`
    )
    return getCompanyLeadsData?.data
  }
)

// /leadService/api/v1/company/getAllLeadByCompany?companyId=2

const CompnaySlice = createSlice({
  name: "company",
  initialState: {
    allCompnay: [],
    loadingCompany: false,
    errorCompany: false,
    compProject: [],
    compProjectLoading: false,
    compProjectError: false,
    compLeads: [],
    compLeadsLoading: false,
    compLeadsError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCompanyAction.pending, (state, action) => {
      state.loadingCompany = true
      state.errorCompany = false
    })
    builder.addCase(getCompanyAction.fulfilled, (state, action) => {
      state.allCompnay = action.payload
      state.loadingCompany = false
      state.errorCompany = false
    })
    builder.addCase(getCompanyAction.rejected, (state, action) => {
      state.errorCompany = true
      state.loadingCompany = false
    })

    builder.addCase(getCompanyProjectAction.pending, (state, action) => {
      state.compProjectLoading = true
      state.compProjectError = false
    })
    builder.addCase(getCompanyProjectAction.fulfilled, (state, action) => {
      state.compProject = action.payload
      state.compProjectLoading = false
      state.compProjectError = false
    })
    builder.addCase(getCompanyProjectAction.rejected, (state, action) => {
      state.compProjectError = true
      state.compProjectLoading = false
    })

    builder.addCase(getCompanyLeadsAction.pending, (state, action) => {
      state.compLeadsLoading = true
      state.compLeadsError = false
    })
    builder.addCase(getCompanyLeadsAction.fulfilled, (state, action) => {
      state.compLeads = action.payload
      state.compLeadsLoading = false
      state.compLeadsError = false
    })
    builder.addCase(getCompanyLeadsAction.rejected, (state, action) => {
      state.compLeadsError = true
      state.compLeadsLoading = false
    })
  },
})

export default CompnaySlice.reducer
