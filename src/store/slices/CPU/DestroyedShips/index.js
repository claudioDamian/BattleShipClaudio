import { createSlice } from '@reduxjs/toolkit';

export const cpuDestroyedSlice = createSlice({
  name: 'cpuDestroyedShipsStore',
  initialState: {
    destroyedShips: [],
  },
  reducers: {
    destroyedShipsReducer: (state, action) => {
      state.destroyedShips = state.destroyedShips.push(action.payload)
    },
  }
})

export const { destroyedShipsReducer } = cpuDestroyedSlice.actions

export default cpuDestroyedSlice.reducer