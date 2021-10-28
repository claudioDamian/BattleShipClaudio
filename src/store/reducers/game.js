import {
  START_GAME,
  SURRENDER,
  END_GAME,
  PLAYER_MISSILE_LAUNCH,
  COMPUTER_MISSILE_LAUNCH,
  RESTART_GAME,
} from 'store/actionTypes';

import {
  START_SCREEN,
  GAME_SCREEN,
  END_GAME_SCREEN,
  PLAYER,
  COMPUTER,
  PLAYER_SURRENDERED,
} from 'utils/constants';

const initialState = {
  activeScreen: START_SCREEN,
  playerAttemptFeedback: undefined,
  computerAttemptFeedback: undefined,
  turn: 1,
  activePlayer: PLAYER,
  result: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        ...initialState,
        activeScreen: GAME_SCREEN,
      };
    }
    case SURRENDER: {
      return {
        ...state,
        activeScreen: END_GAME_SCREEN,
        result: PLAYER_SURRENDERED,
      };
    }
    case END_GAME: {
      const { result } = action.payload;
      return {
        ...state,
        activeScreen: END_GAME_SCREEN,
        result,
      };
    }
    case PLAYER_MISSILE_LAUNCH: {
      const { attemptFeedback } = action.payload;
      return {
        ...state,
        playerAttemptFeedback: attemptFeedback,
        activePlayer: COMPUTER,
      };
    }
    case COMPUTER_MISSILE_LAUNCH: {
      const { attemptFeedback } = action.payload;
      const { turn } = state;
      return {
        ...state,
        computerAttemptFeedback: attemptFeedback,
        turn: turn + 1,
        activePlayer: PLAYER,
      };
    }

    case RESTART_GAME: return initialState;
    default: return state;
  }
}
