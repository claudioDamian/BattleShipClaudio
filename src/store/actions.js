import {
  TOGGLE_SHIP_DIRECTION,
  PLACE_SHIP,
  UNPLACE_SHIP,
  START_GAME,
  SURRENDER,
  END_GAME,
  PLAYER_MISSILE_LAUNCH,
  COMPUTER_MISSILE_LAUNCH,
  RESTART_GAME,
} from './actionTypes';

export const toggleShipDirection = (shipId) => ({
  type: TOGGLE_SHIP_DIRECTION,
  payload: { shipId },
});

export const placeShip = (shipId, spacesCoordinates) => ({
  type: PLACE_SHIP,
  payload: { shipId, spacesCoordinates },
});

export const unplaceShip = (shipId, spacesCoordinates) => ({
  type: UNPLACE_SHIP,
  payload: { shipId, spacesCoordinates },
});

export const startGame = (playerName, computer) => ({
  type: START_GAME,
  payload: { playerName, computer },
});

export const surrender = (turn) => ({
  type: SURRENDER,
  payload: { turn },
});

export const endGame = (result) => ({
  type: END_GAME,
  payload: { result },
});

export const playerMissileLaunch = (
  newBoard,
  newShips,
  attemptFeedback,
) => ({
  type: PLAYER_MISSILE_LAUNCH,
  payload: { newBoard, newShips, attemptFeedback },
});

export const computerMissileLaunch = (
  newBoard,
  newShips,
  attemptFeedback,
  targetedCoordinates,
  newAttackBoard,
  newAttackShips,
) => ({
  type: COMPUTER_MISSILE_LAUNCH,
  payload: {
    newBoard,
    newShips,
    attemptFeedback,
    targetedCoordinates,
    newAttackBoard,
    newAttackShips,
  },
});

export const restartGame = () => ({
  type: RESTART_GAME,
  payload: {},
});
