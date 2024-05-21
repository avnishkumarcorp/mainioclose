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

const CompnaySlice = createSlice({
  name: "company",
  initialState: {
    allCompnay: [],
    loadingCompany: false,
    errorCompany: false,
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
  },
})

export default CompnaySlice.reducer
