import {
  HIT_SHIP_SPACE,
  DESTROYED_SHIP_SPACE,
  SHOT_MISSED_SPACE,
  PLAYER_WON,
  PLAYER_LOST,
  PLAYER_SURRENDERED,
} from 'utils/constants';

export const gameWelcomeMessage = 'Welcome to battleship!';
export const instructionShip1Message = 'Click on a ship to select it and then on the board for placing it.';
export const instructionShip2Message = 'Click on a ship\'s rotation icon to change it\'s orientation.';
export const instructionShip3Message = 'To remove a ship, click on it\'s location on the board.';
export const instructionNameMessage = 'Enter your name and press "start" to begin.';
export const startGameMessage = 'Start game';
export const rotateShipMessage = 'Rotate ship';
export const generateSelectableShipTitle = (ship) => `${ship.type}: ${ship.spacesLeft} spaces`;
export const generateSelectableShipSpacesMessage = (ship) => `${ship.spacesLeft} spaces`;
export const computerNameMessage = 'Computer';
export const correspondingStatusMessage = {
  [HIT_SHIP_SPACE]: 'hit a ship',
  [DESTROYED_SHIP_SPACE]: 'destroyed a ship',
  [SHOT_MISSED_SPACE]: 'missed the shot',
};
export const initialTurnMessage = 'Click on an empty space on the computer board to begin.';
export const generateAttemptFeedback = (attemptFeedback, playerName) => {
  if (attemptFeedback === undefined) return null;
  const { status, coordinate, sunkenShip } = attemptFeedback;
  return `${playerName} ${correspondingStatusMessage[status]} ${sunkenShip !== null ? `(${sunkenShip}) ` : ''}at { x: ${coordinate.j + 1}, y: ${10 - coordinate.i} }.`;
};
export const generateTurnMessage = (turn) => `Turn: ${turn}`;
export const correspondingGameResultImageTitle = {
  [PLAYER_WON]: 'You win',
  [PLAYER_LOST]: 'You lose',
  [PLAYER_SURRENDERED]: 'You surrendered',
};
export const generateGameResultMessage = (result, turn) => `${correspondingGameResultImageTitle[result]} at turn ${turn}.`;
export const restartGameMessage = 'Restart game';
