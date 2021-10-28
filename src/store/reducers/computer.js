import {
  START_GAME,
  COMPUTER_MISSILE_LAUNCH,
  PLAYER_MISSILE_LAUNCH,
  RESTART_GAME,
} from 'store/actionTypes';
import {
  createEmptyBoard,
  createShipsInitialSetting,
} from 'utils/helpers';

const initialState = {
  targetedCoordinates: [],
  board: undefined,
  ships: undefined,
  attackBoard: createEmptyBoard(true),
  attackShips: createShipsInitialSetting(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      const { computer } = action.payload;
      return {
        ...state,
        ...computer,
      };
    }
    case COMPUTER_MISSILE_LAUNCH: {
      const { targetedCoordinates, newAttackBoard, newAttackShips } = action.payload;
      return {
        ...state,
        targetedCoordinates,
        attackBoard: newAttackBoard,
        attackShips: newAttackShips,
      };
    }
    case PLAYER_MISSILE_LAUNCH: {
      const { newBoard, newShips } = action.payload;
      return {
        ...state,
        board: newBoard,
        ships: newShips,
      };
    }
    case RESTART_GAME: {
      const newAttackBoard = createEmptyBoard(true);
      const newAttackShips = createShipsInitialSetting();
      return {
        targetedCoordinates: [],
        board: undefined,
        ships: undefined,
        attackBoard: newAttackBoard,
        attackShips: newAttackShips,
      };
    }
    default: return state;
  }
}
