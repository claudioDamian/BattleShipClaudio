import { createSlice } from '@reduxjs/toolkit';

export const playerImpactSlice = createSlice({
  name: 'playerShipsImpactedStore',
  initialState: {
    shipsImpact: [],
  },
  reducers: {
    shipImpactReducer: (state, action) => {
      state.shipsImpact = state.shipsImpact.push(action.payload)
    },
  } 
})

export const { shipImpactReducer } = playerImpactSlice.actions

export default playerImpactSlice.reducer