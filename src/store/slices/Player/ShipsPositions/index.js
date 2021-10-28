import { createSlice } from '@reduxjs/toolkit';

export const playerShipsPositionsSlice = createSlice({
  name: 'playerShipsPositionsStore',
  initialState: {
    shipsPositions: {
      ships: [],
    },
  },
  reducers: {
    shipsPositionsReducer: (state, {payload}) => {
      console.log('ACTION => ',payload);
    //   state.shipsPositions.ships.push(payload);
    },
    shipsPositioned: (state, {payload}) => {
      console.log('SHIP PAYLOAD => ', payload);
      state.shipsPositions.ships.push(payload);
    },
  }
})

export const { shipsPositionsReducer, shipsPositioned } = playerShipsPositionsSlice.actions

export default playerShipsPositionsSlice.reducer