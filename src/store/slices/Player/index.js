import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
  name: 'playerStateSlice',
  initialState: {
    playerState: {
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
      playerTurn: true,
      playerNumberOfImpacts: 0,
      playerWin: false,
    },
  },
  reducers: {
    playerShipsPositioned: (state, {payload}) => {
      state.playerState.ships.push(payload);
    },
    playerUpdateShipPosition: (state, {payload}) => {
      state.playerState.ships[payload.index].position = payload.position;
      state.playerState.ships[payload.index].selected = true;
    },
    playerUpdateBoard: (state, {payload}) => {
      state.playerState.board[payload?.squareId].color = payload?.color;
      state.playerState.totalShips +=1;
    },
    playerSetDestroyedShips: (state, {payload}) => {
      state.playerState.board[payload?.squareId].color = payload?.color;
    },
    playerVerticalPosition: (state, {payload}) => {
      state.playerState.ships[payload.index].vertical = payload.vertical;
    },
    setPlayerName: (state, {payload}) => {
      state.playerState.playerName = payload;
    },
    setPlayerImpacts: (state, {payload}) => {
      const ship = state.playerState.ships.find(s => s.code === payload.code); 
      ship.impacts.push(payload.shot);
    },
    playerTurn: (state, {payload}) => {
      state.playerState.playerTurn = payload;
    },
    playerNumberOfImpacts: (state, {payload}) => {
      state.playerState.playerNumberOfImpacts += payload;
    },
    playerWin: (state, {payload}) => {
      state.playerState.playerWin = payload;
    },
    playerInitState: (state) => {
      state.playerState = {
        ...state.playerState,
        board: Array.from(Array(100)).map((i, index) => (
          {
            key: index,
            spaces: null,
            code: null,
            color: 'white',
            squareId: index,
          }
        )),
        ships: [],
        totalShips: 0,
        playerName: null,
        playerTurn: true,
        playerNumberOfImpacts: 0,
        playerWin: false,
      }
    },
  },
})

export const {
  playerShipsPositioned,
  playerUpdateShipPosition,
  playerUpdateBoard,
  playerVerticalPosition,
  setPlayerName,
  setPlayerImpacts,
  playerTurn,
  playerSetDestroyedShips,
  playerNumberOfImpacts,
  playerWin,
  playerInitState,
} = playerSlice.actions

export default playerSlice.reducer