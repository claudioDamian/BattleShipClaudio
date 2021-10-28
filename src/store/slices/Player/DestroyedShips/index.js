import { createSlice } from '@reduxjs/toolkit';

export const playerDestroyedSlice = createSlice({
  name: 'playerDestroyedShipsStore',
  initialState: {
    destroyedShips: [],
  },
  reducers: {
    destroyedShipsReducer: (state, action) => {
      state.destroyedShips = state.destroyedShips.push(action.payload)
    },
  }
})

export const { destroyedShipsReducer } = playerDestroyedSlice.actions

export default playerDestroyedSlice.reducer