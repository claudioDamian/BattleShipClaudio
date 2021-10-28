import { createSlice } from '@reduxjs/toolkit';

export const cpuMissedSlice = createSlice({
  name: 'cpuMissedStore',
  initialState: {
    failedShoots: [],
  },
  reducers: {
    failedShootsReducer: (state, action) => {
      state.failedShoots = state.failedShoots.push(action.payload)
    },
  } 
})
export const { failedShootsReducer } = cpuMissedSlice.actions

export default cpuMissedSlice.reducer