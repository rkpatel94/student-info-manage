import { createSlice } from '@reduxjs/toolkit'

const initialState = { students: [] }

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    fetchAllStudent: (state, action) => {
      state.students = action.payload
    },
  },
})

export const { fetchAllStudent } = studentsSlice.actions

export default studentsSlice.reducer