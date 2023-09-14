import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from './slice/studentsSlice';

export const store = configureStore({
  reducer: {
    students: studentsSlice,
  },
})