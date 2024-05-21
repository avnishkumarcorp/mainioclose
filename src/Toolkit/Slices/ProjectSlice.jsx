import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getProjectAction = createAsyncThunk(
  "getallProjectData",
  async ({ id }) => {
    const getProjectData = await getQuery(
      `/leadService/api/v1/project/getAllProject?userId=${id}`
    )
    return getProjectData?.data
  }
)

const ProjectSlice = createSlice({
  name: "project",
  initialState: {
    allProject: [],
    loadingProject: false,
    errorProject: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectAction.pending, (state, action) => {
      state.loadingProject = true
      state.errorProject = false
    })
    builder.addCase(getProjectAction.fulfilled, (state, action) => {
      state.allProject = action.payload
      state.loadingProject = false
      state.errorProject = false
    })
    builder.addCase(getProjectAction.rejected, (state, action) => {
      state.errorProject = true
      state.loadingProject = false
    })
  },
})

export default ProjectSlice.reducer
