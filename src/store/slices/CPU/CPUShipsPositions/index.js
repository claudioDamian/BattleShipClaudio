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
    },
  },
  reducers: {
    cpuPositions: (state, {payload}) => {
      console.log('payload > ', payload);
      state.cpuShipsPositions.cpuPositions.push(payload);
    },
    cpuUpdatePositions: (state, {payload}) => {
      console.log('payload => ', payload);
      state.cpuShipsPositions.cpuPositions[payload.index].position = payload.position;
    },
    cpuStartGame: (state, {payload}) => {
      state.cpuShipsPositions.cpuStartGame = payload;
    },
    cpuShipSelected: (state, {payload}) => {
      state.cpuShipsPositions.shipsSelected += payload;
    },
  } 
})

export const {
  cpuPositions,
  cpuStartGame,
  cpuUpdatePositions,
  cpuShipSelected,
} = cpuShipsPositionsSlice.actions

export default cpuShipsPositionsSlice.reducer