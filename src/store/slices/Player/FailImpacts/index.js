import { createSlice } from '@reduxjs/toolkit';

export const playerFailSlice = createSlice({
  name: 'playerFailsStore',
  initialState: {
    impactOnWater: [],
  },
  reducers: {
    impactOnWaterReducer: (state, action) => {
      state.impactOnWater = state.impactOnWater.push(action.payload)
    },
  } 
})
export const { impactOnWaterReducer } = playerFailSlice.actions

export default playerFailSlice.reducer