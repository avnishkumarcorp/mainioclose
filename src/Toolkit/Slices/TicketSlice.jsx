import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../../API/GetQuery"

export const getAllTickets = createAsyncThunk("allTickets", async (id) => {
  const allTickets = await getQuery(`/leadService/api/v1/getAllTicket?userId=${id}`)
  return allTickets?.data
})

export const TicketSlice = createSlice({
  name: "tickets",
  initialState: {
    allTickets: [],
    TicketsLoading: false,
    TicketsError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTickets.pending, (state, action) => {
      state.TicketsLoading = true
    })
    builder.addCase(getAllTickets.fulfilled, (state, action) => {
      state.allTickets = action.payload
      state.TicketsLoading = false
    })
    builder.addCase(getAllTickets.rejected, (state, action) => {
      state.TicketsError = true
      state.TicketsLoading = false
    })
  },
})

export default TicketSlice.reducer
