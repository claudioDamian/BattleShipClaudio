import { createSlice } from '@reduxjs/toolkit';

export const playerShipsPositionsSlice = createSlice({
  name: 'playerShipsPositionsStore',
  initialState: {
    shipsPositions: {
      ships: [],
      board:  Array.from(Array(100)).map((i, index) => (
        {
          key: index,
          spaces: null,
          code: null,
          color: 'white',
          squareId: index,
        }
      )),
      totalShips: 0,
      playerName: null,
    },
  },
  reducers: {
    shipsPositioned: (state, {payload}) => {
      state.shipsPositions.ships.push(payload);
    },
    updateShipPosition: (state, {payload}) => {
      state.shipsPositions.ships[payload.index].position = payload.position;
      state.shipsPositions.ships[payload.index].selected = true;
    },
    updateBoard: (state, {payload}) => {
      state.shipsPositions.board[payload?.squareId].color = payload?.color;
      state.shipsPositions.totalShips +=1;
    },
    verticalPosition: (state, {payload}) => {
      state.shipsPositions.ships[payload.index].vertical = payload.vertical;
    },
    setPlayerName: (state, {payload}) => {
      state.shipsPositions.playerName = payload;
    },
  },
})

export const {
  shipsPositioned,
  updateShipPosition,
  updateBoard,
  verticalPosition,
  setPlayerName,
} = playerShipsPositionsSlice.actions

export default playerShipsPositionsSlice.reducer