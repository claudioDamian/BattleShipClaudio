import { createSlice } from '@reduxjs/toolkit';

export const cpuSlice = createSlice({
  name: 'cpuStateSlice',
  initialState: {
    cpuState: {
      cpuName: 'CPU',
      cpuShipsPositions: [],
      ships: [{
        shipName: 'cruiser',
        code: '1c',
        color: 'white',
        spaces: 3,
        positions: [],
        impacts: [],
        state: 'fighting',
        selected: false,
        vertical: false,
      },
      {
        shipName: 'cruiser',
        code: '2c',
        color: 'white',
        spaces: 3,
        positions: [],
        impacts: [],
        state: 'fighting',
        selected: false,
        vertical: false,
      },
      {
        shipName: 'cruiser',
        code: '3c',
        color: 'white',
        spaces: 3,
        positions: [],
        impacts: [],
        state: 'fighting',
        selected: false,
        vertical: false,
      },
      {
        shipName: 'currier',
        code: '4c',
        color: 'white',
        spaces: 4,
        positions: [],
        impacts: [],
        state: 'fighting',
        selected: false,
        vertical: false,
      },
      {
        shipName: 'submarine',
        code: '1s',
        color: 'white',
        spaces: 2,
        positions: [],
        impacts: [],
        state: 'fighting',
        selected: false,
        vertical: false,
      }],
      cpuBoard:  Array.from(Array(100)).map((i, index) => (
        {
          key: index,
          spaces: null,
          code: null,
          color: 'white',
          squareId: index,
        }
      )),
      cpuStartGame: false,
      shipsSelected: 0,
      cpuSquareId: null,
      cpuShots: [],
      cpuShotTurn: false,
      shotTargetImpacted: 0,
      cpuHitsShip: [],
      cpuAttack: false,
      cpuWin: false,
    },
  },
  reducers: {
    cpuShipsPositions: (state, {payload}) => {
      state.cpuState.cpuShipsPositions.push(payload);
    },
    cpuUpdatePositions: (state, {payload}) => {
      state.cpuState.cpuShipsPositions[payload.index].positions = payload.position;
    },
    cpuStartGame: (state, {payload}) => {
      state.cpuState.cpuStartGame = payload;
    },
    cpuShipSelected: (state, {payload}) => {
      state.cpuState.shipsSelected += payload;
    },
    cpuSquareId: (state, {payload}) => {
      state.cpuState.cpuSquareId = payload;
    }, 
    cpuRemoveShip: (state, {payload}) => {
      state.cpuState.ships.splice(payload, 1);
    },
    cpuShots: (state, {payload}) => {
      state.cpuState.cpuShots.push(payload);
    },
    cpuShotTurn: (state, {payload}) => {
      state.cpuState.cpuShotTurn = payload;
    },
    cpuUpdateBoard: (state, {payload}) => {
      state.cpuState.cpuBoard[payload?.index].color = payload?.color; 
    },
    cpuImpacts: (state, {payload}) => {
      const cpuShip = state.cpuState.cpuShipsPositions.find(c => c.code === payload.code);
      cpuShip.impacts.push(payload.shot);
    },
    cpuShotTargetImpacted: (state, {payload}) => {
      state.cpuState.shotTargetImpacted += payload;
    },
    cpuHitsShip: (state, {payload}) => {
      state.cpuState.cpuHitsShip = payload;
    },
    cpuAttack: (state, {payload}) => {
      state.cpuState.cpuAttack = payload;
    },
    cpuWin: (state, {payload}) => {
      state.cpuState.cpuWin = payload;
    },
    cpuInitState: (state) => {
      state.cpuState = {
        ...state.cpuState,
        cpuShipsPositions: [],
        cpuStartGame: false,
        shipsSelected: 0,
        cpuSquareId: null,
        cpuShots: [],
        cpuShotTurn: false,
        shotTargetImpacted: 0,
        cpuHitsShip: [],
        cpuAttack: false,
        cpuWin: false,
        ships: [{
          shipName: 'cruiser',
          code: '1c',
          color: 'white',
          spaces: 3,
          positions: [],
          impacts: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        {
          shipName: 'cruiser',
          code: '2c',
          color: 'white',
          spaces: 3,
          positions: [],
          impacts: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        {
          shipName: 'cruiser',
          code: '3c',
          color: 'white',
          spaces: 3,
          positions: [],
          impacts: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        {
          shipName: 'currier',
          code: '4c',
          color: 'white',
          spaces: 4,
          positions: [],
          impacts: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        },
        {
          shipName: 'submarine',
          code: '1s',
          color: 'white',
          spaces: 2,
          positions: [],
          impacts: [],
          state: 'fighting',
          selected: false,
          vertical: false,
        }],
        cpuBoard:  Array.from(Array(100)).map((i, index) => (
          {
            key: index,
            spaces: null,
            code: null,
            color: 'white',
            squareId: index,
          }
        )),
      }
    },
  } 
})

export const {
  cpuShipsPositions,
  cpuStartGame,
  cpuUpdatePositions,
  cpuShipSelected,
  cpuSquareId,
  cpuRemoveShip,
  cpuShots,
  cpuShotTurn,
  cpuUpdateBoard,
  cpuImpacts,
  cpuShotTargetImpacted,
  cpuHitsShip,
  cpuAttack,
  cpuWin,
  cpuInitState,
} = cpuSlice.actions

export default cpuSlice.reducer