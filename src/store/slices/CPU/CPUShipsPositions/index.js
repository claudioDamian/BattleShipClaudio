import { createSlice } from '@reduxjs/toolkit';

export const cpuShipsPositionsSlice = createSlice({
  name: 'cpuShipsPositionsStore',
  initialState: {
    cpuShipsPositions: {
      cpuName: 'CPU',
      cpuPositions: [],
      ships: {
        0: {
          shipName: 'cruiser',
          code: '1c',
          spaces: 3,
          positions: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        1: {
          shipName: 'cruiser',
          code: '2c',
          spaces: 3,
          positions: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        2: {
          shipName: 'cruiser',
          code: '3c',
          spaces: 3,
          positions: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        3: {
          shipName: 'currier',
          code: '4c',
          spaces: 4,
          positions: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        4: {
          shipName: 'submarine',
          code: '1s',
          spaces: 3,
          positions: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
      },
      cpuBoard:  Array.from(Array(100)).map((i, index) => (
        {
          key: index,
          spaces: null,
          code: null,
          color: 'white',
          squareId: index,
        }
      )),
      cpuTotalShips: 0,
      cpuStartGame: false,
      shipsSelected: 0,
      cpuSquareId: null,
      cpuSquaresId: [],
    },
  },
  reducers: {
    cpuPositions: (state, {payload}) => {
      state.cpuShipsPositions.cpuPositions.push(payload);
    },
    cpuUpdatePositions: (state, {payload}) => {
      state.cpuShipsPositions.cpuPositions[payload.index].positions = payload.position;
    },
    cpuStartGame: (state, {payload}) => {
      state.cpuShipsPositions.cpuStartGame = payload;
    },
    cpuShipSelected: (state, {payload}) => {
      state.cpuShipsPositions.shipsSelected += payload;
    },
    cpuSquareId: (state, {payload}) => {
      state.cpuShipsPositions.cpuSquareId = payload;
    },
    cpuSquaresId: (state, {payload}) => {
      state.cpuShipsPositions.cpuSquaresId.push(payload);
    }, 
  } 
})

export const {
  cpuPositions,
  cpuStartGame,
  cpuUpdatePositions,
  cpuShipSelected,
  cpuSquareId,
  cpuSquaresId,
} = cpuShipsPositionsSlice.actions

export default cpuShipsPositionsSlice.reducer