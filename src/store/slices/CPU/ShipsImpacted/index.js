import { createSlice } from '@reduxjs/toolkit';

export const cpuImpactsSlice = createSlice({
  name: 'cpuImpactsStore',
  initialState: {
    shipsImpacted: [],
  },
  reducers: {
    shipsImpactedReducer: (state, action) => {
      state.shipsImpacted = state.shipsImpacted.push(action.payload)
    },
  } 
})

export const { shipsImpactedReducer } = cpuImpactsSlice.actions

export default cpuImpactsSlice.reducer