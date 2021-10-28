import {
  TOGGLE_SHIP_DIRECTION,
  PLACE_SHIP,
  UNPLACE_SHIP,
  START_GAME,
  COMPUTER_MISSILE_LAUNCH,
  RESTART_GAME,
} from 'store/actionTypes';
import {
  EMPTY_SPACE,
  OK_SHIP_SPACE,
} from 'utils/constants';
import {
  createEmptyBoard,
  createShipsInitialSetting,
  toggleShipDirection,
  placeShip,
  unplaceShip,
  updateBoard,
} from 'utils/helpers';

const initialState = {
  name: '',
  board: createEmptyBoard(),
  ships: createShipsInitialSetting(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SHIP_DIRECTION: {
      const { shipId } = action.payload;
      const { ships } = state;
      const newShips = toggleShipDirection(ships, shipId);
      return {
        ...state,
        ships: newShips,
      };
    }
    case PLACE_SHIP: {
      const { shipId, spacesCoordinates } = action.payload;
      const { board, ships } = state;
      const newBoard = updateBoard(board, spacesCoordinates, OK_SHIP_SPACE);
      const newShips = placeShip(ships, shipId, spacesCoordinates);
      return {
        ...state,
        board: newBoard,
        ships: newShips,
      };
    }
    case UNPLACE_SHIP: {
      const { shipId, spacesCoordinates } = action.payload;
      const { board, ships } = state;
      const newBoard = updateBoard(board, spacesCoordinates, EMPTY_SPACE);
      const newShips = unplaceShip(ships, shipId);
      return {
        ...state,
        board: newBoard,
        ships: newShips,
      };
    }

    case START_GAME: {
      const { playerName } = action.payload;
      return {
        ...state,
        name: playerName,
      };
    }

    case COMPUTER_MISSILE_LAUNCH: {
      const { newBoard, newShips } = action.payload;
      return {
        ...state,
        board: newBoard,
        ships: newShips,
      };
    }

    case RESTART_GAME: {
      const newBoard = createEmptyBoard();
      const newShips = createShipsInitialSetting();
      return {
        name: '',
        board: newBoard,
        ships: newShips,
      };
    }
    default: return state;
  }
}
